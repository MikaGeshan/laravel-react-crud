import React from 'react';
import { usePage, router } from '@inertiajs/react';
import { format } from 'date-fns';

export default function Tickets() {
    const { tickets } = usePage().props; // Get tickets from props

    // Function to handle ticket deletion
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this ticket?")) {
            router.delete(`/tickets/${id}`, {
                onSuccess: () => alert('Ticket deleted successfully'),
                onError: (error) => alert('Error deleting ticket: ' + error)
            });
        }
    };

    // Check if tickets exist
    if (!tickets || !tickets.data) {
        return <div>Loading tickets...</div>;
    }

    return (
        <div className="tickets-container">
            <h1>Flight Tickets</h1>
            <div className="ticket-list">
                {tickets.data.map((ticket, index) => (
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
                                <p><strong>Flight</strong><br />{ticket.flight_number}</p>
                            </div>
                            <div className="ticket-info">
                                <p><strong>Seat Class</strong><br />{ticket.seat_class}</p>
                            </div>
                            <div className="ticket-info">
                                <p><strong>Date</strong><br />{format(new Date(ticket.departure_date), 'dd MMM yyyy')}</p>
                                <p><strong>Time</strong><br />{ticket.departure_time}</p>

                            </div>
                        </div>
                        <div className="ticket-footer">
                            <div className="ticket-barcode"></div>
                            <button
                                className="delete-button"
                                onClick={() => handleDelete(ticket.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
