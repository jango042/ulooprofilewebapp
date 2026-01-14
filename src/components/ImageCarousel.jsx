import { useState, useEffect } from 'react'
import './ImageCarousel.css'

const ImageCarousel = ({ images, autoSlideInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, autoSlideInterval)

    return () => clearInterval(interval)
  }, [images.length, autoSlideInterval])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <button className="carousel-button carousel-button-prev" onClick={goToPrevious}>
          ‹
        </button>
        <div className="carousel-slides">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
              style={{
                backgroundImage: `url(${image.url})`,
                transform: `translateX(${(index - currentIndex) * 100}%)`
              }}
            >
              {image.caption && (
                <div className="carousel-caption">
                  <h3>{image.caption}</h3>
                </div>
              )}
            </div>
          ))}
        </div>
        <button className="carousel-button carousel-button-next" onClick={goToNext}>
          ›
        </button>
      </div>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageCarousel

