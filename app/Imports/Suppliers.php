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


use App\Models\SmSupplier;

use Illuminate\Support\Str;


class Suppliers implements ToCollection, WithProgressBar,WithHeadingRow,SkipsOnFailure,HasReferencesToOtherSheets,WithCalculatedFormulas
{
    use Importable;

   
  
    public function collection(Collection $rows)
    {

     
        foreach ($rows as $row) 
        {
         
            if(isset($row["name"])){

                SmSupplier::updateOrCreate([
                    'id' => $row["id"]
                ],[
                    'id' => $row["id"],
                    'name' =>$row["name"],
                    'active'=>1,
                    'can_remove'=>($row["id"]==="S0000"?0:1)
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