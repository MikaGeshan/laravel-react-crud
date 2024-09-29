<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Airline extends Model
{
    use HasFactory;

    // Tentukan kolom yang dapat diisi
    protected $fillable = ['name', 'code', 'logo'];

    // Tambahkan accessor untuk logo_url
    protected $appends = ['logo_url'];

    /**
     * Akses URL logo dengan path lengkap.
     *
     * @return string
     */
    public function getLogoUrlAttribute()
    {
        return $this->logo ? Storage::url($this->logo) : null;
    }

    /**
     * Hapus logo dari storage saat model dihapus.
     */
    protected static function boot()
    {
        parent::boot();

        static::deleting(function ($airline) {
            if ($airline->logo && Storage::disk('public')->exists($airline->logo)) {
                Storage::disk('public')->delete($airline->logo);
            }
        });
    }
}
