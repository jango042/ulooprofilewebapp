import { useState } from 'react'
import './Events.css'

const Events = () => {
  // Events data for Excel Youth Leadership Initiative programs
  const [events] = useState([
    {
      id: 1,
      title: "Aunty Uloma Youth Mentorship Hub 2026",
      location: "Multiple Locations",
      date: "January - November 2026",
      duration: "11 months",
      ageGroup: "Ages 10-24 | Boys & Girls",
      sessionFrequency: "2 sessions every month + Gender classes once a month",
      description: "A comprehensive mentorship program designed to help children, teenagers, and young adults understand who they are, grow in confidence, and walk boldly into their purpose. Through personalized mentorship sessions, we guide young people through identity, peer pressure, self-worth, decision-making, and spiritual growth.",
      topics: [
        "Understanding Yourself",
        "Emotional Health",
        "Creativity & Problem Solving",
        "Sexuality Foundations",
        "Digital Safety & Social Media",
        "Communication Skills",
        "Honesty & Responsibility",
        "Money & Responsibility"
      ],
      capacity: "Open",
      price: "₦100,000",
      borderPrice: "₦70,000",
      status: "open",
      program: "Aunty Uloma Mentorship Hub",
      bankDetails: {
        accountNumber: "0025441429",
        accountName: "LUMZY DYNAMICS LTD",
        bank: "STERLING BANK"
      },
      contact: {
        whatsapp: ["+2348032577828", "09157627347"],
        phone: ["+2348032577828", "09157627347"]
      },
      hasRegistration: true
    },
    {
      id: 2,
      title: "Girls Timeout with Aunty Uloma - Camping 2026",
      location: "Abuja",
      date: "March 31 - April 2, 2026",
      duration: "3 days camping",
      ageGroup: "Ages 10-23",
      description: "A specialized camping program designed specifically for girls, providing a safe space for open dialogue, mentorship, and empowerment. This is your moment to seize the opportunity! Focused on building confidence, character, and helping young women navigate the unique challenges they face while discovering their purpose.",
      topics: [
        "Identity & Purpose",
        "Emotional Intelligence",
        "Boundaries and Personal Safety",
        "Digital Life & Social Media Discipline",
        "Financial Wisdom",
        "Academic & Career Direction",
        "Navigating Change & Transition",
        "Leadership & Influence",
        "Friendships & Peer Pressure",
        "Healing From Family Wounds",
        "Body Image & Self-Worth",
        "Managing Stress & Anxiety",
        "Personal Holiness & Integrity",
        "Conflict Resolution",
        "Vision & Goal-Setting"
      ],
      capacity: "Limited",
      price: "₦50,000",
      status: "open",
      program: "Girls Timeout",
      venue: "Camping in serviced apartment in Abuja",
      bankDetails: {
        accountNumber: "0025441429",
        accountName: "LUMZY DUNAMIS CONCEPT LTD",
        bank: "STERLING BANK"
      },
      contact: {
        whatsapp: ["+2347015369588", "+2348032577828", "+2349157627347"],
        phone: ["+2347015369588", "+2348032577828", "+2349157627347"]
      },
      socialMedia: "@uloma4real",
      hasRegistration: true
    },
    {
      id: 3,
      title: "Excel Boot Camp 2026",
      location: "Abuja",
      date: "August 2026",
      duration: "5 days",
      description: "Our annual transformational boot camp for teenagers and young adults. Built on the vision of 2 Corinthians 8:7, raising young people who excel in faith, character, knowledge, and purpose. A life-changing experience that equips participants to fulfill their God-given potential.",
      topics: ["Identity Discovery", "Character Building", "Spiritual Growth", "Purpose Fulfillment", "Leadership Development"],
      capacity: 100,
      price: "Contact for Pricing",
      status: "open",
      program: "Excel Boot Camp"
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
                  {event.ageGroup && (
                    <div className="meta-item">
                      <span className="meta-label">Age Group:</span>
                      <span className="meta-value">{event.ageGroup}</span>
                    </div>
                  )}
                  {event.sessionFrequency && (
                    <div className="meta-item">
                      <span className="meta-label">Frequency:</span>
                      <span className="meta-value">{event.sessionFrequency}</span>
                    </div>
                  )}
                  {event.venue && (
                    <div className="meta-item">
                      <span className="meta-label">Venue:</span>
                      <span className="meta-value">{event.venue}</span>
                    </div>
                  )}
                </div>

                <p className="event-description">{event.description}</p>

                <div className="event-topics">
                  <h4>Featuring:</h4>
                  <div className="topics-list">
                    {event.topics.map((topic, index) => (
                      <span key={index} className="topic-tag">{topic}</span>
                    ))}
                  </div>
                </div>

                {/* Payment Information */}
                {event.bankDetails && (
                  <div className="payment-info">
                    <h4>Payment Details:</h4>
                    <div className="bank-details">
                      <p><strong>Bank:</strong> {event.bankDetails.bank}</p>
                      <p><strong>Account Name:</strong> {event.bankDetails.accountName}</p>
                      <p><strong>Account Number:</strong> {event.bankDetails.accountNumber}</p>
                    </div>
                  </div>
                )}

                {/* Contact Information */}
                {event.contact && (
                  <div className="contact-info">
                    <h4>Contact Us:</h4>
                    <div className="contact-details">
                      {event.contact.phone && event.contact.phone.map((phone, index) => (
                        <p key={index}>
                          <span className="whatsapp-icon">📱</span> {phone}
                        </p>
                      ))}
                    </div>
                    {event.socialMedia && (
                      <p className="social-media">
                        <strong>Follow us:</strong> {event.socialMedia}
                      </p>
                    )}
                  </div>
                )}
              </div>

              <div className="event-footer">
                <div className="event-price-section">
                  <div className="event-price">
                    {event.borderPrice ? (
                      <>
                        <div>Standard: {event.price}</div>
                        <div className="border-price">Borders: {event.borderPrice}</div>
                      </>
                    ) : (
                      <div>{event.price}</div>
                    )}
                  </div>
                </div>
                {event.hasRegistration && (
                  <button className="btn-register">Register Now</button>
                )}
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

