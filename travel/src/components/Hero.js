import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import heroImage from '../assets/hero.jpg'; // Import the hero image

const Hero = () => {
    return (
        <div style={styles.container}>
            {/* Hero Section */}
            <div style={styles.hero}>
                <img src={heroImage} alt="Travel" style={styles.heroImage} />
                <h1 style={styles.heroText}>Explore the World with Us!</h1>
            </div>

            {/* Featured Destinations */}
            <h2 style={styles.sectionTitle}>Featured Destinations</h2>
            <div style={styles.destinations}>
                <Link to="/destinations" style={styles.destinationCard}>
                    <h3>Paris</h3>
                    <p>The city of lights and love.</p>
                </Link>
                <Link to="/destinations" style={styles.destinationCard}>
                    <h3>New York</h3>
                    <p>The city that never sleeps.</p>
                </Link>
                <Link to="/destinations" style={styles.destinationCard}>
                    <h3>Tokyo</h3>
                    <p>A perfect blend of tradition and modernity.</p>
                </Link>
                <Link to="/destinations" style={styles.destinationCard}>
                    <h3>London</h3>
                    <p>Rich history and iconic landmarks.</p>
                </Link>
                <Link to="/destinations" style={styles.destinationCard}>
                    <h3>Dubai</h3>
                    <p>Luxury shopping and ultramodern architecture.</p>
                </Link>
                <Link to="/destinations" style={styles.destinationCard}>
                    <h3>Sydney</h3>
                    <p>Famous for its Sydney Opera House and harbor.</p>
                </Link>
                <Link to="/destinations" style={styles.destinationCard}>
                    <h3>Barcelona</h3>
                    <p>Known for its art and architecture.</p>
                </Link>
                <Link to="/destinations" style={styles.destinationCard}>
                    <h3>Rome</h3>
                    <p>The Eternal City rich in history and culture.</p>
                </Link>
            </div>
        </div>
    );
};

const styles = {
    container: {
        margin: 0,
        padding: 0,
        textAlign: 'center',
    },
    hero: {
        position: 'relative',
        height: '400px',
        overflow: 'hidden',
        color: 'white',
    },
    heroImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        position: 'absolute',
        top: '0',
        left: '0',
        zIndex: '-1',
    },
    heroText: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '2.5em',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
    },
    sectionTitle: {
        marginTop: '20px',
        fontSize: '2em',
    },
    destinations: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: '20px',
    },
    destinationCard: {
        background: '#f1f1f1',
        borderRadius: '8px',
        padding: '20px',
        margin: '10px',
        textAlign: 'left',
        textDecoration: 'none',
        color: 'black',
        width: '200px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
    },
};

export default Hero;
