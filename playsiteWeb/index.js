$(function(){
  //导航效果
  (function(){
	 var nav = $("#nav"),
	     aA = nav.find('a'),
		 t = $(document).scrollTop();
		 oTop = 0;
		 
	  var upTop = $("#upTop");
	  window.navigator.userAgent.indexOf("MSIE 6.0")>-1?upTop.css({"top":$(window).height()+t-upTop.height()}):0; 
      aA.on('click',function(event){
		 iTasb = $(this).attr('href');
		 oTop = $(iTasb).offset().top;
		 aA.removeClass('current');
		 $(this).addClass('current');
		 $('html,body').stop().animate({scrollTop:oTop},'fast');
		 event.preventDefault();
	     return false;   
	  });
	  var ow = $(window).height();
	  var allTop = [];
	  aA.each(function(i,obj){
		 var iTasb = $(obj).attr('href'); 
		 var oTop = $(iTasb).offset().top;
		 allTop.push([$(obj),oTop]);
	  });
      
	  $(window).on('scroll',function(){
		  var p = $(document).scrollTop();
		  for(var i=0;i<allTop.length;i++)
		  {  
		  	 var h = allTop[i][1];
		  	 var k = allTop[i][0];
			 if(p>=(h))
			 { 
				 aA.removeClass('current'); 
				 $(k).addClass('current');
			 }  
		  }
		  //返回顶部
		  if(p>200)
		  {
			 if(window.navigator.userAgent.indexOf("MSIE 6.0")>-1)
			 {
				 upTop.css({"top":$(window).height()+p-upTop.height()});
		     }
			 upTop.stop().animate({"opacity":1},'fast'); 
			 upTop.on('click',function(event){;
				 $('html,body').stop().animate({scrollTop:0},'fast');
				 event.preventDefault();
				 return false;
			 });
		  }else{
		     upTop.css({"opacity":0});
		  }
	  });
  })();	
  
  //首页幻灯
  (function(){
	 //设置适应屏幕宽度的图片
	 var w = $(window).width(),
	     aImg = $("#solide").find("img"),
		 length = aImg.size(),
		 arr = [],
		 t = 3000;
     if(w<1000)
     {
        w=1000;
        $("#solide").css({"width":w});
     }else{
     	$("#solide").css({"width":"auto"});
     }
	 aImg.each(function(i,obj){
		 var proW = $(obj).width()||w;
		 var proH = $(obj).height();
		 var ow = proW>w?w:proW;
		 var pro = proW/proH;
		 $(obj).css({"width":ow,"height":ow/pro});
		 $("#solide").css({"height":(ow/pro)});
     });

	 $(window).resize(function(){
	 	var w = $(window).width();
	 	if(w<1000)
	    {
	       w=1000;
	       $("#solide").css({"width":w}); 
	    }else{
	       $("#solide").css({"width":"auto"});
	    }
	 	aImg.each(function(i,obj){
		 var proW = $(obj).width()||w;
		 var proH = $(obj).height();
		 var pro = proW/proH;
		 $(obj).css({"width":w,"height":w/pro});
		 $("#solide").css({"height":w/pro});
       });
	 });
	 //图片幻灯效果
	 var iNow = 0;
	 var time = null;
	 aImg.eq(iNow).css({"z-index":"1","opacity":1});
	 function auto()
	 {   
		 if(iNow===length-1)
		 {
			 iNow=-1;
		 }
		 iNow++;
		 aImg.css({"z-index":"inherit","opacity":0});
		 aImg.eq(iNow).stop().animate({"z-index":1,"opacity":1},'slow');
	 }
	 time = setInterval(auto,t);
	 $("#solide").on("mouseenter",function(){
		 clearInterval(time);
	 });
	 $("#solide").on("mouseleave",function(){
	    time = setInterval(auto,t);
	 });
  })();
});