<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\PmUom;
use App\Models\PmUomGroup;

use App\Http\Resources\UomResource;
use App\Http\Resources\UomGroupResource;

class UomController extends Controller
{
    public function createUOM(Request $request)
    {
       try {
        $request->validate([
            'name' => 'required',
        ],[
            'name.required' => 'Unit of measure :attribute is required.'
        ]); 
        $NextUnitId=CommonHelper::getNextUOMId();
        $group = PmUom::create([
            'id' => $NextUnitId,
            'name' => $request->get('name'),
            'active'=>1
        ]);
        return new GeneralResource((object)array("message"=>"Unit of measure saved successfully"));
       }  catch (\Exception $e) {
        return (new ErrorResource($e));
       } 
    }

    public function updateUOM(Request $request,$id)
    {
       try {
        $request->validate([
            'name' => 'required',
        ],[
            'name.required' => 'Unit of measure :attribute is required.'
        ]); 
        $unit = PmUom::find($id);
        if($unit!==null){

            if($request->get('name')){
                $unit->name= $request->get('name');
            }
            if($request->get('active')){
                $unit->active= $request->get('active');
            }
            $unit->save();
            return new GeneralResource((object)array("message"=>"Unit of measure updated successfully"));
        }else{
            throw new ResourceNotFoundException("Unit Of measure");
        }
       }  catch (\Exception $e) {
        return (new ErrorResource($e));
       } 
    }

    public function getAllUOMs(Request $request,String $type="")
    {
        try {  
            $UOM=null;
            if($type=="active"){
                $UOM=PmUom::where("active","=",1)->get();
            }else{
                $UOM=PmUom::all();
            }
            return UomResource::collection($UOM);
          } catch (\Exception $e) {
            return (new ErrorResource($e));
           } 
    }

     public function getUOM(Request $request,$id)
    {
        try {  
            return new UomResource(PmUom::findOrFail($id));
          } catch (\Exception $e) {
            return (new ErrorResource($e));
           } 
    }


    //unit of measure group

    public function createUOMGroup(Request $request)
    {
       try {
        $request->validate([
            'name' => 'required',
        ],[
            'name.required' => 'Unit of measure :attribute is required.'
        ]); 
        $NextUOMGroupId=CommonHelper::getNextUOMGroupId();
        $group = PmUomGroup::create([
            'id' => $NextUOMGroupId,
            'name' => $request->get('name'),
            'active'=>1
        ]);
        return new GeneralResource((object)array("message"=>"Unit of measure group saved successfully"));
       }  catch (\Exception $e) {
        return (new ErrorResource($e));
       } 
    }

    public function updateUOMGroup(Request $request,$id)
    {
       try {
        $request->validate([
            'name' => 'required',
        ],[
            'name.required' => 'Unit of measure group :attribute is required.'
        ]); 
        $UOMGroup = PmUomGroup::find($id);
        if($UOMGroup!==null){

            if($request->get('name')){
                $UOMGroup->name= $request->get('name');
            }
            if($request->get('active')){
                $UOMGroup->active= $request->get('active');
            }
            $UOMGroup->save();
            return new GeneralResource((object)array("message"=>"Unit of measure group updated successfully"));
        }else{
            throw new ResourceNotFoundException("Unit Of measure");
        }
       }  catch (\Exception $e) {
        return (new ErrorResource($e));
       } 
    }

    public function getAllUOMGroups(Request $request,String $type="")
    {
        try {  
            $UOMGroup=null;
            if($type=="active"){
                $UOMGroup=PmUomGroup::where("active","=",1)->get();
            }else{
                $UOMGroup=PmUomGroup::all();
            }
            return UomGroupResource::collection($UOMGroup);
          } catch (\Exception $e) {
            return (new ErrorResource($e));
           } 
    }

     public function getUOMGroup(Request $request,$id)
    {
        try {  
            return new UomGroupResource(PmUomGroup::findOrFail($id));
          } catch (\Exception $e) {
            return (new ErrorResource($e));
           } 
    }

}
