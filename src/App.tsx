import './App.css'
import Header from './components/Header/Header'
import HomePage from './pages/HomPage/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import AboutPage from './pages/AboutPage/AboutPage'

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}