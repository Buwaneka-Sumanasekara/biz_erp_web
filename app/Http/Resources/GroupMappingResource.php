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
            'group2' => $this->group2,
            'group3' => $this->group3,
            'group4' => $this->group4,
            'group5' => $this->group5,
            'group6' => $this->group6,
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
