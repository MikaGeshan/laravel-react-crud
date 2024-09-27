import React from 'react';

export default function Tickets() {
    // Contoh data tiket
    const tickets = [
        {
            flight_number: 'GA123',
            passenger_name: 'John Doe',
            departure_date: '2024-10-05',
            departure_time: '10:00 AM',
            destination: 'Jakarta - Bali',
            seat_class: 'Business',
            price: '$500',
        },
        {
            flight_number: 'SQ456',
            passenger_name: 'Jane Smith',
            departure_date: '2024-10-06',
            departure_time: '02:30 PM',
            destination: 'Singapore - Tokyo',
            seat_class: 'Economy',
            price: '$300',
        },
    ];

    return (
        <div className="tickets-container">
            <h1>Flight Tickets</h1>
            <div className="ticket-list">
                {tickets.map((ticket, index) => (
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
