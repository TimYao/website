/**/


$(function(){

	//nav hover
	(function(){
	  var time = null;
	  var t = 300;  //关闭延迟时间
	  $("#perCenter").on('mouseenter',function(){
	  	  var id = $(this).attr('id');
	  	  var subId = id+'List';
	  	  navTree($(this),$("#"+subId),true);
	  });
	  $("#perCenter").on('mouseleave',function(){
	  	  var id = $(this).attr('id');
	  	  var subId = id+'List';
	  	  navTree($(this),$("#"+subId),false);
	  });
	  $("#jd").on('mouseenter',function(){
	  	  var id = $(this).attr('id');
	  	  var subId = id+'List';
	  	  navTree($(this),$("#"+subId),true);
	  });
	  $("#jd").on('mouseleave',function(){
	  	  var id = $(this).attr('id');
	  	  var subId = id+'List';
	  	  navTree($(this),$("#"+subId),false);
	  });
	  function navTree(op,osubp,flg)
	  {
	      var thisOffetleft = op.position().left+parseFloat(op.css("marginLeft"))-1;
	      var thisOffettop = parseInt(op.position().top+op.height()+10);
	      if(flg===true)
	      {
           op.addClass("root");
	         osubp.css({"display":"block","left":thisOffetleft,"top":thisOffettop});
	      }else{
	      	 time = setTimeout(function(){
	      	 	op.removeClass("root");
                osubp.css({"display":"none"});
	      	 },t);
	      }
	      osubp.on('mouseenter',function(){
	      	 clearTimeout(time);
	      });
	      osubp.on('mouseleave',function(){
	      	 op.removeClass("root");
	      	 osubp.css({"display":"none"});
	      })
	  }
	})();
     
    //同意效果 
	(function(){
      var length = $(".more_hetong").size();
      for(var i=1;i<=length;i++)
      {
         (function(i){

         	//点击展开
         	$("#show_detail"+i).on('click',function(event){
         	  $("#hide_detail"+i).css({"display":"block"});	
              $("#hetong"+i).css({"display":"block","height":0});
              $("#hetong"+i).animate({"height":372},'slow',function(){
              	 $(this).css({"display":"block","height":"auto"});
              });
              $(this).css({"display":"none"});
              event.preventDefault();
              event.stopPropagation();
              return false;
            });

            //点击影藏
            $("#hide_detail"+i).on('click',function(event){
              $(this).css({"display":"none"});
              //$("#btn_agree"+i).removeClass("none");
              //$("#btn_agree"+i).parent().find(".yanzheng").addClass("none");
              $("#show_detail"+i).css({"display":"block"});
              $("#hetong"+i).css({"display":"none"});
              event.preventDefault();
              event.stopPropagation();
              return false;
            });

            //同意按钮
            $("#btn_agree"+i).on('click',function(){
               $(this).addClass("none");
               $(this).parent().find(".yanzheng").removeClass("none");
            });

         })(i);
      }
	})();

	//信息提示
	(function(){
      $(".youhuima").on("mouseenter",function(){
          $(".yhm_tip").removeClass("none");
      });
      $(".youhuima").on("mouseleave",function(){
      	  $(".yhm_tip").addClass("none");
      });
	})();

	//首页幻灯
	(function(){
		var solide = $("#solide"),
        liNum = $(".liNum"),
        aLis = liNum.find('li'),
		    ul = solide.find("ul"),
		    li = ul.children("li"),
		    liWidth = $(window).width(),
        pro = parseFloat(li.find("img").width()/li.find("img").height()),
		    iNow = 0,
		    t = 1500,
		    time = null;
    li.find("img").width(liWidth);
    li.find("img").height(liWidth/pro);
    liNum.css({"left":parseFloat($(window).width()-liNum.innerWidth())/2,"bottom":10});
		ul.css({"width":li.size()*liWidth});
		aLis.on('mouseenter',function(event){
      clearInterval(time);
      iNow = -($(this).index());
      move();
      event.stopPropagation();
      return false;
    });
    aLis.on('mouseleave',function(event){
      auto();
      event.stopPropagation();
      return false;
    });
		function move()
		{
          aLis.removeClass("root");
          aLis.eq(Math.abs(iNow)).addClass("root");
          ul.stop().animate({"left":iNow*liWidth},'slow',function(){});
		}
		auto();
		function auto()
		{
			clearInterval(time);
			time = setInterval(function(){
				iNow--;
				if(iNow===-(li.length))
				{
	               iNow=0;
				}
				move();
			},t);
		}
    $(window).on('resize',function(){
       liWidth = $(window).width();
       li.find("img").width(liWidth);
       li.find("img").height(liWidth/pro);
       ul.css({"width":li.size()*liWidth});
       liNum.css({"left":parseFloat($(window).width()-liNum.innerWidth())/2,"bottom":10});
    })
	})();

	//all弹框
    (function(){
    	var flg = false;
    	var oW = $(window).width();
    	var oH = Math.max($(document).height(),$(window).height());
    	var oT = 250;
        $("a[data-triggle=true],:input[type=submit][data-triggle=true],:input[type=button][data-triggle=true],:button[data-triggle=true]").on('click',function(event){
        	$layerObj = $("#"+$(this).attr("data-layer-id")); 
        	if($(this).attr("data-layer-id"))
        	{
                flg=false;
        	}
        	if(flg===false)
        	{ 
        	   $layerObj .css({"left":(oW-$layerObj.outerWidth())/2,"top":oT});
        	   $("<div class='mark'></div>").css({"width":oW,"height":oH}).appendTo($('body'));	
               $layerObj .removeClass("none");
               if($.browser.msie && parseInt($.browser.version,10)<7)
               {
                  iframeLayer(); 
               } 
               flg = true;
               $layerObj.find(".gb_close").on('click',function(event){
               	    $layerObj.addClass("none");
               	    flg = false;
               	    $(".mark").remove();
               	    event.preventDefault();
		        	event.stopPropagation();
		        	return false;
               }); 
        	}
        	event.preventDefault();
        	event.stopPropagation();
        	return false;
        });
        function iframeLayer()
        { 
        	$("<iframe class='ifram' frameborder=0 scrolling=no width="+$layerObj.outerWidth()+" height="+$layerObj.height()+" style='left:"+$layerObj.css("left")+";top:"+$layerObj.css("top")+"'></iframe>").appendTo($('body'));
        }
    })();

    //select
    (function(){
      $(".j_select").each(function(index,obj){
         obj.flg = false;
      });
    	$(".j_select").on('click',function(event){
    		$(this)[0].flg===false ? ($(this).siblings(".select_ul").removeClass("none"),$(this)[0].flg=true):($(this).siblings(".select_ul").addClass("none"),$(this)[0].flg=false);
    	      event.preventDefault();
            event.stopPropagation();
            return false;
    	});
    	$(".select_ul").find("li").each(function(i,obj){
            var data_select = $(obj).attr("data-select");
            if(parseInt(data_select,10)>0)
            {
               $(this).parent().siblings('.status').val($(obj).attr("data-value"));
               $(this).parent().siblings(".j_select").html($(this).html());
            }
    	}); 
    	$(".select_ul").find("li").on('click',function(){
    		var date_state = $(this).attr("data-value");
    		$(this).parent().find("li").attr("data-select","");
    		$(this).attr("data-select",1);
    		$(this).parent().siblings(".j_select").html($(this).html());
    		$(this).parent().siblings('.status').val(date_state);
    		$(this).parent().siblings(".select_ul").addClass("none");
    		($(this).parent().siblings(".j_select"))[0].flg=false;
    	});
    	$(document).on('click',function(event){
          if($(".select_ul").length>0 && $(".j_select").length>0)
          {
               $(".select_ul").addClass("none");
               $(".j_select")[0].flg=false;
          } 
          event.stopPropagation();
          //return false;
    	});
    })();

    //查看详情
    (function(){
       //var flg = false;
       var l = $(".j_por_Show").length;
       for(var i=0;i<l;i++)
       {
          $(".j_por_Show")[i].flg = false;
       }
       $(".j_por_Show").on('click',function(){
           if($(this)[0].flg===false)
           {
              $(this).find("em").text("收起详情");
              $(this).find("i").removeClass("ico_proShow");
              $(this).find("i").addClass("ico_proHide");
              $(this).parents('.project').find(".j_table_tab").removeClass("none");
              $(this).parents('.project').find(".j_table_tab").slideDown();
              $(this)[0].flg = true;
           }else{
             $(this).find("em").text("查看详情");
             $(this).find("i").addClass("ico_proShow");
             $(this).find("i").removeClass("ico_proHide");
             $(this).parents('.project').find(".j_table_tab").slideUp();
             $(this)[0].flg = false;
           } 
       });
    })();
    
    //阻止冒泡
    $("input[type=button],input[type=submit],button").on('click',function(event){
        event.stopPropagation();
    });
    
    //同意 签署 投资页面
    (function(){
       var iNow = 0;
       var length = $("#td_agree_btn1 .button_subtongyi1,#td_agree_btn2 .button_subtongyi1,#td_agree_btn3 .button_subtongyi1").size();
       var parentForm = null;
       var data_min = parseFloat($("#J_BIDMONEY").attr("data-min"));
       if(!data_min)
       {
           data_min = 100;
       }
       var data_text = "最小起投金额"+data_min+"元！";
       //最小金额判定
       $("#J_BIDMONEY").on('blur',function(){
            var v = parseFloat($.trim($(this).val()));
            if(v>=0)
            {   
                if(v<data_min)
                {   
                    if($(this).parent().children(".errorDiv1").length<=0)
                    {
                       $(this).after($('<div class="errorDiv1">'+data_text+'</div>'));
                    }
                }else{
                    $(this).parent().children(".errorDiv1").remove(); 
                } 
            }else{
                $(this).parent().children(".errorDiv1").remove();
            }
       });
       //提交
       $(".tz_btn01").on('click',function(event){
           //起投金额验证触发
           $("#J_BIDMONEY").blur();
           parentForm = $(this).parents('form');
           var errs = $(".errorDiv");
           var errs01 = $(".errorDiv1");
           if(parentForm && parentForm.length>0)
           {
               if(iNow<length)
               {
                  alert("你还没有同意协议！");
                  return false;
               }else if(errs && errs.length>0 || errs01 && errs01.length>0){
                  alert(data_text);
               }else{
                  parentForm.submit(); 
               }
           }
           event.stopPropagation();
           return false;
       });
       //同意签订
       $("#td_agree_btn1 .button_subtongyi1,#td_agree_btn2 .button_subtongyi1,#td_agree_btn3 .button_subtongyi1").on('click',function(event){
           $(this).addClass("none");
           $(this).parents('td').next('td').find('.yanzheng').removeClass("none");
           iNow++;
           event.stopPropagation();
           return false;
       });
       //优惠码验证
       $("#btn_coupon_check").on('click',function(event){
           $("#coupon_input").blur();
           var errors = $("#coupon_input").next('.errorDiv');
           var value = $.trim($("#coupon_input").val());
           if(errors && errors.length<=0)
           {
              $.ajax({
                 url:'../financial/js/ajax.php',
                 type:'get',
                 async:true,
                 dataType:'json',
                 data:{
                    code:value
                 },
                 success:function(response)
                 {
                     var res = eval(response);
                     var result,code,msg;
                     result = res['result'];
                     
                     if(result==false)
                     {
                        $("#coupon_tr_error_msg").removeClass("none");
                     }else{
                        $("#coupon_tr_error_msg").addClass("none"); 
                     }
                 },
                 error:function(error)
                 {

                 }
              });
           }
           event.stopPropagation();
           return false;
       });
    })();

    //联动地区、城市
    (function(){
       var mainSelect = $('.mulitipart').find('.selectOp');
       var oParentObj = $('.mulitipart');
       var defaultV0 = "请选择城市";
       var defaultV1 = "请选择地区";
       var allSelect = null;
       for(var q=0;q<mainSelect.length;q++)
       {
           $(mainSelect[q])[0].istart=false;
       }
       if(mainSelect && mainSelect.length>0)
       { 
           mainSelect.find("option").eq(0).attr("selected",true);
           $(document).on('change','.mulitipart .selectOp',function(){
              var This = $(this);
              $(this)[0].istart = false;
              var selecOptiontId = $(this).find("option:selected").attr('data_id');
              var data_main = (parseInt($(this).attr('data_main'),10))+1;
              if((parseInt($(this).attr('data_main'),10))!=0)
              {    
                   var selectValue = $(this).find("option:selected").val();
              }else{
                   var selectValue = undefined;  
              }
              if(!!selecOptiontId && parseInt($(this).find('select').val())!==-1)
              {  
                   $.ajax({
                      url:'../financial/js/select.php',
                      type:'get',
                      dataType:'json',
                      async:true,
                      data:{
                         id:selecOptiontId
                      },
                      beforeSend:function(response)
                      {
                          if(This[0].istart)
                          {
                             return;
                          }
                      },
                      success:function(response)
                      {
                         for(var a in response)
                         {
                             creatSelect(oParentObj,data_main,a,response[a],selectValue); 
                         } 
                         This[0].istart=true;
                      },
                      error:function(err)
                      {
                         alert('服务器返回失败!');
                      }
                   });
              }else if(parseInt($(this).find("select").val())===-1){
                 $(this).nextAll('.selectOp').remove();
                 var mainSelectall = $('.mulitipart').find('.selectOp');
                 for(var q=0;q<mainSelectall.length;q++)
                 {
                     $(mainSelectall[q])[0].istart=false;
                 }
              }
           });
           
       }
       function creatSelect(oParentObj,data_main,parentId,obj,selectValue)
       { 
          var allSelectOp = $('.mulitipart').find('.selectOp');
          var flg = false;
          var n = 0;
          var changObj = null;
           
          for(var i=0;i<allSelectOp.length;i++)
          {
               var data_main_p = parseInt($(allSelectOp[i]).attr("data_main"),10);
               if(data_main_p===data_main)
               { 
                  flg = true;
                  n = i;
                  changObj = $(allSelectOp[i]);
                  break;
               }
          }
          //没有生成
          if(flg===false)
          { 
              var selectOp = $("<div class='selectOp' data_main="+(data_main)+"></div>");
              var selects = $("<select></select>");
              selectOp[0].istart = false;
              if(data_main===1)
              { 
                 //添加验证
                 selects.attr("isVerliate","");
                 selects.attr("verliateRule","[{empty:true,text:['选择城市']}]");
                  
                  var kvalue = -1;
                  var selecText = defaultV0;
              }
              if(data_main===2)
              { 
                 //添加验证
                 selects.attr("isVerliate","");
                 selects.attr("verliateRule","[{empty:true,text:['选择地区']}]");
                 var kvalue = -1;
                 var selecText = defaultV1;
              }
              selects.append($("<option selected=true value="+kvalue+">"+selecText+"</option>"));  
              for(var b in obj)
              {
                   var op = $("<option data_id="+b+" value="+obj[b]+">"+obj[b]+"</option>");
                   selects.append(op);
              }
              selectOp.append(selects);
              oParentObj.append(selectOp);
              selects.blur();//触发验证
              if(selectValue!=undefined)
              {
                 selectOp.prev(".selectOp").find('select').val(selectValue);
              }
          }else{ 
          //生成
             if(changObj && changObj.length>0)
             {   
                 var changSelect = changObj.find('select');
                 var changOp = changSelect.find('option');
                 changSelect.empty();
                 if(data_main===1)
                 {
                     var kvalue = -1;
                     var selecText = defaultV0;
                 }
                 if(data_main===2)
                 {
                     var kvalue = -1;
                     var selecText = defaultV1;
                 }
                 changSelect.append($("<option selected=true value="+kvalue+">"+selecText+"</option>"));
                 for(var c in obj)
                 {
                     var op0 = $("<option data_id="+c+" value="+obj[c]+">"+obj[c]+"</option>");
                     changSelect.append(op0);
                 }
                 changObj.nextAll('.selectOp').remove();
             }

          }  
       }
    })();

    //投资页面
    (function(){
       var tz_btn02 = $('.tz_btn02');
       var parentForm = tz_btn02.parents('form');
       var login_infors=$("#login_infors");
       var flg = false;
       var flg0 = false;
       //判断是否登录和是否有余额
       if(login_infors && login_infors.length>0)
       {
          var data_balance = parseFloat(login_infors.attr('data-balance'));
          var islogin = login_infors.attr('islogin');
          if(islogin==="true" && data_balance>0)
          {   
              flg = true;
          }
       }
       //投资提交
       if(tz_btn02 && tz_btn02.length>0)
       {
           tz_btn02.on('click',function(event){
               var value = parseFloat($.trim($("#invest_input").val()));
               var t = $.trim($("#invest_input").val()).indexOf(".")>-1 ? $.trim($("#invest_input").val()).substring(($.trim($("#invest_input").val())).indexOf(".")+1) : -1;
               $("#invest_input").blur();
               var errors = $(".errorDiv");
               if(errors && errors.length<=0)
               {
                   if(value<100 || t.length>2)
                   {
                      $("#invest_tip").removeClass("none");
                      flg0 = true; 
                   }else{
                      flg0 = false;
                   }

                   if(flg===true)
                   { 
                       if(value>data_balance)
                       {
                           alert('投资余额不足，请充值！');
                           return false;
                       }
                   }
                   if(flg===true && flg0===false && parentForm && parentForm.length>0)
                   { 
                       parentForm.submit();
                   }else{
                       event.preventDefault();
                       return false;
                   }
               }else{
                  event.preventDefault();
                  return false;
               }
               event.stopPropagation();
           });
       }
       //聚焦影藏
       $("#invest_input").on('focus',function(){
         $("#invest_tip").addClass("none");
       });
       //失去焦点，计算净收益值
       $("#invest_input").on('blur',function(){
          var value = parseFloat($.trim($(this).val()));
          var jsylv = parseFloat($("#jsylv").attr("data-netrate"));
          if(value>0)
          {
              $("#income").html(parseFloat(value*jsylv));
          }
       });
    })();

    //友情链接
    (function(){
       var aIcons = $("#clientList").find('.icon');
       aIcons.on('mouseenter',function(event){
          $(this).parents("li").find(".clientdiv").css("display","block");
          event.stopPropagation();
          return false;
       });
       aIcons.on('mouseleave',function(event){
          $(this).parents("li").find(".clientdiv").css("display","none");
          event.stopPropagation();
          return false;
       });
    })();
});