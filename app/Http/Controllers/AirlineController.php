<?php

namespace App\Http\Controllers;

use App\Models\Airline;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class AirlineController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $airlines = Airline::all();
        return Inertia::render('Airline', ['airlines' => $airlines]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'code' => 'required|string|max:5',
            'logo' => 'required|file|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        // Handle file upload
        if ($request->hasFile('logo')) {
            $logoPath = $request->file('logo')->store('airline_logos', 'public');
        }

        // Create new airline
        $airline = Airline::create([
            'name' => $request->name,
            'code' => $request->code,
            'logo' => $logoPath ?? '',
        ]);

        return response()->json($airline, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Airline $airline)
    {
        return response()->json($airline);
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

        return response()->json($airline);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Airline $airline)
    {
        // Delete logo file if exists
        if ($airline->logo && Storage::disk('public')->exists($airline->logo)) {
            Storage::disk('public')->delete($airline->logo);
        }

        $airline->delete();
        return response()->json(['message' => 'Airline deleted successfully']);
    }
}
