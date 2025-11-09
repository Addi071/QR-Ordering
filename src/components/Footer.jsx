import React from 'react'
import './Footer.css'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">Grand Delight Restaurant</h3>
          <p className="footer-description">
            Serving excellence since 1995. Experience authentic flavors and warm hospitality in the heart of the city.
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Opening Hours</h4>
          <div className="footer-hours">
            <div className="hours-item">
              <span className="hours-day">Monday - Friday</span>
              <span className="hours-time">11:00 AM - 11:00 PM</span>
            </div>
            <div className="hours-item">
              <span className="hours-day">Saturday</span>
              <span className="hours-time">11:00 AM - 12:00 AM</span>
            </div>
            <div className="hours-item">
              <span className="hours-day">Sunday</span>
              <span className="hours-time">12:00 PM - 10:00 PM</span>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Location</h4>
          <div className="footer-info">
            <p className="info-item">
              <span className="info-icon">📍</span>
              123 Food Street, Downtown District
            </p>
            <p className="info-item">
              <span className="info-icon">🏙️</span>
              City Center, State 12345
            </p>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Contact Us</h4>
          <div className="footer-info">
            <p className="info-item">
              <span className="info-icon">📞</span>
              +1 (555) 123-4567
            </p>
            <p className="info-item">
              <span className="info-icon">✉️</span>
              info@granddelight.com
            </p>
            <p className="info-item">
              <span className="info-icon">🌐</span>
              www.granddelight.com
            </p>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p className="footer-copyright">
          © {year} Grand Delight Restaurant. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer

