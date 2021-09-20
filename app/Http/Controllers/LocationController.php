<?php

namespace App\Http\Controllers;

use App\Exceptions\ResourceNotFoundException;
use App\Helpers\CommonHelper;
use App\Http\Resources\ErrorResource;
use App\Http\Resources\GeneralResource;
use App\Http\Resources\LocationResource;
use App\Models\SktmLocations;
use App\Models\StkmLocations;
use Illuminate\Http\Request;

class LocationController extends Controller
{

    public function getLocationList(Request $request,String $type="")
    {
          try {  
            $Locations=null;
            if($type=="active"){
                $Locations=StkmLocations::where("active","=",1)->get();
            }else{
                $Locations=StkmLocations::all();
            }
        
            return LocationResource::collection($Locations);
          } catch (\Exception $e) {
            return (new ErrorResource($e));
           } 
    }


    public function createLocation(Request $request)
    {
        try {
            $request->validate([
                'name' => 'required',
               
            ]); 
  
                $NextLocationId=CommonHelper::getNextLocationId();

                SktmLocations::create([
                    'id' => $NextLocationId,
                    'name' => $request->get('name'),
                     'active' => 1,
                   
                ]);
                return new GeneralResource((object)array("message"=>"Location saved successfully"));
        
            
           }  catch (\Exception $e) {
            return (new ErrorResource($e));
           } 
    }

    public function updateLocation(Request $request,$id)
    {
        try {
            $request->validate([
                'name' => 'required',
                
            ]); 
  
                
            $location = StkmLocations::find($id);
            if($location!==null){

                    if($request->get('name')){
                        $location->name= $request->get('name');
                    }
  
                        $location->active= $request->get('active');
                    
                   
                  
                   
                     $location->save();
                    return new GeneralResource((object)array("message"=>"Location updated successfully"));
              
            }else{
                throw new ResourceNotFoundException("Location");
            }
            
            
           }  catch (\Exception $e) {
            return (new ErrorResource($e));
           } 
    }
}
