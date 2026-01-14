import { Link } from 'react-router-dom'
import ImageCarousel from '../components/ImageCarousel'
import './Home.css'

const Home = () => {
  // Carousel images - replace these URLs with your actual images
  const carouselImages = [
    {
      url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop',
      caption: 'Building Tomorrow\'s Leaders Today'
    },
    {
      url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=600&fit=crop',
      caption: 'Transformative Learning Experiences'
    },
    {
      url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=600&fit=crop',
      caption: 'Empowering Teenagers Across Nigeria'
    }
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Empowering Teenagers Through
            <span className="gradient-text"> Transformative Learning</span>
          </h1>
          <p className="hero-subtitle">
            Join us for life-changing camps and workshops designed to develop leadership, 
            critical thinking, and personal growth outside the traditional classroom.
          </p>
          <div className="hero-buttons">
            <Link to="/events" className="btn btn-primary">
              View Upcoming Events
            </Link>
            <Link to="/past-events" className="btn btn-secondary">
              See Past Events
            </Link>
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="carousel-section">
        <div className="container">
          <ImageCarousel images={carouselImages} autoSlideInterval={5000} />
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">About the Coach</h2>
              <p className="section-description">
                With years of experience in youth development and education, I specialize in 
                creating immersive learning experiences that go beyond traditional academics. 
                My programs focus on developing essential life skills, leadership capabilities, 
                and personal growth through hands-on activities, team challenges, and real-world 
                problem-solving.
              </p>
              <p className="section-description">
                Each camp is carefully designed to challenge teenagers, build confidence, and 
                foster connections with peers from different backgrounds. Whether it's leadership 
                development, entrepreneurship, or creative problem-solving, participants leave 
                with new perspectives and skills that last a lifetime.
              </p>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Events Organized</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">1000+</div>
                  <div className="stat-label">Students Impacted</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">36</div>
                  <div className="stat-label">States Covered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title text-center">What Makes Our Programs Unique</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Focused Learning</h3>
              <p>Specialized programs targeting specific skills and competencies that matter most for future success.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Peer Collaboration</h3>
              <p>Work alongside motivated peers from diverse backgrounds, building lasting friendships and networks.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3>Multiple Locations</h3>
              <p>Events held across different states in Nigeria, making it accessible to teenagers nationwide.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3>Real-World Application</h3>
              <p>Learn through doing, with projects and challenges that mirror real-world scenarios.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3>Personal Growth</h3>
              <p>Develop confidence, resilience, and self-awareness through carefully structured experiences.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3>Proven Results</h3>
              <p>Join hundreds of alumni who have gone on to achieve remarkable success in their chosen paths.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Begin Your Journey?</h2>
            <p>Explore our upcoming camps and find the perfect program for you.</p>
            <Link to="/events" className="btn btn-primary btn-large">
              Browse Upcoming Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

