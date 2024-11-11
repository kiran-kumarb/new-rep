import React, { useState } from 'react';
import backgroundImage from '../assets/login-background.jpg'; // Ensure this image path is correct

const Login = ({ onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        alert(`Logged in with ${email}`);
        onClose(); // Close the login section after login
    };

    return (
        <div style={styles.container}>
            <div style={styles.formContainer}>
                <h2 style={styles.title}>Welcome Back!</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                        style={styles.input}
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                        style={styles.input}
                    />
                    <button type="submit" style={styles.button}>Log In</button>
                </form>
                <button type="button" onClick={onClose} style={styles.closeButton}>Close</button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    formContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent white background
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
        width: '400px',
    },
    title: {
        marginBottom: '20px',
        color: '#007BFF',
    },
    input: {
        width: '100%',
        padding: '15px',
        margin: '10px 0',
        borderRadius: '5px',
        border: '1px solid #007BFF',
        boxSizing: 'border-box', // Ensure padding is included in the width
    },
    button: {
        width: '100%',
        padding: '15px',
        backgroundColor: '#007BFF',
        color: '#FFFFFF',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    closeButton: {
        width: '100%',
        padding: '15px',
        backgroundColor: '#FF5733',
        color: '#FFFFFF',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '10px',
    },
};

export default Login;
