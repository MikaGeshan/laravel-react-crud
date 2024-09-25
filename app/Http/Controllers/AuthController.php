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
        // Validasi input
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:6',
        ]);

        // Coba login dengan kredensial yang diberikan
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            // Regenerasi sesi untuk keamanan
            $request->session()->regenerate();

            // Redirect ke halaman home
            return redirect()->intended('/home')->with('success', 'Login berhasil!');
        }

        // Jika kredensial tidak sesuai
        return back()->withErrors([
            'email' => 'Email belum terdaftar.',
        ])->withInput();
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
