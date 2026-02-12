# LavenderLearn & Supply

A full-stack e-commerce platform designed for students, offering educational materials (courses, study notes, novels, placement prep) and office supplies.

**Built by:** B Betina Roland  
**College:** Nehru Engineering College (NEC)  
**Program:** First Year BE CSE  
**Project Type:** Personal Page and Online Store Assignment

---

## 🎯 Project Overview

LavenderLearn & Supply is a comprehensive e-commerce platform that serves as a one-stop shop for students. It features:

- **Educational Materials**: Online courses, semester-wise CSE notes (Sem 1-8), novels, and placement preparation resources
- **Office Supplies**: Stationery, tech accessories, organization tools, and art supplies
- **Full Stack Implementation**: Frontend (HTML/CSS/JS) + Backend (Node.js/Express) + Database (SQLite)
- **Advanced Features**: Shopping cart, order tracking, weather-based delivery estimation, responsive design

---

## ✨ Features

### Core Functionality
- ✅ Personal resume page with bio, skills, and contact information
- ✅ Product catalog with 190+ products across multiple categories
- ✅ Shopping cart with add/remove/quantity adjustment
- ✅ Order placement with unique Order ID generation
- ✅ Email-based order tracking with status updates
- ✅ Weather API integration for delivery date calculation

### User Experience
- 🎨 Elegant lavender theme throughout
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Performance optimizations (lazy loading, debounced search, caching)
- ✨ Smooth animations and transitions
- 🔍 Real-time search and filtering
- 📊 Semester-wise filtering for CSE notes (Semester 1-8)

### Technical Features
- 🔄 RESTful API architecture
- 💾 SQLite database with proper relationships
- 🌐 CORS-enabled for cross-origin requests
- 🔒 Input validation and error handling
- 📦 Modular code structure
- 🎯 Clean, professional code without excessive comments

---

## 🛠️ Tech Stack

### Frontend
- **HTML5**: Semantic markup, accessibility
- **CSS3**: Custom properties, Flexbox, Grid, animations, media queries
- **JavaScript (ES6+)**: Async/await, Fetch API, DOM manipulation, local storage

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **CORS**: Cross-origin resource sharing
- **SQLite3**: Lightweight relational database

### External APIs
- **OpenWeatherMap API**: Weather data for delivery calculations

---

## 📁 Project Structure

```
lavenderlearn/
├── index.html                 # Landing page (Resume)
├── courses.html               # Online courses catalog
├── novels.html                # Books/novels page
├── notes.html                 # Study notes (all semesters)
├── placement.html             # Placement preparation materials
├── stationery.html            # Stationery products
├── tech-accessories.html      # Tech accessories
├── organization.html          # Organization tools
├── art-supplies.html          # Art supplies
├── cart.html                  # Shopping cart
├── checkout.html              # Order placement
├── track-order.html           # Order tracking
├── css/
│   ├── style.css             # Main stylesheet
│   └── animations.css        # Animation effects
├── js/
│   ├── main.js               # Core functionality
│   └── products.js           # Product data and display logic
├── server/
│   ├── server.js             # Express server
│   ├── package.json          # Dependencies
│   └── database/
│       └── store.db          # SQLite database (auto-created)
└── README.md                  # This file
```

---

## 🚀 Installation & Setup

