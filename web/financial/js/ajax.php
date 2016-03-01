<?php 
 $code = $_GET['code'];
 if($code=='123')
 {
    $arr = array("result"=>true,"code"=>$code,"msg"=>0);
 }else{
    $arr = array("result"=>false,"code"=>$code,"msg"=>0); 
 }
 echo  json_encode($arr); 
?>