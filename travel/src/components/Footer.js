// src/components/Footer.js
import React from 'react';
import facebookIcon from '../assets/facebook.png'; // Update the path as necessary
import twitterIcon from '../assets/twitter.png';   // Update the path as necessary
import instagramIcon from '../assets/instagram.png'; // Update the path as necessary

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.socialMedia}>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src={facebookIcon} alt="Facebook" style={styles.icon} />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src={twitterIcon} alt="Twitter" style={styles.icon} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={instagramIcon} alt="Instagram" style={styles.icon} />
                </a>
            </div>
            <p>&copy; {new Date().getFullYear()} My Travel Website. All rights reserved.</p>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#007bff',
        color: 'white',
        textAlign: 'center',
        padding: '20px 0',
    },
    socialMedia: {
        marginBottom: '10px',
    },
    icon: {
        width: '24px',  // Adjust size as needed
        margin: '0 10px',
    },
};

export default Footer;
