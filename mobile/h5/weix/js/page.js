/* ua */
var UA = function(){
  var userAgent = navigator.userAgent.toLowerCase();
  return {
    ipad: /ipad/.test(userAgent),
    iphone: /iphone/.test(userAgent),
    android: /android/.test(userAgent),
    qqnews: /qqnews/.test(userAgent),
    weixin: /micromessenger/.test(userAgent)
  };
}
/* page */
/* page */
var Layout = {
  isScrll : false ,
  page: function (i, _h){
    $(".global").css({ "-webkit-transform": "translate3d(0px, -" + _h * i +"px, 0px)" });
    $(".layout").removeClass("animate");
    $("#layout_" + (i + 1)).addClass("animate");
  },
  swipe: function(_h, _len){

    var _this = this;
    $(".layout").each(function(index, obj){
      $(obj).on("swipeUp", function(){
        if(index<_len-1){
          _this.page(index + 1, _h);}
      }).on("swipeDown", function(){
          _this.page(index - 1, _h);
        });
    });
  },
  init: function(){
    var _this = this,
      _w = $(window).width(),
      _h = $(window).height(),
      _len = $(".layout").length;
    var ua = UA();
    $(".swipe_tip").addClass("fadeOutUp");
    $(".global").width( _w ).height( _h * _len ).addClass("ease");
    $(".screen").width( _w ).height( _h * _len );
    $(".layout").width( _w ).height( _h );
    _this.page(0, _h);
    _this.swipe(_h, _len);
  }
}
Layout.init();




