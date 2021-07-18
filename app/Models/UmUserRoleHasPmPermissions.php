<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UmUserRoleHasPmPermissions extends Model
{
      /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'um_user_role_has_pm_permissions';
    protected $fillable = ['um_user_role_id','pm_permissions_id'];
    public $incrementing = false;

    public function userRoles()
    {
        return $this->hasMany(UmUserRole::class,"um_user_role_id","id");
    }

    public function permissions()
    {
        return $this->hasMany(PmPermissions::class,"pm_permissions_id","id");
    }
}
