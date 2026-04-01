# 🚀 Quick Start Guide

## What You Have
✅ Complete Na2Na2 online ordering website
✅ WhatsApp integration for orders
✅ Loyalty points system
✅ Professional Egyptian-themed design
✅ Mobile responsive
✅ All files separated and organized

## Files Included
- **index.html** - Main website structure
- **style.css** - All styling and animations
- **script.js** - All functionality and menu data
- **README.md** - Full documentation
- **GITHUB_PUSH_INSTRUCTIONS.md** - How to push to GitHub

## 3-Step Setup

### Step 1: Test Locally (5 minutes)
1. Download the zip file
2. Extract all files to a folder
3. Double-click `index.html` to open in browser
4. Try adding items and clicking checkout

### Step 2: Customize (5-10 minutes)
Edit `script.js`:
- Update menu items in `menuData` object
- Change WhatsApp number (find `201286460004` and replace)
- Update prices and descriptions

Edit `index.html`:
- Change restaurant name if needed
- Update contact info

Edit `style.css`:
- Change colors in `:root` section
- Customize fonts if desired

### Step 3: Go Live (10-15 minutes)
**Option A: GitHub Pages (Free)**
1. Create GitHub account
2. Create new repository
3. Upload files
4. Enable GitHub Pages in settings
5. Your site is live!

**Option B: Vercel (Free, Recommended)**
1. Go to vercel.com
2. Connect GitHub
3. Deploy in one click
4. Get custom URL like https://na2na2.vercel.app

**Option C: Netlify (Free)**
1. Go to netlify.com
2. Drag & drop your folder
3. Site is live immediately!

## WhatsApp Integration
When customer clicks "Proceed to Checkout" → "Place Order":
✅ Formatted message appears in your WhatsApp
✅ Includes all order details
✅ Customer name, phone, address
✅ Total price and loyalty points

Your phone number: **01286460004**
(Update this in script.js line 300+ and index.html)

## Key Features to Know

### Loyalty Points
- Each dish earns different points
- Points save in browser (localStorage)
- Display in header: "💎 X Points"
- Customers earn points automatically

### Categories
Click category buttons to filter:
- Appetizers (6 items)
- Main Courses (8 items)
- Sides (5 items)
- Beverages (5 items)
- Desserts (3 items)

### Cart Features
- Add/remove items
- Adjust quantities
- See price updates in real-time
- View loyalty points earned
- Checkout button appears when items in cart

## Common Customizations

### Add New Menu Item
In `script.js`, in the `menuData` object:
```javascript
{ 
  id: 28, 
  name: 'Your Dish Name', 
  category: 'mains', 
  price: 99, 
  description: 'What is it?', 
  emoji: '🍲', 
  points: 12, 
  popular: true 
}
```

### Change Colors
In `style.css`:
```css
:root {
    --primary: #d4a574;    /* Gold */
    --dark: #1a472a;       /* Green */
    --light-bg: #f8f6f1;   /* Light */
}
```

### Update Phone Number
Find ALL instances of `201286460004` in:
- `index.html` (header chat link)
- `script.js` (submitOrder function)

Replace with your WhatsApp number!

## Testing Checklist
- [ ] Open index.html - looks good?
- [ ] Search for a dish - works?
- [ ] Click category - filters correctly?
- [ ] Add item to cart - appears in sidebar?
- [ ] Change quantity - updates price?
- [ ] Click checkout - form appears?
- [ ] Click WhatsApp chat link - opens?
- [ ] Check points display - showing correctly?

## Troubleshooting

**WhatsApp not opening?**
- Update phone number to YOUR number
- Format must be: 201xxxxxxxxx (no + symbol)
- Test on mobile where WhatsApp installed

**Cart empty after refresh?**
- Cart data is temporary (session only)
- Loyalty points save permanently in localStorage

**Items not showing?**
- Check browser console (F12)
- Make sure all 3 files are in same folder
- Refresh page (Ctrl+F5)

**Styling looks wrong?**
- Make sure style.css is in same folder as index.html
- Check HTML links to CSS file

## Next Steps
1. ✅ Extract zip file
2. ✅ Open index.html in browser
3. ✅ Update menu with your items
4. ✅ Update WhatsApp phone number
5. ✅ Test all features
6. ✅ Deploy to Vercel/Netlify/GitHub Pages
7. ✅ Share link with customers!

## Support Resources
- README.md - Full documentation
- GITHUB_PUSH_INSTRUCTIONS.md - How to push to GitHub
- Code comments in each file
- Browser developer tools (F12) for debugging

---

**You're all set! 🎉**

Your professional online ordering website is ready to serve customers 24/7.

Need help? Check the README.md file for detailed documentation.
