import React from 'react';
import { useForm } from '@inertiajs/react';

export default function CreateTicket() {
    const { data, setData, post, processing, errors } = useForm({
        passenger_name: '',
        departure_location: '', // Added departure_location
        departure_date: '',
        departure_time: '',
        destination: '',
        seat_class: 'economy',
        price: '',
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/tickets');
    };

    return (
        <div className="max-w-lg mx-auto mt-12 p-6 border border-gray-300 rounded-lg bg-gray-100">
            <h1 className="text-2xl font-bold mb-6">Create Airplane Ticket</h1>
            <form onSubmit={handleSubmit}>
                {/* Passenger Name */}
                <div className="mb-4">
                    <label className="block font-bold mb-1">Passenger Name</label>
                    <input
                        type="text"
                        name="passenger_name"
                        value={data.passenger_name}
                        onChange={handleChange}
                        placeholder="Enter passenger name"
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    {errors.passenger_name && (
                        <span className="text-red-500 text-sm">{errors.passenger_name}</span>
                    )}
                </div>

                {/* Departure Location */}
                <div className="mb-4">
                    <label className="block font-bold mb-1">Departure Location</label>
                    <input
                        type="text"
                        name="departure_location" // Added departure_location field
                        value={data.departure_location}
                        onChange={handleChange}
                        placeholder="Enter departure location"
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    {errors.departure_location && (
                        <span className="text-red-500 text-sm">{errors.departure_location}</span>
                    )}
                </div>

                {/* Departure Date */}
                <div className="mb-4">
                    <label className="block font-bold mb-1">Departure Date</label>
                    <input
                        type="date"
                        name="departure_date"
                        value={data.departure_date}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    {errors.departure_date && (
                        <span className="text-red-500 text-sm">{errors.departure_date}</span>
                    )}
                </div>

                {/* Departure Time */}
                <div className="mb-4">
                    <label className="block font-bold mb-1">Departure Time</label>
                    <input
                        type="time"
                        name="departure_time"
                        value={data.departure_time}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    {errors.departure_time && (
                        <span className="text-red-500 text-sm">{errors.departure_time}</span>
                    )}
                </div>

                {/* Destination */}
                <div className="mb-4">
                    <label className="block font-bold mb-1">Destination</label>
                    <input
                        type="text"
                        name="destination"
                        value={data.destination}
                        onChange={handleChange}
                        placeholder="Enter destination"
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    {errors.destination && (
                        <span className="text-red-500 text-sm">{errors.destination}</span>
                    )}
                </div>

                {/* Seat Class */}
                <div className="mb-4">
                    <label className="block font-bold mb-1">Seat Class</label>
                    <select
                        name="seat_class"
                        value={data.seat_class}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    >
                        <option value="economy">Economy</option>
                        <option value="business">Business</option>
                        <option value="first">First Class</option>
                    </select>
                    {errors.seat_class && (
                        <span className="text-red-500 text-sm">{errors.seat_class}</span>
                    )}
                </div>

                {/* Price */}
                <div className="mb-4">
                    <label className="block font-bold mb-1">Price</label>
                    <input
                        type="number"
                        name="price"
                        value={data.price}
                        onChange={handleChange}
                        placeholder="Enter price"
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    {errors.price && (
                        <span className="text-red-500 text-sm">{errors.price}</span>
                    )}
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className={`w-full p-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition duration-200 ${processing ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                        disabled={processing}
                    >
                        {processing ? 'Creating...' : 'Create Ticket'}
                    </button>
                </div>
            </form>
        </div>
    );
}
