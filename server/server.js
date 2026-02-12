const express = require('express');
const cors = require('cors');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..')));

const db = new sqlite3.Database(path.join(__dirname, 'database', 'store.db'), (err) => {
    if (err) {
        console.error('Error connecting to database:', err.message);
    } else {
        console.log('Connected to SQLite database');
        initDatabase();
    }
});

function initDatabase() {
    db.serialize(() => {
        db.run(`CREATE TABLE IF NOT EXISTS products (
            id TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            description TEXT,
            price REAL NOT NULL,
            category TEXT NOT NULL,
            type TEXT NOT NULL,
            icon TEXT,
            stock INTEGER DEFAULT 100,
            semester INTEGER,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`);

        db.run(`CREATE TABLE IF NOT EXISTS cart (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            product_id TEXT NOT NULL,
            quantity INTEGER NOT NULL DEFAULT 1,
            user_email TEXT NOT NULL,
            added_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (product_id) REFERENCES products(id)
        )`);

        db.run(`CREATE TABLE IF NOT EXISTS orders (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            order_id TEXT UNIQUE NOT NULL,
            user_email TEXT NOT NULL,
            city TEXT NOT NULL,
            address TEXT,
            phone TEXT,
            total REAL NOT NULL,
            status TEXT DEFAULT 'Ordered',
            delivery_date DATE,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`);

        db.run(`CREATE TABLE IF NOT EXISTS order_items (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            order_id TEXT NOT NULL,
            product_id TEXT NOT NULL,
            quantity INTEGER NOT NULL,
            price_at_time REAL NOT NULL,
            FOREIGN KEY (order_id) REFERENCES orders(order_id),
            FOREIGN KEY (product_id) REFERENCES products(id)
        )`);
    });
}

app.get('/api/products', (req, res) => {
    const { category, type, semester } = req.query;
    let query = 'SELECT * FROM products WHERE 1=1';
    const params = [];

    if (category) {
        query += ' AND category = ?';
        params.push(category);
    }

    if (type) {
        query += ' AND type = ?';
        params.push(type);
    }

    if (semester) {
        query += ' AND semester = ?';
        params.push(parseInt(semester));
    }

    db.all(query, params, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

app.get('/api/products/:id', (req, res) => {
    db.get('SELECT * FROM products WHERE id = ?', [req.params.id], (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        if (!row) {
            res.status(404).json({ error: 'Product not found' });
            return;
        }
        res.json(row);
    });
});

app.post('/api/cart/add', (req, res) => {
    const { productId, quantity, userEmail } = req.body;

    if (!productId || !quantity || !userEmail) {
        res.status(400).json({ error: 'Missing required fields' });
        return;
    }

    const query = `INSERT INTO cart (product_id, quantity, user_email) VALUES (?, ?, ?)`;

    db.run(query, [productId, quantity, userEmail], function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ success: true, cartItemId: this.lastID });
    });
});

app.get('/api/cart/:email', (req, res) => {
    const query = `
        SELECT c.*, p.name, p.description, p.price, p.icon
        FROM cart c
        JOIN products p ON c.product_id = p.id
        WHERE c.user_email = ?
    `;

    db.all(query, [req.params.email], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

app.delete('/api/cart/:id', (req, res) => {
    db.run('DELETE FROM cart WHERE id = ?', [req.params.id], function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ success: true, deleted: this.changes });
    });
});

app.post('/api/orders', async (req, res) => {
    const { orderId, email, city, address, phone, items, total, deliveryDate } = req.body;

    if (!orderId || !email || !city || !items || !total) {
        res.status(400).json({ error: 'Missing required fields' });
        return;
    }

    const orderQuery = `
        INSERT INTO orders (order_id, user_email, city, address, phone, total, delivery_date)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    db.run(orderQuery, [orderId, email, city, address, phone, total, deliveryDate], function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        const itemsQuery = `INSERT INTO order_items (order_id, product_id, quantity, price_at_time) VALUES (?, ?, ?, ?)`;
        let completed = 0;

        items.forEach(item => {
            db.run(itemsQuery, [orderId, item.id, item.quantity, item.price], (err) => {
                if (err) {
                    console.error('Error inserting order item:', err.message);
                }
                completed++;
                if (completed === items.length) {
                    res.json({ success: true, orderId });
                }
            });
        });
    });
});

app.get('/api/orders/track/:email', (req, res) => {
    const ordersQuery = `
        SELECT o.*, 
            GROUP_CONCAT(oi.product_id || ':' || oi.quantity || ':' || oi.price_at_time) as items_data
        FROM orders o
        LEFT JOIN order_items oi ON o.order_id = oi.order_id
        WHERE o.user_email = ?
        GROUP BY o.order_id
        ORDER BY o.created_at DESC
    `;

    db.all(ordersQuery, [req.params.email], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        const ordersWithItems = rows.map(order => {
            const items = order.items_data ? order.items_data.split(',').map(itemStr => {
                const [id, quantity, price] = itemStr.split(':');
                return { id, quantity: parseInt(quantity), price: parseFloat(price) };
            }) : [];
            return { ...order, items, items_data: undefined };
        });

        res.json(ordersWithItems);
    });
});

app.put('/api/orders/:orderId/status', (req, res) => {
    const { status } = req.body;
    const validStatuses = ['Ordered', 'Packed', 'Shipped', 'Delivered'];

    if (!validStatuses.includes(status)) {
        res.status(400).json({ error: 'Invalid status' });
        return;
    }

    db.run(
        'UPDATE orders SET status = ? WHERE order_id = ?',
        [status, req.params.orderId],
        function(err) {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.json({ success: true, updated: this.changes });
        }
    );
});

app.get('/api/weather/:city', async (req, res) => {
    try {
        const city = req.params.city;
        const API_KEY = process.env.WEATHER_API_KEY || 'demo';
        
        const fetch = (await import('node-fetch')).default;
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        );

        if (!response.ok) {
            res.json({ isRainy: false, error: 'Weather data unavailable' });
            return;
        }

        const data = await response.json();
        const isRainy = data.weather[0].main.toLowerCase().includes('rain');
        
        res.json({ isRainy, weather: data.weather[0].main });
    } catch (error) {
        res.json({ isRainy: false, error: error.message });
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

process.on('SIGINT', () => {
    db.close((err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Database connection closed');
        process.exit(0);
    });
});
