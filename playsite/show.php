<!DOCTYPE html>
<html>
<head>
  <title><if condition=" isset($SEO['title']) && !empty($SEO['title']) ">{$SEO['title']}</if>
    {$SEO['site_title']}</title> 
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0;" />
  <meta content="telephone=no" name="format-detection" />
  <meta content="yes" name="apple-mobile-web-app-capable" />
  <link rel="stylesheet" media="all" type="text/css" href="{$config_siteurl}statics/newtemplate/css/css.css" />
  <link rel="stylesheet" media="all" type="text/css" href="{$config_siteurl}statics/newtemplate/css/meanmenu.min.css" />
  <script type="text/javascript" src="{$config_siteurl}statics/newtemplate/js/jquery-1.7.1.js"></script>
  <script type="text/javascript" src="{$config_siteurl}statics/newtemplate/js/swipe.js"></script>
  <script type="text/javascript" src="{$config_siteurl}statics/newtemplate/js/js.js?v=123"></script>
  <script type="text/javascript" src="{$config_siteurl}statics/newtemplate/js/jquery.meanmenu.min.js"></script>
  <script type="text/javascript">
//全局变量
var GV = {
    DIMAUB: "{$config_siteurl}",
    JS_ROOT: "statics/js/"
};
</script>
  <!-- <script src="{$config_siteurl}statics/js/jquery.js" type="text/javascript"></script>
-->
<!--<script src="{$config_siteurl}statics/default/js/w3cer.js" type="text/javascript"></script>
<script type="text/javascript" src="{$config_siteurl}statics/js/ajaxForm.js"></script>
-->
</head>

<body>
<header id="header">
<a href="javascript:history.go(-1);" class="arrowBtn"></a>
<h1>{:getCategory($catid,'catname')}</h1>
<!--<a href="" class="linkBtn"> <i></i> <i></i>
<i></i>
</a>
-->
<template file="Content/header.php"/>
</header>

<section id="content">
<!--<span class="kspan">
<img src="{$thumb}"  width="100%" alt="" class="setimg"/>
</span>
-->
<div class="articleWrap">
<h2 class="h2Title02">{$title}</h2>
<p class="viewInfor">
浏览：
<span id="hits">0</span>
|    更新：{:date("Y-m-d", mktime ($updatetime))}    |    作者：
<php>
  if($authid){
   echo M("user")->where(array("id"=>$authid))->getField("username");
   }else{echo '网络摘选';}
</php>
</p>
<article class="articleInfor articleShow">{$content}</article>
{$pages}
</div>
<div class="centerContent">
<!-- <div class="scrollMove">
<a href="" class="leftBtn sNewLeftCon"></a>
<span class="sleftMark"></span>
<ul class="clear">
<content action="lists" catid="$catid"  order="id DESC" num="5" thumb="1">
  <volist name="data" id="vo">
    <li>
      <a href="{$vo.url}" title="{$vo.title}">
        <img src="<if condition="$vo['thumb']">
        {$vo.thumb}
        <else />
        {$config_siteurl}statics/default/images/defaultpic.gif
      </if>
      " width="130" height="130" alt="1"/>
    </a>
  </li>
</volist>
</content>

</ul>
<a href="" class="rightBtn sNewRightCon"></a>
<span class="srightMark"></span>
</div>
-->
<!-- <div class="memberBox noStyles noPadings">
<div class="blank_10px"></div>
<p class="pters">
评星： <em><?php 
       if ($stars >
0 and $stars
<= 5){
          $k = 5 - $stars;
          for ($i=1; $i <= $stars; $i++) { 
            echo "★";
          }
          for ($j=1; $j <= $k; $j++) { 
            echo "☆";
          }
       }    
       ?></em>
</p>
</div>
-->
<div class="blank_15px"></div>

<?php if (!empty($latitude)): ?>
<!-- <h3 class="h3Title01">查看地图</h3>
<div class="seeMap">
<span>
<img src="http://api.map.baidu.com/staticimage?center={$latitude}&zoom=16&width=530&height=340&markers={$latitude}" alt="" class="setimg"/>
</span>
</div>
-->
<?php endif ?>

<h3 class="h3Title01">分享收藏</h3>
<div style="width:100%;clear:both;">
<style type="text/css">
      .shoucang {
              background: none repeat scroll 0 0 #1bcadf;
              border-radius: 3px;
              color: #fff;
              display: block;
              font-family: "微软雅黑";
              font-size: 1.6rem;
              height: 37px;
              line-height: 37px;
              text-align: center;
              width: 40%;
              margin: 5px;
              float: left;
        }

