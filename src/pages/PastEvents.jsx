import { useState } from 'react'
import { campImages } from '../data/campImages'
import './PastEvents.css'

const PastEvents = () => {
  // Past events data with YouTube video IDs and images from gallery
  // Mix of videos (dummy placeholders) and images from camp gallery
  const [pastEvents] = useState([
    {
      id: 1,
      title: "Excel Boot Camp 2023",
      location: "Abuja",
      date: "August 2023",
      videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      type: "video",
      description: "Highlights from our 2023 Excel Boot Camp featuring transformational sessions, mentorship, character building workshops, and inspiring testimonies from participants who discovered their identity and purpose.",
      participants: 95,
      highlights: ["Identity discovery sessions", "Character building workshops", "Spiritual growth sessions", "Purpose clarity sessions", "Testimonies and transformation stories"]
    },
    {
      id: 2,
      title: "Girls Timeout with Aunty Uloma - Q1 2023",
      location: "Abuja",
      date: "March 2023",
      imageUrl: campImages[0]?.publicId || '', // Using camp gallery image
      type: "image",
      description: "A powerful session where young women came together for mentorship, empowerment, and open dialogue. See the moments captured from this transformative gathering.",
      participants: 28,
      highlights: ["Girls empowerment sessions", "Open dialogue sessions", "Confidence building activities", "Mentorship moments", "Sisterhood bonding"]
    },
    {
      id: 3,
      title: "Aunty Uloma Mentorship Hub - Cohort 2023",
      location: "Multiple Locations",
      date: "2023",
      videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      type: "video",
      description: "A year-long mentorship journey where young people were guided through identity discovery, decision-making, and spiritual growth. See the transformation stories from our 2023 cohort.",
      participants: 45,
      highlights: ["Personal mentorship sessions", "Identity discovery workshops", "Decision-making guidance", "Spiritual growth sessions", "Transformation testimonies"]
    },
    {
      id: 4,
      title: "Excel Boot Camp 2022",
      location: "Abuja",
      date: "August 2022",
      imageUrl: campImages[8]?.publicId || '', // Using camp gallery image
      type: "image",
      description: "Relive the powerful moments from our 2022 Excel Boot Camp where young people were equipped to excel in faith, character, knowledge, and purpose.",
      participants: 85,
      highlights: ["Faith development sessions", "Character excellence training", "Knowledge acquisition workshops", "Purpose discovery sessions", "Alumni testimonies"]
    },
    {
      id: 5,
      title: "Girls Timeout - Special Edition 2023",
      location: "Lagos",
      date: "November 2023",
      videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      type: "video",
      description: "A special edition of Girls Timeout in Lagos, empowering young women to walk boldly in their purpose and build strong character foundations.",
      participants: 35,
      highlights: ["Purpose discovery", "Character building", "Confidence workshops", "Peer support sessions", "Empowerment activities"]
    },
    {
      id: 6,
      title: "Excel Boot Camp 2021",
      location: "Abuja",
      date: "August 2021",
      imageUrl: campImages[15]?.publicId || '', // Using camp gallery image
      type: "image",
      description: "Highlights from our 2021 Excel Boot Camp, showcasing the impact of intentional mentorship and guidance in transforming young lives.",
      participants: 75,
      highlights: ["Transformational sessions", "Mentorship moments", "Character development", "Spiritual growth", "Life-changing testimonies"]
    },
    {
      id: 7,
      title: "Excel Boot Camp 2024",
      location: "Abuja",
      date: "August 2024",
      imageUrl: campImages[30]?.publicId || '', // Using camp gallery image
      type: "image",
      description: "A memorable camp experience featuring workshops, mentorship sessions, and life-changing moments captured from our 2024 boot camp.",
      participants: 110,
      highlights: ["Leadership development", "Character building", "Purpose discovery", "Team building activities", "Spiritual growth"]
    },
    {
      id: 8,
      title: "Excel Boot Camp 2020",
      location: "Abuja",
      date: "August 2020",
      videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      type: "video",
      description: "Our foundational camp that set the stage for years of transformation. Watch highlights from this impactful event.",
      participants: 65,
      highlights: ["Foundation building", "Identity workshops", "Character development", "Mentorship sessions", "Transformation stories"]
    }
  ])

  const [selectedEvent, setSelectedEvent] = useState(null)

  const handleVideoClick = (event) => {
    setSelectedEvent(event)
  }

  return (
    <div className="past-events-page">
      <div className="past-events-hero">
        <div className="container">
          <h1>Past Events & Highlights</h1>
          <p>Relive the amazing experiences from our previous camps and workshops</p>
        </div>
      </div>

      <div className="container">
        <div className="past-events-intro">
          <p>
            Explore videos and highlights from our past events. See the impact we've made 
            and the incredible journeys our participants have taken. Each event represents 
            hours of learning, growth, and unforgettable memories.
          </p>
        </div>

        <div className="past-events-grid">
          {pastEvents.map(event => (
            <div key={event.id} className="past-event-card">
              <div className={`past-event-media-container ${event.type === 'image' ? 'image-container' : 'video-container'}`}>
                {event.type === 'video' ? (
                  <iframe
                    className="past-event-video"
                    src={`https://www.youtube.com/embed/${event.videoId}`}
                    title={event.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div className="past-event-image-wrapper">
                    <img
                      src={event.imageUrl}
                      alt={event.title}
                      className="past-event-image"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/800x450?text=Image+Not+Found'
                      }}
                    />
                    <div className="image-overlay">
                      <span className="image-badge">📸 Photo Gallery</span>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="past-event-content">
                <div className="past-event-header">
                  <h2 className="past-event-title">{event.title}</h2>
                  <div className="past-event-meta">
                    <span className="past-event-location">📍 {event.location}</span>
                    <span className="past-event-date">📅 {event.date}</span>
                    <span className="past-event-participants">👥 {event.participants} participants</span>
                  </div>
                </div>

                <p className="past-event-description">{event.description}</p>

                <div className="past-event-highlights">
                  <h4>Event Highlights:</h4>
                  <ul className="highlights-list">
                    {event.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="past-events-cta">
          <h2>Want to Be Part of the Next Event?</h2>
          <p>Check out our upcoming camps and secure your spot today!</p>
          <a href="/events" className="btn btn-primary btn-large">
            View Upcoming Events
          </a>
        </div>
      </div>
    </div>
  )
}

export default PastEvents

