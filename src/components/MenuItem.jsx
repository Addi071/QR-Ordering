import React from 'react'
import './MenuItem.css'

const MenuItem = ({ item }) => {
  const getCategoryBadge = () => {
    switch(item.category) {
      case 'veg':
        return <span className="category-badge veg">🥬 Veg</span>
      case 'non-veg':
        return <span className="category-badge non-veg">🍗 Non-Veg</span>
      case 'drinks':
        return <span className="category-badge drinks">🥤 Drink</span>
      default:
        return null
    }
  }

  return (
    <div className="menu-item">
      <div className="item-image-container">
        <img 
          src={item.image} 
          alt={item.name}
          className="item-image"
          loading="lazy"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x400/2C2C2C/FF6B35?text=' + encodeURIComponent(item.name)
          }}
        />
      </div>
      <div className="item-content">
        <div className="item-header">
          <h3 className="item-name">{item.name}</h3>
          {getCategoryBadge()}
        </div>
        <p className="item-description">{item.description}</p>
        <div className="item-footer">
          <span className="item-price">₹{item.price}</span>
        </div>
      </div>
    </div>
  )
}

export default MenuItem

