<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class GeneralResource extends JsonResource
{
    public static $wrap = "data";
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            "success"=>true,
            "message"=>(isset($this->message)?$this->message:"success")
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

    /**
     * Get additional data that should be returned with the resource array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function with($request)
    {
        return [
            'meta' => [
                'responsed_time' => "",
            ],
        ];
    }
}
