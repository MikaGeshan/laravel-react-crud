<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tickets', function (Blueprint $table) {
            $table->id();
            $table->string('flight_number');
            $table->string('passenger_name');
            $table->date('departure_date');
            $table->time('departure_time');
            $table->string('departure_location'); // Added departure_location field
            $table->string('destination');
            $table->string('seat_class');
            $table->integer('seat'); // Add the seat column as an integer
            $table->decimal('price', 8, 2); // 8 digits in total, 2 after the decimal point
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tickets');
    }
};