/*分享*/
#share_1{float:left;width:49%; display: block}
#share_2{float:right;width:49%; display: block}
#mess_share img{width:22px;height:22px;vertical-align: top;border: 0;}
.button2{font-size:16px;padding:8px 0;
color:#000000;
background-color:#FFFFFF;
background-image: linear-gradient(to top, #f5f5f5, #ffffff);
border: 1px solid #D3D3D3;
box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.15);
-moz-box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.15);
-webkit-box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.15);
text-shadow: 0.5px 0.5px 1px #fff;
text-align:center;
border-radius:3px;
width:100%;
cursor:pointer;
}
#mcover{ position: fixed; top:0; left:0; width:100%; height:100%;background:rgba(0, 0, 0, 0.7); display:none;z-index:20000;}
#mcover img {position: fixed;right: 18px;top:50px;width: 260px;height: 180px;z-index:20001;}

      </style>
<a href="javascript:" title="分享" class="shoucang" onclick="document.getElementById('mcover').style.display='block';">分享</a>
<a href="javascript:" title="收藏" class="shoucang" id="shoucang">收藏</a>
<script type="text/javascript">
$("#shoucang").on('click', function(event) {
              $.get("{$config_siteurl}api.php?m=Users&catid={$catid}&id={$id}", function (data) {
                  if(data.state==0){
                    alert("参数错误");
                  }else if(data.state==2){
                    alert("请登录");
                  }else if(data.state==1){
                    alert("收藏成功"); 
                  }else{
                    alert("收藏失败");
                  } 
              },'json');
            }); 

            function WeiXinShareBtn() { 
               if (typeof WeixinJSBridge == "undefined") { 
                  alert("请先通过微信搜索 one-dodo 添加玩多多亲子生活为好友，通过微信分享文章 "); 
               } else { 
                 WeixinJSBridge.invoke('shareTimeline',{ 
                 "title": "{$title}", 
                 "link": "http://m.onedodo.cn{$url}", 
                 "desc": "{$description|str_cut=###,10}", 
                 "img_url": "http://m.onedodo.cn{$thumb}" 
                 }, function(res) {
                            _report('timeline', res.err_msg);
                 }); 
               } 
            }
</script>

<div id="mcover" style="display:none;" onclick="document.getElementById('mcover').style.display='';">
<img src="/statics/images/guide.png"></div>
</div>

<div class="blank_15px"></div>

<!--评论部分-->
<!-- <h3 class="h3Title02">
<img src="{$config_siteurl}statics/newtemplate/images/icon15.png" width="34" height="32" alt="">会员评论</h3>
-->
<!--评论主体-->
<!-- <div id="ds-reset"></div>
-->
<!-- <dl class="commentInfor clear commentPhotot">
<dd>
<span class="sPhotoBj">
<img src="{$config_siteurl}statics/newtemplate/images/photo.png" width="150" height="150" alt="" class="imgPhoto"/>
</span>
</dd>
<dt> <em>Tess妈妈 :</em>
<span>孩子生病，可以退款吗？</span>
<div class="clear"></div>
<i>08-01 12:28</i>
<div class="commentC">
<em>官方客服</em>
回复
<em>Tess妈妈</em>
: 您好，因活动的特殊性，一旦售出不退不换。您可以转给您的亲戚或者朋友来参加。
</div>
</dt>
</dl>
<dl class="commentInfor clear commentPhotot">
<dd>
<span class="sPhotoBj">
<img src="{$config_siteurl}statics/newtemplate/images/photo.png" width="150" height="150" alt="" class="imgPhoto"/>
</span>
</dd>
<dt>
<em>Tess妈妈 :</em>
<span>晒单</span>
<div class="clear"></div>
<div class="showPictures">
<ul class="clear showPics">
<li>
<img src="images/photo.png" width="150" height="150" alt="0" class="im"/>
<a href="" class="fdBtn">
<img src="images/fdj.png" width="21" height="21" alt=""/>
</a>
</li>
<li>
<img src="images/otherpic2.jpg" width="104" height="104" alt="1" class="im"/>
<a href="" class="fdBtn">
<img src="images/fdj.png" width="21" height="21" alt=""/>
</a>
</li>
<li>
<img src="images/pro1.jpg" width="130" height="130" alt="2" class="im"/>
<a href="" class="fdBtn">
<img src="images/fdj.png" width="21" height="21" alt=""/>
</a>
</li>
</ul>
</div>
<i>08-01 12:28</i>
</dt>
</dl>
-->
<!-- <p class="pMost">
<a href="">更多评论</a>
</p>
-->
</div>
<div class="clear"></div>
</section>

<template file="Content/footer.php"/>

<!--<script type="text/javascript">
$(function (){
  $(window).toTop({showHeight : 100});
  //点击
  $.get("{$config_siteurl}api.php?m=Hits&catid={$catid}&id={$id}", function (data) {
      $("#hits").html(data.views);
  }, "json");
});
//评论
var commentsQuery = {
    'catid': '{$catid}',
    'id': '{$id}',
    'size': 10
};
(function () {
    var ds = document.createElement('script');
    ds.type = 'text/javascript';
    ds.async = true;
    ds.src = GV.DIMAUB+'statics/js/comment/embed.js';
    ds.charset = 'UTF-8';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ds);
})();
//评论结束
</script>
-->
</body>
</html>