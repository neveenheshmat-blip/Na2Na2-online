// MENU DATA - UPDATE THIS WITH YOUR ACTUAL MENU
const menuData = {
    appetizers: [
        { id: 1, name: 'Hummus', category: 'appetizers', price: 45, description: 'Creamy chickpea dip with tahini', emoji: '🫘', points: 5, popular: false },
        { id: 2, name: 'Baba Ghanoush', category: 'appetizers', price: 50, description: 'Smoky roasted eggplant dip', emoji: '🍆', points: 5, popular: true },
        { id: 3, name: 'Falafel', category: 'appetizers', price: 40, description: 'Golden fried chickpea balls', emoji: '🥡', points: 4, popular: false },
        { id: 4, name: 'Tabbouleh', category: 'appetizers', price: 55, description: 'Fresh parsley salad with lemon', emoji: '🥗', points: 6, popular: true },
        { id: 5, name: 'Stuffed Grape Leaves', category: 'appetizers', price: 60, description: 'Rice & herbs wrapped in leaves', emoji: '🍃', points: 6, popular: false },
        { id: 6, name: 'Moutabel', category: 'appetizers', price: 50, description: 'Eggplant dip with yogurt', emoji: '🍆', points: 5, popular: false },
    ],
    mains: [
        { id: 7, name: 'Koshari', category: 'mains', price: 65, description: 'Rice, lentils, pasta & tomato sauce', emoji: '🍚', points: 8, popular: true },
        { id: 8, name: 'Ful Medames', category: 'mains', price: 35, description: 'Slow-cooked fava beans with garlic', emoji: '🫘', points: 4, popular: false },
        { id: 9, name: 'Grilled Chicken', category: 'mains', price: 120, description: 'Marinated & chargrilled chicken breast', emoji: '🍗', points: 15, popular: true },
        { id: 10, name: 'Kofta', category: 'mains', price: 95, description: 'Spiced minced meat skewers', emoji: '🍢', points: 12, popular: true },
        { id: 11, name: 'Mahshi', category: 'mains', price: 85, description: 'Stuffed zucchini & tomatoes', emoji: '🥒', points: 10, popular: false },
        { id: 12, name: 'Molokhia', category: 'mains', price: 75, description: 'Traditional Egyptian green stew', emoji: '🌿', points: 9, popular: false },
        { id: 13, name: 'Shrimp Saganaki', category: 'mains', price: 150, description: 'Shrimp in tomato & feta cheese', emoji: '🦐', points: 18, popular: false },
        { id: 14, name: 'Fish Grilled', category: 'mains', price: 140, description: 'Fresh grilled whole fish', emoji: '🐟', points: 17, popular: true },
    ],
    sides: [
        { id: 15, name: 'Egyptian Bread', category: 'sides', price: 5, description: 'Freshly baked aish baladi', emoji: '🍞', points: 1, popular: false },
        { id: 16, name: 'Fries', category: 'sides', price: 30, description: 'Crispy golden fries with garlic', emoji: '🍟', points: 4, popular: false },
        { id: 17, name: 'Mixed Salad', category: 'sides', price: 35, description: 'Fresh tomatoes, cucumbers & onions', emoji: '🥗', points: 4, popular: false },
        { id: 18, name: 'Rice', category: 'sides', price: 20, description: 'White or brown rice', emoji: '🍚', points: 2, popular: false },
        { id: 19, name: 'Mezze Platter', category: 'sides', price: 85, description: 'Mix of hummus, baba, falafel & bread', emoji: '🫕', points: 10, popular: true },
    ],
    beverages: [
        { id: 20, name: 'Fresh Orange Juice', category: 'beverages', price: 25, description: 'Freshly squeezed orange juice', emoji: '🍊', points: 3, popular: false },
        { id: 21, name: 'Mango Juice', category: 'beverages', price: 30, description: 'Fresh mango smoothie', emoji: '🥭', points: 3, popular: false },
        { id: 22, name: 'Hibiscus Tea', category: 'beverages', price: 20, description: 'Traditional Egyptian karkade', emoji: '🌺', points: 2, popular: true },
        { id: 23, name: 'Soft Drink', category: 'beverages', price: 15, description: 'Coca, Sprite, Fanta & more', emoji: '🥤', points: 2, popular: false },
        { id: 24, name: 'Iced Tea', category: 'beverages', price: 18, description: 'Cold refreshing mint tea', emoji: '🍵', points: 2, popular: false },
    ],
    desserts: [
        { id: 25, name: 'Baklava', category: 'desserts', price: 50, description: 'Phyllo with nuts & honey', emoji: '🥐', points: 6, popular: true },
        { id: 26, name: 'Konafa', category: 'desserts', price: 45, description: 'Shredded pastry with cream', emoji: '🧁', points: 5, popular: false },
        { id: 27, name: 'Umm Ali', category: 'desserts', price: 40, description: 'Egyptian bread pudding', emoji: '🍮', points: 5, popular: true },
    ]
};

