<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\GroupController;

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

    Route::prefix("group")->group(function () {
        Route::post('/', [GroupController::class, 'createGroup']);
        Route::prefix("{group_no}")->group(function () {
            Route::get('/', [GroupController::class, 'getGroupList']); 
        });
    });

    Route::prefix("group-mapping")->group(function () {
        Route::post('/', [GroupController::class, 'createGroupMapping']);
    });
});



Route::prefix("test")->group(function () {
    Route::get('/group-next-id/{group_no}', [GroupController::class, 'testGroupNo']);
});  


