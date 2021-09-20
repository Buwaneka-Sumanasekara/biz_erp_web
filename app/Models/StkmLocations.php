<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StkmLocations extends Model
{
    protected $table = 'stkm_locations';
    protected $fillable = ['id','name','active'];
    public $incrementing = false;
 
    use HasFactory;
}