// LOYALTY POINTS SYSTEM
class LoyaltySystem {
    constructor() {
        this.points = parseInt(localStorage.getItem('na2na2_points') || 0);
        this.updateDisplay();
    }

    addPoints(amount) {
        this.points += amount;
        localStorage.setItem('na2na2_points', this.points);
        this.updateDisplay();
    }

    usePoints(amount) {
        if (this.points >= amount) {
            this.points -= amount;
            localStorage.setItem('na2na2_points', this.points);
            this.updateDisplay();
            return true;
        }
        return false;
    }

    updateDisplay() {
        document.getElementById('pointsBalance').textContent = this.points;
    }

    getPoints() {
        return this.points;
    }
}

let loyalty = new LoyaltySystem();
let cart = [];
let allItems = [];

// Initialize
function init() {
    // Flatten menu data
    Object.values(menuData).forEach(category => {
        allItems.push(...category);
    });

    // Populate categories
    const categories = Object.keys(menuData);
    const categoriesContainer = document.getElementById('categoriesContainer');
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'category-btn';
        btn.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
        btn.onclick = () => filterCategory(cat);
        categoriesContainer.appendChild(btn);
    });

    renderMenu(allItems);
    updateCart();
}

function renderMenu(items) {
    const menuGrid = document.getElementById('menuGrid');
    menuGrid.innerHTML = items.map(item => `
        <div class="menu-item">
            ${item.popular ? '<span class="item-badge popular">Popular</span>' : '<span class="item-badge">EGP ' + item.price + '</span>'}
            <div class="item-image">${item.emoji}</div>
            <div class="item-content">
                <div class="item-name">${item.name}</div>
                <div class="item-description">${item.description}</div>
                <div class="item-footer">
                    <div>
                        <div class="item-price">EGP ${item.price}</div>
                        <div class="item-points">+${item.points} pts</div>
                    </div>
                    <button class="add-btn" onclick="addToCart(${item.id})">Add</button>
                </div>
            </div>
        </div>
    `).join('');
}

function filterCategory(category) {
    // Update button states
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Filter items
    const filtered = category === 'all' 
        ? allItems 
        : allItems.filter(item => item.category === category);
    renderMenu(filtered);
}

function searchMenu() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filtered = allItems.filter(item =>
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
    );
    renderMenu(filtered);
}

function addToCart(itemId) {
    const item = allItems.find(i => i.id === itemId);
    const existingItem = cart.find(i => i.id === itemId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    updateCart();
    showToast(`✓ ${item.name} added to cart!`);
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCart();
}

function updateQuantity(itemId, change) {
    const item = cart.find(i => i.id === itemId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(itemId);
        } else {
            updateCart();
        }
    }
}

