<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\App;

use App\Models\UmUser;
use App\Models\UmUserLogin;



class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $ar_users=[
            ["id"=>0,"firstname"=>"Super","lastname"=>"Admin","um_user_status_id"=>config("global.user_status_active"),"um_user_role_id"=>config("global.user_role_super_admin")],
            
        ];


        if (App::environment('local')) {
            array_push($ar_users,["id"=>1,"firstname"=>"Cashier","lastname"=>"Test","um_user_status_id"=>config("global.user_status_active"),"um_user_role_id"=>config("global.user_role_cashier")] );
        }

        foreach ($ar_users as $user) {
            UmUser::updateOrCreate([
                'id' => $user['id']
            ],$user);

            $username=$user["firstname"];
            if($user['id']==0){
                $username="admin";
            }
            $user_login=[
                "id"=>$user['id'],
                "username"=>$username,
                "password"=>Hash::make('123'),
                "um_user_id"=>$user['id']
            ];
            UmUserLogin::updateOrCreate([
                'id' => $user_login['id']
            ],$user_login);
        }
    }
}
