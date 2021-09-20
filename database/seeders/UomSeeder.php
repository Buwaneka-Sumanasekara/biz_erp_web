<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Helpers\CommonHelper;

use App\Models\PmUom;
use App\Models\PmUomGroup;
use App\Models\PmUomGroupHasPmUom;

class UomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $uom_id=CommonHelper::getNextUOMId();
        $ar_uom=[
            ["id"=>$uom_id,"name"=>"NUMBER","sym"=>"","active"=>1],//default UOM
        ];

        foreach ($ar_uom as $uom) {
            PmUom::updateOrCreate([
                'id' => $uom['id']
            ],$uom);
        }
    

        //UOM group
        $uom_grp_id=CommonHelper::getNextUOMGroupId();
        $ar_uom_group=[
            ["id"=>$uom_grp_id,"name"=>"Default","active"=>1,"smallest_uom_id"=>$uom_id],//default UOM
        ];

        foreach ($ar_uom_group as $uom_grp) {
            PmUomGroup::updateOrCreate([
                'id' => $uom_grp['id']
            ],$uom_grp);
        }


        //UOM group map
        $ar_uom_group_map=[
            ["pm_uom_id"=>$uom_id,"pm_uom_group_id"=>$uom_grp_id,"vol_of_smallest_uom"=>1],
        ];
        foreach ($ar_uom_group_map as $uom_group_map) {
            PmUomGroupHasPmUom::updateOrCreate([
                'pm_uom_id' => $uom_group_map['pm_uom_id'],
                'pm_uom_group_id' => $uom_group_map['pm_uom_group_id']
            ],$uom_group_map);
        }



    }
}
