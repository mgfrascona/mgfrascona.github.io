import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext.jsx'

const Nav = () => {
    const { theme } = useContext(ThemeContext)
    const listStyle = {
        listStyleType: 'none',
        margin: '0',
        padding: '0',
        display: 'flex',
        justifyContent: 'center',
        gap: '60px',
        fontSize: '1.2rem'
    }

    const navLinkStyle = {
        color: theme === 'dark' ? '#fff6a4' : 'white',
        transition: 'background-color 0.3s, color 0.3s',
        fontWeight: 'bold',
        textDecoration: 'none'
    }

    const navStyle = {
        //backgroundColor: '#4a48ab',
        //color: 'white',
        backgroundColor: theme === 'dark' ? '#3d3d3d' : '#4a48ab',
        color: theme === 'dark' ? '#fff6a4' : '#4a48ab',
        transition: 'background-color 0.3s, color 0.3s',
        paddingTop: '40px',
        paddingBottom: '40px'
    }

  return <nav style={navStyle}>
    <ul style={listStyle}>
        <li><a href="#" style={navLinkStyle}>Home</a></li>
        <li><a href="#" style={navLinkStyle}>Projects</a></li>
        <li><a href="#" style={navLinkStyle}>Contact</a></li>
    </ul>
  </nav>
}

export default Nav