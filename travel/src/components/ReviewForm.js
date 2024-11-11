import React, { useState } from 'react';

const ReviewForm = ({ onSubmit }) => {
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (review.trim()) {
            onSubmit({ review, rating });
            setReview('');
            setRating(1); // Reset rating after submission
        }
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <h4 style={styles.heading}>Leave a Review</h4>
            <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                required
                rows="4"
                placeholder="Write your review here..."
                style={styles.textarea}
            />
            <div style={styles.ratingContainer}>
                <label style={styles.label}>Rating:</label>
                <select value={rating} onChange={(e) => setRating(e.target.value)} style={styles.select}>
                    <option value="1">1 Star</option>
                    <option value="2">2 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="5">5 Stars</option>
                </select>
            </div>
            <button type="submit" style={styles.button}>Submit Review</button>
        </form>
    );
};

const styles = {
    form: {
        margin: '20px 0',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        textAlign: 'left',
        maxWidth: '400px', // Set a maximum width for the form
        marginLeft: 'auto', // Center the form horizontally
        marginRight: 'auto', // Center the form horizontally
    },
    heading: {
        marginBottom: '10px',
        textAlign: 'center', // Center the heading text
    },
    textarea: {
        width: '100%', // Make textarea take full width
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        marginBottom: '10px',
        resize: 'none', // Prevent resizing
        boxSizing: 'border-box', // Include padding and border in the element's total width and height
    },
    ratingContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    label: {
        marginRight: '10px',
    },
    select: {
        padding: '5px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        width: '60%', // Set a width for the select dropdown
    },
    button: {
        display: 'block',
        width: '100%',
        padding: '10px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#007bff',
        color: 'white',
        cursor: 'pointer',
    },
};

export default ReviewForm;
