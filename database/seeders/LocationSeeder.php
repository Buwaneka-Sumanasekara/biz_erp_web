<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\SktmLocations;

class LocationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $ar_locations=[
            ["id"=>"01","name"=>"Main Store"],//default location
        ];

        foreach ($ar_locations as $location) {
            SktmLocations::updateOrCreate([
                'id' => $location['id']
            ],$location);
        }
    }
}
