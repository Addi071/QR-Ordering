import React from 'react'
import Menu from './components/Menu'
import Footer from './components/Footer'
import './App.css'

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <div className="banner">
          <h1 className="hotel-name">Grand Delight Restaurant</h1>
          <p className="hotel-tagline">Serving Excellence Since 1995</p>
        </div>
      </header>
      <Menu />
      <Footer />
    </div>
  )
}

export default App

