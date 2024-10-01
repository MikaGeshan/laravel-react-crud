import React from 'react';
import { usePage, router } from '@inertiajs/react';
import { format } from 'date-fns';

export default function Tickets() {
    const { tickets } = usePage().props;

    // Function to handle ticket deletion
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this ticket?")) {
            router.delete(`/tickets/${id}`, {
                onSuccess: () => alert('Ticket deleted successfully'),
                onError: (error) => alert('Error deleting ticket: ' + error)
            });
        }
    };

    return (
        <div className="tickets-container">
            <table className="table">
                <thead>
                    <tr>
                        <th>Passenger Name</th>
                        <th>Flight Number</th>
                        <th>Departure Location</th> {/* Added Departure Location */}
                        <th>Destination</th>
                        <th>Seat Class</th>
                        <th>Seat</th>
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
                            <td>{ticket.departure_location}</td>
                            <td>{ticket.destination}</td>
                            <td>{ticket.seat_class}</td>
                            <td>{ticket.seat}</td>
                            <td>{format(new Date(ticket.departure_date), 'dd MMM yyyy')}</td>
                            <td>{ticket.departure_time}</td>
                            <td>
                                <button className="btn btn-view" onClick={() => router.visit(`/tickets/${ticket.id}`)}>View</button>
                                <button className="btn btn-edit">Update</button>
                                <button className="btn btn-delete" onClick={() => handleDelete(ticket.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
