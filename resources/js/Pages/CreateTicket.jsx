import React, { Component } from 'react';
import { useForm } from '@inertiajs/react';

class TicketForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flight_number: '',
            passenger_name: '',
            departure_date: '',
            seat_class: 'economy',
            destination: '',
            departure_time: '',
            price: '',
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { flight_number, passenger_name, departure_date, seat_class, destination, departure_time, price } = this.state;
        this.props.onSubmit({ flight_number, passenger_name, departure_date, seat_class, destination, departure_time, price });
    };

    render() {
        const { flight_number, passenger_name, departure_date, seat_class, destination, departure_time, price } = this.state;
        const { processing, errors } = this.props;

        return (
            <form onSubmit={this.handleSubmit} className="max-w-md mx-auto bg-white p-6 shadow-md rounded">
                <h1 className="text-2xl font-bold mb-4">Create Airplane Ticket</h1>

                {/* Flight Number */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="flight_number">
                        Flight Number
                    </label>
                    <input
                        id="flight_number"
                        name="flight_number"
                        type="text"
                        value={flight_number}
                        onChange={this.handleChange}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.flight_number ? 'border-red-500' : ''
                            }`}
                    />
                    {errors.flight_number && <p className="text-red-500 text-xs italic">{errors.flight_number}</p>}
                </div>

                {/* Passenger Name */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="passenger_name">
                        Passenger Name
                    </label>
                    <input
                        id="passenger_name"
                        name="passenger_name"
                        type="text"
                        value={passenger_name}
                        onChange={this.handleChange}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.passenger_name ? 'border-red-500' : ''
                            }`}
                    />
                    {errors.passenger_name && <p className="text-red-500 text-xs italic">{errors.passenger_name}</p>}
                </div>

                {/* Departure Date */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="departure_date">
                        Departure Date
                    </label>
                    <input
                        id="departure_date"
                        name="departure_date"
                        type="date"
                        value={departure_date}
                        onChange={this.handleChange}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.departure_date ? 'border-red-500' : ''
                            }`}
                    />
                    {errors.departure_date && <p className="text-red-500 text-xs italic">{errors.departure_date}</p>}
                </div>

                {/* Seat Class */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="seat_class">
                        Seat Class
                    </label>
                    <select
                        id="seat_class"
                        name="seat_class"
                        value={seat_class}
                        onChange={this.handleChange}
                        className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="economy">Economy</option>
                        <option value="business">Business</option>
                        <option value="first">First Class</option>
                    </select>
                </div>

                {/* Destination */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="destination">
                        Destination
                    </label>
                    <input
                        id="destination"
                        name="destination"
                        type="text"
                        value={destination}
                        onChange={this.handleChange}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.destination ? 'border-red-500' : ''
                            }`}
                    />
                    {errors.destination && <p className="text-red-500 text-xs italic">{errors.destination}</p>}
                </div>

                {/* Time */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="departure_time">
                        Time
                    </label>
                    <input
                        id="departure_time"
                        name="departure_time"
                        type="time"
                        value={departure_time}
                        onChange={this.handleChange}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.departure_time ? 'border-red-500' : ''
                            }`}
                    />
                    {errors.departure_time && <p className="text-red-500 text-xs italic">{errors.departure_time}</p>}
                </div>

                {/* Price */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                        Price (in Rupiah)
                    </label>
                    <input
                        id="price"
                        name="price"
                        type="number"
                        value={price}
                        onChange={this.handleChange}
                        placeholder="Enter price in Rupiah"
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.price ? 'border-red-500' : ''
                            }`}
                    />
                    {errors.price && <p className="text-red-500 text-xs italic">{errors.price}</p>}
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        disabled={processing}
                        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${processing ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                    >
                        {processing ? 'Creating...' : 'Create Ticket'}
                    </button>
                </div>
            </form>
        );
    }
}

export default function CreateTicket() {
    const { data, setData, post, processing, errors } = useForm({
        flight_number: '',
        passenger_name: '',
        departure_date: '',
        seat_class: 'economy',
        destination: '',
        departure_time: '',
        price: '',
    });

    const handleSubmit = (ticketData) => {
        post('/tickets', { data: ticketData });
    };

    return (
        <div>
            <TicketForm
                onSubmit={handleSubmit}
                processing={processing}
                errors={errors}
            />
        </div>
    );
}
