<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PmUomGroupHasPmUom extends Model
{
    use HasFactory;

    protected $table = 'uom_group_has_pm_uom';
    protected $fillable = ['pm_uom_group_id','pm_uom_id','vol_of_smallest_uom'];
    public $incrementing = false;
}
