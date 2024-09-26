import React from 'react';
import { useForm } from '@inertiajs/react';

export default function CreateTicket() {
    const { data, setData, post, processing, errors } = useForm({
        flight_number: '',
        passenger_name: '',
        departure_date: '',
        departure_time: '',
        destination: '',
        seat_class: 'economy',
        price: ''
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/tickets');
    };

    const formStyle = {
        container: {
            maxWidth: '600px',
            margin: '50px auto',
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9',
        },
        formGroup: {
            marginBottom: '15px',
        },
        label: {
            display: 'block',
            marginBottom: '5px',
            fontWeight: 'bold',
        },
        input: {
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
        },
        select: {
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
        },
        error: {
            color: 'red',
            fontSize: '12px',
            marginTop: '5px',
        },
        button: {
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
        },
        buttonDisabled: {
            backgroundColor: '#ccc',
        },
    };

    return (
        <div style={formStyle.container}>
            <h1>Create Airplane Ticket</h1>
            <form onSubmit={handleSubmit}>
                {/* Flight Number */}
                <div style={formStyle.formGroup}>
                    <label style={formStyle.label}>Flight Number</label>
                    <input
                        type="text"
                        name="flight_number"
                        value={data.flight_number}
                        onChange={handleChange}
                        placeholder="Enter flight number"
                        style={formStyle.input}
                    />
                    {errors.flight_number && <span style={formStyle.error}>{errors.flight_number}</span>}
                </div>

                {/* Passenger Name */}
                <div style={formStyle.formGroup}>
                    <label style={formStyle.label}>Passenger Name</label>
                    <input
                        type="text"
                        name="passenger_name"
                        value={data.passenger_name}
                        onChange={handleChange}
                        placeholder="Enter passenger name"
                        style={formStyle.input}
                    />
                    {errors.passenger_name && <span style={formStyle.error}>{errors.passenger_name}</span>}
                </div>

                {/* Departure Date */}
                <div style={formStyle.formGroup}>
                    <label style={formStyle.label}>Departure Date</label>
                    <input
                        type="date"
                        name="departure_date"
                        value={data.departure_date}
                        onChange={handleChange}
                        style={formStyle.input}
                    />
                    {errors.departure_date && <span style={formStyle.error}>{errors.departure_date}</span>}
                </div>

                {/* Departure Time */}
                <div style={formStyle.formGroup}>
                    <label style={formStyle.label}>Departure Time</label>
                    <input
                        type="time"
                        name="departure_time"
                        value={data.departure_time}
                        onChange={handleChange}
                        style={formStyle.input}
                    />
                    {errors.departure_time && <span style={formStyle.error}>{errors.departure_time}</span>}
                </div>

                {/* Destination */}
                <div style={formStyle.formGroup}>
                    <label style={formStyle.label}>Destination</label>
                    <input
                        type="text"
                        name="destination"
                        value={data.destination}
                        onChange={handleChange}
                        placeholder="Enter destination"
                        style={formStyle.input}
                    />
                    {errors.destination && <span style={formStyle.error}>{errors.destination}</span>}
                </div>

                {/* Seat Class */}
                <div style={formStyle.formGroup}>
                    <label style={formStyle.label}>Seat Class</label>
                    <select
                        name="seat_class"
                        value={data.seat_class}
                        onChange={handleChange}
                        style={formStyle.select}
                    >
                        <option value="economy">Economy</option>
                        <option value="business">Business</option>
                        <option value="first">First</option>
                    </select>
                    {errors.seat_class && <span style={formStyle.error}>{errors.seat_class}</span>}
                </div>

                {/* Price */}
                <div style={formStyle.formGroup}>
                    <label style={formStyle.label}>Price</label>
                    <input
                        type="number"
                        name="price"
                        value={data.price}
                        onChange={handleChange}
                        placeholder="Enter price"
                        style={formStyle.input}
                    />
                    {errors.price && <span style={formStyle.error}>{errors.price}</span>}
                </div>

                {/* Submit Button */}
                <div style={formStyle.formGroup}>
                    <button
                        type="submit"
                        style={{ ...formStyle.button, ...(processing ? formStyle.buttonDisabled : {}) }}
                        disabled={processing}
                    >
                        {processing ? 'Creating...' : 'Create Ticket'}
                    </button>
                </div>
            </form>
        </div>
    );
}
