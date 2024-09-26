<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthController extends Controller
{

    /**
     * Proses login.
     */
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        // Memvalidasi input
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // Memeriksa apakah pengguna dengan email tersebut ada
        $user = User::where('email', $credentials['email'])->first();

        if (!$user) {
            // Jika email belum terdaftar
            return back()->withErrors([
                'email' => 'Email not registered.',
            ])->withInput();
        }

        // Memeriksa apakah password sesuai
        if (!Auth::attempt($credentials)) {
            // Jika password salah
            return back()->withErrors([
                'password' => 'Wrong password.',
            ])->withInput();
        }

        // Jika berhasil login, redirect ke halaman home
        return redirect()->route('home');
    }


    /**
     * Proses sign up.
     */
    public function signup(Request $request)
    {
        // Validasi input
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);

        // Buat pengguna baru
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        // Login pengguna baru
        Auth::login($user);

        // Redirect ke halaman home (atau halaman lain)
        return redirect()->route('home')->with('success', 'Pendaftaran berhasil!');
    }

    /**
     * Logout pengguna.
     */
    public function destroy(Request $request)
    {
        Auth::logout();

        // Invalidate session
        $request->session()->invalidate();

        // Regenerate token to prevent session fixation
        $request->session()->regenerateToken();

        return redirect('/login')->with('success', 'Logout berhasil!');
    }
}
