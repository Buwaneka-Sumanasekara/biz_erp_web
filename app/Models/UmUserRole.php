<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UmUserRole extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'um_user_role';
    protected $fillable = ['id','name'];
    public $incrementing = false;

    
    public function users()
    {
        return $this->hasMany(UmUser::class,'um_user_role_id','id');
    }

    public function permissions()
    {
        return $this->belongsToMany(PmPermissions::class,'um_user_role_has_pm_permissions','um_user_role_id',"pm_permissions_id");
    }
}
