<?php

namespace App\Http\Controllers;

use App\Models\Airline;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log; // Tambahkan ini untuk logging
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class AirlineController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $airlines = Airline::all()->map(function ($airline) {
            return [
                'id' => $airline->id,
                'name' => $airline->name,
                'code' => $airline->code,
                'logo_url' => $airline->logo_url ? Storage::url($airline->logo_url) : null,
            ];
        });

        // Tambahkan log untuk debugging
        Log::info('Airlines data:', $airlines->toArray());

        return Inertia::render('Airline', ['airlines' => $airlines]);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate the request
        $request->validate([
            'name' => 'required|string|max:255',
            'code' => 'required|string|max:10',
            'logo' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Validate the file as an image
        ]);

        // Handle file upload
        if ($request->hasFile('logo')) {
            // Store the uploaded logo
            $logoPath = $request->file('logo')->store('logos', 'public');
        }

        // Create a new airline record
        $airline = Airline::create([
            'name' => $request->name,
            'code' => $request->code,
            'logo_url' => $logoPath ?? null, // Save the logo path if exists
        ]);

        return response()->json(['success' => 'Airline created successfully.', 'airline' => $airline], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Airline $airline)
    {
        return Inertia::render('airlines', ['airline' => $airline]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Airline $airline)
    {
        $request->validate([
            'name' => 'string|max:255',
            'code' => 'string|max:5',
            'logo' => 'file|mimes:jpeg,png,jpg|max:2048',
        ]);

        try {
            // Update file if new logo is uploaded
            if ($request->hasFile('logo')) {
                // Delete old logo
                if ($airline->logo && Storage::disk('public')->exists($airline->logo)) {
                    Storage::disk('public')->delete($airline->logo);
                }
                $logoPath = $request->file('logo')->store('airline_logos', 'public');
                $airline->logo = $logoPath;
            }

            // Update name and code if present
            $airline->name = $request->name ?? $airline->name;
            $airline->code = $request->code ?? $airline->code;
            $airline->save();

            return response()->json(['success' => 'Airline updated successfully'], 200);
        } catch (\Exception $e) {
            Log::error('Error updating airline: ' . $e->getMessage()); // Log error
            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Airline $airline)
    {
        try {
            // Delete logo file if exists
            if ($airline->logo && Storage::disk('public')->exists($airline->logo)) {
                Storage::disk('public')->delete($airline->logo);
            }

            $airline->delete();
            return response()->json(['success' => 'Airline deleted successfully'], 200);
        } catch (\Exception $e) {
            Log::error('Error deleting airline: ' . $e->getMessage()); // Log error
            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }
}
