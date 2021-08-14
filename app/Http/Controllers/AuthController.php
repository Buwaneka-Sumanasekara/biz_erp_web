<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Hash;

use App\Models\UmUser;
use App\Models\UmUserLogin;
use App\Models\UmUserRoleHasPmPermissions;

use App\Http\Resources\UserResource;
use App\Http\Resources\ErrorResource;
use App\Http\Resources\LoginResource;
use App\Http\Resources\GeneralResource;
use App\Http\Resources\PermissionResource;
use App\Http\Resources\CurrentUserResource;


use App\Exceptions\AuthenticationException;
use App\Exceptions\UserNotFoundException;

use App\Http\Requests\MyJsonRequest;

class AuthController extends Controller
{
    
    public function login(Request $request)
    {
        try {
            $request->validate([
                'username' => 'required',
                'password' => 'required'
            ]); 
            $userlogin = UmUserLogin::where('username', $request->username)->first();
            if($userlogin){
                if(Hash::check($request->get('password'), $userlogin->password)){
                    $token = $userlogin->user->createToken('auth_token')->plainTextToken;
                    return new LoginResource((object)["token"=>$token,"user"=>$userlogin->user]);
                }else{
                    throw new AuthenticationException();
                }
            }else{
                throw new UserNotFoundException();
            }    
        } catch (\Exception $e) {
            return (new ErrorResource($e));
        }   
    }

    public function logout(Request $request)
    {
       // Revoke the token that was used to authenticate the current request...
        $request->user()->currentAccessToken()->delete();
        return new GeneralResource($request);
    }

    public function me(Request $request)
    {
        $currentUser=$request->user();
        return new CurrentUserResource(UmUser::findOrFail($currentUser->id));
    }  
    
    public function permissions(Request $request)
    {
        $currentUser=$request->user();
        return new PermissionResource(UmUser::findOrFail($currentUser->id));
    }  
    
}
