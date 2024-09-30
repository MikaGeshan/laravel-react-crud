<?php

namespace App\Http\Controllers;

use App\Models\Airport;
use Illuminate\Http\Request;

class AirportController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Fetch all airports and pass to the view
        $airports = Airport::all();
        return inertia('Airports', ['airports' => $airports]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate input
        $request->validate([
            'name' => 'required|string|max:255',
            'code' => 'required|string|max:10|unique:airports,code',
            'city' => 'required|string|max:255',
        ]);

        // Create a new airport record
        Airport::create([
            'name' => $request->name,
            'code' => $request->code,
            'city' => $request->city,
        ]);

        // Redirect back with a success message
        return back()->with('success', 'Airport created successfully.');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Airport $airport)
    {
        return inertia('EditAirport', ['airport' => $airport]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Airport $airport)
    {
        // Validate input
        $request->validate([
            'name' => 'required|string|max:255',
            'code' => 'required|string|max:10|unique:airports,code,' . $airport->id,
            'city' => 'required|string|max:255',
        ]);

        // Update the airport details
        $airport->update([
            'name' => $request->name,
            'code' => $request->code,
            'city' => $request->city,
        ]);

        // Redirect back with a success message
        return back()->with('success', 'Airport updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Airport $airport)
    {
        // Delete the airport
        $airport->delete();

        // Redirect back with a success message
        return back()->with('success', 'Airport deleted successfully.');
    }
}
