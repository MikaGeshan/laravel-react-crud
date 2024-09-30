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
            <table className="table">
                <thead>
                    <tr>
                        <th>Passenger Name</th>
                        <th>Flight Number</th>
                        <th>Destination</th>
                        <th>Seat Class</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tickets.data.map((ticket, index) => (
                        <tr key={index}>
                            <td>{ticket.passenger_name}</td>
                            <td>{ticket.flight_number}</td>
                            <td>{ticket.destination}</td>
                            <td>{ticket.seat_class}</td>
                            <td>{format(new Date(ticket.departure_date), 'dd MMM yyyy')}</td>
                            <td>{ticket.departure_time}</td>
                            <td>
                                <button className="btn btn-delete" onClick={() => handleDelete(ticket.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
