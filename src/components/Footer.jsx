import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Excel Youth Leadership Initiative</h3>
            <p>Guiding children, teenagers, and young adults to discover who they are, understand their worth, 
            and develop the character, skills, and spiritual foundation required to thrive in life.</p>
          </div>
          <div className="footer-section">
            <h4>Our Programs</h4>
            <ul>
              <li>Aunty Uloma Mentorship Hub</li>
              <li>Excel Boot Camp</li>
              <li>Girls Timeout with Aunty Uloma</li>
            </ul>
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
            <p>Founder: Uloma Nkem Chukwu</p>
            <p>Director of Youth & Teens Church</p>
            <p>Family Worship Center, Abuja</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Excel Youth Leadership Initiative. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

