/* 返回顶部 */
function scrolltopBar(){
  /* 返回顶部的显示/隐藏 */
  $(document).scroll(function(){
    var scrollH = $(document).scrollTop() ||  $(window).scrollTop();
    if(scrollH < 100){
      $('.back_top').fadeOut(50);
    }else{
      $('.back_top').fadeIn(50);
    };
  });
  /* 返回顶部 */
  $('.back_top').click(function(){
    $('body,html').animate({scrollTop:0},800);
  });
}


/* 滚动后导航栏悬浮 */
function delay(num,attr1,attr2){
    var wh=parseInt($(document).scrollTop());
    /*alert(wh)*/
    if(wh>num){
        $(attr1).addClass(attr2);
    }else{
        $(attr1).removeClass(attr2);
    };
};