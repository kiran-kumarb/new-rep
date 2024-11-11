import React, { useState } from 'react';

const BookingForm = ({ destinationName, onBook }) => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [transportation, setTransportation] = useState(''); // State to hold the selected transportation option

    const handleSubmit = (e) => {
        e.preventDefault();
        const booking = { name, destination: destinationName, date, transportation };
        onBook(booking); // Call the onBook function passed as a prop
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <h3>Book Your Trip to {destinationName}</h3>
            <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={styles.input}
            />
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                style={styles.input}
            />
            <div style={styles.transportation}>
                <label>
                    <input
                        type="radio"
                        value="Flight"
                        checked={transportation === 'Flight'}
                        onChange={(e) => setTransportation(e.target.value)}
                    />
                    Flight
                </label>
                <label>
                    <input
                        type="radio"
                        value="Bus"
                        checked={transportation === 'Bus'}
                        onChange={(e) => setTransportation(e.target.value)}
                    />
                    Bus
                </label>
                <label>
                    <input
                        type="radio"
                        value="Train"
                        checked={transportation === 'Train'}
                        onChange={(e) => setTransportation(e.target.value)}
                    />
                    Train
                </label>
            </div>
            <button type="submit" style={styles.button}>Book Trip</button>
        </form>
    );
};

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: '20px 0',
        maxWidth: '400px',
        margin: '0 auto',
    },
    input: {
        marginBottom: '10px',
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    transportation: {
        marginBottom: '10px',
        textAlign: 'left',
    },
    button: {
        padding: '10px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#007bff',
        color: 'white',
        cursor: 'pointer',
    },
};

export default BookingForm;
