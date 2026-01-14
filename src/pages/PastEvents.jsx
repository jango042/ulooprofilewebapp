import { useState } from 'react'
import './PastEvents.css'

const PastEvents = () => {
  // Sample past events data with YouTube video IDs
  // Replace these with actual YouTube video IDs from your channel
  const [pastEvents] = useState([
    {
      id: 1,
      title: "Leadership Summit 2023",
      location: "Lagos",
      date: "June 2023",
      videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      description: "Highlights from our 2023 Leadership Summit featuring workshops, team activities, and inspiring keynote sessions.",
      participants: 48,
      highlights: ["Keynote speeches", "Team building exercises", "Leadership workshops", "Networking sessions"]
    },
    {
      id: 2,
      title: "Entrepreneurship Bootcamp 2023",
      location: "Abuja",
      date: "July 2023",
      videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      description: "Watch how participants developed their startup ideas and presented them to a panel of mentors.",
      participants: 42,
      highlights: ["Startup pitches", "Mentor sessions", "Business plan development", "Demo day"]
    },
    {
      id: 3,
      title: "Creative Problem Solving Workshop 2023",
      location: "Rivers",
      date: "August 2023",
      videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      description: "A comprehensive look at our design thinking workshop where students tackled real-world challenges.",
      participants: 45,
      highlights: ["Design thinking sessions", "Case study analysis", "Prototype development", "Final presentations"]
    },
    {
      id: 4,
      title: "Personal Development Intensive 2023",
      location: "Kano",
      date: "September 2023",
      videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      description: "Participants share their transformation journey and the skills they developed during this intensive program.",
      participants: 38,
      highlights: ["Goal setting workshops", "Mindfulness sessions", "Peer coaching", "Reflection activities"]
    },
    {
      id: 5,
      title: "Tech Innovation Camp 2023",
      location: "Ogun",
      date: "October 2023",
      videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      description: "From coding basics to app development - see how students built their first tech projects.",
      participants: 50,
      highlights: ["Coding workshops", "App development", "Tech demos", "Innovation challenges"]
    },
    {
      id: 6,
      title: "Social Impact Summit 2023",
      location: "Enugu",
      date: "November 2023",
      videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      description: "Watch how students developed and presented their social impact projects to community leaders.",
      participants: 40,
      highlights: ["Community projects", "Advocacy training", "Stakeholder meetings", "Impact presentations"]
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
              <div className="past-event-video-container">
                <iframe
                  className="past-event-video"
                  src={`https://www.youtube.com/embed/${event.videoId}`}
                  title={event.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
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

