<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PmUom extends Model
{
    use HasFactory;
    protected $table = 'pm_uom';
    protected $fillable = ['id','name','active'];
    public $incrementing = false;
}