### Prerequisites
- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** - [Download here](https://git-scm.com/)

### Step 1: Clone the Repository

```bash
git clone https://github.com/BetinaRoland/lavenderlearn.git
cd lavenderlearn
```

### Step 2: Install Backend Dependencies

```bash
cd server
npm install
```

This will install:
- express
- cors
- sqlite3
- node-fetch

### Step 3: Start the Server

```bash
npm start
```

The server will start on `http://localhost:3000`

You should see:
```
Connected to SQLite database
Server running on http://localhost:3000
```

### Step 4: Access the Application

Open your browser and navigate to:
```
http://localhost:3000
```

---

## 💻 Development

### Running with Auto-Restart (Optional)

For development with automatic server restart on file changes:

```bash
npm install -g nodemon
cd server
npm run dev
```

### Frontend Development

The frontend is pure HTML/CSS/JavaScript. Simply edit the files and refresh your browser.

For a better development experience, you can use VS Code's **Live Server** extension for the frontend, but remember to keep the backend server running for full functionality.

---

## 🗄️ Database Schema

### Products Table
```sql
CREATE TABLE products (
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
);
```

### Cart Table
```sql
CREATE TABLE cart (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id TEXT NOT NULL,
    quantity INTEGER NOT NULL DEFAULT 1,
    user_email TEXT NOT NULL,
    added_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(id)
);
```

### Orders Table
```sql
CREATE TABLE orders (
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
);
```

### Order Items Table
```sql
CREATE TABLE order_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    order_id TEXT NOT NULL,
    product_id TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    price_at_time REAL NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);
```

---

## 🌐 API Endpoints

### Products
- `GET /api/products` - Get all products (supports query params: category, type, semester)
- `GET /api/products/:id` - Get product by ID

### Cart
- `POST /api/cart/add` - Add item to cart
- `GET /api/cart/:email` - Get cart items for user
- `DELETE /api/cart/:id` - Remove item from cart

### Orders
- `POST /api/orders` - Create new order
- `GET /api/orders/track/:email` - Track orders by email
- `PUT /api/orders/:orderId/status` - Update order status

### Weather
- `GET /api/weather/:city` - Get weather data for delivery calculation

---

## 📦 Product Categories

### Educational Materials (150+ products)
- **Novels** (15): Fiction, non-fiction, self-help books
- **Online Courses** (20): Programming languages, web development, ML, cloud computing
- **Study Notes** (70+):
  - CSE Semester 1-8 (48 products)
  - ECE, EEE, AI&DS, Mechanical, Civil branches
  - GATE preparation materials
- **Placement Prep** (45): Coding, DSA, aptitude, company-specific materials

### Office Supplies (40+ products)
- **Stationery**: Pens, notebooks, highlighters
- **Tech Accessories**: USB drives, mouse, keyboards, earphones
- **Organization**: File folders, planners, organizers
- **Art Supplies**: Sketch books, paints, brushes

---

## 🎨 Design Philosophy

### Color Palette
- **Primary Lavender**: #9B84C6
- **Light Lavender**: #E6E0F0
- **Dark Lavender**: #6B5B95
- **Accent Purple**: #7B68B0
- **Text Dark**: #2D2640

### Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

---

## 🚢 Deployment

### GitHub Pages (Frontend Only)

1. Create a GitHub repository
2. Push your code:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/BetinaRoland/lavenderlearn.git
git push -u origin main
```

3. Enable GitHub Pages:
   - Go to repository Settings
   - Navigate to Pages
   - Select `main` branch
   - Save

Your site will be live at: `https://betinaroland.github.io/lavenderlearn/`

### Full Stack Deployment (Backend + Frontend)

For production deployment with backend:
- **Frontend**: GitHub Pages, Netlify, or Vercel
- **Backend**: Render.com, Railway.app, or Heroku
- **Database**: Included with backend (SQLite file)

---

## 🔐 Environment Variables

For weather API functionality, set:

```bash
WEATHER_API_KEY=your_openweathermap_api_key
```

Get a free API key at: https://openweathermap.org/api

---

## 📝 Assignment Requirements Met

### Mandatory Tasks
✅ Personal web page with name, bio, skills, contact  
✅ Product listing page (books, courses, notes)  
✅ Shopping cart with add/remove functionality  
✅ Order placement with email and city  
✅ Unique Order ID generation  
✅ Order tracking by email with status display  
✅ Mobile responsive design

### Optional Features Implemented
✅ Weather-based delivery date calculation  
✅ Server-side implementation (Node.js + Express)  
✅ Database usage (SQLite)  
✅ RESTful API architecture  
✅ Performance optimizations

---

## 📖 Usage Guide

### For Students:
1. **Browse Products**: Navigate through different categories
2. **Search**: Use the search bar to find specific items
3. **Add to Cart**: Click "Add to Cart" on any product
4. **Checkout**: Enter email and city, place order
5. **Track Order**: Use your email to check order status

### For Developers:
1. **Add Products**: Modify `js/products.js`
2. **Customize Theme**: Edit CSS variables in `css/style.css`
3. **Add Features**: Extend `js/main.js`
4. **API Routes**: Add endpoints in `server/server.js`

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
Error: listen EADDRINUSE: address already in use :::3000
```
**Solution**: Kill the process or use a different port:
```bash
PORT=3001 npm start
```

### Database Locked
**Solution**: Close other connections to the database

### Products Not Displaying
**Solution**: Check browser console for errors, ensure server is running

---

## 🤝 Contributing

This is a college project, but suggestions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 📄 License

MIT License - feel free to use this project for learning purposes.

---

## 👤 Author

**B Betina Roland**  
First Year BE CSE Student  
Nehru Engineering College  
Email: 25104003@nec.edu.in

---

## 🙏 Acknowledgments

- Nehru Engineering College for the assignment opportunity
- OpenWeatherMap for weather API
- Node.js and Express communities for excellent documentation

---

## 📧 Support

For questions or issues:
- Email: 25104003@nec.edu.in
- Create an issue on GitHub

---

**⭐ If you found this project helpful, please give it a star on GitHub!**
