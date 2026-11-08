import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import StarRating from './components/StarRating'
import ThemeToggle from './components/ThemeToggle'
import { FaStar, FaRegStar } from 'react-icons/fa'
import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from './contexts/ThemeContext'
import ToggleSections from './components/ToggleSections'
import { useReducer } from 'react'
import CatFacts from './components/CatFacts'



const initialState = {
    showAbout: true,
    showFavorites: true,
    showContact: true,
    showCatFacts: true
}

const sectionReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_ABOUT':
            return { ...state, showAbout: !state.showAbout }
        case 'TOGGLE_FAVORITES':
            return { ...state, showFavorites: !state.showFavorites }
        case 'TOGGLE_CONTACT':
            return { ...state, showContact: !state.showContact }
        case 'TOGGLE_CATFACTS':
            return { ...state, showCatFacts: !state.showCatFacts }
        case 'RESET':
            return initialState
        default:
            return state
    }
}

const App = () => {

  const [ hobbies, setHobbies ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true)
  const [ error, setError ] = useState(null)
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
      (async () => {
          try {
              const url = '/data/hobbies.json'
              const response = await fetch(url)
              if (!response.ok) throw new Error('Failed to fetch hobbies')
              const data = await response.json()
              setHobbies(data)
          }
          catch (err) {
              setError(err.message)
          }
          finally {
              setIsLoading(false)
          }
      })()  
  }, [])

  useEffect (() => {
    document.title = `${hobbies.length} Favorite Hobbies`
  }, [hobbies])

  //const [ theme, setTheme ] = useState('light')
  const [ sections, dispatch ] = useReducer(sectionReducer, initialState)

  if (isLoading) return <div>Loading hobbies, please wait...</div>
  if (error) return <div>Error: {error}</div>

  const sectionStyle = {
    paddingLeft: '50px',
    paddingRight: '50px',
    paddingTop: '25px',
    paddingBottom: '25px',
    color: theme === 'dark' ? '#fff6a4' : 'black',
    backgroundColor: theme === 'dark' ? '#3d3d3d' : '#a5e289',
    fontSize: '1.1rem',
    width:'60%',
    marginRight:'auto',
    marginLeft:'auto',
    borderRadius: '25px',
    transition: 'background-color 0.3s, color 0.3s'
  }

  const mailToStyle = {
    color: theme === 'dark' ? '#fff6a4' : '#000000',
    textDecoration: 'none',
    transition: 'color 0.3s'
  }

  const mainStyle = {
    backgroundColor: theme === 'dark' ? '#1a1a1a' : 'white',
    transition: 'background-color 0.3s, color 0.3s',
  }

  const h4Style = {
    color: theme === 'dark' ? '#fff6a4' : '#000000',
    transition: 'color 0.3s'
  }

  return (
    <div className="app">
      <Header name="Michael Frascona" tagline="Web Designer with artistic flair!" />
      <Nav />
      <main style={mainStyle}>
        <ThemeToggle />
        <h4 style={h4Style}>Toggle to Hide:</h4>
        <ToggleSections dispatch={dispatch} />
        {sections.showAbout && (
          <section style={sectionStyle}>
            <h2>About Me</h2>
            <p>I'm a web and UI/UX designer who first entered the field through animation and 3D art. That background shapes how I work: I build websites that actually feel alive, and I spot details most people skim past. As an autistic designer, I'm wired to notice if something isn't quite right, even if it's tiny. I'd rather fix it than just ship it. I specifically love working with small businesses and nonprofits, where one well-built site can genuinely change how an organization shows up in the world.</p>
          </section>
        )}
        {sections.showFavorites && (
          <section style={sectionStyle}>
            <h2>Hobbies</h2>
            <ul className="personal-favorites">
              {hobbies.map(({id, hobby, type, skillLevel, location, cost, initialRating}) => (
                <li key={id}>
                  <strong>{id} - {hobby}</strong>
                  <ul>
                    <li><strong>Type:</strong> {type}</li>
                    <li><strong>Skill Level:</strong> {skillLevel}</li>
                    <li><strong>Location:</strong> {location}</li>
                    <li><strong>Cost:</strong> {cost}</li>
                  </ul>
                  <StarRating initialRating={initialRating} />
                </li>
              ))}
            </ul>
          </section>
        )}
        {sections.showContact && (
          <section style={sectionStyle}>
              <h2>Contact</h2>
              <p>Email: <a style={mailToStyle} href="mailto:michaelgfrascona@gmail.com">michaelgfrascona@gmail.com</a></p>
          </section>          
        )}
        {sections.showCatFacts && (
          <section style={sectionStyle}>
              <CatFacts />
          </section>          
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App
