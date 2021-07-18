<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'firstname' => $this->firstname,
            'lastname' => $this->lastname,
            'email' => $this->email,
            'permissions'=>$this->userRole->userRolePermissions
        ];
    }
}
