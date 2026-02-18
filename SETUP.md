# 🚀 Quick Setup Guide

## Step-by-Step Instructions

### 1. Extract the Project
Extract the project folder (sometimes named `lavenderlearn` or `Lavender - Lore and Loot`) to your desired location.

### 2. Install Node.js
Download and install Node.js from: https://nodejs.org/
(Choose the LTS version)

### 3. Open a Terminal or Command Prompt
Use a command‑line window and change into the project directory. For example:
```bash
cd path/to/lavenderlearn    # or the folder named "Lavender - Lore and Loot"
```
(Replace `path/to` with the actual location on your machine.)

### 4. Install Dependencies
Install the Node.js packages that power the backend:
```bash
cd server
npm install
```
This command reads `package.json` and downloads everything needed; it may take a minute.

### 5. Start the Backend Server
Still in the `server` folder, run:
```bash
npm start
```
The script defined in `package.json` will launch the Express application.

You should see output similar to:
```
Connected to SQLite database
Server running on http://localhost:3000
```
(If port 3000 is busy you can use `PORT=3001 npm start`.)

### 6. Open the Application in a Browser
Once the server is running, open your web browser and visit:
```
http://localhost:3000
```
If you changed the port in the previous step, adjust the URL accordingly.

## ✅ You're Done!

The backend and frontend are now running locally. You can interact with the site in your browser while the server process is active.

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

## 🌐 Optional: Deploying the Frontend to GitHub Pages
(The backend will remain local; only the static files are published.)

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
1. In the repository, open **Settings → Pages**.  
2. Under **Source**, choose the `main` branch and `/ (root)` folder.  
3. Click **Save** and wait a moment for GitHub to publish.

Your static site will appear at:
```
https://YOUR_USERNAME.github.io/lavenderlearn/
```

---

## ❓ Troubleshooting & Tips

### Server won't start
- Make sure Node.js is installed
- Check if port 3000 is already in use
- Try: `PORT=3001 npm start`

### Page looks broken
- Make sure server is running
- Check browser console for errors (F12)
- Verify all files are in correct folders

### Products not showing
- Open the browser console (F12) for errors
- Make sure `js/products.js` is being requested and returned
- Ensure the Node server process hasn’t crashed

---

## 📞 Need Help?

If you get stuck, the full `README.md` in the project root has more details, or feel free to ask for support.

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
