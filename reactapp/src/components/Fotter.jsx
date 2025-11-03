import React from 'react'
import './Fotter.css'

const Fotter = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>© 2025 Design and Development by <span>Nitin Chugh</span></h3>
        <p>Made with ❤️ using React</p>
      </div>

      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/privacy">Privacy Policy</a>
      </div>
    </footer>
  )
}

export default Fotter
