<?php

namespace App\Imports;

use Maatwebsite\Excel\Concerns\WithMultipleSheets;
use Maatwebsite\Excel\Concerns\WithProgressBar;
use Maatwebsite\Excel\Concerns\SkipsUnknownSheets;
use Maatwebsite\Excel\Concerns\WithConditionalSheets;
use Maatwebsite\Excel\Concerns\Importable;

class GroupAllImport implements WithMultipleSheets,WithProgressBar,SkipsUnknownSheets
{
    use Importable;
   
    // public function conditionalSheets(): array
    // {
    //     return [
    //         'G1' => (new GroupImport(1))->withOutput($this->output),
    //         'G2' => (new GroupImport(2))->withOutput($this->output),
    //         'G3' => (new GroupImport(3))->withOutput($this->output),
    //         'G4' => (new GroupImport(4))->withOutput($this->output),
    //         'G5' => (new GroupImport(5))->withOutput($this->output),
    //         'G6' => (new GroupImport(6))->withOutput($this->output),
    //     ];
    // }
    public function sheets(): array
    {
        return [
            'G1' => (new GroupImport(1))->withOutput($this->output),
            'G2' => (new GroupImport(2))->withOutput($this->output),
            'G3' => (new GroupImport(3))->withOutput($this->output),
            'G4' => (new GroupImport(4))->withOutput($this->output),
            'G5' => (new GroupImport(5))->withOutput($this->output),
            'G6' => (new GroupImport(6))->withOutput($this->output),
        ];
    }

    public function onUnknownSheet($sheetName)
    {
        // E.g. you can log that a sheet was not found.
        info("Sheet {$sheetName} was skipped");
    }

    
}