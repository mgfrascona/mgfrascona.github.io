
import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeContext } from './contexts/ThemeContext'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'
import Home from './pages/Home'
import Projects from './pages/Projects'
 
const App = () => {
  const { theme } = useContext(ThemeContext)
 
  const mainStyle = {
    backgroundColor: theme === 'dark' ? '#1a1a1a' : 'white',
    transition: 'background-color 0.3s, color 0.3s',
  }
 
  return (
    <div className="app">
      <Header name="Michael Frascona" tagline="Web Designer with artistic flair!" />
      <Nav />
      <main style={mainStyle}>
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<h1>Contact</h1>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
 
export default App