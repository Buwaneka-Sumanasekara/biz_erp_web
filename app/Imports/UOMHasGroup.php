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


use App\Models\PmUomGroupHasPmUom;

use Illuminate\Support\Str;


class UomHasGroup implements ToCollection, WithProgressBar,WithHeadingRow,SkipsOnFailure,HasReferencesToOtherSheets,WithCalculatedFormulas
{
    use Importable;

   
  
    public function collection(Collection $rows)
    {

     
        foreach ($rows as $row) 
        {
         
            if(isset($row["group_id"])){

                PmUomGroupHasPmUom::updateOrCreate([
                    'pm_uom_group_id' => $row["group_id"],
                    'pm_uom_id' =>$row["uom_id"],
                    'vol_of_smallest_uom'=>$row["vol"]
                ]);
            }   
        }
    }

    public function onFailure(Failure ...$failures)
    {
        error($failures);
        // Handle the failures how you'd like.
    }
    
}