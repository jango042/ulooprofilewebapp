import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">Coach Profile</span>
        </Link>
        <ul className="navbar-menu">
          <li>
            <Link 
              to="/" 
              className={`navbar-link ${isActive('/') ? 'active' : ''}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/events" 
              className={`navbar-link ${isActive('/events') ? 'active' : ''}`}
            >
              Upcoming Events
            </Link>
          </li>
          <li>
            <Link 
              to="/past-events" 
              className={`navbar-link ${isActive('/past-events') ? 'active' : ''}`}
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

