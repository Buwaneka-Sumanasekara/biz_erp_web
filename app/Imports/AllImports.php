<?php

namespace App\Imports;

use Maatwebsite\Excel\Concerns\WithMultipleSheets;
use Maatwebsite\Excel\Concerns\WithProgressBar;
use Maatwebsite\Excel\Concerns\SkipsUnknownSheets;
use Maatwebsite\Excel\Concerns\WithConditionalSheets;
use Maatwebsite\Excel\Concerns\Importable;
use Illuminate\Support\Arr;

class AllImports implements WithMultipleSheets,WithProgressBar,SkipsUnknownSheets
{
    use Importable;
   

    public $Mode="all";
  
    public function __construct(string $Mode)
    {
        $this->Mode=$Mode; 
    }



    public function sheets(): array
    {
        $arImports=array();

        if($this->Mode=="all" || $this->Mode=="group"){
            $arImports = array_merge($arImports,['G1' => (new GroupImport(1))->withOutput($this->output),
                'G2' => (new GroupImport(2))->withOutput($this->output),
                'G3' => (new GroupImport(3))->withOutput($this->output),
                'G4' => (new GroupImport(4))->withOutput($this->output),
                'G5' => (new GroupImport(5))->withOutput($this->output),
                'G6' => (new GroupImport(6))->withOutput($this->output),
            ]);      
        }if($this->Mode=="all" || $this->Mode=="group-mapping"){
            $arImports = array_merge($arImports,[
                'ITEMS' => (new GroupMapping())->withOutput($this->output),
            ]);      
        }if($this->Mode=="all" || $this->Mode=="suppliers"){
            $arImports = array_merge($arImports,[
                'SUPPLIERS' => (new Suppliers())->withOutput($this->output),
            ]);      
        }if($this->Mode=="all" || $this->Mode=="uom"){
            $arImports = array_merge($arImports,[
                'UOM' => (new UOM())->withOutput($this->output),
            ]);      
        }if($this->Mode=="all" || $this->Mode=="uom-group"){
            $arImports = array_merge($arImports,[
                'UOM_GROUP' => (new UOMGroup())->withOutput($this->output),
            ]);      
        }if($this->Mode=="all" || $this->Mode=="uom-has-group"){
            $arImports = array_merge($arImports,[
                'UOM_MAPPING' => (new UOMHasGroup())->withOutput($this->output),
            ]);      
        }

        return $arImports;
    }

    public function onUnknownSheet($sheetName)
    {
        // E.g. you can log that a sheet was not found.
        info("Sheet {$sheetName} was skipped");
    }

    
}