<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Students;

class StudentsController extends Controller
{
    public function registerNewStudent(Request $request)
    {
        $newStudent = Students::create([
            'name' => request()->name,
            'year' => request()->year,
            'stPhone' =>  request()->stPhone,
            'wPhone' =>  request()->wPhone,
            'paPhone' =>  request()->paPhone,
            'zone' =>  request()->zone,
            'covertant' =>  request()->covertant,
            'senter' =>  request()->senter,

        ]);
        return $newStudent;
    }
}
