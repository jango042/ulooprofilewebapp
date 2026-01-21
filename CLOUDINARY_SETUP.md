# Cloudinary Setup Guide for Camp 2025 Images

## Step 1: Upload Images to Cloudinary

### Option A: Using Cloudinary Dashboard (Web Interface)
1. Log in to your Cloudinary account: https://cloudinary.com/console
2. Go to **Media Library** in the left sidebar
3. Click **Upload** button (top right)
4. Create a folder structure:
   - Create a folder named `camp-2025` or `excel-camp-2025`
   - You can organize images into subfolders if needed (e.g., `camp-2025/day1`, `camp-2025/day2`)
5. Upload all your images (you can drag and drop multiple files)
6. Wait for uploads to complete

### Option B: Using Cloudinary Upload Widget (Recommended for Bulk Upload)
1. Go to **Media Library** → **Upload**
2. Use the **Advanced Upload** option
3. Enable **Auto-tagging** and **Moderation** if needed
4. Set upload preset (use default or create one)
5. Upload images in batches

### Option C: Using Cloudinary CLI (For Developers)
```bash
npm install -g cloudinary-cli
cloudinary config
# Enter your API credentials when prompted
cloudinary upload_dir ./camp-2025-images --folder camp-2025
```

## Step 2: Get Your Cloudinary Credentials

1. Go to **Dashboard** in Cloudinary console
2. Find your **Cloud Name** (displayed at the top)
3. Go to **Settings** → **Security**
4. Note your **API Key** and **API Secret** (keep secret secure!)

## Step 3: Organize Images with Tags/Folders

For easy retrieval, tag your images:
- Tag all camp images with: `camp-2025`
- You can add additional tags like: `day1`, `day2`, `activities`, `group-photos`, etc.

Or organize by folder:
- `camp-2025/day1/`
- `camp-2025/day2/`
- `camp-2025/activities/`
- `camp-2025/group-photos/`

## Step 4: Get Image URLs

### Method 1: Get URLs from Media Library
1. Go to **Media Library**
2. Click on any image
3. Copy the **URL** from the details panel
4. Format: `https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/v1234567890/camp-2025/image1.jpg`

### Method 2: Use Cloudinary API to List Images
We'll create a script to fetch all images automatically (see below)

### Method 3: Export Image List
1. In Media Library, select all images
2. Use Cloudinary's export feature (if available)
3. Or use the API to get a list

## Step 5: Create a JSON File with Image URLs

You can either:
- **Option A**: Manually create a JSON file with image URLs
- **Option B**: Use Cloudinary API to fetch images automatically (we'll set this up)

## Step 6: Install Cloudinary SDK (Optional - for API access)

```bash
npm install cloudinary
```

## Step 7: Create Environment Variables

Create a `.env` file in your project root:
```env
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_API_KEY=your_api_key
VITE_CLOUDINARY_API_SECRET=your_api_secret
```

**Note:** For React/Vite, prefix with `VITE_` to expose to client-side code.

## Step 8: Fetch Images Using Cloudinary API

We'll create a utility function to fetch images from your Cloudinary account.

## Quick Start Checklist

- [ ] Upload all images to Cloudinary
- [ ] Organize images in folder: `camp-2025`
- [ ] Get your Cloud Name, API Key, and API Secret
- [ ] Create `.env` file with credentials
- [ ] Install Cloudinary SDK: `npm install cloudinary`
- [ ] Gallery component will be created to display images

## Security Note

**Important:** Never expose your API Secret in client-side code!
- API Secret should only be used in server-side code
- For client-side, use unsigned uploads or signed URLs
- Consider using Cloudinary's unsigned upload preset for public images

## Next Steps

After completing the setup, we'll:
1. Create a gallery component to display images
2. Add lazy loading for performance
3. Implement a lightbox for full-size viewing
4. Add filtering/organization features
5. Create a page to showcase the camp images

