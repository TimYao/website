<?php
  $text = $_GET['text'];
  if($text==="aaa" || $text==="aaaaaaaaa")
  {
     $testarr = array("status"=>1);  
  }else{
  	 $testarr = array("status"=>0);
  }
  echo json_encode($testarr);
?>