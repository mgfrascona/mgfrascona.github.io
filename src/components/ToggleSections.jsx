import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext.jsx'

const ToggleSections = ({ dispatch }) => {
    const { theme } = useContext(ThemeContext)

    const toggleButtonStyle = {
        padding: '10px 20px',
        marginLeft: '5px',
        marginRight: '5px',
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
            <button style={toggleButtonStyle} onClick={() => dispatch({ type: 'TOGGLE_ABOUT' })}>About</button>
            <button style={toggleButtonStyle} onClick={() => dispatch({ type: 'TOGGLE_FAVORITES' })}>Favorites</button>
            <button style={toggleButtonStyle} onClick={() => dispatch({ type: 'TOGGLE_CONTACT' })}>Contact</button>
            <button style={toggleButtonStyle} onClick={() => dispatch({ type: 'RESET' })}>Show All</button>
        </div>
    )
}

export default ToggleSections