import React from 'react';
import { usePage } from '@inertiajs/react';
import { format } from 'date-fns';

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
                            <div className="ticket-destination">
                                <div className="ticket-city">{ticket.origin}</div>
                                <div className="ticket-arrow">✈</div>
                                <div className="ticket-city">{ticket.destination}</div>
                            </div>
                        </div>
                        <div className="ticket-body">
                            <div className="ticket-info">
                                <p><strong>Passenger</strong><br />{ticket.passenger_name}</p>
                            </div>
                            <div className="ticket-info">
                                <p><strong>Date</strong><br />{format(new Date(ticket.departure_date), 'dd MMM yyyy')}</p>
                                <p><strong>Time</strong><br />{ticket.departure_time}</p>
                            </div>
                            <div className="ticket-info">
                                <p><strong>Flight</strong><br />{ticket.flight_number}</p>
                            </div>
                        </div>
                        <div className="ticket-footer">
                            <div className="ticket-barcode"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
