<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUomGroupHasPmUomTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('uom_group_has_pm_uom', function (Blueprint $table) {
            $table->string('pm_uom_group_id',50);
            $table->string('pm_uom_id',20);
            $table->double('vol_of_smallest_uom');
            $table->foreign('pm_uom_group_id')->references('id')->on('pm_uom_group');
            $table->foreign('pm_uom_id')->references('id')->on('pm_uom');
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
        Schema::dropIfExists('uom_group_has_pm_uom');
    }
}
