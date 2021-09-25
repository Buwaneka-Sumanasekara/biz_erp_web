<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;

class CreateFunctionConvertToMaxUom extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::unprepared('

            CREATE FUNCTION function_convert_to_max_uom(in_uom_group_id VARCHAR(50),in_uom_id VARCHAR(20),in_value DOUBLE)
            
            RETURNS DOUBLE
            
            READS SQL DATA
            DETERMINISTIC
            BEGIN
                DECLARE VOL_AMT DOUBLE;
                DECLARE MAX_UOM_ID VARCHAR(20);
                DECLARE MAX_UOM_VOL DOUBLE;
                DECLARE VOL_CONV_TO_MIN DOUBLE;

                SELECT pm_uom_id INTO MAX_UOM_ID FROM pm_uom_group_has_pm_uom WHERE pm_uom_group_id=in_uom_group_id  ORDER BY vol_of_smallest_uom DESC limit 1;

                SELECT vol_of_smallest_uom INTO MAX_UOM_VOL FROM pm_uom_group_has_pm_uom WHERE pm_uom_group_id=in_uom_group_id  ORDER BY vol_of_smallest_uom DESC limit 1;
                
                
                IF MAX_UOM_ID=in_uom_id THEN
                   SET  VOL_AMT = in_value;
                ELSE
                   SET VOL_CONV_TO_MIN = function_convert_to_min_uom(in_uom_group_id,in_uom_id,in_value);
                   SET VOL_AMT = (VOL_CONV_TO_MIN/MAX_UOM_VOL);   
                END IF;

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
        DB::unprepared('DROP FUNCTION function_convert_to_max_uom');
    }
}
