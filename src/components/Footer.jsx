const footerStyle = {
    padding: '20px',
    backgroundColor: '#1a1956',
    color: 'white',
}

const footerLinkStyle = {
    color: 'white',
    textDecoration: 'none',
}

const smallStyle = {
    fontSize: '0.8rem',
}

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <small>&copy; 2026 Michael Frascona. All rights reserved.</small>
            <p style={smallStyle}>Phone: (XXX) XXX-XXXX</p>
            <p style={smallStyle}>Email: <a href="mailto:michaelgfrascona@gmail.com" style={footerLinkStyle}>michaelgfrascona@gmail.com</a></p>
        </footer>
    );
}

export default Footer