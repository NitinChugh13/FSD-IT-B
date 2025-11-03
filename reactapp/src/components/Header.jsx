import React from 'react'
import './Header.css' 
import './Header.css'
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h2>Book<span>Store</span></h2>
      </div>

      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/forecast">Forecast</a>
        <a href="/faq">FAQs</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  )
}

export default Header

