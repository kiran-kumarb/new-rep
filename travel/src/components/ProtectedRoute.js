import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import the useAuth hook

const ProtectedRoute = ({ element }) => {
    const { user } = useAuth(); // Access the user data from the AuthContext

    // If the user is not logged in, redirect to the login page
    if (!user) {
        return <Navigate to="/login" />;
    }

    return element; // If the user is logged in, render the requested element
};

export default ProtectedRoute;
