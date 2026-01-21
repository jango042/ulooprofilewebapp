import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Events from './pages/Events'
import PastEvents from './pages/PastEvents'
import CampGallery from './pages/CampGallery'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/past-events" element={<PastEvents />} />
            <Route path="/camp-gallery" element={<CampGallery />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App