function updateCart() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const subtotal = document.getElementById('subtotal');
    const total = document.getElementById('total');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const pointsEarned = document.getElementById('pointsEarned');
    const earnedPoints = document.getElementById('earnedPoints');

    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = itemCount;

    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="cart-empty">Your cart is empty</div>';
        pointsEarned.style.display = 'none';
        checkoutBtn.disabled = true;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">EGP ${item.price}</div>
                    <div class="cart-item-qty">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                        <span style="width: 30px; text-align: center;">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">✕</button>
            </div>
        `).join('');
        checkoutBtn.disabled = false;
    }

    const subtotalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const pointsToEarn = cart.reduce((sum, item) => sum + (item.points * item.quantity), 0);
    
    subtotal.textContent = `EGP ${subtotalAmount.toFixed(2)}`;
    total.textContent = `EGP ${subtotalAmount.toFixed(2)}`;
    earnedPoints.textContent = pointsToEarn;
    
    if (pointsToEarn > 0) {
        pointsEarned.style.display = 'block';
    }
}

function toggleCart() {
    document.getElementById('cartSidebar').classList.toggle('open');
}

document.getElementById('openCart').addEventListener('click', toggleCart);

function openCheckout() {
    const orderSummary = document.getElementById('orderSummary');
    const subtotalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const pointsToEarn = cart.reduce((sum, item) => sum + (item.points * item.quantity), 0);

    orderSummary.innerHTML = cart.map(item => `
        <div class="summary-item">
            <span>${item.quantity}x ${item.name}</span>
            <span>EGP ${(item.price * item.quantity).toFixed(2)}</span>
        </div>
    `).join('') + `
        <div class="summary-item" style="margin-top: 0.5rem; padding-top: 0.5rem; border-top: 1px solid var(--border);">
            <span style="font-weight: 700;">Total</span>
            <span style="font-weight: 700;">EGP ${subtotalAmount.toFixed(2)}</span>
        </div>
        <div class="summary-item" style="margin-top: 0.5rem; color: var(--warning);">
            <span>Earn Points</span>
            <span>+${pointsToEarn} 💎</span>
        </div>
    `;

    document.getElementById('checkoutModal').classList.add('show');
    document.getElementById('modalTitle').style.display = 'flex';
    document.getElementById('successMessage').classList.remove('show');
}

function closeCheckout() {
    document.getElementById('checkoutModal').classList.remove('show');
    document.getElementById('fullName').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('address').value = '';
    document.getElementById('instructions').value = '';
    document.getElementById('modalButtons').style.display = 'flex';
    document.querySelector('form').style.display = 'block';
}

function submitOrder(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const instructions = document.getElementById('instructions').value;
    const pointsEarned = cart.reduce((sum, item) => sum + (item.points * item.quantity), 0);
    const subtotalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Create WhatsApp message
    const orderSummary = cart.map(item =>
        `${item.quantity}x ${item.name} - EGP ${(item.price * item.quantity).toFixed(2)}`
    ).join('%0A');

    const whatsappMessage = `
🛒 *New Order from Na2Na2*

👤 *Customer:* ${fullName}
📱 *Phone:* ${phone}
📍 *Address:* ${address}

📋 *Order:*
${orderSummary.replace(/%0A/g, '\n')}

💰 *Total:* EGP ${subtotalAmount.toFixed(2)}
💎 *Loyalty Points:* +${pointsEarned}

${instructions ? `📝 *Special Requests:* ${instructions}` : ''}

💵 *Payment:* Cash on Delivery
    `.trim();

    // Send to WhatsApp
    const whatsappPhone = '201286460004';
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappLink = `https://wa.me/${whatsappPhone}?text=${encodedMessage}`;

    // Show success message
    document.getElementById('successMessage').classList.add('show');
    document.getElementById('modalTitle').style.display = 'none';
    document.getElementById('modalButtons').style.display = 'none';
    document.querySelector('form').style.display = 'none';

    // Add loyalty points
    loyalty.addPoints(pointsEarned);

    // Open WhatsApp in new tab
    setTimeout(() => {
        window.open(whatsappLink, '_blank');
    }, 1500);

    // Reset after 3 seconds
    setTimeout(() => {
        closeCheckout();
        cart = [];
        updateCart();
        showToast('✓ Order sent! You earned ' + pointsEarned + ' loyalty points!');
    }, 3000);
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.style.display = 'block';
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
}

// Search on Enter key
document.getElementById('searchInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchMenu();
});

// Close cart on Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.getElementById('cartSidebar').classList.remove('open');
        document.getElementById('checkoutModal').classList.remove('show');
    }
});

// Initialize on page load
init();
