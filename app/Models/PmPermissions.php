<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PmPermissions extends Model
{
       /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'pm_permissions';
    public $incrementing = false;


    public function roles()
    {
      return $this->belongsToMany(UmUserRole::class,'um_user_role_has_pm_permissions',"pm_permissions_id",'um_user_role_id');
    }
}
