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

use Illuminate\Support\Str;


class GroupImport implements ToCollection, WithProgressBar,WithHeadingRow,SkipsOnFailure
{
    use Importable;

    public $GroupNo=0;
  
    public function __construct(int $GroupNo)
    {
        $this->GroupNo=$GroupNo;
        
    }


    public function collection(Collection $rows)
    {
        foreach ($rows as $row) 
        {
            if(isset($row["name"])){
                
                CommonHelper::getGroupClassByNo((string)$this->GroupNo)::updateOrCreate([
                    'id' => $row["code"],
                    'name' =>  Str::title($row["name"]),
                ]);
            }
           
        }
    }

    public function onFailure(Failure ...$failures)
    {
        error("Sheet {$failures} was skipped");
        // Handle the failures how you'd like.
    }
    
}