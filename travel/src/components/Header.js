import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Header = () => {
    const navigate = useNavigate(); // Initialize navigate function

    const handleLogin = () => {
        navigate('/login'); // Navigate to login page
    };

    const handleSignUp = () => {
        navigate('/signup'); // Navigate to signup page
    };

    return (
        <header style={headerStyle}>
            <h1 style={titleStyle}>My Travel Website</h1>
            <nav style={navStyle}>
                <ul style={ulStyle}>
                    <li style={liStyle}><a href="/" style={linkStyle}>Home</a></li>
                    <li style={liStyle}><a href="/destinations" style={linkStyle}>Destinations</a></li>
                    <li style={liStyle}><a href="/about" style={linkStyle}>About Us</a></li>
                    <li style={liStyle}><a href="/contact" style={linkStyle}>Contact</a></li>
                </ul>
                <div style={buttonContainerStyle}>
                    <button style={buttonStyle} onClick={handleLogin}>Log In</button>
                    <button style={buttonStyle} onClick={handleSignUp}>Sign Up</button>
                </div>
            </nav>
        </header>
    );
};

const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#0077cc', // Header background color
    color: 'white',
    height: '80px', // Increased height
    padding: '0 30px', // Increased padding for more space
    boxShadow: '0 2px 5px rgba(0,0,0,0.3)', // Add a subtle shadow
};

const titleStyle = {
    margin: 0,
    fontSize: '28px', // Slightly larger title font size
};

const navStyle = {
    display: 'flex',
    alignItems: 'center',
};

const ulStyle = {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
};

const liStyle = {
    margin: '0 20px', // Increased margin for list items
};

const linkStyle = {
    color: 'white', // Link text color
    textDecoration: 'none',
    fontSize: '18px', // Slightly larger font for links
};

const buttonContainerStyle = {
    display: 'flex',
    marginLeft: 'auto', // Push buttons to the right
};

const buttonStyle = {
    background: '#ffffff',
    color: '#0077cc',
    border: 'none',
    padding: '10px 20px', // Increased button padding
    cursor: 'pointer',
    marginLeft: '10px',
    borderRadius: '5px', // Rounded corners for buttons
    transition: 'background 0.3s', // Smooth background transition
};

export default Header;
