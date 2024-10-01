<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\TicketController;
use App\Http\Controllers\AirlineController;
use App\Http\Controllers\AirportController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Home', ['name' => 'World']);
// });

// Route::get('/create', function () {
//     return inertia('Create/Create');
// });

// Periksa apakah pengguna sudah login
Route::get('/', function () {
    if (Auth::check()) {
        return redirect()->route('home');
    } else {
        return redirect()->route('login');
    }
});
Route::get('/home', [PostController::class, 'index'])->name('home');
Route::resource('posts', PostController::class)->except('index');


// Rute GET untuk menampilkan halaman login
Route::get('/login', function () {
    return Inertia::render('Login');
})->name('login');

// Rute POST untuk memproses login
Route::post('/login', [AuthController::class, 'login']);

// Rute GET untuk menampilkan halaman signup
Route::get('/signup', function () {
    return Inertia::render('Signup');
})->name('signup');

Route::post('/signup', [AuthController::class, 'signup']);

Route::post('/logout', [AuthController::class, 'destroy'])->name('logout');


Route::get('/tickets', [TicketController::class, 'index'])->name('tickets.index');

// Rute untuk menampilkan form pembuatan tiket
Route::get('/tickets/create', [TicketController::class, 'create'])->name('tickets.create');

// Rute untuk menyimpan tiket baru
Route::post('/tickets', [TicketController::class, 'store'])->name('tickets.store');

// Rute untuk menghapus tiket
Route::delete('/tickets/{ticket}', [TicketController::class, 'destroy'])->name('tickets.destroy');

// Rute untuk melihat tiket
Route::get('/tickets/{ticket}', [TicketController::class, 'show'])->name('tickets.show');


// Rute resource untuk AirlineController
Route::resource('airlines', AirlineController::class);
Route::post('/airlines', [AirlineController::class, 'store']);

// Route untuk menghapus airline
Route::delete('/airlines/{airline}', [AirlineController::class, 'destroy'])->name('airlines.destroy');


// Route untuk menampilkan halaman airports
Route::resource('airports', AirportController::class)->except(['show']);
