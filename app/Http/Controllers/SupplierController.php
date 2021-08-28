<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Helpers\CommonHelper;

use Illuminate\Support\Facades\Validator;
use App\Models\SmSupplier;

use App\Http\Resources\ErrorResource;
use App\Http\Resources\SupplierResource;
use App\Http\Resources\GeneralResource;

use Illuminate\Validation\Rule;

use App\Http\Resources\SupplierResouce;

use App\Exceptions\ResourceNotFoundException;

class SupplierController extends Controller
{
    public function getSupplierList(Request $request,String $type="")
    {
          try {  
            $Suppliers=null;
            if($type=="active"){
                $Suppliers=SmSupplier::where("active","=",1)->get();
            }else{
                $Suppliers=SmSupplier::all();
            }
          //  dd($Suppliers);
            return SupplierResource::collection($Suppliers);
          } catch (\Exception $e) {
            return (new ErrorResource($e));
           } 
    }

    public function createSupplier(Request $request)
    {
        try {
            $request->validate([
                'name' => 'required',
                'contact1' => 'nullable|numeric|min:10',
                'contact2' => 'nullable|numeric|min:10',
                'email_address' => 'nullable|email',
            ],[
                'contact1.min:10' => 'Phone number 1 not valid',
                'contact2.min' => 'Phone number 2 not valid',
                'contact1.numeric' => 'Phone number 1 not valid',
                'contact2.numeric' => 'Phone number 2 not valid',
                'email_address.email' => 'Email not valid',
            ]); 
  
                $NextSupplierId=CommonHelper::getNextSupplierId();

                SmSupplier::create([
                    'id' => $NextSupplierId,
                    'name' => $request->get('name'),
                    'contact1' => $request->get('contact1'),
                    'contact2' => $request->get('contact2'),
                    'active' => 1,
                    "can_remove"=>1,
                    'email_address' => $request->get('email_address'),
                ]);
                return new GeneralResource((object)array("message"=>"Supplier saved successfully"));
        
            
           }  catch (\Exception $e) {
            return (new ErrorResource($e));
           } 
    }


    public function updateSupplier(Request $request,$id)
    {
        try {
            $request->validate([
                'name' => 'required',
                'contact1' => 'nullable|numeric|min:10',
                'contact2' => 'nullable|numeric|min:10',
                'email_address' => 'nullable|email',
            ],[
                'contact1.min:10' => 'Phone number 1 not valid',
                'contact2.min' => 'Phone number 2 not valid',
                'contact1.numeric' => 'Phone number 1 not valid',
                'contact2.numeric' => 'Phone number 2 not valid',
                'email_address.email' => 'Email not valid',
            ]); 
  
                
            $supplier = SmSupplier::find($id);
            dd($supplier->canRemove());
            if($supplier!==null && $supplier->canRemove()){
                $supplier->name= $request->get('name');
                $supplier->active= $request->get('active');
                $supplier->contact1= $request->get('contact1');
                $supplier->contact2= $request->get('contact2');
                $supplier->email_address= $request->get('email_address');
                 
                return new GeneralResource((object)array("message"=>"Supplier updated successfully"));
            
            }else{
                throw new ResourceNotFoundException("Supplier");
            }
            
            
           }  catch (\Exception $e) {
            return (new ErrorResource($e));
           } 
    }


}
