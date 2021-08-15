<?php

namespace App\Imports;

use App\Helpers\CommonHelper;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithProgressBar;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\SkipsOnFailure;
use Maatwebsite\Excel\Validators\Failure;
use Maatwebsite\Excel\Concerns\WithCalculatedFormulas;
use Maatwebsite\Excel\Concerns\HasReferencesToOtherSheets;


use App\Models\PmGroupMapping;

use Illuminate\Support\Str;


class GroupMapping implements ToCollection, WithProgressBar,WithHeadingRow,SkipsOnFailure,HasReferencesToOtherSheets,WithCalculatedFormulas
{
    use Importable;

   
  
    public function collection(Collection $rows)
    {

        $i=1;
        foreach ($rows as $row) 
        {
           
            
            if(isset($row["g1_code"]) && isset($row["g2_code"]) && isset($row["g3_code"])
            && isset($row["g4_code"]) && isset($row["g5_code"]) && isset($row["g6_code"])
            ){

                $GroupMapping=PmGroupMapping::where([["pm_group1_id","=",$row["g1_code"]],
                ["pm_group2_id","=",$row["g2_code"]],
                ["pm_group3_id","=",$row["g3_code"]],
                ["pm_group4_id","=",$row["g4_code"]],
                ["pm_group5_id","=",$row["g5_code"]],
                ["pm_group6_id","=",$row["g6_code"]]
            ]);

                if(!($GroupMapping->exists())){
                    PmGroupMapping::create([
                        'id'=> ($i),  
                       'pm_group1_id'=>$row["g1_code"],
                       'pm_group2_id'=>$row["g2_code"],
                       'pm_group3_id'=>$row["g3_code"],
                       'pm_group4_id'=>$row["g4_code"],
                       'pm_group5_id'=>$row["g5_code"],
                       'pm_group6_id'=>$row["g6_code"],
                       ]);
                       $i++;
                }    
                
                
            }
           
        }
    }

    public function onFailure(Failure ...$failures)
    {
        error($failures);
        // Handle the failures how you'd like.
    }
    
}