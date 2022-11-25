<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Http\Controllers\StudentsController;

class students extends Model
{
    use  HasFactory;
    protected $table='students';

    protected $fillable = [
        'name',
        'year',
        'stPhone',
        'wPhone',
        'paPhone',
        'zone',
        'covertant',
        'senter'
    ];

}
