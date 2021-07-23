<?php

namespace App\Http\Resources;

use App\Exceptions\AuthenticationException;
use Exception;

use Illuminate\Http\Resources\Json\JsonResource;

class ErrorResource extends JsonResource
{

   

    public static $wrap = 'error';

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'code' => $this->getCode(),
            'message' => $this->getMessage(),
        ];
    }

    /**
     * Customize the outgoing response for the resource.
     *
     * @param  \Illuminate\Http\Request
     * @param  \Illuminate\Http\Response
     * @return void
     */
    public function withResponse($request, $response)
    {
        if($this->resource instanceof AuthenticationException){
            $response->setStatusCode(401);
        }else{
            $response->setStatusCode(500);
        } 
    }
   
}
