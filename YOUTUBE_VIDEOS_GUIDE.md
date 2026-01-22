# Adding YouTube Videos to Gallery

## Quick Guide

Your gallery now supports both **images** and **YouTube videos**! Here's how to add videos:

## Adding Videos

Open `src/data/campImages.js` and add videos using any of these formats:

### Option 1: Full YouTube URL
```javascript
{ youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', tags: ['highlights', 'day1'], title: 'Camp Highlights Day 1' }
```

### Option 2: Short YouTube URL
```javascript
{ youtubeUrl: 'https://youtu.be/dQw4w9WgXcQ', tags: ['highlights'] }
```

### Option 3: Just Video ID
```javascript
{ youtubeUrl: 'dQw4w9WgXcQ', tags: ['highlights'] }
```

## Example Mixed Gallery

```javascript
export const campImages = [
  // Images
  { publicId: 'https://res.cloudinary.com/.../image1.jpg', tags: ['day1'] },
  { publicId: 'https://res.cloudinary.com/.../image2.jpg', tags: ['day1'] },
  
  // Videos
  { youtubeUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_1', tags: ['highlights', 'day1'], title: 'Day 1 Highlights' },
  { youtubeUrl: 'VIDEO_ID_2', tags: ['highlights', 'day2'], title: 'Day 2 Highlights' },
  
  // More images...
]
```

## Video Features

- ✅ **Automatic thumbnail** - YouTube thumbnails are fetched automatically
- ✅ **Play button** - Animated play button appears on hover
- ✅ **Video badge** - Pink "Video" badge to distinguish from images
- ✅ **Full-screen playback** - Videos play in the lightbox with full controls
- ✅ **Keyboard navigation** - Arrow keys to navigate between items

## Getting YouTube Video ID

1. Go to your YouTube video
2. Copy the URL from the address bar
3. The video ID is the part after `v=` in the URL
   - Example: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
   - Video ID: `dQw4w9WgXcQ`

## Tips

- **Mix images and videos** - They'll display seamlessly together
- **Use tags** - Organize videos with tags like `['highlights', 'day1', 'testimonials']`
- **Add titles** - Optional title field for better organization
- **Filter by tags** - Videos can be filtered just like images

## Visual Differences

- **Videos** have a pink "Video" badge and animated play button
- **Images** have an eye icon on hover
- Both use the same beautiful grid layout!

