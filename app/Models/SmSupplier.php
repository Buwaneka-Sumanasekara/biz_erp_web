<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SmSupplier extends Model
{   
    protected $table = 'sm_supplier';
    protected $fillable = ['id','name','active','contact1','contact2','email_address','can_remove'];
    public $incrementing = false;
    use HasFactory;

    public function canRemove()
    {
        return ($this->can_remove==1);
    }
}
