<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CurrentUserResource extends JsonResource
{
    public static $wrap = 'user';
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            "user"=>new UserResource($this),
            "permissions"=>$this->userRole->permissions,
            "app_settings"=>new AppSettingsResource($this)
        ];
    }
}
