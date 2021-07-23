<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('auth/login', [AuthController::class, 'login']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::prefix("user")->group(function () {
        Route::get('/', [AuthController::class, 'me']);
        Route::get('/logout', [AuthController::class, 'logout']);
        Route::get('/permissions', [AuthController::class, 'permissions']);
    });  
});

