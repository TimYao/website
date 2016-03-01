<?php 
$dataid = $_GET['dataid'];
$v1 = $_POST['v1'];
$v2 = $_POST['v2'];
$data = $_GET['data'];
$page = $_GET['page'];
if($dataid)
{
	$str = array(status=>true,html=>'<ul class="subul">'.
		'<li class="clearfix" data-id="-1" data-sid = "-1">'.
		   '<i></i>'.
		   '<span>不限</span>'.
		   '<i></i>'.
		'</li>'.
		'<li class="clearfix" data-id="2">'.
		   '<i></i>'.
		   '<span>安贞</span>'.
		   '<i></i>'.
        '</li>'.
        '<li class="clearfix" data-id="3">'.
           '<i></i>'.
           '<span>奥林匹克公园</span>'.
           '<i></i>'.
        '</li>'.
        '<li class="clearfix" data-id="4">'.
           '<i></i>'.
           '<span>安慧桥</span>'.
           '<i></i>'.
        '</li>'.
        '<li class="clearfix" data-id="5">'.
           '<i></i>'.
           '<span>北苑</span>'.
           '<i></i>'.
        '</li>'.
        '<li class="clearfix" data-id="6">'.
           '<i></i>'.
           '<span>百子湾</span>'.
           '<i></i>'.
        '</li>'.
        '<li class="clearfix" data-id="7">'.
           '<i></i>'.
           '<span>北沙滩</span>'.
           '<i></i>'.
        '</li>'.
        '<li class="clearfix" data-id="8">'.
           '<i></i>'.
           '<span>北工大</span><i></i>'.
        '</li>'.
        '<li class="clearfix" data-id="9">'.
            '<i></i>'.
            '<span>朝阳公园</span>'.
            '<i></i>'.
        '</li>'.
        '<li class="clearfix" data-id="10">'.
            '<i></i>'.
            '<span>cbd</span>'.
            '<i></i>'.
        '</li>'.
        '<li class="clearfix" data-id="11">'.
            '<i></i>'.
            '<span>通州公园</span>'.
            '<i></i>'.
        '</li>'.
        '<li class="clearfix" data-id="9">'.
            '<i></i>'.
            '<span>朝阳公园</span>'.
            '<i></i>'.
        '</li>'.
        '<li class="clearfix" data-id="10">'.
            '<i></i>'.
            '<span>cbd</span>'.
            '<i></i>'.
        '</li>'.
        '<li class="clearfix" data-id="11">'.
            '<i></i>'.
            '<span>通州公园</span>'.
            '<i></i>'.
        '</li>'.
        '<li class="clearfix" data-id="9">'.
            '<i></i>'.
            '<span>朝阳公园</span>'.
            '<i></i>'.
        '</li>'.
        '<li class="clearfix" data-id="10">'.
            '<i></i>'.
            '<span>cbd</span>'.
            '<i></i>'.
        '</li>'.
        '<li class="clearfix" data-id="11">'.
            '<i></i>'.
            '<span>通州公园1</span>'.
            '<i></i>'.
        '</li>'.
       '</ul>'); 
}else if($v1 && $v2)
{
   $str = array(status=>true,msg=>10);
}else if($data=='华')
{
   $str = array(status=>true,html=>'<li>'.
                '<a href="">华发颐园</a>'.
          '</li>
   ');
}else if($page==2){
   $str = array(status=>true,html=>'<section>'.
        '<div class="soliderTwo soliders">'.
          '<div class="solidc">'.
             '<ul class="scrollImg clearfix scrollcontrl">'.
                '<li><img src="images/solider2.png" alt=""  width="100%" height="100%"/></li>'.
                '<li><img src="images/solider2.png" alt="" width="100%" height="100%" /></li>'.
                '<li><img src="images/solider2.png" alt="" width="100%" height="100%" /></li>'.
             '</ul>'.   
          '</div>'.
          '<div class="divnumber">'.
             '<span class="smark"></span>'.
             '<span class="num">'.
                '<em></em>/<i></i>'.
             '</span>'.
          '</div>'.
        '</div>'.
        '<div class="backWhite wrapMainTop btoborder">'.
          '<div class="wrap">'.
             '<p class="title02">'.
              '<a href="" class="title03">红庭公寓岳111<span class="futitle">各庄北京丰台科丰桥西四环中路112号</span></a>'.
            '</p>'.
            '<p class="otherInfors">'.
               '<em>3.2元/m .天</em>'.
               '<span>300㎡  <b>|</b> 百货/购物中心  <b>|</b>  <i>刚刚</i></span>'.
            '</p>'.
          '</div>'.
        '</div>'.
      '</section>',has_more=>true);
}else if($page==3){
   $str = array(status=>true,html=>'<section>'.
        '<div class="soliderTwo soliders">'.
          '<div class="solidc">'.
             '<ul class="scrollImg clearfix scrollcontrl">'.
                '<li><img src="images/solider2.png" alt=""  width="100%" height="100%"/></li>'.
                '<li><img src="images/solider2.png" alt="" width="100%" height="100%" /></li>'.
                '<li><img src="images/solider2.png" alt="" width="100%" height="100%" /></li>'.
             '</ul>'.   
          '</div>'.
          '<div class="divnumber">'.
             '<span class="smark"></span>'.
             '<span class="num">'.
                '<em></em>/<i></i>'.
             '</span>'.
          '</div>'.
        '</div>'.
        '<div class="backWhite wrapMainTop btoborder">'.
          '<div class="wrap">'.
             '<p class="title02">'.
              '<a href="" class="title03">红庭公寓岳111<span class="futitle">各庄北京丰台科丰桥西四环中路112号</span></a>'.
            '</p>'.
            '<p class="otherInfors">'.
               '<em>3.2元/m .天</em>'.
               '<span>300㎡  <b>|</b> 百货/购物中心  <b>|</b>  <i>刚刚</i></span>'.
            '</p>'.
          '</div>'.
        '</div>'.
      '</section>',has_more=>false);
}else{
   $str = array(status=>false,html=>'',has_more=>false);
}
echo json_encode($str);
?>