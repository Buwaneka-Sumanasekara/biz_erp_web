<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Helpers\CommonHelper;


use App\Models\PmGroup2;

class GroupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i=2; $i <= 6; $i++) { 
           $GroupClass=CommonHelper::getGroupClassByNo((string)$i);
           $groupV=["id"=>CommonHelper::getNextGroupId((string)$i),"name"=>""];
           $GroupClass::updateOrCreate([
            'id' => $groupV['id']
           ],$groupV);
        }

    }
}
