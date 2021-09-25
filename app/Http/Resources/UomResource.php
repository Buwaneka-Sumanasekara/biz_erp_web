<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UomResource extends JsonResource
{

    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'active' => ($this->active?true:false),
        ];
    }

    /**
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\JsonResponse|object
     */
    public function toResponse($request)
    {
        return parent::toResponse($request)->setStatusCode(200);
    }

  
}
