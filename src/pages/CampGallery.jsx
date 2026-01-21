import { useState, useEffect } from 'react'
import { formatImagesForGallery } from '../utils/cloudinary'
import { campImages } from '../data/campImages'
import './CampGallery.css'

const CampGallery = () => {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState(null)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    // Load images from campImages data file
    if (campImages.length > 0) {
      const formattedImages = formatImagesForGallery(
        campImages.map(img => ({ 
          public_id: img.publicId, 
          tags: img.tags || [],
          width: img.width || 1920,
          height: img.height || 1080,
          format: img.format || 'jpg',
          bytes: img.bytes || 0,
          created_at: img.createdAt || new Date().toISOString()
        }))
      )
      setImages(formattedImages)
      setLoading(false)
    } else {
      // No images configured yet
      setLoading(false)
    }
  }, [])

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.tags.includes(filter))

  const openLightbox = (image) => {
    setSelectedImage(image)
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden'
  }
  
  useEffect(() => {
    // Handle keyboard navigation
    const handleKeyPress = (e) => {
      if (!selectedImage) return
      
      if (e.key === 'Escape') {
        closeLightbox()
      } else if (e.key === 'ArrowLeft') {
        navigateImage('prev')
      } else if (e.key === 'ArrowRight') {
        navigateImage('next')
      }
    }
    
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [selectedImage])
  
  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }


  const navigateImage = (direction) => {
    if (!selectedImage) return
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id)
    let newIndex
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length
    }
    
    setSelectedImage(filteredImages[newIndex])
  }

  // Get unique tags for filtering
  const allTags = [...new Set(images.flatMap(img => img.tags))]

  return (
    <div className="camp-gallery-page">
      <div className="gallery-hero">
        <div className="container">
          <h1>Excel Boot Camp 2025 Gallery</h1>
          <p>Relive the amazing moments from our transformational camp</p>
        </div>
      </div>

      <div className="container">
        {loading ? (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Loading images...</p>
          </div>
        ) : images.length === 0 ? (
          <div className="empty-state">
            <h2>No Images Yet</h2>
            <p>
              Images will appear here once you upload them to Cloudinary and add the public IDs.
              <br />
              See <strong>CLOUDINARY_SETUP.md</strong> for instructions.
            </p>
          </div>
        ) : (
          <>
            {/* Filter Section */}
            {allTags.length > 0 && (
              <div className="filter-section">
                <button
                  className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                  onClick={() => setFilter('all')}
                >
                  All ({images.length})
                </button>
                {allTags.map(tag => (
                  <button
                    key={tag}
                    className={`filter-btn ${filter === tag ? 'active' : ''}`}
                    onClick={() => setFilter(tag)}
                  >
                    {tag} ({images.filter(img => img.tags.includes(tag)).length})
                  </button>
                ))}
              </div>
            )}

            {/* Gallery Grid */}
            <div className="gallery-grid">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className="gallery-item"
                  onClick={() => openLightbox(image)}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <img
                    src={image.thumbnail}
                    alt={`Camp 2025 - Image ${index + 1}`}
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x400?text=Image+Not+Found'
                    }}
                  />
                  <div className="gallery-item-overlay">
                    <span className="view-icon">👁️</span>
                  </div>
                  <div className="gallery-item-number">
                    #{index + 1}
                  </div>
                </div>
              ))}
            </div>

            <div className="gallery-info">
              <p>Showing {filteredImages.length} of {images.length} images</p>
              <div className="gallery-stats">
                <div className="stat-badge">
                  <div className="stat-number">{images.length}</div>
                  <div className="stat-label">Total Images</div>
                </div>
                <div className="stat-badge">
                  <div className="stat-number">{filteredImages.length}</div>
                  <div className="stat-label">Displayed</div>
                </div>
                {allTags.length > 0 && (
                  <div className="stat-badge">
                    <div className="stat-number">{allTags.length}</div>
                    <div className="stat-label">Categories</div>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>×</button>
          <button 
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation()
              navigateImage('prev')
            }}
          >
            ‹
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.url}
              alt="Camp 2025"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/1200x800?text=Image+Not+Found'
              }}
            />
            <div className="lightbox-info">
              <div className="lightbox-counter">
                Image {filteredImages.findIndex(img => img.id === selectedImage.id) + 1} of {filteredImages.length}
              </div>
            </div>
          </div>
          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation()
              navigateImage('next')
            }}
          >
            ›
          </button>
        </div>
      )}
    </div>
  )
}

export default CampGallery

