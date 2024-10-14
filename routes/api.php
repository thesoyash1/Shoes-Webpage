<?php

use App\Http\Controllers\LoginPageController;
use Illuminate\Support\Facades\route;



Route::get('/register', [LoginPageController::class, 'index']);
Route::post('/register', [LoginPageController::class, 'register']);
