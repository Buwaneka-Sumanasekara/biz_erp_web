<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PmGroupMapping extends Model
{
    protected $table = 'pm_group_mapping';
    protected $fillable = ['id','pm_group1_id','pm_group2_id','pm_group3_id','pm_group4_id','pm_group5_id','pm_group6_id'];
    public $incrementing = false;

    public function group1()
    {
        return $this->belongsTo(PmGroup1::class, 'pm_group1_id', 'id');
    }
    public function group2()
    {
        return $this->belongsTo(PmGroup2::class, 'pm_group2_id', 'id');
    }
    public function group3()
    {
        return $this->belongsTo(PmGroup3::class, 'pm_group3_id', 'id');
    }
    public function group4()
    {
        return $this->belongsTo(PmGroup4::class, 'pm_group4_id', 'id');
    }
    public function group5()
    {
        return $this->belongsTo(PmGroup5::class, 'pm_group5_id', 'id');
    }
    public function group6()
    {
        return $this->belongsTo(PmGroup6::class, 'pm_group6_id', 'id');
    }
    
}
