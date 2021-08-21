<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class GroupMappingResource extends JsonResource
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
            'id' => $this->id,
            'group1' =>$this->group1,
            'group1_name' =>$this->group1["name"],
            'group2' => $this->group2,
            'group2_name' =>$this->group2["name"],
            'group3' => $this->group3,
            'group3_name' =>$this->group3["name"],
            'group4' => $this->group4,
            'group4_name' =>$this->group4["name"],
            'group5' => $this->group5,
            'group5_name' =>$this->group5["name"],
            'group6' => $this->group6,
            'group6_name' =>$this->group6["name"],
        ];
        
    }


    public function with($request)
    {
        return [
            'meta' => [
                'count' => $this->collection->count()
            ],
        ];
    }
}
