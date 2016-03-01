// JavaScript Document
$(function(){
	var windowW = $(window).width();
	
	//图片尺寸控制
	(function(){
	  //调用
	  setWidth('ulistOneset');//设置列表页图片展示	
	  setWidth('sImg');	//单张图设置
	  setWidth('articleShow');//设置图文章展示的图片控制
	  setWidth('memberAlbum');//设置两栏图片展示页面album.html
	  setWidth('groupBuys');//设置团购两栏图片展示	
	  setWidth('centerLogo');//设置注册登录页面单个LOGO大小
	  setWidth('setimg');//设置单张图片大小，浏览器决定
	  setWidth('ulistTwo');
	  setWidth('favoriteList');
	  setWidth('showPics');
      setWidth('paylist01'); //paylist
	  setWidth('confirmOneset');//订单确认
	  function setWidth(oClass)
	  { 
	      var ulist = $('.'+oClass);
		  if(oClass==='ulistOneset' || oClass==='ulistTwo' || oClass==='paylist01' || oClass==='confirmOneset' || oClass==='favoriteList')
		  {
			 var oWidth = ulist.find('li').width(),
				 aImg = ulist.find('.oImg') || ulist.find(''),
				 aDt = ulist.find('dt'),
				 length = aImg.size(),
				 aPro,
				 aPro1,
				 oNwidth,
				 oNheight;
			 if(windowW>=320 && windowW<=360)
			 {
				 if(oClass==='ulistTwo')
				 {
					aPro = 0.45; 
					aPro1 = 0.30;
				 }else if(oClass==='paylist01'){
				 	aPro = 0.62;
				 }else if(oClass==='confirmOneset'){
					aPro = 0.4;  
				 }else if(oClass==='favoriteList'){
				    aPro = 0.45; 
				 }else{
				    aPro = 0.5; 
				 }
			 }else if(windowW>=360 && windowW<=480){
				 if(oClass==='confirmOneset'){
					aPro = 0.5;  
				 }else if(oClass==='paylist01'){
				 	aPro = 0.6;
					aPro1 = 0.2;
				 }else if(oClass==='favoriteList'){
				    if(windowW===480)
				    {
					  aPro = 0.7;	
					}if(windowW===424){
					  aPro = 0.6; 
					}else{
					  aPro = 0.45;	
					}
				 }else{
			        aPro = 0.6;
				    aPro1 = 0.27;
				 }
			 }else if(windowW>480 && windowW<=580)
			 {
				 if(oClass==='confirmOneset'){
					aPro = 0.7;  
				 }else if(oClass==='favoriteList'){
				     aPro = 0.7;
				 }else{
				    aPro = 0.7;
				    aPro1 = 0.25;
				 }
			 }else{ 
			     if(oClass==='confirmOneset'){
					 aPro = 1;  
				 }else if(oClass==='paylist01'){
				 	 aPro = 1.4;
					 aPro1 = 0.2;
				 }else if(oClass==='favoriteList'){
				     aPro = 1; 
				 }else{
					 aPro1 = 0.25; 
				 }
			 }
			 for(var i=0;i<length;i++)
			 {
				 var pro = parseFloat(aImg.eq(i).width())/parseFloat(aImg.eq(i).height());
				 oNwidth = parseFloat(aImg.eq(i).width())*aPro;
				 oNheight = parseFloat(oNwidth/pro);
				 aImg.eq(i).css({"width":oNwidth,"height":oNheight});
				 aImg.eq(i).parent('dd').css({"width":oNwidth,"height":oNheight});
			 }
			 if(oClass!=='ulistTwo' && oClass!=='paylist01' && oClass!=='confirmOneset' && oClass!=='favoriteList')
			 { 
				aDt.width(parseFloat(oWidth)-parseFloat(aImg.eq(0).width())-parseFloat(aDt.css("marginLeft"))-30); 
			 }else{ 
				 for(var i=0;i<aDt.size();i++)
				 {
					 if(/optionBt/.test(aDt.eq(i).attr('class'))===true)
					 { 
						aDt.eq(i).width((parseFloat(oWidth)-parseFloat(aImg.eq(0).width())-10)*aPro1);  
					 }else{
						aDt.eq(i).width((parseFloat(oWidth)-parseFloat(aImg.eq(0).width())-10)*(1-aPro1));  
					 }
				 }
			 }	 
		  }else if(oClass==='memberAlbum'|| oClass==='groupBuys')
		  { 
			  var ul = ulist.find('ul'),
			      ulWidth = ulist.width(),
			      aImg = ul.find('.img'),
				  length = aImg.size(),
				  iHeight = 0,
				  oPr0;
			  window.onload = function(length)
			  { 
			  	 for(var j=0;j<length;j+=2)
			    {
				  var picTwoWidth = parseFloat(aImg.eq(j).width())+parseFloat(aImg.eq(j+1).width());
				  var defaultPro1 = parseFloat(aImg.eq(j).width())/picTwoWidth;
				  var defaultPro2 = parseFloat(aImg.eq(j+1).width())/picTwoWidth;
				  var oPro1 = parseFloat(aImg.eq(j).width())/parseFloat(aImg.eq(j).height());
				  var oPro2 = parseFloat(aImg.eq(j+1).width())/parseFloat(aImg.eq(j+1).height());
				  var lastW = ulWidth-7;//两张图尺寸大于屏幕尺寸，以屏幕为标准计算，进行等比伸缩图片
				  //如果图片没有设置原宽和高，将以每张为窗口50%显示
				  if(isNaN(defaultPro1) && isNaN(defaultPro2))
				  {   
				  	 defaultPro1=defaultPro2=0.5;
				  }
				  var imgW1 = parseFloat(lastW*defaultPro1);
				  var imgW2 = parseFloat(lastW*defaultPro2);
				  var imgH1 = imgW1/oPro1;
				  var imgH2 = imgW2/oPro1;
				  //限制图片展示
				  aImg.eq(j).css({"width":imgW1,"height":imgH1});
				  aImg.eq(j+1).css({"width":imgW2,"height":imgH1});
				  if(oClass==='groupBuys')
				  {
                    aImg.eq(j).parents('li').css({"width":imgW1});
				    aImg.eq(j+1).parents('li').css({"width":imgW2,"marginLeft":6.6});
                    if(parseFloat(aImg.eq(j).parents('li').outerHeight())>=parseFloat(aImg.eq(j+1).parents('li').outerHeight()))
                    {
                        var iMaxHeight = parseFloat(aImg.eq(j).parents('li').outerHeight());
                    }else{
                    	var iMaxHeight = parseFloat(aImg.eq(j+1).parents('li').outerHeight());
                    }
                    aImg.eq(j).parents('li').height(iMaxHeight);
                    aImg.eq(j+1).parents('li').height(iMaxHeight)
				  }else if(oClass==='memberAlbum'){
				  	aImg.eq(j).parents('li').css({"width":imgW1,"height":imgH1+$('.zBtn').outerHeight()});
				    aImg.eq(j+1).parents('li').css({"width":imgW2,"height":imgH1+$('.zBtn').outerHeight(),"marginLeft":6.6});
				  } 
			    }
			  }(length); 
			    
		  }else if(oClass==='sImg')
		  {   
		      var sImg = $('.sImg'),
			      length = sImg.size(),
			      aPro;
			  if(windowW>=320 && windowW<=480)
			 {
				 if(/favoriteDl/.test((sImg.parents('dl')).attr('class')))
				 {
					 if(windowW==320)
					 {
						 aPro = 0.4;
				     }else{
						 aPro = 0.5; 
					 }
			     }else{
					 aPro = 0.5; 
				 }	 
			 }else if(windowW>480 && windowW<=580)
			 {
				 aPro = 0.7;
			 }
			 for(var m=0;m<length;m++)
			 {
			     var proW = parseFloat(sImg.eq(m).width()) || parseFloat(sImg.eq(m).parent().width());
				 var proH = parseFloat(sImg.eq(m).height());
				 var pro = proW/proH;
				 var nW = proW*aPro;
				 var nH = nW/pro;
				 sImg.eq(m).css({"width":nW,"height":nH});
				 sImg.eq(m).parent().css({"width":nW,"height":nH});
				 if(!/kspan/.test(sImg.eq(m).parent().attr('class'))) //class为.kspan设置单张小图，不设置相邻其他
				 {
				   sImg.eq(m).parent().next().css({"width":parseFloat(sImg.eq(m).parent().parent().width())-parseFloat(sImg.eq(m).parent().css('width'))-8});   
				 }
		     }
		  }else if(oClass==='centerLogo')
		  {
			  var logoBig = ulist.find('img');
			  if(windowW>=320 && windowW<=480)
			  {
				 aPro = 0.5;
			  }else if(windowW>480 && windowW<=580)
			  {
				 aPro = 0.7;
			  }
			  var proW = parseFloat(logoBig.width());
			  var proH = parseFloat(logoBig.height());
			  var pro = proW/proH;
			  var lasW = proW*aPro;
			  var lasH = lasW/pro;
			  logoBig.css({"width":lasW,"height":lasH});
		  }else if(oClass==='setimg')//适合多张图，设置图片最外层需一个父级别的标签width为100%
		  {
			  var length = ulist.size();
			  for(var i=0;i<length;i++)
			  {
				  var oImgW = parseFloat(ulist.eq(i).width());
				  var oImgH = parseFloat(ulist.eq(i).height());
				  var oparent = ulist.eq(i).parent();
				  var oparentW = parseFloat(oparent.width())>=$(window).width()?$(window).width():parseFloat(oparent.width());
				  var oparentH = parseFloat(oparent.height());
				  var oPro = oImgW/oImgH;
				  ulist.eq(i).css({"width":oparentW,"height":oparentW/oPro});
				  ulist.eq(i).parent().css({"height":oparentW/oPro});
				  //每周推荐列表尺寸控制
				  if(ulist.eq(i).parents('ul').is('.weekList'));
				  {
                     ulist.eq(i).parents('li').css({"height":oparentW/oPro});
				  }
			  }
		  }else if(oClass === 'articleShow'){
			  if(!ulist)
              {
                 return false;
              }
		      var aImgs = ulist.find('img');
			  var w = parseFloat(ulist.width())||parseFloat($(window).width());
			  for(var i=0;i<aImgs.length;i++)
			  {
				  var oW = parseFloat(aImgs.eq(i).width()) || w;
				  var oH = parseFloat(aImgs.eq(i).height());
				  var pro = oW/oH;
				  var iH = oW/pro>0?oW/pro:'';
				  aImgs.css({"width":oW,"height":iH});
			  }
		  }else if(oClass === 'showPics')//图片尺寸控制与放大效果
		  {
              if(!ulist)
              {
                 return false;
              }
              var oUlWidth = ulist.width(),
                  num = 3,
                  aImgs = ulist.find('.im'),
                  fdBtn = ulist.find('.fdBtn'),
                  singWidth,
                  iNow = 0,
                  btn = false;
              //图之间的间距为8 
              singWidth = (oUlWidth/3)-8;
              for(var i=0;i<aImgs.size();i++)
              {
                  var oPro = parseFloat(aImgs.eq(i).width())/parseFloat(aImgs.eq(i).height());
                  aImgs.eq(i).css({"width":singWidth,"height":singWidth/oPro});
                  aImgs.eq(i).parents('li').css({"width":singWidth,"height":singWidth/oPro,"marginRight":8});
              }
              //按钮点击放大
              fdBtn.on('click',function(event){
              	 if(btn===false)
              	 {
                    var marke = $("<div class='marke' style='z-index:9999;'></div>");
                    $(document.body).append(marke);
                    btn = true;
                    var thisOpObj = $(this).parents('li').find('.im'); 
                    showBigImg(thisOpObj,btn);
              	 }
                 event.stopPropagation();
                 event.preventDefault();
                 return false;
              });
              $(document).on('click',function(event){
                 $('.marke').remove();
                 btn = false;
                 showBigImg(null,btn);
                 event.stopPropagation();
                 //return false;
              });
              //大图展示
              function showBigImg(thisOpObj,btn)
              {
                 if(btn===true)
                 {
                 	var url = thisOpObj.attr('src');
                    var bigDiv = $("<div class='bigDiv'><span class='sl'></span><span class='sr'></span><a href='' class='sLeft'></a><a href='' class='sRight'></a></div>");
                    var pro = parseFloat(thisOpObj.attr("width"))/parseFloat(thisOpObj.attr("height"));
                    var iW = parseFloat($(window).width()*0.88);
                    var iH = iW/pro;
                    var img = $("<img src='"+url+"'width="+iW+" height="+iH+" class='bigImg'>");
                    bigDiv.css({"left":(parseFloat($(window).width())-iW)/2-5,"top":($(document).scrollTop()+($(window).height())/2-iH/2)});
                    bigDiv.append(img);
                    $(document.body).append(bigDiv);
                    $('.marke').css({"height":$(document).height()});
                    $('.sl').css({"top":parseFloat(bigDiv.height())/2-parseFloat($('.sLeft').height())-parseFloat($('.sl').height()-$('.sLeft').height())/2});
                    $('.sr').css({"top":parseFloat(bigDiv.height())/2-parseFloat($('.sLeft').height())-parseFloat($('.sr').height()-$('.sRight').height())/2})
                    $('.sLeft').css({"top":parseFloat(bigDiv.height())/2-parseFloat($('.sLeft').height())});
                    $('.sRight').css({"top":parseFloat(bigDiv.height())/2-parseFloat($('.sLeft').height())})
                 }else{
                 	$(".bigDiv").remove();
                 }
                 //左箭头操作
                 $('.sLeft').on('click',function(event){
                 	if(iNow===aImgs.size()-1)
                 	{
                       iNow = -1;
                 	}
                    iNow++;
                    var pro = parseFloat(aImgs.eq(iNow).attr("width"))/parseFloat(aImgs.eq(iNow).attr("height"));
                    $('.bigImg').attr('width',parseFloat($(window).width()*0.88));
                    $('.bigImg').attr('height',parseFloat($(window).width()*0.88)/pro);
                    $('.bigImg').attr('src',aImgs.eq(iNow).attr('src'));
                 	event.preventDefault();
                    event.stopPropagation();
                    return false;
                 });
                 //右箭头操作
                 $('.sRight').on('click',function(event){
                 	if(iNow===0)
                 	{
                       iNow = aImgs.size();
                 	}
                 	iNow--;
                 	var pro = parseFloat(aImgs.eq(iNow).attr("width"))/parseFloat(aImgs.eq(iNow).attr("height"));
                    $('.bigImg').attr('width',parseFloat($(window).width()*0.88));
                    $('.bigImg').attr('height',parseFloat($(window).width()*0.88)/pro);
                    $('.bigImg').attr('src',aImgs.eq(iNow).attr('src'));
                    event.preventDefault();
                    event.stopPropagation();
                    return false;
                 });
                 $('.sl').on('click',function(event){
                 	 $('.sLeft').trigger('click');
	                 event.stopPropagation();
	                 return false;
	             });
	             $('.sr').on('click',function(event){
	             	 $('.sRight').trigger('click');
	                 event.stopPropagation();
	                 return false;
	             });
              }
		  }
	  }
	})();
	
	//原型头像
	(function(){
	   var windowW = $(window).width();	
	   var sPhotoBj= $('.sPhotoBj'),
	       oImg = sPhotoBj.children('.imgPhoto');
	   if(windowW>=320 && windowW<=360)
	   {
		   if(/privatePhoto/.test(sPhotoBj.parents('div').attr('class')) || /commentPhotot/.test(sPhotoBj.parents('dl').attr('class')))
		   {
			  oImg.width(40);
		      oImg.height(40);
		   }else if(/listPhotoa/.test(sPhotoBj.parents('ul').attr('class'))){
			  oImg.width(45);
		      oImg.height(45);
		   }else{
			  oImg.width(60);
		      oImg.height(60); 
		   }
	   }else if(windowW>360 && windowW<=480){
		   if(/privatePhoto/.test(sPhotoBj.parents('div').attr('class')))
		   {
			  oImg.width(40);
		      oImg.height(40); 
		   }else if(/listPhotoa/.test(sPhotoBj.parents('ul').attr('class')) || /commentPhotot/.test(sPhotoBj.parents('dl').attr('class'))){
			  if(windowW===480)
			  {
				oImg.width(57);
		        oImg.height(57);  
			  }else{
				oImg.width(45);
		        oImg.height(45);  
			  }
		   }else{
			 oImg.width(70);
		     oImg.height(70); 
		   }
	   }else if(windowW>480 && windowW<=600)
	   {
		   if(/privatePhoto/.test(sPhotoBj.parents('div').attr('class')) || /listPhotoa/.test(sPhotoBj.parents('ul').attr('class')) || /commentPhotot/.test(sPhotoBj.parents('dl').attr('class')))
		   {
			 oImg.width(70);
		     oImg.height(70);
		   }else{
			 oImg.width(100);
		     oImg.height(100); 
		   }
	   }else if(windowW>600 && windowW<=720)
	   {
		   if(/privatePhoto/.test(sPhotoBj.parents('div').attr('class')) || /commentPhotot/.test(sPhotoBj.parents('dl').attr('class')))
		   {
			 oImg.width(90);
		     oImg.height(90);
		   }else{
			 oImg.width(150);
		     oImg.height(150); 
		   }
	   }
	   sPhotoBj.css({"backgroundImage":"url("+oImg.attr('src')+")","width":oImg.width(),"height":oImg.height(),"WebkitBorderRadius":oImg.width(),"MozBorderRadius":oImg.width(),"borderRadius":oImg.width(),"display":"inline-block","backgroundPosition":"center center"});	   
	})();
	
	//pageNum
	(function(){
		var pageNum = $('#pageNum'),
		    pageList = $('.pageList'),
			numberPage = $('#numberPage'),
			aLi = pageList.find('li');
		pageNum.on('click',function(event){
			pageList.css({"display":"block","top":pageNum.position().top+pageNum.outerHeight(),"left":pageNum.position().left+parseInt(pageNum.css('marginLeft')),"width":pageNum.innerWidth()});
			event.preventDefault();
			return false;
		});
		aLi.on('click',function(event){
			var text = $(this).html();
			numberPage.val(text);
			pageList.css({"display":"none"});
			event.stopPropagation();
		});
		$(document).on('click',function(event){
			pageList.css({"display":"none"});
			event.stopPropagation();
		})
	})();
	
	//滚动效果 viewmember01.html
	(function(){
	  //间距都为值10	
	  var boxScroll = $('.boxScroll'),
	      scrollUl = boxScroll.find('.scrollUl'),
	      oUl = boxScroll.find('ul'),
	      boxWidth = boxScroll.width(),
	      aImgs = boxScroll.find('.img'),
		  lBtn = boxScroll.find('.lBtn'),
		  length = aImgs.size(),
		  num=4,
		  number = 3,
		  iNow = 0,
		  singWidth,
		  singHeigh;
		  
	   singWidth = (boxWidth/num)-8;  
	   for(var i=0;i<length;i++)
	   {
		   var pro = parseFloat(aImgs.eq(i).width())/parseFloat(aImgs.eq(i).height());
		   singHeight = singWidth/pro;
		   aImgs.eq(i).css({"width":singWidth,"height":singHeight});
		   aImgs.eq(i).parent().css({"width":singWidth,"height":singHeight,"marginRight":10,"display":"inline"});
	   }
	   scrollUl.css({"width":(parseFloat(aImgs.eq(0).css("width"))+10)*3-10,"height":parseFloat(aImgs.eq(0).height()),"overflow":"hidden"})
	   oUl.css({"width":(parseFloat(aImgs.eq(0).outerWidth())+10)*length});
	   lBtn.css({"width":aImgs.eq(0).width(),"height":parseFloat(aImgs.eq(0).outerHeight())-2});
	   //滚动操作
	   var view = Math.ceil(length/3);
	   lBtn.on('click',function(event){
		  if(iNow===-(view-1))
		  {
			  return false;
		  }
		  iNow--; 
		  oUl.stop().animate({"left":iNow*(oUl.find('li').eq(0).outerWidth(true))*number},'slow');
	      event.stopPropagation();
		  return false;
	   });
	})();
	
	//图片滚动效果(其他页面)
	(function(){
	   var scrollMove = $('.scrollMove'),
	       scrollMoveWidth = scrollMove.width(),
		   oUl = scrollMove.find('ul'),
		   aImgs = oUl.find('img'),
		   length = aImgs.size(),
		   sleftMark = $('.sleftMark'),
		   srightMark = $('.srightMark'),
		   leftBtn = $('.leftBtn'),
		   rightBtn = $('.rightBtn'),
		   num = 4,
		   iNow=0,
		   views,
		   allWidth = 0,
		   singImgWidth;
	   
	   //图片尺寸控制
	   singImgWidth = (scrollMoveWidth/4)-5;
	   for(var i=0;i<length;i++)
	   {
	       var pro = parseFloat(aImgs.eq(i).width())/parseFloat(aImgs.eq(i).height());
		   aImgs.eq(i).css({"width":singImgWidth,"height":singImgWidth/pro});
           if(i!==0&&((i+1)%num)===0)
		   {
			  aImgs.eq(i).css({"marginRight":0}); 
		   }else{
			  aImgs.eq(i).parent().css({"marginRight":6.5,"display":"inline"}); 
		   }
		   aImgs.eq(i).css({"width":singImgWidth,"height":singImgWidth/pro});
		   aImgs.eq(i).parent().css({"width":singImgWidth,"height":singImgWidth/pro});
		   allWidth+=Math.round(aImgs.eq(i).parent().outerWidth(true));
	   }
	   scrollMove.css({"height":singImgWidth/pro});	
	   sleftMark.css({"height":singImgWidth/pro,"width":singImgWidth});
	   srightMark.css({"height":singImgWidth/pro,"width":singImgWidth});
	   
	   //设置总宽
	   oUl.css({"width":allWidth});
	   //滚动效果实现,一次滚动4张图
	   //可滚动多少次
	   views = Math.ceil(length/num);
	   sleftMark.on('click',function(){
	      leftBtn.trigger('click');
	   });
	   srightMark.on('click',function(){
	      rightBtn.trigger('click');
	   });
	   leftBtn.on('click',function(event){
		   scrollMoves($(this));
		   event.preventDefault();
		   return false;
	   });
	   rightBtn.on('click',function(event){
		   scrollMoves($(this));
		   event.preventDefault();
		   return false;
	   });
	   function scrollMoves(obj)
	   {
		   if(obj.is('.leftBtn'))
		   {   
		       if(iNow===0)
			   {
				   return false;
			   }
			   iNow++;
		   }else if(obj.is('.rightBtn'))
		   {   
			   if(iNow===-(views-1))
			   {
				  return false;
			   }
			   iNow--;
		   }
		   oUl.stop().animate({"left":$('.scrollMove').width()*iNow},'slow');
	   }
	})();	
	
	//我的私信删除按钮hover效果
	(function(){
       var oDeleteBtn = $('.favoriteList').find('.deleteBtn');
       oDeleteBtn.hover(function(){
       	  $(this).find('img').attr('src','../playsite/images/deleteBtnwhite.png');
       },function(){
          $(this).find('img').attr('src','../playsite/images/deleteBtn.png');
       });
       oDeleteBtn.on('touchstart',function(){
       	  $(this).find('img').attr('src','../playsite/images/deleteBtnwhite.png');
       });
	   oDeleteBtn.on('touchend',function(){
       	  $(this).find('img').attr('src','../playsite/images/deleteBtn.png');
       });
	})();

	//浮层菜单
	(function(){
	    selectLayer('selectAbtn','selectUls','hidePut','selectMenu');
		selectLayer('selectKu','selectUls01','hidePut01','selectDiv');
		function selectLayer(btnId,ulId,hidePutId,selectWrap)
		{
			var selectAbtn = $('#'+btnId),
			    slectWrapW = $('.'+selectWrap).width(),
		    selectUls = $('#'+ulId),
		    marke = $("<div class='marke'></div>"),
		    hidePut = $('#'+hidePutId),
		    aLi = selectUls.children('li'),
		    btn = false;
			selectAbtn.on('click',function(event){
			   selectUls.css({"display":"block","top":$(this).position().top+$(this).outerHeight()+1,"width":slectWrapW-selectAbtn.offset().left});
			   if(btn===false)
			   {
				  marke.height($(document).height());
				  $("#content").append(marke);
				  btn = true;
				  if(navigator.userAgent.match(/iPhone/i))
				  {
				    $('.marke').on('click',function(event){
				      if(btn===true)
					   {
						  $(".marke").remove();
						  btn = false;
					   }
					   selectUls.css({"display":"none"});
					   event.stopPropagation();
				    });
				  }
			   }
			   event.stopPropagation();
			   return false;
			});
			aLi.on('click',function(){
				var text = $(this).children('a').html();
				var dataUid = $(this).attr('datauid');
				selectAbtn.html(text);
				hidePut.val(dataUid);
				selectUls.css({"display":"none"});
				$(".marke").remove();
				btn = false;
			});
			selectUls.on('click',function(event){
			   event.stopPropagation();	
			   return false;
			});
			$(document).on('click',function(){
			   if(btn===true)
			   {
				  $(".marke").remove();
				  btn = false;
			   }
			   selectUls.css({"display":"none"});
			});
			$('.groupList').on('click',function(event){
			   event.stopPropagation();	
			   return false;
			});
		}
	})();
	
	//数量加减
	(function(){
	  var minus = $('.minusj'),
	      plus = $('.plusj'),
		  iNow = 0;
	  plus.on('click',function(event){
		 iNow = parseInt($(this).parent().find('.numberPut').val(),10);
	     iNow++;
		 $(this).parent().find('.numberPut').val(iNow);
		 event.preventDefault();
		 return false;
	  });
	  minus.on('click',function(){
		 iNow = parseInt($(this).parent().find('.numberPut').val(),10); 
		 if(iNow===0)
		 {
			 return false;
		 }
		 iNow--;
		 $(this).parent().find('.numberPut').val(iNow);
		 event.preventDefault();
		 return false;  
	  });	
	})();
	
	//控制背景色
	(function(){
	   if($('#footer').size()<=0)
	   { 
		   $(document.body).css({"backgroundColor":'#f8f8f8'});
	   }
	})();
	
	//模拟select
	(function(){
      analogSelect('downSpan');
      function analogSelect(oClass)
      {
         var op = $("."+oClass),
             btn = op.find('a'),
             list = op.find('ul'),
             aLi = list.children('li'),
             hidePut = op.find('.hiddenPut'),
             flg = false;
         btn.on('click',function(event){
         	if(flg===false)
         	{
               list.css({"display":"block","top":$(this).position().top+$(this).height(),"left":$(this).position().left,"width":$(this).innerWidth()});
               flg = true;
         	}else{
         	   list.css({"display":"none"});
         	   flg = false;	
         	}
            event.preventDefault();
            event.stopPropagation();
            return false;
         });
         aLi.on('click',function(){
         	var text = $(this).attr('data-uid');
         	hidePut.val(text);
         	btn.html($(this).html());
         	list.css({"display":"none"});
         	flg = false;
         });
         $(document).on('click',function(event){
         	list.css({"display":"none"});
         	flg = false;
         	event.stopPropagation();
            //return false;
         });
      }
	})();

	//checkbox
	(function(){
	  //paylist	
	  analogCheck('paylist','checkHide',0);//无全选，单选
	  analogCheck('paylist01','checkHide01',1);//有全选	
      function analogCheck(oId,hideInputId,isAll)
      {
          var op = $("#"+oId),
              checkspan = op.find('.checkspan'),
              oHidenPut = $("#"+hideInputId),
              str = [],
              flg = false,
              allFlg = false,
              allSelectBtn = $('.allSelectBtn label'),
              num = 0; 
          if(allSelectBtn.size()>0 && parseInt(isAll)===1)
          {  
          	 var iNow = 0;
             allFlg = true;
          }
          for(var i=0;i<checkspan.size();i++)
          {
          	  if(checkspan.eq(i).is('.checksed'))
          	  {
                 checkspan[i].btn = true;
                 str.push(parseInt(checkspan.eq(i).attr('data-uid')));
				 if(allFlg===true)
				 {
				 	 iNow++; 
				 }
          	  }else{
          	  	 checkspan[i].btn = false;
          	  }
          }

          //初始存贮
          oHidenPut.val(str.join(','));
          //单选
          checkspan.on('click',function(event){
          	  //获取存在的id值
          	  var index = $(this).parents('li').index();
          	  var dataUid = oHidenPut.val();
			  if(checkspan[index].btn===false)
          	    {
                  $(this).addClass('checksed');
                  checkspan[index].btn = true;
				  if(allFlg===true)
				  {  
                     iNow++;
				  	 if(iNow===checkspan.size())
					  {
						 allSelectBtn.children('span').addClass('checksed');
						 iNow = checkspan.size();
					  }
				  }
          	    }else{
          	      if(allFlg===true)
				  {  
				  	 iNow--;
				  	 if(iNow<=checkspan.size()-1)
					  {
						 allSelectBtn.children('span').removeClass('checksed');
					  }
					  
					  if(iNow<0)
					  {
						 iNow=0;
					  }
				  }
				  $(this).removeClass('checksed');
          	  	  checkspan[index].btn = false;
				}
			  changeVal($(this),dataUid);
          	  event.stopPropagation();
          	  return false; 
          });

          //全选
          allSelectBtn.on('click',function(event){
          	 allFlg = true;
          	 $(this).children('span').addClass('checksed');
          	 for(var i=0;i<checkspan.size();i++)
          	 {  
				 $(checkspan[i]).addClass('checksed');
				 checkspan[i].btn = true;
          	 }
			 changeVals();
             event.stopPropagation();
          });
          function changeVals()
          {  
		     var dataUid = oHidenPut.val();
		     if(dataUid)
		     {
		     	var arr = dataUid.split(',');
		     }
			 var newa = [];
			 for(var i=0;i<checkspan.size();i++)
			 {
				 var thisId = $(checkspan).eq(i).attr('data-uid');
				 newa.push(thisId);
			 }
			 oHidenPut.val('');
			 var ks = newa.join(',');
			 oHidenPut.val(ks);
			 iNow = checkspan.size();
          }
          function changeVal(obj,dataUid)
          {  
             var thisId = obj.attr('data-uid'); 
             var lastVal = '';
             if(dataUid!=="")
             {
                 var arrs = dataUid.split(',');
	             for(var i=0;i<arrs.length;i++)
	             {   
	                 if(parseInt(arrs[i],10) === parseInt(thisId,10))
	                 {
	                    flg = true;
	                    num = i;
	                    break;
	                 }else{
	                 	flg = false;
	                 }
	             }
	             if(flg)
	             {
	             	arrs.splice(num,1);
	             }else{
	             	arrs.push(thisId);
	             }
	             lastVal = arrs.join(','); 
	             oHidenPut.val(lastVal);
             }else{
            	oHidenPut.val(thisId);
             }
          }
      }
	})();
	
 
    

	//表单聚焦效果
	(function(){
	    var registerLabel = $('.registerLabel');
		var text = registerLabel.children('span').find('input');
		text.on('focus',function(){
		   $(this).parents('span').addClass('currentFocus'); 
		});
		text.on('blur',function(){
		   $(this).parents('span').removeClass('currentFocus'); 
		});
	})();


	//导航 iphone排除移动
    if(navigator.userAgent.match(/iPhone/i))
	{ 
	  $("#header").css({"position":"static","width":"auto"});
	  $("#content").css({"top":0,"minHeight":$(window).height()-$("#header").height()-$("#footer").height()});
	  $("#footer").css({"top":0});
	  //console.log($("body").outerHeight());console.log($("#content").outerHeight());console.log($("#header").outerHeight()+$("#content").outerHeight()+$("#footer").outerHeight());
	  //$("html,body").css({"height":$("#header").outerHeight()+$("#content").outerHeight()+$("#footer").outerHeight(),"overflow":"hidden"});
	  $("html").css({"height":$("body").height(),"overflow":"hidden"});
	  $("body").css({"overflow":"hidden"});
	}else{
	  $("#content").css({"minHeight":$(window).height()-$("#header").height()-$("#footer").height()});
	}
	//windowLayer
    (function(){
    	windowLayer();
    	function windowLayer()
        {
        	var triggerLayer = $('.triggerLayer');
        	var layers = $(".layers");
        	var marke = $("<div class='marke' style='z-index:9999;'></div>");
        	var iWidth = $(window).width();
        	var iHeight = $("#header").outerHeight()+$("#content").outerHeight()+$("#footer").outerHeight();
        	var btn = false;
        	if($('.marke').size()>0)
        	{
               $('.marke').remove();
        	}
        	triggerLayer.on('click',function(event){
        		if(btn===false)
        		{
                   layers.css({"left":(iWidth-layers.outerWidth())/2,"top":($(window).height()-layers.outerHeight())/2,"display":"block"});
        		   marke.css({"height":iHeight});
        		   $(document.body).append(marke);
        		   btn = true;
				   if(navigator.userAgent.match(/iPhone/i))
				   {
				      $('.marke').on('click',function(event){
					     layers.css({"display":"none"});
						 $('.marke').remove();
						 btn=false;
						 event.stopPropagation();
					  });
				   } 
        		}
        		event.stopPropagation();
        		event.preventDefault();
        		return false;
        	});
        	$(document).on('click',function(event){
        		layers.css({"display":"none"});
        		$('.marke').remove();
        		btn=false;
                event.stopPropagation();
                //return false;
        	});
        	layers.on('click',function(event){
                event.stopPropagation();
                return false;
        	});
        }
    })();    
});


//导航下拉控制
jQuery(document).ready(function (){
  jQuery('header nav').meanmenu();
  $('.meanmenu-reveal').on('click',function(event){
     event.stopPropagation();
     return false;
  });
});