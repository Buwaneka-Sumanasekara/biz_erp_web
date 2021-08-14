<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PmGroup6 extends Model
{
    use HasFactory;
    protected $table = 'pm_group6';
    protected $fillable = ['id','name','active'];
    public $incrementing = false;

    public function group_mapping()
    {
        return $this->hasMany(PmGroupMapping::class,'pm_group6_id','id');
    }
}
