<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\PmPermissions;

class PermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $ar_permissions=[
            ["id"=>1000,"name"=>"User Management","display_name"=>"User Management","is_tab"=>1,"parent_id"=>1000,"url_path"=>"/user-management","icon"=>"",'order_no'=>1],
            
            ["id"=>1001,"name"=>"Users","display_name"=>"Users","is_tab"=>1,"parent_id"=>1000,"url_path"=>"/user-management/users","icon"=>"",'order_no'=>1],
            ["id"=>1002,"name"=>"Create User","display_name"=>"Create User","is_tab"=>0,"parent_id"=>1001,"url_path"=>"","icon"=>"",'order_no'=>1],
            ["id"=>1003,"name"=>"User status update","display_name"=>"User status update","is_tab"=>0,"parent_id"=>1001,"url_path"=>"","icon"=>"",'order_no'=>2],
            
            ["id"=>1010,"name"=>"User roles","display_name"=>"User Roles","is_tab"=>1,"parent_id"=>1000,"url_path"=>"/user-management/user-roles","icon"=>"",'order_no'=>2],
            ["id"=>1011,"name"=>"Create User Role","display_name"=>"Create User Role","is_tab"=>0,"parent_id"=>1010,"url_path"=>"","icon"=>"",'order_no'=>1],
            ["id"=>1012,"name"=>"Remove User Role","display_name"=>"Remove User Role","is_tab"=>0,"parent_id"=>1010,"url_path"=>"","icon"=>"",'order_no'=>2],
        
        
        ];


        foreach ($ar_permissions as $permission) {
            PmPermissions::updateOrCreate([
                'id' => $permission['id']
            ],$permission);
        }
    }
}
