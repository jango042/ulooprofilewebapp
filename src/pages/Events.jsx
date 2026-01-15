import { useState } from 'react'
import './Events.css'

const Events = () => {
  // Events data for Excel Youth Leadership Initiative programs
  const [events] = useState([
    {
      id: 1,
      title: "Excel Boot Camp 2024",
      location: "Abuja",
      date: "August 2024",
      duration: "5 days",
      description: "Our annual transformational boot camp for teenagers and young adults. Built on the vision of 2 Corinthians 8:7, raising young people who excel in faith, character, knowledge, and purpose. A life-changing experience that equips participants to fulfill their God-given potential.",
      topics: ["Identity Discovery", "Character Building", "Spiritual Growth", "Purpose Fulfillment", "Leadership Development"],
      capacity: 100,
      price: "Contact for Pricing",
      status: "open",
      program: "Excel Boot Camp"
    },
    {
      id: 2,
      title: "Aunty Uloma Mentorship Hub - Cohort 2024",
      location: "Multiple Locations",
      date: "Ongoing",
      duration: "12 months",
      description: "A global mentorship platform designed to help children, teenagers, and young adults understand who they are, grow in confidence, and walk boldly into their purpose. Through personalized mentorship sessions, we guide young people through identity, peer pressure, self-worth, decision-making, and spiritual growth.",
      topics: ["Personal Mentorship", "Identity Discovery", "Decision Making", "Self-Worth", "Spiritual Guidance"],
      capacity: 50,
      price: "Contact for Pricing",
      status: "open",
      program: "Aunty Uloma Mentorship Hub"
    },
    {
      id: 3,
      title: "Girls Timeout with Aunty Uloma 2024",
      location: "Abuja",
      date: "Quarterly Sessions",
      duration: "1 day per session",
      description: "A specialized program designed specifically for girls, providing a safe space for open dialogue, mentorship, and empowerment. Focused on building confidence, character, and helping young women navigate the unique challenges they face while discovering their purpose.",
      topics: ["Girls Empowerment", "Confidence Building", "Character Development", "Purpose Discovery", "Peer Support"],
      capacity: 30,
      price: "Contact for Pricing",
      status: "open",
      program: "Girls Timeout"
    },
    {
      id: 4,
      title: "Excel Boot Camp - Lagos Edition",
      location: "Lagos",
      date: "December 2024",
      duration: "5 days",
      description: "A special edition of our transformational boot camp in Lagos. Empowering teenagers and young adults to excel in faith, character, knowledge, and purpose. Join us for an intensive week of growth, mentorship, and transformation.",
      topics: ["Faith Development", "Character Excellence", "Knowledge Acquisition", "Purpose Clarity"],
      capacity: 80,
      price: "Contact for Pricing",
      status: "open",
      program: "Excel Boot Camp"
    },
    {
      id: 5,
      title: "Aunty Uloma Mentorship Hub - Online Sessions",
      location: "Online",
      date: "Monthly",
      duration: "Ongoing",
      description: "Virtual mentorship sessions available for young people across Nigeria and beyond. Access personalized guidance, mentorship, and support from anywhere. Perfect for those who cannot attend in-person sessions.",
      topics: ["Virtual Mentorship", "Online Coaching", "Global Access", "Flexible Scheduling"],
      capacity: 100,
      price: "Contact for Pricing",
      status: "open",
      program: "Aunty Uloma Mentorship Hub"
    },
    {
      id: 6,
      title: "Girls Timeout - Port Harcourt Edition",
      location: "Rivers",
      date: "October 2024",
      duration: "1 day",
      description: "A special edition of Girls Timeout in Port Harcourt. Empowering young women in Rivers State to discover their identity, build confidence, and walk in their purpose. A day of mentorship, empowerment, and sisterhood.",
      topics: ["Girls Empowerment", "Identity Discovery", "Confidence Building", "Purpose Clarity"],
      capacity: 40,
      price: "Contact for Pricing",
      status: "open",
      program: "Girls Timeout"
    }
  ])

  const [selectedState, setSelectedState] = useState('all')

  const states = ['all', ...new Set(events.map(event => event.location))]

  const filteredEvents = selectedState === 'all' 
    ? events 
    : events.filter(event => event.location === selectedState)

  return (
    <div className="events-page">
      <div className="events-hero">
        <div className="container">
          <h1>Upcoming Events & Programs</h1>
          <p>Join us for transformative mentorship and leadership experiences across Nigeria</p>
        </div>
      </div>

      <div className="container">
        {/* Filter Section */}
        <div className="filter-section">
          <h2>Filter by Location</h2>
          <div className="filter-buttons">
            {states.map(state => (
              <button
                key={state}
                className={`filter-btn ${selectedState === state ? 'active' : ''}`}
                onClick={() => setSelectedState(state)}
              >
                {state === 'all' ? 'All States' : state}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="events-grid">
          {filteredEvents.map(event => (
            <div key={event.id} className="event-card">
              <div className="event-header">
                <span className={`event-status ${event.status}`}>
                  {event.status === 'open' ? 'Open for Registration' : 'Full'}
                </span>
                <h2 className="event-title">{event.title}</h2>
                <div className="event-location">
                  <span className="location-icon">📍</span>
                  {event.location}
                </div>
              </div>
              
              <div className="event-body">
                <div className="event-meta">
                  <div className="meta-item">
                    <span className="meta-label">Date:</span>
                    <span className="meta-value">{event.date}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Duration:</span>
                    <span className="meta-value">{event.duration}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Capacity:</span>
                    <span className="meta-value">{event.capacity} participants</span>
                  </div>
                </div>

                <p className="event-description">{event.description}</p>

                <div className="event-topics">
                  <h4>Key Topics:</h4>
                  <div className="topics-list">
                    {event.topics.map((topic, index) => (
                      <span key={index} className="topic-tag">{topic}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="event-footer">
                <div className="event-price">{event.price}</div>
                <button className="btn-register">Register Now</button>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="no-events">
            <p>No events found for the selected location.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Events

