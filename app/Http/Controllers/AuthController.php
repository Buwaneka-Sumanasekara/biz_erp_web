<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Hash;

use App\Models\UmUser;
use App\Models\UmUserRoleHasPmPermissions;

use App\Http\Resources\UserResource;


class AuthController extends Controller
{
    

    public function register(Request $request)
    {
        
        $user = UmUser::find(0);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
                    'access_token' => $token,
                    'token_type' => 'Bearer',
        ]);
    }

    public function login(Request $request)
    {
        
        $user = UmUser::find(0);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
                    'access_token' => $token,
                    'token_type' => 'Bearer',
        ]);
    }

    public function logout(Request $request)
    {
        
       // Revoke the token that was used to authenticate the current request...
        $request->user()->currentAccessToken()->delete();

        return response()->json([
                    'logout' => true,
        ]);
    }

    public function me(Request $request)
    {
        $currentUser=$request->user();
        $userRolepermissions=UmUserRoleHasPmPermissions::get();

        return new UserResource(UmUser::findOrFail($currentUser->id));
    }       
}
