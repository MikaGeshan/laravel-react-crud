import React from 'react';
import { usePage } from '@inertiajs/react';

export default function Tickets() {
    const { tickets } = usePage().props; // Mengambil data tiket dari props

    // Tambahkan pengecekan apakah tickets dan tickets.data ada
    if (!tickets || !tickets.data) {
        return <div>Loading tickets...</div>;
    }

    return (
        <div className="tickets-container">
            <h1>Flight Tickets</h1>
            <div className="ticket-list">
                {tickets.data.map((ticket, index) => ( // Menggunakan data tiket dari props
                    <div key={index} className="ticket-card">
                        <div className="ticket-header">
                            <h2>{ticket.destination}</h2>
                            <p>Flight: {ticket.flight_number}</p>
                        </div>
                        <div className="ticket-body">
                            <p><strong>Passenger:</strong> {ticket.passenger_name}</p>
                            <p><strong>Departure:</strong> {ticket.departure_date} at {ticket.departure_time}</p>
                            <p><strong>Seat Class:</strong> {ticket.seat_class}</p>
                            <p><strong>Price:</strong> {ticket.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
