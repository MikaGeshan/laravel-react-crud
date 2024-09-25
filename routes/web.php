<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;
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

// Rute GET untuk menampilkan halaman logout
Route::get('/signup', function () {
    return Inertia::render('Signup');
})->name('signup');

Route::post('/signup', [AuthController::class, 'signup']);

Route::post('/logout', [AuthController::class, 'destroy'])->name('logout');
