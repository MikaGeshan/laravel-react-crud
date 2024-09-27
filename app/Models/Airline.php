<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Airline extends Model
{
    use HasFactory;

    // Tentukan kolom yang dapat diisi
    protected $fillable = ['name', 'code', 'logo'];

    /**
     * Akses URL logo dengan path lengkap.
     *
     * @return string
     */
    public function getLogoUrlAttribute()
    {
        return $this->logo ? asset('storage/' . $this->logo) : null;
    }
}
