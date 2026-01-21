# Coach Profile Website

A professional, modern website showcasing a coach's profile and events for teenagers focusing on outside-school topics.

## Features

- **Homepage**: Showcases the coach's profile, mission, and key statistics
- **Upcoming Events**: Displays all upcoming camps with filtering by state
- **Past Events**: Shows past events with embedded YouTube videos
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations

## Tech Stack

- React 18
- React Router DOM for navigation
- Vite for fast development and building
- Modern CSS with CSS Variables
- Responsive design principles

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Updating Events

Edit the events data in:
- `src/pages/Events.jsx` - For upcoming events
- `src/pages/PastEvents.jsx` - For past events with YouTube videos

### Updating YouTube Videos

Replace the `videoId` values in `src/pages/PastEvents.jsx` with your actual YouTube video IDs.

### Styling

The color scheme and styling can be customized in:
- `src/index.css` - CSS variables for colors and shadows
- Individual component CSS files for specific styling

## Project Structure

```
src/
├── components/       # Reusable components (Navbar, Footer)
├── pages/           # Page components (Home, Events, PastEvents)
├── App.jsx          # Main app component with routing
├── main.jsx         # Entry point
└── index.css        # Global styles
```

## License

MIT



