<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\App;

use App\Models\PmPermissions;
use App\Models\UmUserRoleHasPmPermissions;

class UserPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $ar_all_permissions=PmPermissions::get();
        foreach ($ar_all_permissions as $permission) {
            $data=["pm_permissions_id"=>$permission->id,"um_user_role_id"=>config("global.user_role_super_admin")];
            UmUserRoleHasPmPermissions::updateOrCreate([
                'um_user_role_id' => $data["um_user_role_id"],
                'pm_permissions_id' =>$data["pm_permissions_id"]
            ],$data);
        }

    }
}
