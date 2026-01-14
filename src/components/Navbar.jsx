import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path) => location.pathname === path

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-text">Coach Profile</span>
        </Link>
        <button 
          className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <Link 
              to="/" 
              className={`navbar-link ${isActive('/') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/events" 
              className={`navbar-link ${isActive('/events') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Upcoming Events
            </Link>
          </li>
          <li>
            <Link 
              to="/past-events" 
              className={`navbar-link ${isActive('/past-events') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Past Events
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

