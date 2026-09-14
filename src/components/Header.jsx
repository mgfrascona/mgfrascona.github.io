const headerStyle = {
    width: '100%',
    boxSizing: 'border-box',
    margin: '0 auto',
    paddingLeft: '20px',
    paddingRight: '0px',
    paddingTop: '70px',
    paddingBottom: '70px',
    backgroundColor: '#1a1956',
    color: 'white',
}

const headerTitleStyle = {
    fontSize:'4rem'
}

const Header = ({ name, tagline, children }) => {
    const displayName = name
    const displayTagline = tagline
    
    return <header style={headerStyle}>
            <h1 style={headerTitleStyle}>{displayName}</h1>
            <p>{displayTagline}</p>
            {children}
        </header>
}

export default Header