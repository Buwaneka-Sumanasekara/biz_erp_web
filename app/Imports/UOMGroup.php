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


use App\Models\PmUomGroup;

use Illuminate\Support\Str;


class UomGroup implements ToCollection, WithProgressBar,WithHeadingRow,SkipsOnFailure,HasReferencesToOtherSheets,WithCalculatedFormulas
{
    use Importable;

   
  
    public function collection(Collection $rows)
    {

     
        foreach ($rows as $row) 
        {
         
            if(isset($row["name"])){

                PmUomGroup::updateOrCreate([
                    'id' => $row["group_id"]
                ],[
                    'id' => $row["group_id"],
                    'name' =>$row["name"],
                    'active'=>1,
                    'smallest_uom_id'=>$row["default_uom"]
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