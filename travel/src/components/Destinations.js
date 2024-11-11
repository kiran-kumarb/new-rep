import React, { useEffect, useState } from 'react';
import destinationsData from '../data/destinations.json'; // Importing data directly from the JSON file
import ReviewForm from './ReviewForm'; // Import the ReviewForm component
import BookingForm from './BookingForm'; // Import the BookingForm component

const Destinations = () => {
    const [destinations, setDestinations] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [bookings, setBookings] = useState([]); // State to hold bookings

    useEffect(() => {
        const fetchDestinations = () => {
            setDestinations(destinationsData);
        };

        fetchDestinations();
    }, []);

    const handleBooking = (booking) => {
        alert(`Booking confirmed for ${booking.name} to ${booking.destination} on ${booking.date} via ${booking.transportation}.`);
        setBookings((prevBookings) => [...prevBookings, booking]); // Add booking to the list
    };

    // Filter destinations based on the search term
    const filteredDestinations = destinations.filter(destination =>
        destination.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={styles.container}>
            <h2>Destinations</h2>
            <p>Explore amazing places around the world!</p>
            <input
                type="text"
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={styles.searchInput}
            />
            <ul style={styles.list}>
                {filteredDestinations.map(destination => (
                    <li key={destination.id} style={styles.card}>
                        <h3>{destination.name}</h3>
                        <img 
                            src={require(`../assets/${destination.image}`)} // Dynamic import of the image
                            alt={destination.name} 
                            style={styles.image} 
                        />
                        <BookingForm destinationName={destination.name} onBook={handleBooking} />
                        {/* Include other components like ReviewForm here if necessary */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Define the styles object
const styles = {
    container: {
        padding: '20px',
        textAlign: 'center',
    },
    searchInput: {
        width: '300px',
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        marginBottom: '20px',
    },
    list: {
        listStyleType: 'none',
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap', // Allow cards to wrap
    },
    card: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '10px',
        margin: '10px',
        textAlign: 'left',
        width: '220px', // Set fixed width for the card
    },
    image: {
        width: '100%', // Set to take full width of the card
        height: '150px', // Set a fixed height for uniformity
        objectFit: 'cover', // Maintain aspect ratio
        borderRadius: '8px',
        marginBottom: '10px', // Add space below the image
    },
};

export default Destinations;
