# Cloudinary Quick Start Guide

## Step-by-Step Setup

### 1. Upload Images to Cloudinary

1. **Log in** to your Cloudinary account: https://cloudinary.com/console
2. Go to **Media Library**
3. Click **Upload** button
4. Create folder: `camp-2025` (or use existing folder)
5. **Upload all your images** (you can drag & drop multiple files)
6. Wait for uploads to complete

### 2. Get Your Cloud Name

1. In Cloudinary Dashboard, find your **Cloud Name** (shown at the top)
2. Example: `dxy8c8k9x` or `your-company-name`

### 3. Get Image Public IDs

After uploading, you'll see images in your Media Library. Each image has a **Public ID**.

**Example Public IDs:**
- `camp-2025/image1`
- `camp-2025/day1/photo1`
- `camp-2025/activities/group-photo`

**How to find Public ID:**
1. Click on an image in Media Library
2. Look for "Public ID" in the details panel
3. Copy it (it's usually the folder path + filename without extension)

### 4. Add Images to Your Project

Open `src/data/campImages.js` and add your image public IDs:

```javascript
export const campImages = [
  { publicId: 'camp-2025/image1', tags: ['day1', 'activities'] },
  { publicId: 'camp-2025/image2', tags: ['day1', 'group-photos'] },
  { publicId: 'camp-2025/image3', tags: ['day2', 'workshops'] },
  { publicId: 'camp-2025/image4', tags: ['day2', 'activities'] },
  // Add all your images here...
]
```

**Tips:**
- Use tags to organize images (e.g., `day1`, `day2`, `activities`, `group-photos`)
- Tags help with filtering in the gallery
- You can add multiple tags per image: `['day1', 'activities', 'group-photos']`

### 5. Configure Cloudinary (Optional - for optimization)

Create a `.env` file in your project root:

```env
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name_here
```

Replace `your_cloud_name_here` with your actual Cloud Name from Step 2.

**Note:** This is optional but recommended for better image optimization.

### 6. View Your Gallery

1. Start your dev server: `npm run dev`
2. Navigate to: http://localhost:5173/camp-gallery
3. Your images should appear!

## Quick Tips

### Bulk Adding Images

If you have many images, you can:

1. **Export from Cloudinary:**
   - Go to Media Library
   - Select all images
   - Use Cloudinary's export feature (if available)

2. **Use Cloudinary API:**
   - We can create a script to fetch all images automatically
   - Contact me if you need help with this

3. **Manual Entry:**
   - Copy public IDs from Media Library
   - Paste into `campImages.js` file

### Organizing Images

**By Day:**
```javascript
{ publicId: 'camp-2025/day1/photo1', tags: ['day1'] },
{ publicId: 'camp-2025/day2/photo1', tags: ['day2'] },
```

**By Activity:**
```javascript
{ publicId: 'camp-2025/image1', tags: ['activities'] },
{ publicId: 'camp-2025/image2', tags: ['workshops'] },
{ publicId: 'camp-2025/image3', tags: ['group-photos'] },
```

**Combined:**
```javascript
{ publicId: 'camp-2025/image1', tags: ['day1', 'activities', 'group-photos'] },
```

## Troubleshooting

### Images Not Showing?

1. **Check Public IDs:** Make sure they match exactly what's in Cloudinary
2. **Check Cloud Name:** Verify `.env` file has correct cloud name
3. **Check Browser Console:** Look for any error messages
4. **Verify Images:** Make sure images are uploaded and accessible in Cloudinary

### Images Loading Slowly?

- Images are automatically optimized by Cloudinary
- Thumbnails are used for the grid view
- Full-size images load when clicked

### Need Help?

See `CLOUDINARY_SETUP.md` for more detailed instructions.

