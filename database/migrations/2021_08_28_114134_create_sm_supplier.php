<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSmSupplier extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sm_supplier', function (Blueprint $table) {
            $table->string('id',50)->primary();
            $table->string('name',60);
            $table->tinyInteger('active')->default(1);
            $table->string('contact1',15)->nullable()->default("");
            $table->string('contact2',15)->nullable()->default("");
            $table->string('email_address',45)->nullable()->default("");
            $table->tinyInteger('can_remove')->default(1);
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
        Schema::dropIfExists('sm_supplier');
    }
}
