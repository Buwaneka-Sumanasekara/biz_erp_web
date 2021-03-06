<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            UserRoleSeeder::class,
            UserStatusSeeder::class,
            PermissionsSeeder::class,
            UserPermissionsSeeder::class,
            UserSeeder::class,
            GroupSeeder::class,
            SuppliersSeeder::class,
            UomSeeder::class,
        ]);
    }
}
