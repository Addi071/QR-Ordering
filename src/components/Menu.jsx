import React, { useState } from 'react'
import MenuItem from './MenuItem'
import './Menu.css'

const menuItems = [
  // Veg Items
  { id: 1, name: 'Paneer Tikka', description: 'Grilled cottage cheese with spices', price: 250, category: 'veg', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=400&fit=crop&q=80' },
  { id: 2, name: 'Dal Makhani', description: 'Creamy black lentils cooked overnight', price: 180, category: 'veg', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=400&fit=crop&q=80' },
  { id: 3, name: 'Vegetable Biryani', description: 'Fragrant basmati rice with mixed vegetables', price: 220, category: 'veg', image: 'https://images.unsplash.com/photo-1630409346824-4f0e7b080087?q=80&w=946&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 4, name: 'Aloo Gobi', description: 'Potato and cauliflower curry', price: 150, category: 'veg', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=400&fit=crop&q=80' },
  { id: 5, name: 'Palak Paneer', description: 'Spinach curry with cottage cheese', price: 200, category: 'veg', image: 'https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 6, name: 'Chana Masala', description: 'Spicy chickpea curry', price: 160, category: 'veg', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=400&fit=crop&q=80' },
  { id: 7, name: 'Vegetable Fried Rice', description: 'Stir-fried rice with fresh vegetables', price: 180, category: 'veg', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=400&fit=crop&q=80' },
  { id: 8, name: 'Mushroom Curry', description: 'Creamy mushroom curry', price: 190, category: 'veg', image: 'https://plus.unsplash.com/premium_photo-1669831178095-005ed789250a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  
  // Non-Veg Items
  { id: 9, name: 'Butter Chicken', description: 'Creamy tomato-based chicken curry', price: 320, category: 'non-veg', image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 10, name: 'Chicken Biryani', description: 'Aromatic basmati rice with tender chicken', price: 280, category: 'non-veg', image: 'https://images.unsplash.com/photo-1719239885399-f87d992e0f18?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 11, name: 'Mutton Curry', description: 'Spicy mutton curry with traditional spices', price: 380, category: 'non-veg', image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 12, name: 'Fish Curry', description: 'Tangy fish curry with coconut', price: 300, category: 'non-veg', image: 'https://images.unsplash.com/photo-1654863404432-cac67587e25d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 13, name: 'Chicken Tikka', description: 'Marinated grilled chicken pieces', price: 290, category: 'non-veg', image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 14, name: 'Prawn Curry', description: 'Spicy prawn curry with onions and tomatoes', price: 350, category: 'non-veg', image: 'https://plus.unsplash.com/premium_photo-1669150849060-1d6a6dabad14?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 15, name: 'Egg Curry', description: 'Hard-boiled eggs in spicy gravy', price: 170, category: 'non-veg', image: 'https://images.unsplash.com/photo-1661588669110-81142a5b9e57?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 16, name: 'Lamb Korma', description: 'Mild and creamy lamb curry', price: 400, category: 'non-veg', image: 'https://images.unsplash.com/photo-1719132125606-b9a713fbb496?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  
  // Drinks
  { id: 17, name: 'Mango Lassi', description: 'Sweet mango yogurt drink', price: 80, category: 'drinks', image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 18, name: 'Fresh Lime Soda', description: 'Refreshing lime with soda', price: 60, category: 'drinks', image: 'https://plus.unsplash.com/premium_photo-1661510500212-e3d96478a574?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 19, name: 'Masala Chai', description: 'Spiced Indian tea', price: 50, category: 'drinks', image: 'https://images.unsplash.com/photo-1583836632332-53825ce55a03?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 20, name: 'Fresh Orange Juice', description: 'Freshly squeezed orange juice', price: 90, category: 'drinks', image: 'https://images.unsplash.com/photo-1618046364546-81e9d03d39a6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 21, name: 'Coconut Water', description: 'Fresh tender coconut water', price: 70, category: 'drinks', image: 'https://images.unsplash.com/photo-1628692945318-f44a3c346afb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 22, name: 'Buttermilk', description: 'Spiced buttermilk', price: 55, category: 'drinks', image: 'https://plus.unsplash.com/premium_photo-1664647903564-86768c0c1849?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 23, name: 'Iced Coffee', description: 'Cold coffee with ice cream', price: 120, category: 'drinks', image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 24, name: 'Mint Mojito', description: 'Fresh mint mocktail', price: 100, category: 'drinks', image: 'https://images.unsplash.com/photo-1627366422858-c5af17ac71ac?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
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

