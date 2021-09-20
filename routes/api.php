<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\GroupController;
use App\Http\Controllers\SupplierController;
use App\Http\Controllers\LocationController;




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
        Route::get('/', [GroupController::class, 'getAllGroupMappings']);
        Route::post('/', [GroupController::class, 'createGroupMapping']);
        Route::prefix("{group1_id}")->group(function () {
            Route::get('/', [GroupController::class, 'getAllGroupMappingsBelongstoGroup1Id']); 
        });
    });

    Route::prefix("suppliers")->group(function () {
        Route::get('/', [SupplierController::class, 'getSupplierList']);
        Route::get('/{type}', [SupplierController::class, 'getSupplierList'])->where('type', 'active');
        Route::post('/', [SupplierController::class, 'createSupplier']);
        Route::put('/{id}', [SupplierController::class, 'updateSupplier']);
        Route::get('/{id}', [SupplierController::class, 'getSupplier']);
        
    });

    Route::prefix("locations")->group(function () {
        Route::get('/', [LocationController::class, 'getLocationList']);
        Route::get('/{type}', [LocationController::class, 'getLocationList'])->where('type', 'active');
        Route::post('/', [LocationController::class, 'createLocation']);
        Route::put('/{id}', [LocationController::class, 'updateLocation']);
        
    });

});



Route::prefix("test")->group(function () {
    Route::get('/group-next-id/{group_no}', [GroupController::class, 'testGroupNo']);
});  


