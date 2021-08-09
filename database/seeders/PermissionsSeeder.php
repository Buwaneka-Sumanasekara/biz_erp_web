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
            
            ["id"=>1001,"name"=>"Create User","display_name"=>"Create User","is_tab"=>1,"parent_id"=>1000,"url_path"=>"","icon"=>"",'order_no'=>1],
            ["id"=>1002,"name"=>"User status update","display_name"=>"User status update","is_tab"=>1,"parent_id"=>1001,"url_path"=>"","icon"=>"",'order_no'=>2],
            

            ["id"=>1500,"name"=>"Product Management","display_name"=>"Product","is_tab"=>1,"parent_id"=>1500,"url_path"=>"/product","icon"=>"",'order_no'=>1],
            ["id"=>1501,"name"=>"Create Product","display_name"=>"Create Product","is_tab"=>1,"parent_id"=>1500,"url_path"=>"/product","icon"=>"",'order_no'=>1],
        
        ];


        foreach ($ar_permissions as $permission) {
            PmPermissions::updateOrCreate([
                'id' => $permission['id']
            ],$permission);
        }
    }
}
