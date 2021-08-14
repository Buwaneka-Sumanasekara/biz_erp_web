<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

use App\Http\Resources\ErrorResource;
use Illuminate\Validation\Rule;
use App\Helpers\CommonHelper;

use App\Http\Resources\GeneralResource;

class GroupController extends Controller
{
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
}
