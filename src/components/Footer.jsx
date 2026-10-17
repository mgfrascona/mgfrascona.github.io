

const Footer = ({ theme }) => {
    const footerStyle = {
        padding: '20px',
        backgroundColor: theme === 'dark' ? '#3d3d3d' : '#4a48ab',
        color: theme === 'dark' ? '#fff6a4' : 'white',
    }

    const footerLinkStyle = {
        color: theme === 'dark' ? '#fff6a4' : 'white',
        textDecoration: 'none',
    }

    const smallStyle = {
        fontSize: '0.8rem',
    }

    return (
        <footer style={footerStyle}>
            <small>&copy; 2026 Michael Frascona. All rights reserved.</small>
            <p style={smallStyle}>Phone: (XXX) XXX-XXXX</p>
            <p style={smallStyle}>Email: <a href="mailto:michaelgfrascona@gmail.com" style={footerLinkStyle}>michaelgfrascona@gmail.com</a></p>
        </footer>
    );
}

export default Footer