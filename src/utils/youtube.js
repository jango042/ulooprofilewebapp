/**
 * YouTube Utility Functions
 * Extract video ID and generate embed URLs from YouTube links
 */

/**
 * Extract YouTube video ID from various YouTube URL formats
 * @param {string} url - YouTube URL (full URL or just video ID)
 * @returns {string|null} - YouTube video ID or null if invalid
 */
export const extractYouTubeId = (url) => {
  if (!url) return null
  
  // If it's already just an ID (no URL)
  if (!url.includes('youtube.com') && !url.includes('youtu.be') && !url.includes('http')) {
    return url.length === 11 ? url : null
  }
  
  let videoId = null
  
  // Handle different YouTube URL formats
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/watch\?.*v=([^&\n?#]+)/,
    /youtu\.be\/([^?\n#]+)/
  ]
  
  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match && match[1]) {
      videoId = match[1]
      break
    }
  }
  
  return videoId
}

/**
 * Generate YouTube embed URL
 * @param {string} videoId - YouTube video ID
 * @param {object} options - Embed options
 * @returns {string} - YouTube embed URL
 */
export const getYouTubeEmbedUrl = (videoId, options = {}) => {
  if (!videoId) return ''
  
  const {
    autoplay = 0,
    controls = 1,
    rel = 0,
    modestbranding = 1,
    loop = 0,
    playlist = ''
  } = options
  
  const params = new URLSearchParams({
    autoplay: autoplay,
    controls: controls,
    rel: rel,
    modestbranding: modestbranding,
    loop: loop,
    ...(playlist && { playlist })
  })
  
  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`
}

/**
 * Generate YouTube thumbnail URL
 * @param {string} videoId - YouTube video ID
 * @param {string} quality - Thumbnail quality: 'default', 'mqdefault', 'hqdefault', 'sddefault', 'maxresdefault'
 * @returns {string} - Thumbnail URL
 */
export const getYouTubeThumbnail = (videoId, quality = 'hqdefault') => {
  if (!videoId) return ''
  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`
}

/**
 * Check if a URL is a YouTube video
 * @param {string} url - URL to check
 * @returns {boolean} - True if YouTube URL
 */
export const isYouTubeUrl = (url) => {
  if (!url) return false
  return url.includes('youtube.com') || url.includes('youtu.be') || extractYouTubeId(url) !== null
}

/**
 * Format media item for gallery (handles both images and videos)
 * @param {object} item - Media item with publicId or youtubeUrl
 * @returns {object} - Formatted item with type and appropriate URLs
 */
export const formatMediaItem = (item) => {
  const youtubeId = item.youtubeUrl ? extractYouTubeId(item.youtubeUrl) : null
  
  if (youtubeId) {
    return {
      ...item,
      type: 'video',
      youtubeId: youtubeId,
      thumbnail: getYouTubeThumbnail(youtubeId, 'maxresdefault'),
      embedUrl: getYouTubeEmbedUrl(youtubeId),
      url: item.youtubeUrl
    }
  }
  
  return {
    ...item,
    type: 'image'
  }
}

