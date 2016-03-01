/*
   关于表单验证运用仅共参考

   格式 <input type="text" isVerliate verliateRule="" />

   如需验证添加 isVerliate 默认只验证是否为空
   添加 verliateRule添加验证条件，例如：
      
      verliateRule="[{empty:true,lengths:[1,2],text:['请输入用户名','用户名长度在1-2位']}]";
      分别验证 是否为空、长度、对应提示错误信息

      这里目前支持规则有：
       empty:true                                      判空
       chinese:true|[自定义正则格式]以数组格式         中文
       lengths[min,max]|[max] 包含括号值               长度
       email:true|[自定义正则格式]以数组格式           邮箱验证      默认已有验证非特殊情况的
       matchphone:true|[自定义正则格式]以数组格式      手机号码验证  默认只保证开头1,11位验证
       matchpw:[ID] 例如：matchpw:['input-password']   指定匹配   
    
   提交:
   自行定义写
*/

$(function(){
   var aOption = $("input[isVerliate]");
   var length = aOption.size();	
   var isTrue = false;
   var isFlg=false;
  
   //添加了聚焦验证
   $(document).on('blur',"input[isVerliate][type='text'],input[isVerliate][type='password'],textarea[isVerliate]",function(event){
         var rules = $(this).attr('verliateRule');
         if(rules!==undefined)
         {  
            var aRules = (eval(rules))[0];
            verificate($(this),aRules); 
         }else{
            var aRules = ([{empty:true,text:['请输入不能为空！']}])[0];
            verificate($(this),aRules); 
         }
         event.stopPropagation();
         event.preventDefault();
   });
   $(document).on("change blur","select[isVerliate]",function(event){
        var rules = $(this).attr('verliateRule');
         if(rules!==undefined)
         {  
            var aRules = (eval(rules))[0];
            verificate($(this),aRules); 
         }else{
            var aRules = ([{empty:true,text:['请输入不能为空！']}])[0];
            verificate($(this),aRules); 
         }
         //event.stopPropagation();
         event.preventDefault();
   });
   

   /******表单提交**********/
   //注册提交
   $("#register-btn").on('click',function(){
       var parentForm = $(this).parents('form');
       if(parentForm.length>0)
       {
          $("input[isVerliate][type='text'],input[isVerliate][type='password'],textarea[isVerliate]",parentForm).trigger('blur');
          //同意注册
          agreenCheck();
          subMint(parentForm);
       }
   });
   //登录 个人信息验证
   $(".enter_btn,.tj_btn01,.tj_btn03,.tj_btn04").on('click',function(event){
      var parentForm = $(this).parents('form');
      if(parentForm.length>0)
       {
          $("input[isVerliate][type='text'],input[isVerliate][type='password'],textarea[isVerliate]",parentForm).trigger('blur');
          subMint(parentForm);
          event.preventDefault();
          return false;
       }
   }); 
   //创建表单提交
   $(".tj_btn,.tj_btn02").on('click',function(event){
      var parentForm = $(this).parents('form');
      if(parentForm.length>0)
      {  
         $("input[isVerliate][type='text'],input[isVerliate][type='password'],textarea[isVerliate]",parentForm).trigger('blur');
         $("select[isVerliate]").trigger("change");
         subMint(parentForm);
         event.preventDefault();
         return false;
      }
   });

   function verificate(obj,aRules)
   {
   	  var parentForm = obj.parent('form');
      var i = -1;
      var arrNum = {};
      for(var a in aRules)
      {
          i++;
          arrNum[a] = i;
      }
      for(var attr in aRules)
      { 
      	  switch(attr.toLowerCase())
      	  {
              case 'empty':isFlg = emptyValiate(obj,aRules[attr]);
                    if(isFlg)
                    {
                       var text = aRules['text'][arrNum.empty];
                    }else{
                       isFlg = false;
                    }
                    break; 
              case 'chinese':isFlg = czValiate(obj,aRules[attr]);
                    if(isFlg)
                    { 
                       var text = aRules['text'][arrNum.chinese]; 
                    }else{
                       isFlg = false;
                    }
                    break;
              case 'lengths':isFlg = lengthValiate(obj,aRules[attr]);
                    if(isFlg)
                    { 
                       var text = aRules['text'][arrNum.lengths];   
                    }else{
                       isFlg = false;
                    }
                    break;
              case 'email':isFlg = emailValiate(obj,aRules[attr]);
                    if(isFlg)
                    { 
                       var text = aRules['text'][arrNum.email];   
                    }else{
                       isFlg = false;
                    }
                    break;
              case 'matchphone':isFlg = phoneValiate(obj,aRules[attr]);
                    if(isFlg)
                    { 
                       var text = aRules['text'][arrNum.matchphone];   
                    }else{
                       isFlg = false;
                    }
                    break;
              case 'matchpw':isFlg = matchValiatePw(obj,aRules[attr]);
                    if(isFlg)
                    { 
                       var text = aRules['text'][arrNum.matchpw];   
                    }else{
                       isFlg = false;
                    }
                    break;
              case 'matchcustom':isFlg = matchCustomValiate(obj,aRules[attr]);
                    if(isFlg)
                    { 
                       var text = aRules['text'][arrNum.matchcustom];   
                    }else{
                       isFlg = false;
                    }
                    break;
      	  }
          if(isFlg)
          {
             break;
          }
      }
      //提示调用
      errorText(obj,text,isFlg);
   }
   //为空验证
   function emptyValiate(obj,rule)
   {
   	   var value = $.trim(obj.val()) || obj.html();
   	   if(rule===true)
       {
           if((obj[0].tagName).toLowerCase()==="select")
           {  
               if(parseInt(value)!==-1)
               {
                  isTrue = false;
               }else{
                  isTrue = true;
               }
           }else{
               if(value==='')
               {
                  isTrue = true;
               }else{
                  isTrue = false;
               }
           }
           
       }
   	   return isTrue;
   }
   //中文验证
   function czValiate(obj,rule)
   {
      var chReg = /^[\u2E80-\u9FFF]+$/;
      var value = $.trim(obj.val()) || obj.html();
      if(rule!==true)
      {
          if(!((rule instanceof Array) && ('length' in rule)))
          {
             alert('自定义验证，请以数组格式填写');
             return false;
          }
          chReg = eval('/'+rule[0]+'/');
      }
      if(!chReg.test(value))
      {
         isTrue = true;
      }else{
         isTrue = false;
      }
      return isTrue;
   }
   //长度验证
   function lengthValiate(obj,rule)
   {
      var value = $.trim(obj.val()) || obj.html();
      //只能为数组格式
      if(typeof rule==='object' && rule instanceof Array)
      {
        //minlength maxlength
        if(rule.length>1)
        {  
           var min = rule[0]<=0 ? 1 : rule[0];
           var max = rule[1];
        }else{
           //只有最大长度
           var min = 0;
           var max = rule[0];
        }
        if(min===0)
        {
           if((value.length)>max)
           {
               isTrue = true;
           }else{
               isTrue = false;
           }
        }else{
           if((value.length)<min || (value.length)>max)
           {
               isTrue = true;
           }else{
               isTrue = false;
           }
        }
        return isTrue;
      }
   }
   //邮箱验证
   function emailValiate(obj,rule)
   {
       var emailReg01 = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
       var emailReg02 = /^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/;
       //默认验证
       if(rule!==true)
       {  
         //自定义邮箱方式验证
         if(!((rule instanceof Array) && ('length' in rule)))
         {
             alert('自定义验证，请以数组格式填写');
             return false;
         }
         emailReg01 = eval('/'+rule[0]+'/');
         emailReg02 = eval('/'+rule[0]+'/');
       }
       var value = $.trim($(obj).val()) || $.trim($(obj).html());
       if(emailReg01.test(value)===false || emailReg02.test(value)===false)
       {
          isTrue = true;
       }else{
          isTrue = false;
       }
       return isTrue;
   }
   //手机号码验证
   function phoneValiate(obj,rule)
   {
      var phoneReg = /^[1]\d{10}$/;    //默认规则
      if(rule!==true)                    //自定义验证规则
      {
         if(!((rule instanceof Array) && ('length' in rule)))
         {
             alert('自定义验证，请以数组格式填写');
             return false;
         }
         phoneReg = eval('/'+rule[0]+'/');
      }             
      var value = $.trim($(obj).val()) || $.trim($(obj).html());
      if(phoneReg.test(value))
      {
         isTrue = false;
      }else{
         isTrue = true;
      }
      return isTrue;
   }
   //自定义验证方式
   function matchCustomValiate(obj,rule)
   {
     var allRegs = {
         usereg:/^[a-zA-Z_\u2E80-\u9FFF]+$/,
         phone:/^1\d{10}$/,
         numbereg:/^\d*$/,
         decinteger:/^(([0-9]+\.?\d+)|(\d+))$/,
         cellphone:/^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/,
         idnumbereg:/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
         minnumber:/^[1-9]\d{2}((\.?\d+)|\d*)$/,
         posinteger:/^[0-9]\d*((\.?\d+)|\d*)$/
      };
      if(rule && rule.length>0)
      {  
          var l = rule.length;
          var value = $.trim($(obj).val()) || $.trim($(obj).html());
          var allRules=[],
              tag;
          var iRegFlg = false;
    
          //多级匹配
          if(rule.indexOf('|')>-1)
          {
             allRules = rule.split("|");
             tag = '|';
          }else if(rule.indexOf('&')>-1)
          {
             allRules = rule.split("&");
             tag = '&';
          }else{
             allRules.push(rule); 
          }
          for(var i=0;i<allRules.length;i++)
          {
                for(var b in allRegs)
                {
                    if(b===allRules[i])
                    { 
                        iRegFlg = allRegs[b].test(value);
                        break;
                    }
                    if(tag==='|')
                    {
                       if(iRegFlg)
                       {
                           break;
                       }
                    }else if(tag==='&'){
                       if(iRegFlg===false)
                       {
                           break;
                       }
                    }else{
                       if(iRegFlg)
                       {
                           break;
                       }
                    } 
                }
          }

          if(iRegFlg)
          {
             isTrue = false;
          }else{
             isTrue = true;
          }
          return isTrue;
      }
   }
   //密码匹配
   function matchValiatePw(obj,rule)
   {
      //与之匹配的对象ID号
      if(!(rule instanceof Array) || rule.length<=0)
      {
         alert('请提供匹配项ID');
         return false;
      }
      var pwObj = $("#"+rule[0]);
      var value0 = pwObj[0] && pwObj[0].type && (pwObj[0].type==='text' || pwObj[0].type==='password') ? pwObj.val():pwObj.html();
      var value1 = obj[0] && obj[0].type && (obj[0].type==='text' || obj[0].type==='password') ? obj.val() : obj.html();
      if(value0 && value1)
      {
          if(value0!==value1)
          {
              isTrue = true;
          }else{
              isTrue = false;
          }
          return isTrue;
      }
   }
   //错误提示
   function errorText(obj,text,isTrue)
   {  
      if(obj && obj.length>0)
      { 
          if(isTrue)
          {
              if(obj.parent().children('.errorDiv').length<=0)
              { 
                 $(obj).after($("<div class='errorDiv'>"+text+"</div>"));
              }else{
                 $(obj).parent().children('.errorDiv').html(text);  
              }
          }else{
              $(obj).parent().children('.errorDiv').remove(); 
          }
      }
   }
   //agreenCheck
   function agreenCheck()
   {
      var isChecked = $("#agree").attr('checked');
      var errors = $("#agree").parents('td').find('.errorDiv');
      if(isChecked===undefined || isChecked===false)
      {
         if(errors.length<=0)
         {
             $("#agree").parents('td').append($("<div class='errorDiv'>请勾选同意协议</div>"));
         }
         
      }
      $("#agree").on('change',function(){
          var isCheck = $("#agree").attr('checked');
          $(".errorDiv",$("#agree").parents('td')).remove();
      })
   }
   //提交验证
   function subMint(parentForm)
   {
      var errors = parentForm.find('.errorDiv');
      if(errors && errors.length>0)
      {
        return false;
      }else{
      	//提交
        parentForm.submit();
      }  
   }
});