/**
 * Cloudinary Utility Functions
 * 
 * This file contains helper functions to interact with Cloudinary
 * for fetching and displaying camp images.
 */

// Cloudinary configuration
// These will be set from environment variables
const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'jango042'

/**
 * Extract public ID from a full Cloudinary URL
 * @param {string} fullUrl - Full Cloudinary URL
 * @returns {string} - Public ID
 * 
 * Example:
 * Input: "https://res.cloudinary.com/jango042/image/upload/v1768998239/excel_camp_2025/DSC_1441_azvyn5.jpg"
 * Output: "excel_camp_2025/DSC_1441_azvyn5"
 */
export const extractPublicId = (fullUrl) => {
  if (!fullUrl) return ''
  
  // Remove version number and file extension
  const match = fullUrl.match(/\/upload\/(?:v\d+\/)?(.+?)(?:\.[^.]+)?$/)
  if (match && match[1]) {
    return match[1]
  }
  
  // If already a public ID (no full URL), return as-is
  return fullUrl
}

/**
 * Build Cloudinary image URL with transformations
 * @param {string} publicId - The public ID of the image (or full URL - will be extracted)
 * @param {object} options - Transformation options
 * @returns {string} - Complete Cloudinary URL
 * 
 * Recommended formats:
 * - Thumbnail (grid): { width: 400, height: 400, crop: 'fill', quality: 'auto' }
 * - Full size (lightbox): { quality: 'auto', format: 'auto' } or no options
 */
export const getCloudinaryUrl = (publicId, options = {}) => {
  // Extract public ID if full URL provided
  const cleanPublicId = publicId.includes('cloudinary.com') 
    ? extractPublicId(publicId) 
    : publicId

  if (!CLOUD_NAME) {
    console.warn('Cloudinary Cloud Name not configured')
    return publicId // Return as-is if not configured
  }

  const {
    width,
    height,
    crop = 'fill',
    quality = 'auto',
    format = 'auto',
    ...otherOptions
  } = options

  let transformations = []

  if (width || height) {
    transformations.push(`w_${width || 'auto'}`)
    transformations.push(`h_${height || 'auto'}`)
    transformations.push(`c_${crop}`)
  }

  transformations.push(`q_${quality}`)
  transformations.push(`f_${format}`)

  // Add other transformations
  Object.entries(otherOptions).forEach(([key, value]) => {
    transformations.push(`${key}_${value}`)
  })

  const transformString = transformations.length > 0 
    ? transformations.join(',') + '/' 
    : ''

  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transformString}${cleanPublicId}`
}

/**
 * Fetch images from Cloudinary by folder
 * Note: This requires Cloudinary API access (server-side recommended)
 * For client-side, use a pre-generated list of image URLs
 * 
 * @param {string} folder - Folder path in Cloudinary
 * @param {number} maxResults - Maximum number of results
 * @returns {Promise<Array>} - Array of image objects
 */
export const fetchCloudinaryImages = async (folder = 'camp-2025', maxResults = 100) => {
  // This function should ideally run server-side
  // For client-side, we'll use a static list or API endpoint
  
  if (!CLOUD_NAME) {
    console.warn('Cloudinary not configured')
    return []
  }

  // Client-side approach: Use Cloudinary's resource list API
  // Note: This requires proper CORS setup and may need authentication
  try {
    const response = await fetch(
      `https://res.cloudinary.com/${CLOUD_NAME}/image/list/${folder}.json?max_results=${maxResults}`
    )
    
    if (!response.ok) {
      throw new Error('Failed to fetch images')
    }
    
    const data = await response.json()
    return data.resources || []
  } catch (error) {
    console.error('Error fetching Cloudinary images:', error)
    return []
  }
}

/**
 * Generate responsive image URLs for different screen sizes
 * @param {string} publicId - The public ID of the image (or full URL)
 * @returns {object} - Object with srcSet URLs
 * 
 * Use:
 * - thumbnail: For gallery grid (small, fast loading)
 * - small/medium: For responsive images
 * - original: For lightbox/full-size view (no transformations)
 */
export const getResponsiveImageUrls = (publicId) => {
  return {
    thumbnail: getCloudinaryUrl(publicId, { width: 400, height: 400, crop: 'fill', quality: 'auto' }),
    small: getCloudinaryUrl(publicId, { width: 600, height: 600, crop: 'fill', quality: 'auto' }),
    medium: getCloudinaryUrl(publicId, { width: 1200, height: 1200, crop: 'limit', quality: 'auto' }),
    large: getCloudinaryUrl(publicId, { width: 1920, height: 1920, crop: 'limit', quality: 'auto' }),
    original: getCloudinaryUrl(publicId, { quality: 'auto', format: 'auto' }) // Full size, optimized
  }
}

/**
 * Create a data structure for gallery images
 * @param {Array} images - Array of image objects from Cloudinary
 * @returns {Array} - Formatted array for gallery component
 */
export const formatImagesForGallery = (images) => {
  return images.map((img, index) => {
    // Handle both public_id (from API) and publicId (from data file)
    // Also handle full URLs - extract public ID automatically
    const rawPublicId = img.public_id || img.publicId || ''
    const cleanPublicId = rawPublicId.includes('cloudinary.com') 
      ? extractPublicId(rawPublicId) 
      : rawPublicId
    
    return {
      id: cleanPublicId || `img-${index}`,
      publicId: cleanPublicId,
      url: getCloudinaryUrl(cleanPublicId, { quality: 'auto', format: 'auto' }),
      thumbnail: getCloudinaryUrl(cleanPublicId, { width: 400, height: 400, crop: 'fill', quality: 'auto' }),
      width: img.width,
      height: img.height,
      format: img.format,
      bytes: img.bytes,
      createdAt: img.created_at || img.createdAt,
      tags: img.tags || []
    }
  })
}

