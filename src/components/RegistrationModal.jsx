import { useState } from 'react'
import emailjs from '@emailjs/browser'
import './RegistrationModal.css'

const RegistrationModal = ({ event, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    location: '',
    eventName: event?.title || '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' or 'error'

  if (!isOpen) return null

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // EmailJS configuration
    // Replace these with your actual EmailJS credentials
    const serviceID = 'YOUR_SERVICE_ID' // e.g., 'service_xxxxx'
    const templateID = 'YOUR_TEMPLATE_ID' // e.g., 'template_xxxxx'
    const publicKey = 'YOUR_PUBLIC_KEY' // e.g., 'xxxxxxxxxxxxx'

    // Check if credentials are configured
    if (serviceID === 'YOUR_SERVICE_ID' || templateID === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
      setSubmitStatus('error')
      setIsSubmitting(false)
      alert('Please configure your EmailJS credentials in RegistrationModal.jsx\n\nSee EMAILJS_SETUP.md for instructions.')
      return
    }

    try {
      // Send email using EmailJS
      await emailjs.send(
        serviceID,
        templateID,
        {
          to_name: 'Aunty Uloma',
          from_name: formData.fullName,
          from_email: formData.email,
          phone: formData.phone,
          age: formData.age,
          location: formData.location,
          event_name: formData.eventName,
          message: formData.message || 'Registration request',
          reply_to: formData.email,
        },
        publicKey
      )

      setSubmitStatus('success')
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          age: '',
          location: '',
          eventName: event?.title || '',
          message: ''
        })
        setTimeout(() => {
          onClose()
          setSubmitStatus(null)
        }, 2000)
      }, 2000)
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ×
        </button>
        
        <div className="modal-header">
          <h2>Register for {event?.title}</h2>
          <p>Fill out the form below to register for this event</p>
        </div>

        {submitStatus === 'success' && (
          <div className="alert alert-success">
            ✓ Registration submitted successfully! We'll contact you soon.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="alert alert-error">
            ✗ There was an error submitting your registration. Please try again or contact us directly.
          </div>
        )}

        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name *</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+234..."
              />
            </div>

            <div className="form-group">
              <label htmlFor="age">Age *</label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                min="10"
                max="24"
                placeholder="Age"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="location">Location/State *</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              placeholder="Enter your location or state"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Additional Message (Optional)</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Any additional information you'd like to share..."
            />
          </div>

          <div className="form-actions">
            <button
              type="button"
              className="btn btn-cancel"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Registration'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegistrationModal

