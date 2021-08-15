<?php

namespace App\Console\Commands;

use App\Imports\GroupAllImport;
use Illuminate\Console\Command;

class GroupImportExcel extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'import:excel_group';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Import group';

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
        $this->output->title('Starting import groups');
        (new GroupAllImport)->withOutput($this->output)->import('public/imports/NHItems.xlsx');
        $this->output->success('Import groups successful');
    }
}
