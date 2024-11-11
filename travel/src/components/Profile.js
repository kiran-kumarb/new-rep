import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext'; // Import the useAuth hook
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const Profile = () => {
    const { user, logout } = useAuth(); // Access user data from the AuthContext
    const [email, setEmail] = useState(user ? user.email : ''); // Set initial email from user data
    const navigate = useNavigate(); // Create a navigate function

    const handleLogout = () => {
        logout(); // Call the logout function
        navigate('/login'); // Redirect to the login page
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add functionality to save changes (for example, update user data)
        alert('Profile updated successfully!'); // Simulate profile update
    };

    return (
        <div style={styles.container}>
            <h2>User Profile</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>Update Profile</button>
            </form>
            <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        textAlign: 'center',
    },
    form: {
        maxWidth: '400px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
    },
    input: {
        marginBottom: '10px',
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    button: {
        padding: '10px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#007bff',
        color: 'white',
        cursor: 'pointer',
    },
    logoutButton: {
        marginTop: '10px',
        padding: '10px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#dc3545',
        color: 'white',
        cursor: 'pointer',
    },
};

export default Profile;
