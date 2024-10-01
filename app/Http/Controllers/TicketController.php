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

        // Validate airplane ticket data, including departure_location
        $fields = $request->validate([
            'passenger_name' => ['required', 'string', 'max:255'], // Passenger name
            'departure_date' => ['required', 'date'], // Departure date
            'departure_time' => ['required', 'date_format:H:i'], // Departure time (HH:MM format)
            'departure_location' => ['required', 'string', 'max:255'], // Departure location
            'destination' => ['required', 'string', 'max:255'], // Destination
            'seat_class' => ['required', 'in:economy,business,first'], // Seat class
            'price' => ['required', 'numeric', 'min:0'], // Price must be a valid number and not negative
        ]);

        // Generate a random flight number and seat number
        $fields['flight_number'] = $this->generateFlightNumber();
        $fields['seat'] = $this->generateSeatNumber(); // Add generated seat number

        try {
            // Create a new airplane ticket
            $ticket = Ticket::create($fields);

            // Redirect to tickets page with success message
            return redirect()->route('tickets.index')->with('success', 'Airplane Ticket Created');
        } catch (\Exception $e) {
            return redirect()->route('tickets.index')->with('error', 'Failed to create airplane ticket: ' . $e->getMessage());
        }
    }

    /**
     * Display the specified airplane ticket.
     */
    public function show(Ticket $ticket)
    {
        return Inertia::render('ViewTicket', ['ticket' => $ticket]);
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

        // Validate airplane ticket data, including departure_location
        $fields = $request->validate([
            'flight_number' => ['required', 'string', 'max:10'],
            'passenger_name' => ['required', 'string', 'max:255'],
            'departure_date' => ['required', 'date'],
            'departure_time' => ['required', 'date_format:H:i'], // Departure time (HH:MM format)
            'departure_location' => ['required', 'string', 'max:255'], // Departure location
            'destination' => ['required', 'string', 'max:255'], // Destination
            'seat_class' => ['required', 'in:economy,business,first'],
            'price' => ['required', 'numeric', 'min:0'], // Price must be a valid number
        ]);

        try {
            // Update the airplane ticket
            $ticket->update($fields);

            // Redirect to tickets page with success message
            return redirect()->route('tickets.index')->with('success', 'Airplane Ticket Updated');
        } catch (\Exception $e) {
            return redirect()->route('tickets.index')->with('error', 'Failed to update airplane ticket: ' . $e->getMessage());
        }
    }

    /**
     * Remove the specified airplane ticket from storage.
     */
    public function destroy(Ticket $ticket)
    {
        // Delete the airplane ticket
        $ticket->delete();

        return redirect()->route('tickets.index')->with('message', 'Airplane Ticket Deleted');
    }

    /**
     * Generate a random flight number.
     */
    private function generateFlightNumber()
    {
        $prefix = 'FL';
        $number = mt_rand(1000, 9999); // Generate a random number between 1000 and 9999
        return $prefix . $number;
    }

    /**
     * Generate a random seat number between 1 and 1000.
     */
    private function generateSeatNumber()
    {
        return mt_rand(1, 1000); // Randomly generate a seat number between 1 and 1000
    }
}
