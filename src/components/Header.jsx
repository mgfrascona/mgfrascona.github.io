import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext.jsx'

const headerTitleStyle = {
    fontSize:'4rem'
}

const Header = ({ name, tagline, children }) => {
    const { theme } = useContext(ThemeContext)
    const displayName = name
    const displayTagline = tagline

    const headerStyle = {
        width: '100%',
        boxSizing: 'border-box',
        margin: '0 auto',
        paddingLeft: '20px',
        paddingRight: '0px',
        paddingTop: '70px',
        paddingBottom: '70px',
        //backgroundColor: 'white',
        //color: '#4a48ab',
        backgroundColor: theme === 'dark' ? '#1a1a1a' : 'white',
        color: theme === 'dark' ? '#fff6a4' : '#4a48ab',
        transition: 'background-color 0.3s, color 0.3s'
    }
    
    return <header style={headerStyle}>
            <h1 style={headerTitleStyle}>{displayName}</h1>
            <p>{displayTagline}</p>
            {children}
        </header>
}

export default Header