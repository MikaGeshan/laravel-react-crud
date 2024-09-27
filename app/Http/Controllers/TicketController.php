<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TicketController extends Controller
{
    /**
     * Display a listing of the airplane tickets.
     */
    public function index()
    {
        $tickets = Ticket::latest()->paginate(10); // Display 10 latest tickets
        return Inertia::render('Tickets', ['tickets' => $tickets]);
    }

    /**
     * Show the form for creating a new airplane ticket.
     */
    public function create()
    {
        return Inertia::render('CreateTicket');
    }

    /**
     * Store a newly created airplane ticket in storage.
     */
    public function store(Request $request)
    {
        sleep(2); // Optional: Simulate processing time

        // Validate airplane ticket data
        $fields = $request->validate([
            'flight_number' => ['required', 'string', 'max:10'], // Flight number
            'passenger_name' => ['required', 'string', 'max:255'], // Passenger name
            'departure_date' => ['required', 'date'], // Departure date
            'departure_time' => ['required', 'date_format:H:i'], // Departure time (HH:MM format)
            'destination' => ['required', 'string', 'max:255'], // Destination
            'seat_class' => ['required', 'in:economy,business,first'], // Seat class
            'price' => ['required', 'numeric', 'min:0'], // Price must be a valid number and not negative
        ]);

        try {
            // Create a new airplane ticket
            $ticket = Ticket::create($fields);

            // Return JSON response
            return response()->json([
                'message' => 'Airplane Ticket Created',
                'ticket' => $ticket
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Failed to create airplane ticket',
                'message' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Display the specified airplane ticket.
     */
    public function show(Ticket $ticket)
    {
        return Inertia::render('Tickets/Show', ['ticket' => $ticket]);
    }

    /**
     * Show the form for editing the specified airplane ticket.
     */
    public function edit(Ticket $ticket)
    {
        return Inertia::render('Tickets/Edit', ['ticket' => $ticket]);
    }

    /**
     * Update the specified airplane ticket in storage.
     */
    public function update(Request $request, Ticket $ticket)
    {
        sleep(1); // Optional: Simulate processing time

        // Validate airplane ticket data
        $fields = $request->validate([
            'flight_number' => ['required', 'string', 'max:10'],
            'passenger_name' => ['required', 'string', 'max:255'],
            'departure_date' => ['required', 'date'],
            'departure_time' => ['required', 'date_format:H:i'], // Departure time (HH:MM format)
            'destination' => ['required', 'string', 'max:255'], // Destination
            'seat_class' => ['required', 'in:economy,business,first'],
            'price' => ['required', 'numeric', 'min:0'], // Price must be a valid number
        ]);

        try {
            // Update the airplane ticket
            $ticket->update($fields);

            return redirect('/tickets')->with('success', 'Airplane Ticket Updated');
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Failed to update airplane ticket',
                'message' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Remove the specified airplane ticket from storage.
     */
    public function destroy(Ticket $ticket)
    {
        // Delete the airplane ticket
        $ticket->delete();

        return redirect('/tickets')->with('message', 'Airplane Ticket Deleted');
    }
}
