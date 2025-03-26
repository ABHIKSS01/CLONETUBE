import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './components/frontiers/ThemeContext'
import './App.css'
import Header from './components/frontiers/Header'
import Sidebar from './components/frontiers/Sidebar'
import HomePage from './components/pages/HomePage'
import Trending from './components/pages/Trending'
import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  }
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Header toggleSidebar={toggleSidebar} />
          <div className="content-container">
            <Sidebar isOpen={sidebarOpen} />
            <main className={`main ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/trending" element={<Trending />} />
                {/*<Route path="/subscriptions" element={<Subscriptions />} />
                <Route path="/library" element={<Library />} />
                <Route path="/history" element={<History />} />
                <Route path="/music" element={<Music />} />
                <Route path="/gaming" element={<Gaming />} />
                <Route path="/news" element={<News />} />
                <Route path="/sports" element={<Sports />} />
                <Route path="/learning" element={<Learning />} />
                <Route path="/fashion" element={<Fashion />} />
                <Route path="/watch-later" element={<WatchLater />} />
                <Route path="/liked-videos" element={<LikedVideos />} />
                <Route path="/show-more" element={<ShowMore />} />   */}
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
