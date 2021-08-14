<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePmGroup1 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pm_group1', function (Blueprint $table) {
            // $table->string('id',50)->primary();
            // $table->text('name')->nullable();
            // $table->tinyInteger('active')->default(1);
            // $table->string('displayname',200);
            // $table->string('displayname_si',200);
            // $table->double('price_cost', 8, 2)->default(0);
            // $table->double('price_sell', 8, 2)->default(0);
            
            $table->string('id',20)->primary();
            $table->string('name',60);
            $table->tinyInteger('active')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pm_group1');
    }
}
