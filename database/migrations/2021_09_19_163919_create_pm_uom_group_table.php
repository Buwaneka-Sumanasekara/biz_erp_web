<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePmUomGroupTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pm_uom_group', function (Blueprint $table) {
            $table->string('id',50)->primary();
            $table->string('name',60);
            $table->tinyInteger('active')->default(1);
            $table->string('smallest_uom_id',20);
            $table->foreign('smallest_uom_id')->references('id')->on('pm_uom');
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
        Schema::dropIfExists('pm_uom_group');
    }
}
