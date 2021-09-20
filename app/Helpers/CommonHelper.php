<?php
namespace App\Helpers;

use App\Models\PmGroup1;
use App\Models\PmGroup2;
use App\Models\PmGroup3;
use App\Models\PmGroup4;
use App\Models\PmGroup5;
use App\Models\PmGroup6;

use App\Models\SmSupplier;
use App\Models\PmUom;
use App\Models\PmUomGroup;

class CommonHelper
{
    public static function getNextGroupId($groupno): ?string
    {
        $Numberlength=3;//without group no
        $lastId=self::getGroupClassByNo($groupno)::max("id");
        $nextNo="G".$groupno;
        if($lastId===null){
           $nextNo=$nextNo."".str_pad("0",$Numberlength,"0",STR_PAD_LEFT);     
        }else{
            $WithoutPrefix=substr($lastId,2);
            $nextNo=$nextNo."".self::getSufixNumbers($WithoutPrefix,$Numberlength);   
        }
        return $nextNo;
    }

    public static function getGroupClassByNo($groupno)
    {
       switch($groupno){
        case "1":
            return PmGroup1::class; 
            break;
        case "2":
            return PmGroup2::class; 
            break;
        case "3":
            return PmGroup3::class; 
            break;
        case "4":
            return PmGroup4::class; 
            break;
        case "5":
            return PmGroup5::class; 
            break;
        case "6":
            return PmGroup6::class; 
            break;
       }
    }

    public static function getSufixNumbers($prevNo,$length)
    {
        try {
            $NextInt=((int)$prevNo)+1;
            return str_pad((string)$NextInt,$length,"0",STR_PAD_LEFT);
        } catch (\Exception $e) {
            throw $e;
        }
    }


    public static function getNextSupplierId(): ?string
    {
        $Numberlength=4;//without "S"
        $lastId=SmSupplier::max("id");
        $nextNo="S";
        if($lastId===null){
           $nextNo=$nextNo."".str_pad("0",$Numberlength,"0",STR_PAD_LEFT);     
        }else{
            $WithoutPrefix=substr($lastId,2);
            $nextNo=$nextNo."".self::getSufixNumbers($WithoutPrefix,$Numberlength);   
        }
        return $nextNo;
    }

    public static function getNextUOMId(): ?string
    {
        $Numberlength=3;//without "U"
        $lastId=PmUom::max("id");
        $nextNo="";
        if($lastId===null){
           $nextNo=$nextNo."".str_pad("0",$Numberlength,"0",STR_PAD_LEFT);     
        }else{
            $WithoutPrefix=substr($lastId,2);
            $nextNo=$nextNo."".self::getSufixNumbers($WithoutPrefix,$Numberlength);   
        }
        return $nextNo;
    }

    public static function getNextUOMGroupId(): ?string
    {
        $Numberlength=3;//without "UG"
        $lastId=PmUomGroup::max("id");
        $nextNo="";
        if($lastId===null){
           $nextNo=$nextNo."".str_pad("0",$Numberlength,"0",STR_PAD_LEFT);     
        }else{
            $WithoutPrefix=substr($lastId,2);
            $nextNo=$nextNo."".self::getSufixNumbers($WithoutPrefix,$Numberlength);   
        }
        return $nextNo;
    }

  
   
}