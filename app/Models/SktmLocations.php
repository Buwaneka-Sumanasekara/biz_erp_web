<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SktmLocations extends Model
{
    protected $table = 'stkm_locations';
    protected $primaryKey = 'id';
    protected $fillable = ['id','name','active'];
    public $incrementing = false;
    use HasFactory;
}
