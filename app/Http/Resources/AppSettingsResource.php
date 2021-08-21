<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AppSettingsResource extends JsonResource
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
            "group_tables"=>array(
                (object)array("id"=>1,"display_name"=>config("global.group1_name")),
                (object)array("id"=>2,"display_name"=>config("global.group2_name")),
                (object)array("id"=>3,"display_name"=>config("global.group3_name")),
                (object)array("id"=>4,"display_name"=>config("global.group4_name")),
                (object)array("id"=>5,"display_name"=>config("global.group5_name")),
                (object)array("id"=>6,"display_name"=>config("global.group6_name"))
            )
            ];
    }
}
