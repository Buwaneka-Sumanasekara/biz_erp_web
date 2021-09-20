<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePmUomTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pm_uom', function (Blueprint $table) {
            $table->string('id',20)->primary();
            $table->string('name',60);
            $table->tinyInteger('active')->default(1);
            $table->string('sym',5)->nullable()->default("");
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
        Schema::dropIfExists('pm_uom');
    }
}
