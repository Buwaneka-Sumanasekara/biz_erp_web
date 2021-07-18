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

    public function userRolePermissions()
    {
        return $this->hasMany(UmUserRoleHasPmPermissions::class,'um_user_role_id','id');
    }
    public function users()
    {
        return $this->hasMany(UmUser::class,'um_user_role_id','id');
    }
}
