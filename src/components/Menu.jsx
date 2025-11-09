import React, { useState } from 'react'
import MenuItem from './MenuItem'
import './Menu.css'

const menuItems = [
  // Veg Items
  { id: 1, name: 'Paneer Tikka', description: 'Grilled cottage cheese with spices', price: 250, category: 'veg', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=400&fit=crop&q=80' },
  { id: 2, name: 'Dal Makhani', description: 'Creamy black lentils cooked overnight', price: 180, category: 'veg', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=400&fit=crop&q=80' },
  { id: 3, name: 'Vegetable Biryani', description: 'Fragrant basmati rice with mixed vegetables', price: 220, category: 'veg', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=400&fit=crop&q=80' },
  { id: 4, name: 'Aloo Gobi', description: 'Potato and cauliflower curry', price: 150, category: 'veg', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=400&fit=crop&q=80' },
  { id: 5, name: 'Palak Paneer', description: 'Spinach curry with cottage cheese', price: 200, category: 'veg', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=400&fit=crop&q=80' },
  { id: 6, name: 'Chana Masala', description: 'Spicy chickpea curry', price: 160, category: 'veg', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=400&fit=crop&q=80' },
  { id: 7, name: 'Vegetable Fried Rice', description: 'Stir-fried rice with fresh vegetables', price: 180, category: 'veg', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=400&fit=crop&q=80' },
  { id: 8, name: 'Mushroom Curry', description: 'Creamy mushroom curry', price: 190, category: 'veg', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=400&fit=crop&q=80' },
  
  // Non-Veg Items
  { id: 9, name: 'Butter Chicken', description: 'Creamy tomato-based chicken curry', price: 320, category: 'non-veg', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=400&fit=crop&q=80' },
  { id: 10, name: 'Chicken Biryani', description: 'Aromatic basmati rice with tender chicken', price: 280, category: 'non-veg', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=400&fit=crop&q=80' },
  { id: 11, name: 'Mutton Curry', description: 'Spicy mutton curry with traditional spices', price: 380, category: 'non-veg', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=400&fit=crop&q=80' },
  { id: 12, name: 'Fish Curry', description: 'Tangy fish curry with coconut', price: 300, category: 'non-veg', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=400&fit=crop&q=80' },
  { id: 13, name: 'Chicken Tikka', description: 'Marinated grilled chicken pieces', price: 290, category: 'non-veg', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=400&fit=crop&q=80' },
  { id: 14, name: 'Prawn Curry', description: 'Spicy prawn curry with onions and tomatoes', price: 350, category: 'non-veg', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=400&fit=crop&q=80' },
  { id: 15, name: 'Egg Curry', description: 'Hard-boiled eggs in spicy gravy', price: 170, category: 'non-veg', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=400&fit=crop&q=80' },
  { id: 16, name: 'Lamb Korma', description: 'Mild and creamy lamb curry', price: 400, category: 'non-veg', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=400&fit=crop&q=80' },
  
  // Drinks
  { id: 17, name: 'Mango Lassi', description: 'Sweet mango yogurt drink', price: 80, category: 'drinks', image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=400&fit=crop&q=80' },
  { id: 18, name: 'Fresh Lime Soda', description: 'Refreshing lime with soda', price: 60, category: 'drinks', image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=400&fit=crop&q=80' },
  { id: 19, name: 'Masala Chai', description: 'Spiced Indian tea', price: 50, category: 'drinks', image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=400&fit=crop&q=80' },
  { id: 20, name: 'Fresh Orange Juice', description: 'Freshly squeezed orange juice', price: 90, category: 'drinks', image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=400&fit=crop&q=80' },
  { id: 21, name: 'Coconut Water', description: 'Fresh tender coconut water', price: 70, category: 'drinks', image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=400&fit=crop&q=80' },
  { id: 22, name: 'Buttermilk', description: 'Spiced buttermilk', price: 55, category: 'drinks', image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=400&fit=crop&q=80' },
  { id: 23, name: 'Iced Coffee', description: 'Cold coffee with ice cream', price: 120, category: 'drinks', image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=400&fit=crop&q=80' },
  { id: 24, name: 'Mint Mojito', description: 'Fresh mint mocktail', price: 100, category: 'drinks', image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=400&fit=crop&q=80' },
]

const Menu = () => {
  const [filter, setFilter] = useState('all')

  const filteredItems = filter === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === filter)

  return (
    <div className="menu-container">
      <div className="filter-buttons">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All Items
        </button>
        <button 
          className={`filter-btn ${filter === 'veg' ? 'active' : ''}`}
          onClick={() => setFilter('veg')}
        >
          🥬 Veg
        </button>
        <button 
          className={`filter-btn ${filter === 'non-veg' ? 'active' : ''}`}
          onClick={() => setFilter('non-veg')}
        >
          🍗 Non-Veg
        </button>
        <button 
          className={`filter-btn ${filter === 'drinks' ? 'active' : ''}`}
          onClick={() => setFilter('drinks')}
        >
          🥤 Drinks
        </button>
      </div>
      
      <div className="menu-items">
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <MenuItem key={item.id} item={item} />
          ))
        ) : (
          <p className="no-items">No items found</p>
        )}
      </div>
    </div>
  )
}

export default Menu

