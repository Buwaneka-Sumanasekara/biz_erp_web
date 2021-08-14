<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

use App\Http\Resources\ErrorResource;
use Illuminate\Validation\Rule;
use App\Helpers\CommonHelper;

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
            'group_no.required' => 'group no is required.'
        ]); 

        $GroupNo=CommonHelper::getNextGroupId($request->group_no);
        

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
