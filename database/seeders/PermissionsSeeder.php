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

            //1000 - 1099
            ["id"=>1000,"name"=>"User Management","display_name"=>"User Management","is_tab"=>1,"parent_id"=>1000,"url_path"=>"","icon"=>"",'order_no'=>1],
            
            ["id"=>1001,"name"=>"Users","display_name"=>"Users","is_tab"=>1,"parent_id"=>1000,"url_path"=>"user","icon"=>"",'order_no'=>1],
            ["id"=>1002,"name"=>"Create User","display_name"=>"Create User","is_tab"=>1,"parent_id"=>1001,"url_path"=>"/user/create","icon"=>"",'order_no'=>1],
            ["id"=>1003,"name"=>"User status update","display_name"=>"User status update","is_tab"=>0,"parent_id"=>1001,"url_path"=>"","icon"=>"",'order_no'=>2],
            
            ["id"=>1010,"name"=>"User roles","display_name"=>"User Roles","is_tab"=>1,"parent_id"=>1000,"url_path"=>"/user-management/user-roles","icon"=>"",'order_no'=>2],
            ["id"=>1011,"name"=>"Create User Role","display_name"=>"Create User Role","is_tab"=>1,"parent_id"=>1010,"url_path"=>"","icon"=>"",'order_no'=>1],
            ["id"=>1012,"name"=>"Remove User Role","display_name"=>"Remove User Role","is_tab"=>0,"parent_id"=>1010,"url_path"=>"","icon"=>"",'order_no'=>2],
        

            //1100 - 1199
            ["id"=>1100,"name"=>"Product Management","display_name"=>"Products","is_tab"=>1,"parent_id"=>1100,"url_path"=>"","icon"=>"",'order_no'=>1],
            
            ["id"=>1110,"name"=>"Groups","display_name"=>"Groups","is_tab"=>1,"parent_id"=>1100,"url_path"=>"/product/group","icon"=>"",'order_no'=>1],//show product tree mapping
            ["id"=>1111,"name"=>"Group 1 :".config("global.group1_name"),"display_name"=>config("global.group1_name"),"is_tab"=>1,"parent_id"=>1110,"url_path"=>"/product/group/1","icon"=>"",'order_no'=>1],
            ["id"=>1112,"name"=>"Group 2 :".config("global.group2_name"),"display_name"=>config("global.group2_name"),"is_tab"=>1,"parent_id"=>1110,"url_path"=>"/product/group/2","icon"=>"",'order_no'=>2],
            ["id"=>1113,"name"=>"Group 3 :".config("global.group3_name"),"display_name"=>config("global.group3_name"),"is_tab"=>1,"parent_id"=>1110,"url_path"=>"/product/group/3","icon"=>"",'order_no'=>3],
            ["id"=>1114,"name"=>"Group 4 :".config("global.group4_name"),"display_name"=>config("global.group4_name"),"is_tab"=>1,"parent_id"=>1110,"url_path"=>"/product/group/4","icon"=>"",'order_no'=>4],
            ["id"=>1115,"name"=>"Group 5 :".config("global.group5_name"),"display_name"=>config("global.group5_name"),"is_tab"=>1,"parent_id"=>1110,"url_path"=>"/product/group/5","icon"=>"",'order_no'=>5],
            ["id"=>1116,"name"=>"Group 6 :".config("global.group6_name"),"display_name"=>config("global.group6_name"),"is_tab"=>1,"parent_id"=>1110,"url_path"=>"/product/group/6","icon"=>"",'order_no'=>6], 

            ["id"=>1120,"name"=>"Group Mapping","display_name"=>"Group Mapping","is_tab"=>1,"parent_id"=>1100,"url_path"=>"/product/group-mapping","icon"=>"",'order_no'=>2],
           
            ["id"=>1130,"name"=>"All Products","display_name"=>"All Products","is_tab"=>1,"parent_id"=>1100,"url_path"=>"/product","icon"=>"",'order_no'=>3],
            ["id"=>1131,"name"=>"Products","display_name"=>"Create Product","is_tab"=>0,"parent_id"=>1130,"url_path"=>"/product/create","icon"=>"",'order_no'=>1],

             //1200 - 1299
            ["id"=>1200,"name"=>"Supplier Management","display_name"=>"Suppliers","is_tab"=>1,"parent_id"=>1200,"url_path"=>"","icon"=>"",'order_no'=>1],
            ["id"=>1201,"name"=>"All Suppliers","display_name"=>"All Supplier","is_tab"=>1,"parent_id"=>1200,"url_path"=>"/suppliers","icon"=>"",'order_no'=>1],
            
             //1300 - 1399
             ["id"=>1300,"name"=>"Customer Management","display_name"=>"Customers","is_tab"=>1,"parent_id"=>1300,"url_path"=>"","icon"=>"",'order_no'=>1],
             ["id"=>1301,"name"=>"All Customers","display_name"=>"All Customers","is_tab"=>1,"parent_id"=>1300,"url_path"=>"/customers","icon"=>"",'order_no'=>1],
             
        ];


        foreach ($ar_permissions as $permission) {
            PmPermissions::updateOrCreate([
                'id' => $permission['id']
            ],$permission);
        }
    }
}
