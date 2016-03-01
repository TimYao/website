// JavaScript Document
$(function(){
	var solie = $('.solide'),
	    oUl = solie.find('ul'),
		aLi = oUl.find('li'),
		length = aLi.size(),
		oWidth = aLi.eq(0).width(),
		oLeft = $('.leftBtn'),
		oRight = $('.rightBtn'),
		iNow = 0,
		time = 2000,  //播放时间
		autoFlg = true,
		timer = null,
		flg = false;
    oUl.css({"width":length*oWidth});
	$('.solidec').on('mouseenter',function(){
	   clearInterval(timer);
	   oLeft.animate({"opacity":1},'slow');
	   oRight.animate({"opacity":1},'slow');
	});
	$('.solidec').on('mouseleave',function(){
	   oLeft.animate({"opacity":0},'slow');
	   oRight.animate({"opacity":0},'slow');
	   auto();
	});
	oLeft.on('click',function(event){
		clearInterval(timer);
		move($(this));
		event.preventDefault();
		return false;
	});
	oRight.on('click',function(event){
		clearInterval(timer);
		move($(this));
		event.preventDefault();
		return false;
	});
	oLeft.on('focus',function(){
		$(this).blur();
	});
	oRight.on('focus',function(){
		$(this).blur();
	});
	//点击运动
	function move(obj)
	{
		var oClass= obj.attr('class');
		if(oClass==='leftBtn')
		{
			flg = false;
			if(iNow>=0)
			{
				aLi.css({"position":"static","left":0});
				aLi.eq(length-1).css({"position":"relative","left":-(length)*oWidth});
			}
			if(iNow>=1)
			{
				oUl.css({"left":-(length-1)*oWidth});
				aLi.eq(length-1).css({"position":"static","left":0});
				iNow = -(length-1);
			}
			iNow++;
		}else if(oClass==='rightBtn'){
			flg = true; 
			if(iNow<=-(length))
		    {
			   oUl.css({"left":0});
			   aLi.eq(0).css({"position":"static","left":0});
			   iNow = 0;
		    }
			if(iNow<=-(length-1))
			{
				aLi.css({"position":"static","left":0});
				aLi.eq(0).css({"position":"relative","left":(length)*oWidth});
		    }
			iNow--;
		}
		oUl.stop().animate({"left":iNow*oWidth},'slow',function(){
			if(flg===false)
			{
			   if(iNow>=1)
			   {
				   oUl.css({"left":-(length-1)*oWidth});
				   aLi.eq(length-1).css({"position":"static","left":0});
				   iNow = -(length-1);
			   }	
			}else{
			   if(iNow<=-(length))
			   {
				   oUl.css({"left":0});
				   aLi.eq(0).css({"position":"static","left":0});
				   iNow = 0;
			   }	
			}
		});
    }
	//自动播放
	auto();
	function auto()
	{
	   timer = setInterval(function(){
		    flg = false;
			if(iNow>=0)
			{
				aLi.css({"position":"static","left":0});
				aLi.eq(length-1).css({"position":"relative","left":-(length)*oWidth});
			}
			if(iNow>=1)
			{
				oUl.css({"left":-(length-1)*oWidth});
				aLi.eq(length-1).css({"position":"static","left":0});
				iNow = -(length-1);
			}
			iNow++;
			oUl.stop().animate({"left":iNow*oWidth},'slow',function(){
			    if(flg===false)
				{
				   if(iNow>=1)
				   {
					   oUl.css({"left":-(length-1)*oWidth});
					   aLi.eq(length-1).css({"position":"static","left":0});
					   iNow = -(length-1);
				   }	
				}
			});
	   },time);
	}
});