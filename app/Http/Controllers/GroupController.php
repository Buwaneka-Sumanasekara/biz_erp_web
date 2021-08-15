<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

use App\Http\Resources\ErrorResource;
use Illuminate\Validation\Rule;
use App\Helpers\CommonHelper;

use App\Models\PmGroupMapping;


use App\Exceptions\ResourceAlreadyExistsException;

use App\Http\Resources\GeneralResource;
use App\Http\Resources\GroupMappingResource;

class GroupController extends Controller
{


    public function getGroupList(Request $request,$no)
    {
          try {
             $GroupCollection=CommonHelper::getGroupClassByNo($no)::get();

             return $GroupCollection;
          } catch (\Exception $e) {
            return (new ErrorResource($e));
           } 
    }

    public function createGroup(Request $request)
    {
       try {
        $request->validate([
            'name' => 'required',
            'group_no' => 'required|in:1,2,3,4,5,6'
        ],[
            'name.required' => 'group :attribute is required.',
            'group_no.required' => 'group no is required.',
            'group_no.in' => 'Invalid group no'
        ]); 
        $NextGroupId=CommonHelper::getNextGroupId($request->group_no);
        $group = CommonHelper::getGroupClassByNo($request->group_no)::create([
            'id' => $NextGroupId,
            'name' => $request->get('name'),
        ]);
        return new GeneralResource((object)array("message"=>"group saved successfully"));
       }  catch (\Exception $e) {
        return (new ErrorResource($e));
       } 
    }

    public function testGroupNo(Request $request,$group_no)
    {
        try {
            CommonHelper::getNextGroupId($group_no);
        }catch (\Exception $e) {
            return (new ErrorResource($e));
        } 
    }

    public function createGroupMapping(Request $request)
    {
        try {
            $request->validate([
                'group_1' => 'required|exists:pm_group1,id',
                'group_2' => 'required|exists:pm_group2,id',
                'group_3' => 'required|exists:pm_group3,id',
                'group_4' => 'required|exists:pm_group4,id',
                'group_5' => 'required|exists:pm_group5,id',
                'group_6' => 'required|exists:pm_group6,id',
            ],[
                'group_1.required' => 'Group 1 is required.',
                'group_2.required' => 'Group 1 is required.',
                'group_3.required' => 'Group 1 is required.',
                'group_4.required' => 'Group 1 is required.',
                'group_5.required' => 'Group 1 is required.',
                'group_6.required' => 'Group 1 is required.',
            ]); 

            $GroupMapping=PmGroupMapping::where([["pm_group1_id","=",$request->group_1],
                ["pm_group2_id","=",$request->group_2],
                ["pm_group3_id","=",$request->group_3],
                ["pm_group4_id","=",$request->group_4],
                ["pm_group5_id","=",$request->group_5],
                ["pm_group6_id","=",$request->group_6]
            ]);

            $count=$GroupMapping->count();

            if ($count === 0) {
                PmGroupMapping::create([
                 'id'=> ((int)$GroupMapping->max("id")+1),  
                'pm_group1_id'=>$request->group_1,
                'pm_group2_id'=>$request->group_2,
                'pm_group3_id'=>$request->group_3,
                'pm_group4_id'=>$request->group_4,
                'pm_group5_id'=>$request->group_5,
                'pm_group6_id'=>$request->group_6,
                ]);
                return new GeneralResource((object)array("message"=>"group saved successfully"));
            }else{
                throw new ResourceAlreadyExistsException();
            }  
        } catch (\Exception $e) {
            return (new ErrorResource($e));
        }
    }


    public function getAllGroupMappings(Request $request)
    {
          try {
             $GroupMappingCollection=PmGroupMapping::orderBy("pm_group1_id")->get();
             return GroupMappingResource::collection($GroupMappingCollection);
          } catch (\Exception $e) {
            return (new ErrorResource($e));
           } 
    }

    public function getAllGroupMappingsBelongstoGroup1Id(Request $request,String $Group1Id)
    {
          try {
             $GroupMappingCollection=PmGroupMapping::where("pm_group1_id","=",$Group1Id)->get();
             return GroupMappingResource::collection($GroupMappingCollection);
          } catch (\Exception $e) {
            return (new ErrorResource($e));
           } 
    }

}
