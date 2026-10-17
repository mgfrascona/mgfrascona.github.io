import { useEffect, useRef } from 'react'

// Sets up component that switches between light and dark themes
const ThemeToggle = ({ theme, setTheme }) => {

    const buttonRef = useRef(null)

    useEffect(() => {
        if (buttonRef.current) {
            buttonRef.current.focus()
        }
    }, [theme])

    // Ternary function to determine if the current theme is dark
    const isDarkMode = theme => theme === 'dark';

    // Function that toggles between light and dark themes
    const toggleTheme = () => {
        // Boolean that checks the new theme based on the current theme
        const newTheme = isDarkMode(theme) ? 'light' : 'dark';
        // Updates the theme state in the parent component
        setTheme(newTheme);
    }

    const buttonStyle = {
        padding: '40px 20px',
        fontSize: '1rem',
        cursor: 'pointer',
        backgroundColor: isDarkMode(theme) ? '#3d3d3d' : '#4a48ab',
        color: isDarkMode(theme) ? '#fff6a4' : 'white',
        border: 'none',
        borderRadius: '30px',
        fontWeight: 'bold',
        transition: 'background-color 0.3s, color 0.3s, transform 0.3s'


    };

    // Renders button on the page that allows the user to toggle between light and dark themes    
    return (
        <button className="themeToggler" ref={buttonRef} onClick={toggleTheme} style={buttonStyle} >
            {isDarkMode(theme) ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
    );
}

export default ThemeToggle;