<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Home', ['name' => 'World']);
// });

// Route::get('/create', function () {
//     return inertia('Create/Create');
// });


Route::get('/', [PostController::class, 'index']);
Route::resource('posts', PostController::class)->except('index');
