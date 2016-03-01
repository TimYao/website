$(function(){
    var solider = $("#solider"),
        imgs = solider.find('ul li'),
        ol = solider.find('ol'),
        points = ol.find('li'),
        spans =  solider.find('p span'),
        time = 5000,
        w = parseFloat(document.documentElement.getBoundingClientRect().width,10),
        inow= 0,
        t = null;
    ol.css({"margin-left":(w-parseFloat(ol.width()))/2});
    points.on('mouseenter',function(){
        var index = $(this).index();
        clearInterval(t);
        t=null;
        inow = index-1;
        spans.stop().css({"opacity":0});
        convertmove();
    });
    points.on('mouseleave',function(){
        convert();
    });
    spans.eq(inow).stop().animate({"opacity":1},2500);
    convert();
    function convert()
    {
        t=setInterval(function(){
            convertmove();
        },time);
    }
    function convertmove()
    {
        if(inow>=imgs.length-1)
        {
            inow=-1;
        }
        inow++;
        points.removeClass('active');
        imgs.eq(inow).siblings().fadeOut();
        imgs.eq(inow).siblings().removeClass('active');
        points.eq(inow).addClass('active');
        imgs.eq(inow).addClass('active');
        imgs.eq(inow).fadeIn();
        spans.css({"opacity":0});
        spans.eq(inow).stop().animate({"opacity":1},2500);
    }
});