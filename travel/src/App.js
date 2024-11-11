import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage'; // Adjust the path as necessary
import Destinations from './components/Destinations'; // Adjust the path as necessary
import About from './components/About'; // Adjust the path as necessary
import Contact from './components/Contact'; // Adjust the path as necessary
import LoginPage from './components/Login'; // Import LoginPage

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/destinations" element={<Destinations />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<LoginPage />} /> {/* Add this route */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
