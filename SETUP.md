# 🚀 Quick Setup Guide

## Step-by-Step Instructions

### 1. Extract the Project
Extract the `lavenderlearn` folder to your desired location.

### 2. Install Node.js
Download and install Node.js from: https://nodejs.org/
(Choose the LTS version)

### 3. Open Terminal/Command Prompt
Navigate to the project folder:
```bash
cd path/to/lavenderlearn
```

### 4. Install Dependencies
```bash
cd server
npm install
```

Wait for all packages to install.

### 5. Start the Server
```bash
npm start
```

You should see:
```
Connected to SQLite database
Server running on http://localhost:3000
```

### 6. Open in Browser
Open your browser and go to:
```
http://localhost:3000
```

## ✅ You're Done!

The application is now running locally on your computer.

---

## 🎯 What You Can Do Now

1. **Browse the site** - Explore all categories
2. **Add items to cart** - Test the shopping functionality
3. **Place an order** - Use any email (e.g., test@example.com)
4. **Track your order** - Enter the email you used

---

## 📁 Project Structure

```
lavenderlearn/
├── index.html          → Landing page (your resume)
├── courses.html        → Courses catalog
├── cart.html           → Shopping cart
├── checkout.html       → Place order
├── track-order.html    → Track orders
├── css/                → Stylesheets
├── js/                 → JavaScript files
└── server/             → Backend (Node.js)
    ├── server.js       → Main server file
    └── package.json    → Dependencies
```

---

## 🛠️ Editing the Project

### To add your own information:
1. Open `index.html` in a text editor
2. Find the sections for name, bio, skills, email
3. Update with your information
4. Save and refresh browser

### To add more products:
1. Open `js/products.js`
2. Add products to the appropriate category array
3. Save and refresh browser

---

## 🌐 Deploying to GitHub Pages

### 1. Create GitHub Account
Go to github.com and sign up

### 2. Create Repository
- Click "New Repository"
- Name: `lavenderlearn`
- Click "Create"

### 3. Push Code
```bash
cd path/to/lavenderlearn
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/lavenderlearn.git
git push -u origin main
```

### 4. Enable GitHub Pages
- Go to repository Settings
- Click "Pages" in sidebar
- Select "main" branch
- Click "Save"

Your site will be live at:
```
https://YOUR_USERNAME.github.io/lavenderlearn/
```

---

## ❓ Troubleshooting

### Server won't start
- Make sure Node.js is installed
- Check if port 3000 is already in use
- Try: `PORT=3001 npm start`

### Page looks broken
- Make sure server is running
- Check browser console for errors (F12)
- Verify all files are in correct folders

### Products not showing
- Check browser console (F12)
- Verify `js/products.js` is loaded
- Make sure server is running

---

## 📞 Need Help?

Read the full README.md for detailed documentation!

---

## ⭐ Project Features

✅ Full Stack (Frontend + Backend + Database)  
✅ 190+ Products across 8 categories  
✅ Shopping cart functionality  
✅ Order tracking system  
✅ Weather-based delivery  
✅ Responsive design  
✅ Clean, professional code  

---

**Built by B Betina Roland - NEC First Year CSE**
