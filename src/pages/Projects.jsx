import { useContext } from 'react'
import portfolioImg from '../assets/portfolio_screenshot.png'
import kiboImg from '../assets/kibo_alliance_screenshot.png'
import { ThemeContext } from '../contexts/ThemeContext.jsx'

const projectGalleryStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
    width: '100%',
    marginLeft: '0 auto',
    marginRight: '0 auto'
}

const projectCardStyle = {
    width: '500px',
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundSize: 'cover',
    
    borderRadius: '15px'
}

const Projects = () => {
    const { theme } = useContext(ThemeContext)

    const projectHeaderStyle = {
        color: theme === 'dark' ? '#fff6a4' : '#000000',
        transition: 'color 0.3s'
    }

    const projectTitleStyle = {
        color: theme === 'dark' ? '#fff6a4' : '#ffffff',
        textAlign: 'center',
        transition: 'color 0.3s'
    }

    const projectButtonStyle = {
        marginLeft: '120px',
        marginRight: '120px',
        padding: '10px 20px',
        fontSize: '1rem',
        cursor: 'pointer',
        backgroundColor: theme === 'dark' ? '#3d3d3d' : '#4a48ab',
        color: theme === 'dark' ? '#fff6a4' : 'white',
        border: 'none',
        borderRadius: '30px',
        fontWeight: 'bold',
        transition: 'background-color 0.3s, color 0.3s, transform 0.3s'
    }

    return (
        <div>
            <h1 style={projectHeaderStyle}>Projects</h1>
            <div className="projectsContainer" style={projectGalleryStyle}>
                <div
                    className="projectCard"
                    style={{ ...projectCardStyle, backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${portfolioImg})` }}
                >
                    <h2 style={projectTitleStyle}>Web Portfolio</h2>
                    <button className="projectButton" style={projectButtonStyle}>
                        <a href="https://www.michaelfrascona.com/" target="_blank" rel="noopener noreferrer">See Project</a>
                    </button>
                </div>
                <div
                    className="projectCard"
                    style={{ ...projectCardStyle, backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${kiboImg})` }}
                >
                    <h2 style={projectTitleStyle}>Kibo Alliance</h2>
                    <button className="projectButton" style={projectButtonStyle}>
                        <a href="https://www.kiboalliance.org/" target="_blank" rel="noopener noreferrer">See Project</a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Projects