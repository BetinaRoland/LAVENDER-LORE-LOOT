document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    updateCartCount();
    initAnimations();
    initQuoteRotation();
});

function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
}

function updateCartCount() {
    const cart = getCart();
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

function getCart() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function addToCart(product) {
    const cart = getCart();
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    saveCart(cart);
    showToast(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    showToast('Item removed from cart');
}

function updateQuantity(productId, newQuantity) {
    const cart = getCart();
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = newQuantity;
            saveCart(cart);
        }
    }
}

function showToast(message, duration = 3000) {
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 100);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.product-card, .feature-card, .skill-card').forEach(el => {
        observer.observe(el);
    });
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function generateOrderId() {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 11);
    return `ORD-${timestamp}-${random}`;
}

function getOrders() {
    const orders = localStorage.getItem('orders');
    return orders ? JSON.parse(orders) : [];
}

function saveOrder(order) {
    const orders = getOrders();
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
}

function calculateTotal(cart) {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

async function fetchWeatherData(city) {
    try {
        const API_KEY = 'demo';
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
        
        if (!response.ok) {
            return { isRainy: false };
        }
        
        const data = await response.json();
        const isRainy = data.weather[0].main.toLowerCase().includes('rain');
        return { isRainy };
    } catch (error) {
        console.error('Weather API error:', error);
        return { isRainy: false };
    }
}

function calculateDeliveryDate(isRainy) {
    const deliveryDays = isRainy ? 5 : 3;
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + deliveryDays);
    return deliveryDate;
}

function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function formatCurrency(amount) {
    return `₹${amount.toFixed(2)}`;
}

function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

function showLoading() {
    const loader = document.createElement('div');
    loader.className = 'loading-spinner';
    loader.id = 'globalLoader';
    document.body.appendChild(loader);
}

function hideLoading() {
    const loader = document.getElementById('globalLoader');
    if (loader) {
        loader.remove();
    }
}

// Quote rotation system
function initQuoteRotation() {
    const quoteElements = document.querySelectorAll('[data-quotes]');
    
    quoteElements.forEach((element) => {
        const quotesJson = element.getAttribute('data-quotes');
        let quotes = [];
        
        try {
            quotes = JSON.parse(quotesJson);
        } catch (e) {
            console.error('Invalid quotes JSON:', quotesJson);
            return;
        }
        
        if (quotes.length === 0) return;
        
        // Set initial quote
        let currentIndex = 0;
        element.textContent = quotes[currentIndex];
        
        // Only set interval if there are multiple quotes
        if (quotes.length > 1) {
            setInterval(() => {
                currentIndex = (currentIndex + 1) % quotes.length;
                element.textContent = quotes[currentIndex];
            }, 5000);
        }
    });
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getCart,
        saveCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        calculateTotal,
        generateOrderId,
        getOrders,
        saveOrder
    };
}
