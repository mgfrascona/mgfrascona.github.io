const navStyle = {
    backgroundColor: '#4a48ab',
    color: 'white',
    paddingLeft: '20px',
    paddingTop: '40px',
    paddingBottom: '40px',
    margin: '0 auto'
}

const listStyle = {
    listStyleType: 'none',
    margin: '0 auto',
    padding: '0',
    display: 'flex',
    gap: '60px',
    fontSize: '1.2rem'
}

const navLinkStyle = {
    color: 'white',
    textDecoration: 'none',
}

const Nav = () => {
  return <nav style={navStyle}>
    <ul style={listStyle}>
        <li><a href="#" style={navLinkStyle}>Home</a></li>
        <li><a href="#" style={navLinkStyle}>Projects</a></li>
        <li><a href="#" style={navLinkStyle}>Contact</a></li>
    </ul>
  </nav>
}

export default Nav