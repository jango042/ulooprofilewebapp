import { useState } from 'react'
import './Events.css'

const Events = () => {
  // Sample events data - in a real app, this would come from an API
  const [events] = useState([
    {
      id: 1,
      title: "Leadership Summit 2024",
      location: "Lagos",
      date: "June 15-20, 2024",
      duration: "5 days",
      description: "An intensive leadership development program focusing on communication, team building, and strategic thinking. Perfect for students looking to enhance their leadership capabilities.",
      topics: ["Public Speaking", "Team Dynamics", "Strategic Planning", "Conflict Resolution"],
      capacity: 50,
      price: "₦450,000",
      status: "open"
    },
    {
      id: 2,
      title: "Entrepreneurship Bootcamp",
      location: "Abuja",
      date: "July 10-14, 2024",
      duration: "4 days",
      description: "Learn the fundamentals of entrepreneurship through hands-on workshops, mentorship sessions, and real-world business challenges. Build your own startup idea from scratch.",
      topics: ["Business Planning", "Marketing", "Finance Basics", "Pitching"],
      capacity: 40,
      price: "₦420,000",
      status: "open"
    },
    {
      id: 3,
      title: "Creative Problem Solving Workshop",
      location: "Rivers",
      date: "August 5-9, 2024",
      duration: "5 days",
      description: "Develop critical thinking and creative problem-solving skills through design thinking methodologies, case studies, and collaborative projects.",
      topics: ["Design Thinking", "Innovation", "Analytical Skills", "Collaboration"],
      capacity: 45,
      price: "₦440,000",
      status: "open"
    },
    {
      id: 4,
      title: "Personal Development Intensive",
      location: "Kano",
      date: "September 12-16, 2024",
      duration: "4 days",
      description: "Focus on personal growth, self-awareness, goal setting, and building resilience. Transform your mindset and unlock your potential.",
      topics: ["Self-Awareness", "Goal Setting", "Resilience", "Time Management"],
      capacity: 35,
      price: "₦380,000",
      status: "open"
    },
    {
      id: 5,
      title: "Tech Innovation Camp",
      location: "Ogun",
      date: "October 20-25, 2024",
      duration: "5 days",
      description: "Explore technology, coding, and innovation in a collaborative environment. No prior experience required - just curiosity and enthusiasm.",
      topics: ["Coding Basics", "App Development", "AI & Machine Learning", "Tech Ethics"],
      capacity: 50,
      price: "₦480,000",
      status: "open"
    },
    {
      id: 6,
      title: "Social Impact Summit",
      location: "Enugu",
      date: "November 8-12, 2024",
      duration: "4 days",
      description: "Learn how to create positive change in your community. Work on real social impact projects and develop skills in advocacy and community organizing.",
      topics: ["Social Justice", "Community Organizing", "Advocacy", "Project Management"],
      capacity: 40,
      price: "₦420,000",
      status: "open"
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
          <h1>Upcoming Events & Camps</h1>
          <p>Join us for transformative learning experiences across Nigeria</p>
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

