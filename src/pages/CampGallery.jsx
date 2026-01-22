import { useState, useEffect } from 'react'
import { formatImagesForGallery } from '../utils/cloudinary'
import { formatMediaItem, isYouTubeUrl, extractYouTubeId, getYouTubeThumbnail, getYouTubeEmbedUrl } from '../utils/youtube'
import { campImages } from '../data/campImages'
import './CampGallery.css'

const CampGallery = () => {
  const [mediaItems, setMediaItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedItem, setSelectedItem] = useState(null)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    // Load media items (images and videos) from campImages data file
    if (campImages.length > 0) {
      const formattedItems = campImages.map((item, index) => {
        // Check if it's a YouTube video
        if (item.youtubeUrl || isYouTubeUrl(item.publicId)) {
          const youtubeUrl = item.youtubeUrl || item.publicId
          const youtubeId = extractYouTubeId(youtubeUrl)
          
          return {
            id: `video-${index}`,
            type: 'video',
            youtubeId: youtubeId,
            youtubeUrl: youtubeUrl,
            thumbnail: getYouTubeThumbnail(youtubeId, 'maxresdefault'),
            embedUrl: getYouTubeEmbedUrl(youtubeId),
            url: youtubeUrl,
            tags: item.tags || [],
            title: item.title || `Camp Video ${index + 1}`
          }
        } else {
          // It's an image
          const formatted = formatImagesForGallery([{
            public_id: item.publicId,
            tags: item.tags || [],
            width: item.width || 1920,
            height: item.height || 1080,
            format: item.format || 'jpg',
            bytes: item.bytes || 0,
            created_at: item.createdAt || new Date().toISOString()
          }])
          
          return formatted[0] || {
            id: `image-${index}`,
            type: 'image',
            publicId: item.publicId,
            thumbnail: item.publicId,
            url: item.publicId,
            tags: item.tags || []
          }
        }
      })
      
      setMediaItems(formattedItems)
      setLoading(false)
    } else {
      setLoading(false)
    }
  }, [])

  const filteredItems = filter === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.tags.includes(filter))

  const openLightbox = (item) => {
    setSelectedItem(item)
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden'
  }
  
  useEffect(() => {
    if (!selectedItem) return
    
    // Handle keyboard navigation
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') {
        closeLightbox()
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id)
        const newIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length
        setSelectedItem(filteredItems[newIndex])
      } else if (e.key === 'ArrowRight') {
        const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id)
        const newIndex = (currentIndex + 1) % filteredItems.length
        setSelectedItem(filteredItems[newIndex])
      }
    }
    
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [selectedItem, filteredItems])
  
  const closeLightbox = () => {
    setSelectedItem(null)
    document.body.style.overflow = 'unset'
  }

  const navigateItem = (direction) => {
    if (!selectedItem) return
    
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id)
    let newIndex
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredItems.length
    } else {
      newIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length
    }
    
    setSelectedItem(filteredItems[newIndex])
  }

  // Get unique tags for filtering
  const allTags = [...new Set(mediaItems.flatMap(item => item.tags))]
  
  // Count media types
  const imageCount = mediaItems.filter(item => item.type === 'image').length
  const videoCount = mediaItems.filter(item => item.type === 'video').length

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
            <p>Loading gallery...</p>
          </div>
        ) : mediaItems.length === 0 ? (
          <div className="empty-state">
            <h2>No Media Yet</h2>
            <p>
              Images and videos will appear here once you add them.
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
                  All ({mediaItems.length})
                </button>
                {allTags.map(tag => (
                  <button
                    key={tag}
                    className={`filter-btn ${filter === tag ? 'active' : ''}`}
                    onClick={() => setFilter(tag)}
                  >
                    {tag} ({mediaItems.filter(item => item.tags.includes(tag)).length})
                  </button>
                ))}
              </div>
            )}

            {/* Gallery Grid */}
            <div className="gallery-grid">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`gallery-item ${item.type === 'video' ? 'gallery-item-video' : ''}`}
                  onClick={() => openLightbox(item)}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {item.type === 'video' ? (
                    <>
                      <img
                        src={item.thumbnail}
                        alt={item.title || `Camp 2025 - Video ${index + 1}`}
                        loading="lazy"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/400x400?text=Video+Not+Found'
                        }}
                      />
                      <div className="gallery-item-overlay">
                        <div className="video-play-button">
                          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="40" cy="40" r="40" fill="rgba(255, 255, 255, 0.9)"/>
                            <path d="M32 24L32 56L56 40L32 24Z" fill="#6366f1"/>
                          </svg>
                        </div>
                      </div>
                      <div className="gallery-item-badge video-badge">
                        <span>▶</span> Video
                      </div>
                    </>
                  ) : (
                    <>
                      <img
                        src={item.thumbnail}
                        alt={`Camp 2025 - Image ${index + 1}`}
                        loading="lazy"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/400x400?text=Image+Not+Found'
                        }}
                      />
                      <div className="gallery-item-overlay">
                        <span className="view-icon">👁️</span>
                      </div>
                    </>
                  )}
                  <div className="gallery-item-number">
                    #{index + 1}
                  </div>
                </div>
              ))}
            </div>

            <div className="gallery-info">
              <p>Showing {filteredItems.length} of {mediaItems.length} items</p>
              <div className="gallery-stats">
                <div className="stat-badge">
                  <div className="stat-number">{mediaItems.length}</div>
                  <div className="stat-label">Total Items</div>
                </div>
                <div className="stat-badge">
                  <div className="stat-number">{imageCount}</div>
                  <div className="stat-label">Photos</div>
                </div>
                <div className="stat-badge">
                  <div className="stat-number">{videoCount}</div>
                  <div className="stat-label">Videos</div>
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
      {selectedItem && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>×</button>
          <button 
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation()
              navigateItem('prev')
            }}
          >
            ‹
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            {selectedItem.type === 'video' ? (
              <div className="lightbox-video-container">
                <iframe
                  src={selectedItem.embedUrl}
                  title={selectedItem.title || 'Camp 2025 Video'}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="lightbox-video"
                ></iframe>
              </div>
            ) : (
              <img
                src={selectedItem.url}
                alt="Camp 2025"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/1200x800?text=Image+Not+Found'
                }}
              />
            )}
            <div className="lightbox-info">
              <div className="lightbox-counter">
                {selectedItem.type === 'video' ? 'Video' : 'Image'} {filteredItems.findIndex(item => item.id === selectedItem.id) + 1} of {filteredItems.length}
              </div>
            </div>
          </div>
          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation()
              navigateItem('next')
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

