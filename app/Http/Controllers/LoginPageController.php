<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LoginPageController extends Controller
{
    public function index()
    {
        return view('login');
    }

    public function register(Request $request)
    {
        $request->validate(
            [
                'name' => 'required|name',
                'email' => 'required|email'
            ]
        );
        echo "<pre>";
        print_r($request->all());
    }
}
