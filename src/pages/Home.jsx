import { Link } from 'react-router-dom'
import ImageCarousel from '../components/ImageCarousel'
import { campImages } from '../data/campImages'
import './Home.css'

const Home = () => {
  // Select 4 images from camp gallery for carousel
  const carouselImages = [
    {
      url: campImages[0]?.publicId || '',
      caption: 'Excel Boot Camp 2025 - Discovering Identity, Building Character, Fulfilling Purpose'
    },
    {
      url: campImages[8]?.publicId || '', // DSC_1449
      caption: 'Excel Youth Leadership Initiative - Raising Purpose-Driven Leaders'
    },
    {
      url: 'https://res.cloudinary.com/jango042/image/upload/v1768997404/excel_camp_2025/image_008_xrwimj.jpg',
      caption: 'Empowering Young People Across Nigeria - Transformational Experiences'
    },
    {
      url: campImages[30]?.publicId || '', // DSC_1434
      caption: 'Building Confidence, Character, and Purpose - Join Our Community'
    }
  ].filter(img => img.url) // Filter out any empty URLs

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Excel Youth Leadership Initiative
          </h1>
          <p className="hero-subtitle">
            Guiding children, teenagers, and young adults to discover who they are, understand their worth, 
            and develop the character, skills, and spiritual foundation required to thrive in life.
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

      {/* Mission Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">Our Mission</h2>
              <p className="section-description">
                My mission is to guide children, teenagers, and young adults to discover who they are, 
                understand their worth, and develop the character, skills, and spiritual foundation 
                required to thrive in life. Through mentorship, coaching, teaching, and intentional guidance, 
                I am committed to protecting young people from destructive influences, empowering them to 
                make wise choices, and equipping them to fulfill their God-given purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Founder Section */}
      <section className="about-section" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">About the Founder</h2>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>
                Uloma Nkem Chukwu
              </h3>
              <p className="section-description">
                Uloma Nkem Chukwu is the visionary founder of Aunty Uloma Mentorship Hub, a global platform 
                created to help children, teenagers, and young adults understand who they are, grow in confidence, 
                and walk boldly into their purpose.
              </p>
              <p className="section-description">
                With over 26 years of hands-on experience working with young people, Uloma has dedicated her life 
                to guiding the next generation through the challenges of identity, peer pressure, self-worth, 
                decision-making, and spiritual growth.
              </p>
              <p className="section-description">
                As a certified life coach, trained youth minister, educationist, and pastor, she brings both 
                professional expertise and deep compassion into every mentorship session. Her heart is to see 
                young people become emotionally strong, morally grounded, and spiritually rooted.
              </p>
              <p className="section-description">
                <strong>Education & Credentials:</strong> Uloma holds a B.Sc. in Biology Education, a Postgraduate 
                Diploma in Management, and a Master's degree in Business Administration from the University of Calabar. 
                She is also a Certified Life Coach from Transformational Academy, California (USA), and a trained Youth 
                Minister and Coach from 180 Degree Church, Tulsa, Oklahoma (USA).
              </p>
              <p className="section-description">
                <strong>Current Roles:</strong> Uloma currently serves as the Director of Youth and Teens Church at 
                Family Worship Center, Abuja, where she oversees the teens and youth ministry across all church branches. 
                She is the Chief Executive Officer of Ultimate You Consults, a life coaching and training company, and 
                the founder of Excel Youth Camp—an annual transformational boot camp for teenagers and young adults 
                established in 2018. She also serves as the Pastor coordinating the International Media Ministry of 
                When Women Pray International (WWP).
              </p>
              <p className="section-description">
                Driven by a strong mandate to see young people discover their identity and fulfill their God-given potential, 
                Uloma believes that every child deserves the opportunity to become all that God has designed them to be—regardless 
                of background or limitations. She believes that mentorship is not just about teaching—but about walking with 
                young people until they become who God designed them to be.
              </p>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">26+</div>
                  <div className="stat-label">Years of Experience</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">2018</div>
                  <div className="stat-label">Excel Camp Founded</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">3</div>
                  <div className="stat-label">Core Programs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title text-center">Our Programs</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏠</div>
              <h3>Aunty Uloma Mentorship Hub</h3>
              <p>A global platform designed to help children, teenagers, and young adults understand who they are, 
              grow in confidence, and walk boldly into their purpose. Through personalized mentorship, we guide young 
              people through identity, peer pressure, self-worth, decision-making, and spiritual growth.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔥</div>
              <h3>Excel Boot Camp</h3>
              <p>An annual transformational boot camp for teenagers and young adults established in 2018. Built on 
              the vision of 2 Corinthians 8:7, raising young people who excel in faith, character, knowledge, and 
              purpose. A life-changing experience that equips participants to fulfill their God-given potential.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👧</div>
              <h3>Girls Timeout with Aunty Uloma</h3>
              <p>A specialized program designed specifically for girls, providing a safe space for open dialogue, 
              mentorship, and empowerment. Focused on building confidence, character, and helping young women navigate 
              the unique challenges they face while discovering their purpose.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Unique Section */}
      <section className="features-section" style={{ backgroundColor: 'var(--bg-white)' }}>
        <div className="container">
          <h2 className="section-title text-center">What Makes Our Programs Unique</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Identity Discovery</h3>
              <p>Helping young people discover who they are and understand their God-given worth and purpose.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💪</div>
              <h3>Character Development</h3>
              <p>Building strong moral foundations and emotional strength through intentional guidance and mentorship.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🙏</div>
              <h3>Spiritual Foundation</h3>
              <p>Rooting young people in faith and spiritual growth, equipping them to thrive in all areas of life.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Protection & Guidance</h3>
              <p>Protecting young people from destructive influences and empowering them to make wise choices.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Personalized Mentorship</h3>
              <p>Walking with young people until they become who God designed them to be, not just teaching but journeying together.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3>Proven Track Record</h3>
              <p>Over 26 years of experience dedicated to the training, development, and reformation of young people.</p>
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

