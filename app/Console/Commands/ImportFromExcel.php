<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use App\Imports\AllImports;

class ImportFromExcel extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'import:excel_data {mode}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Import excel data';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {

        $mode=$this->argument('mode');

        $this->output->title('Starting importing all data');
        (new AllImports($mode))->withOutput($this->output)->import('public/imports/NHItems.xlsx');
        $this->output->success('Import all data successful');
        
    }
}
