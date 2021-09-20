<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PmUomGroup extends Model
{
    
    use HasFactory;
    protected $primaryKey = 'id';
    protected $keyType = 'string';
    protected $table = 'pm_uom_group';
    protected $fillable = ['id','name','active','smallest_uom_id'];
    public $incrementing = false;
}
