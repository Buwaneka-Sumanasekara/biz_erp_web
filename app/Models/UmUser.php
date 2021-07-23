<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class UmUser extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'um_user';
    protected $fillable = ['id', 'firstname', 'lastname','email', 'um_user_status_id', 'um_user_role_id'];
    public $incrementing = false;

    public function userRole()
    {
        return $this->belongsTo(UmUserRole::class, 'um_user_role_id', 'id');
    }
   

}
