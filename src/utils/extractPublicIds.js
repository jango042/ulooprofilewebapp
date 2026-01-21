/**
 * Helper utility to extract Public IDs from Cloudinary URLs
 * 
 * Use this to convert full Cloudinary URLs to public IDs
 */

/**
 * Extract public ID from a Cloudinary URL
 * @param {string} url - Full Cloudinary URL
 * @returns {string} - Public ID
 * 
 * Example:
 * Input: "https://res.cloudinary.com/jango042/image/upload/v1768998239/excel_camp_2025/DSC_1441_azvyn5.jpg"
 * Output: "excel_camp_2025/DSC_1441_azvyn5"
 */
export const extractPublicIdFromUrl = (url) => {
  if (!url) return ''
  
  try {
    // Pattern: /upload/v[numbers]/public_id.extension
    // Or: /upload/public_id.extension (no version)
    const match = url.match(/\/upload\/(?:v\d+\/)?(.+?)(?:\.[^.]+)?$/)
    if (match && match[1]) {
      return match[1]
    }
    
    // If it's already a public ID (no http/https), return as-is
    if (!url.includes('http')) {
      return url
    }
    
    return ''
  } catch (error) {
    console.error('Error extracting public ID:', error)
    return ''
  }
}

/**
 * Extract public IDs from an array of URLs
 * @param {string[]} urls - Array of Cloudinary URLs
 * @returns {Array} - Array of objects with url and publicId
 */
export const extractPublicIdsFromUrls = (urls) => {
  return urls.map(url => ({
    url,
    publicId: extractPublicIdFromUrl(url)
  }))
}

/**
 * Generate campImages array from URLs
 * @param {string[]} urls - Array of Cloudinary URLs
 * @param {object} defaultTags - Default tags to apply
 * @returns {string} - JavaScript code for campImages.js
 */
export const generateCampImagesCode = (urls, defaultTags = []) => {
  const publicIds = urls.map(url => extractPublicIdFromUrl(url)).filter(id => id)
  
  const code = `export const campImages = [\n` +
    publicIds.map((publicId, index) => {
      const tags = defaultTags.length > 0 ? JSON.stringify(defaultTags) : '[]'
      return `  { publicId: '${publicId}', tags: ${tags} },`
    }).join('\n') +
    `\n]`
  
  return code
}

