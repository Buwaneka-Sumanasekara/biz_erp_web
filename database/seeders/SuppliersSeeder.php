<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\SmSupplier;
use App\Helpers\CommonHelper;

class SuppliersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $ar_locations=[
            ["id"=>CommonHelper::getNextSupplierId(),"name"=>"Default","contact1"=>"","contact2"=>"","email_address"=>"","can_remove"=>0],//default supplier
        ];

        foreach ($ar_locations as $location) {
            SmSupplier::updateOrCreate([
                'id' => $location['id']
            ],$location);
        }
    }
}
