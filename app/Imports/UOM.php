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


use App\Models\PmUom;

use Illuminate\Support\Str;


class Uom implements ToCollection, WithProgressBar,WithHeadingRow,SkipsOnFailure,HasReferencesToOtherSheets,WithCalculatedFormulas
{
    use Importable;

   
  
    public function collection(Collection $rows)
    {

     
        foreach ($rows as $row) 
        {
         
            if(isset($row["name"])){

                PmUom::updateOrCreate([
                    'id' => $row["id"]
                ],[
                    'id' => $row["id"],
                    'name' =>$row["name"],
                    'active'=>1,
                    'sym' =>$row["sym"],
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