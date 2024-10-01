<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'flight_number',
        'passenger_name',
        'departure_date',
        'departure_time',
        'departure_location', // Added departure_location here
        'destination',
        'seat_class',
        'seat', // Add the seat attribute here
        'price',
    ];

    /**
     * Cast attributes to their appropriate types.
     *
     * @var array
     */
    protected $casts = [
        'departure_date' => 'date',
        'departure_time' => 'string', // Can be cast as 'time' if required
        'price' => 'decimal:2', // Decimal with 2 digits after decimal
    ];
}
