# Na2Na2 - Online Ordering System

A modern, responsive online ordering website for Na2Na2 Egyptian Kitchen with WhatsApp integration, loyalty rewards, and cash-on-delivery support.

## ✨ Features

### 🛒 Order Management
- Browse menu items by category
- Search functionality
- Add/remove items from cart
- Adjust quantities in real-time
- Real-time price calculations

### 💬 WhatsApp Integration
- One-click ordering via WhatsApp
- Pre-formatted order messages
- Customer details automatically included
- Direct connection to restaurant phone

### 💎 Loyalty Points System
- Earn points with every purchase
- Persistent points storage (localStorage)
- Points display in header
- Rewards earned shown at checkout

### 🎨 Professional Design
- Egyptian-inspired color scheme (green & gold)
- Responsive mobile & desktop design
- Smooth animations and transitions
- Clean, intuitive interface

### 📋 Checkout Features
- Customer information form
- Special instructions/allergies field
- Order summary before checkout
- Cash on delivery payment method
- Toast notifications for actions

## 📱 Menu Categories

1. **Appetizers** (6 items)
   - Hummus, Baba Ghanoush, Falafel, Tabbouleh, Grape Leaves, Moutabel

2. **Main Courses** (8 items)
   - Koshari, Ful Medames, Grilled Chicken, Kofta, Mahshi, Molokhia, Shrimp, Fish

3. **Sides** (5 items)
   - Bread, Fries, Salad, Rice, Mezze Platter

4. **Beverages** (5 items)
   - Orange Juice, Mango Juice, Hibiscus Tea, Soft Drinks, Iced Tea

5. **Desserts** (3 items)
   - Baklava, Konafa, Umm Ali

## 🚀 How to Use

### Local Development
1. Download or clone the repository
2. Open `index.html` in your web browser
3. No server required - it's a static website

### Customization

#### Update Menu Items
Edit `script.js` and modify the `menuData` object:

```javascript
const menuData = {
    appetizers: [
        { 
            id: 1, 
            name: 'Your Dish Name', 
            category: 'appetizers', 
            price: 45, 
            description: 'Dish description', 
            emoji: '🍲', 
            points: 5, 
            popular: false 
        },
        // Add more items...
    ],
    // Add other categories...
}
```

#### Change WhatsApp Phone Number
1. Find all instances of `201286460004` in the code
2. Replace with your actual WhatsApp number (with country code, no +)
3. Updated locations:
   - Header "Chat" link in `index.html`
   - `submitOrder()` function in `script.js`

#### Customize Colors
Edit the CSS variables in `style.css`:

```css
:root {
    --primary: #d4a574;      /* Gold color */
    --dark: #1a472a;         /* Dark green */
    --light-bg: #f8f6f1;     /* Light background */
    --text: #2c2c2c;         /* Text color */
    --border: #e8e8e8;       /* Border color */
    --success: #2e7d32;      /* Success green */
    --warning: #f57c00;      /* Warning orange */
}
```

## 📂 File Structure

```
Na2Na2-online/
├── index.html              # Main HTML structure
├── style.css              # All styling and animations
├── script.js              # All functionality and menu data
├── README.md              # This file
└── assets/                # (Optional) Images and icons
```

## 🌐 Deployment

### Option 1: Static Hosting (Recommended)
Deploy to free hosting services:
- **Vercel**: `vercel.com` - Deploy with one click
- **Netlify**: `netlify.com` - Simple drag & drop
- **GitHub Pages**: `github.com` - Free hosting
- **Cloudflare Pages**: `pages.cloudflare.com`

### Option 2: Traditional Hosting
1. Upload all three files to your web host
2. Make sure `index.html` is the entry point
3. Share the URL with customers

### Option 3: Local Network
For testing on local network:
```bash
# Using Python (if installed)
python -m http.server 8000
# Then visit: http://your-ip:8000
```

## 🔧 Configuration

### Loyalty Points
- Points are stored in browser's localStorage
- Clear browser data to reset points
- Each item has custom points value

### Order Delivery
- Delivery fee is set to FREE (customize in `updateCart()` if needed)
- Payment method is hardcoded to "Cash on Delivery"
- Total calculated as: Subtotal + Delivery Fee

## 📱 Browser Support
- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🛠️ Troubleshooting

### WhatsApp Link Not Opening
- Ensure you've updated the phone number to your actual number
- Check phone number format: `201xxxxxxxxx` (with country code, no +)
- Test on mobile device where WhatsApp is installed

### Points Not Saving
- Check if localStorage is enabled in browser
- Clear browser cache and refresh
- Try in private/incognito mode to test

### Menu Not Displaying
- Check browser console for errors (F12)
- Ensure all files are in same directory
- Verify CSS and JS files are properly linked in HTML

## 📊 Analytics Ideas
- Add Google Analytics
- Track popular items
- Monitor order frequency
- Analyze customer preferences

## 🔒 Security Notes
- All data is processed on client-side
- No sensitive data is stored
- WhatsApp sends messages directly to your phone
- No backend server required

## 📞 Support
For issues or customization help, check the code comments and documentation within each file.

## 📄 License
Free to use and modify for your business.

## 🎯 Future Enhancements
- [ ] Admin dashboard for menu management
- [ ] Order tracking system
- [ ] Payment gateway integration
- [ ] Email notifications
- [ ] Multiple restaurant locations
- [ ] Customer reviews & ratings
- [ ] Promotional codes & discounts
- [ ] Order history

---

**Made with ❤️ for Na2Na2 Kitchen**
