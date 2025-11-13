import React, { useState } from 'react'
import './Cart.css'

const Cart = ({ 
  cart, 
  isOpen, 
  onClose, 
  onOpen, 
  removeFromCart, 
  updateQuantity, 
  clearCart, 
  totalItems, 
  totalPrice 
}) => {
  const [showBill, setShowBill] = useState(false)
  const [orderNumber, setOrderNumber] = useState(null)

  const generateOrderNumber = () => {
    return 'ORD' + Date.now().toString().slice(-6)
  }

  const formatBill = () => {
    const orderNum = generateOrderNumber()
    setOrderNumber(orderNum)
    const date = new Date().toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })

    let billText = `*Grand Delight Restaurant*\n`
    billText += `━━━━━━━━━━━━━━━━━━━━\n\n`
    billText += `*Order Number:* ${orderNum}\n`
    billText += `*Date & Time:* ${date}\n`
    billText += `━━━━━━━━━━━━━━━━━━━━\n\n`
    billText += `*ORDER DETAILS*\n\n`

    cart.forEach((item, index) => {
      billText += `${index + 1}. ${item.name}\n`
      billText += `   Qty: ${item.quantity} × ₹${item.price} = ₹${item.quantity * item.price}\n\n`
    })

    billText += `━━━━━━━━━━━━━━━━━━━━\n`
    billText += `*Subtotal:* ₹${totalPrice}\n`
    billText += `*Delivery Charges:* ₹0 (Dine-in)\n`
    billText += `*Service Charges:* ₹0\n`
    billText += `━━━━━━━━━━━━━━━━━━━━\n`
    billText += `*TOTAL AMOUNT:* ₹${totalPrice}\n`
    billText += `━━━━━━━━━━━━━━━━━━━━\n\n`
    billText += `Thank you for your order! 🙏\n`
    billText += `Enjoy your meal! 🍽️`

    return billText
  }

  const handleCheckout = () => {
    if (cart.length === 0) return

    const billText = formatBill()
    const whatsappNumber = '9322484356'
    const encodedMessage = encodeURIComponent(billText)
    const whatsappUrl = `https://wa.me/91${whatsappNumber}?text=${encodedMessage}`
    
    window.open(whatsappUrl, '_blank')
    setShowBill(true)
  }

  const handleCloseBill = () => {
    setShowBill(false)
    clearCart()
    onClose()
  }

  if (showBill && orderNumber) {
    const billText = formatBill()
    return (
      <div className="cart-overlay" onClick={handleCloseBill}>
        <div className="bill-container" onClick={(e) => e.stopPropagation()}>
          <div className="bill-header">
            <h2>Order Bill</h2>
            <button className="close-btn" onClick={handleCloseBill}>×</button>
          </div>
          <div className="bill-content">
            <pre className="bill-text">{billText}</pre>
          </div>
          <div className="bill-footer">
            <button className="bill-close-btn" onClick={handleCloseBill}>
              Close
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Cart Icon Button - Bottom Right */}
      <button 
        className={`cart-icon-btn ${totalItems > 0 ? 'has-items' : ''}`}
        onClick={onOpen}
        aria-label="Open cart"
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <path d="M9 2L7 6m10 0l-2-4M3 6h18l-1 13H4L3 6z" />
          <path d="M9 10v6m6-6v6" />
        </svg>
        {totalItems > 0 && (
          <span className="cart-badge">{totalItems}</span>
        )}
      </button>

      {/* Cart Sidebar */}
      {isOpen && (
        <div className="cart-overlay" onClick={onClose}>
          <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
            <div className="cart-header">
              <h2>Your Cart</h2>
              <button className="close-btn" onClick={onClose}>×</button>
            </div>

            <div className="cart-content">
              {cart.length === 0 ? (
                <div className="empty-cart">
                  <svg 
                    width="64" 
                    height="64" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5"
                  >
                    <path d="M9 2L7 6m10 0l-2-4M3 6h18l-1 13H4L3 6z" />
                  </svg>
                  <p>Your cart is empty</p>
                  <p className="empty-cart-subtitle">Add items to get started</p>
                </div>
              ) : (
                <>
                  <div className="cart-items">
                    {cart.map(item => (
                      <div key={item.id} className="cart-item">
                        <div className="cart-item-image">
                          <img src={item.image} alt={item.name} />
                        </div>
                        <div className="cart-item-details">
                          <h3>{item.name}</h3>
                          <p className="cart-item-price">₹{item.price} each</p>
                          <div className="cart-item-controls">
                            <button 
                              className="quantity-btn"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              −
                            </button>
                            <span className="quantity">{item.quantity}</span>
                            <button 
                              className="quantity-btn"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              +
                            </button>
                            <button 
                              className="remove-btn"
                              onClick={() => removeFromCart(item.id)}
                            >
                              Remove
                            </button>
                          </div>
                          <p className="cart-item-total">₹{item.price * item.quantity}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="cart-summary">
                    <div className="summary-row">
                      <span>Subtotal</span>
                      <span>₹{totalPrice}</span>
                    </div>
                    <div className="summary-row">
                      <span>Delivery Charges</span>
                      <span className="free">FREE (Dine-in)</span>
                    </div>
                    <div className="summary-row">
                      <span>Service Charges</span>
                      <span className="free">FREE</span>
                    </div>
                    <div className="summary-row total">
                      <span>Total</span>
                      <span>₹{totalPrice}</span>
                    </div>
                  </div>
                </>
              )}
            </div>

            {cart.length > 0 && (
              <div className="cart-footer">
                <button 
                  className="checkout-btn"
                  onClick={handleCheckout}
                >
                  Checkout via WhatsApp
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Cart

