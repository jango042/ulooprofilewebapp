import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Coach Profile</h3>
            <p>Empowering teenagers through transformative learning experiences outside the classroom.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/events">Upcoming Events</a></li>
              <li><a href="/past-events">Past Events</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: coach@example.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Coach Profile. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

