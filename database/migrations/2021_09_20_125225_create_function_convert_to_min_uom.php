<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;

class CreateFunctionConvertToMinUom extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::unprepared('

            CREATE FUNCTION function_convert_to_min_uom(in_uom_group_id VARCHAR(50),in_uom_id VARCHAR(20),in_value DOUBLE)
            
            RETURNS DOUBLE
            
            READS SQL DATA
            DETERMINISTIC
            BEGIN
                DECLARE VOL_AMT DOUBLE;
                SELECT vol_of_smallest_uom*in_value INTO VOL_AMT from pm_uom_group_has_pm_uom WHERE pm_uom_group_id=in_uom_group_id AND pm_uom_id=in_uom_id; 
                RETURN VOL_AMT;   
            END
        
        ');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::unprepared('DROP FUNCTION function_convert_to_min_uom');
    }
}
