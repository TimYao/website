/**
 * Created by zhangw on 2016-1-25.
 */
(function($){
    $.fn.star_back_3d=function(p){
        var p=p||{};
        var w_w=p&&p.window_width?p.window_width:"500";
        var w_h=p&&p.window_height?p.window_height:"400";
        var w_b=p&&p.window_background?p.window_background:"#000";
        var s_c=p&&p.star_count?p.star_count:"600";
        var s_color=p&&p.star_color?p.star_color:["#666874","128376","#257798","595b67","0d5451","73757e","#06d9c6","168579"];
        var s_d=p&&p.star_depth?p.star_depth:"250";
        var dom=$(this);
        var fov = parseInt(s_d);
        var SCREEN_WIDTH = parseInt(w_w);
        var SCREEN_HEIGHT = parseInt(w_h);
        var HALF_WIDTH = SCREEN_WIDTH/2;
        var HALF_HEIGHT = SCREEN_HEIGHT/2;
        var c_id = dom.attr("id");
        var numPoints = s_c;
        var imgObj=p.imgobj || {};
        var img=document.createElement("img");
        //var r = parseInt(w_w/10);
        dom[0].loop = null;
        dom.attr({ width: w_w, height: w_h});
        setup();
        function setup()
        {
            function drawPath(x, y, n, r,cols,sty)
            {
                var i,ang;
                ang = Math.PI*2/n //旋转的角度
                c.save();//保存状态
                if(sty=="fill"){
                    c.fillStyle = cols[Math.floor(Math.random() * cols.length)];
                }else if(sty=="stroke"){
                    c.strokeStyle = cols[Math.floor(Math.random() * cols.length)];
                }else{
                    c.fillStyle = cols[Math.floor(Math.random() * cols.length)];
                    c.strokeStyle = cols[Math.floor(Math.random() * cols.length)];
                }
                c.lineWidth = 1;//设置线宽
                c.translate(x, y);//原点移到x,y处，即要画的多边形中心
                c.moveTo(0, -r);//据中心r距离处画点
                c.beginPath();
                for(i = 0;i < n; i ++)
                {
                    c.rotate(ang)//旋转
                    c.lineTo(0, -r);//据中心r距离处连线
                }
                c.closePath();
                c.stroke();
                c.fill();
                c.restore();//返回原始状态
            }
            function draw3Din2D(point3d)
            {
                x3d = point3d[0];
                y3d = point3d[1];
                z3d = point3d[2];
                var scale = fov/(fov+z3d);
                var x2d = (x3d * scale) + HALF_WIDTH;
                var y2d = (y3d * scale)  + HALF_HEIGHT;
                if(scale<5){
                    c.fillStyle = s_color[Math.floor(Math.random() * s_color.length)];
                    c.beginPath();
                    c.arc(x2d, y2d, scale, 0, 2 * Math.PI, true);
                    c.fill();
                }else if(scale>=5 && scale<15){
                    drawPath(x2d, y2d, 3, scale, s_color);
                }else{
                    c.lineWidth= scale;
                    c.strokeStyle = s_color[Math.floor(Math.random() * s_color.length)];
                    c.beginPath();
                    c.moveTo(x2d,y2d);
                    c.lineTo(x2d+scale,y2d);
                    c.stroke();
                }
            }

            var canvas = document.getElementById(c_id);
            var c = canvas.getContext('2d');

            var points = [];

            function initPoints()
            {
                for (i=0; i<numPoints; i++)
                {
                    point = [(Math.random()*400)-200, (Math.random()*400)-200 , (Math.random()*400)-200 ];
                    points.push(point);
                }

            }

            function render()
            {  //console.log(1);
                c.clearRect(0,0,SCREEN_WIDTH,SCREEN_HEIGHT)
                c.fillStyle=w_b;
                c.fillRect(0,0, SCREEN_WIDTH, SCREEN_HEIGHT);
                if(!img.src){
                    var img_obj=new Image();
                    img_obj.onload=function(){
                        img.src=img_obj.src;
                        c.drawImage(img,100,100)
                    }
                    img_obj.src=imgObj.path;
                }else{
                    c.drawImage(img,imgObj.x,imgObj.y)
                }

                for (i=0; i<numPoints; i++)
                {
                    point3d = points[i];

                    z3d = point3d[2];
                    z3d-=4;
                    if(z3d<-fov) z3d +=400;
                    point3d[2] = z3d;
                    draw3Din2D(point3d);
                }
            }
            initPoints();
            dom[0].loop = setInterval(function(){
                render();
            }, 50);
        }
    };
    $.fn.star_back_points=function(p){
        var p = p || {},
            canvasObj = $(this),
            canvas = canvasObj[0].getContext('2d'),
            counts = parseFloat(p.counts,10) || 400,
            time = p.time || 50,
            directMove = (p.directMove).toLowerCase() || 'down',
            rangeHeight = parseFloat(p.rangeHeight,10) || 60,
            rangeHeightDiff = parseFloat(p.rangeHeightDiff,10) || 40,
            rangeWidthDiff = parseFloat(p.rangeWidthDiff,10) || 100,
            colors = p.colors || ["#177b6c"],
            pro = parseFloat(p.pro) || 10,
            flg = false,
            pointStores = [];
            w = parseFloat($(window).width(),10);
        canvasObj[0].t = null;
        canvasObj.attr({"width":w,"height":rangeHeight});
        canvas.fillRect(0,0,w,rangeHeight); //防止多次调用，清除画布
        setInitpoint();
        //初始化点位置
        function setInitpoint()
        {
            canvas.clearRect(0,0,w,rangeHeight);
            for(var i=0;i<counts;i++)
            {
                    var x = (Math.random()*w)-rangeWidthDiff;
                    var y = (Math.random()*rangeHeight)-rangeHeightDiff;
                    var r = ((Math.random()*10)/10);
                    //方向控制
                    directMove ==="down" ? (y=y*1): directMove==="top" ? (y=Math.abs(y)) : (y=y*1);
                    pointStores[i]=[x,y,r];
            }
            clearInterval(canvasObj[0].t);
            canvasObj[0].t = null;
            canvasObj[0].t = setInterval(function(){
                disPoints();
            },50);
        };
        //随机点位移改变
        function disPoints()
        {
            var randNums = [],
                step= 0,
                points,
                direc = 1,
                x, y,r;
            for(var k=0;k<counts;k++)
            {
                randNums[k] = Math.floor(Math.random()*(pointStores.length-1));
            }
            if(pointStores.length>0)
            {
                flg=true;
            }
            if(flg)
            {
                for(var i=0;i<counts;i++){
                    for(var m=0;m<randNums.length;m++)
                    {
                        if(i==randNums[m])
                        {
                            points = pointStores[i];
                            step = ((points[1]+4)-points[1])/pro; //控制步长速度
                            x = points[0];
                            directMove=="down" ? (y = points[1]+step,direc=1) : directMove=="top" ? (y = points[1]-step,direc=-1) : (y = points[1]+step,direc=1);
                            r = points[2];
                            //向下掉落控制
                            if(directMove=="down")
                            {
                                if(y>(rangeHeight*direc))
                                {
                                    y = (Math.random()*rangeHeight)-(rangeHeightDiff);
                                }
                            }
                            //向上飘起控制
                            if(directMove=="top")
                            {
                                if(y<(rangeHeight*direc))
                                {
                                    y = Math.abs((Math.random()*rangeHeight)-(rangeHeightDiff));
                                }
                            }
                            pointStores[i] = [x,y,r];
                        }
                    }

                }

            }
            drawPoints(pointStores);
        };
        //开始画点
        function drawPoints(pointStores)
        {
            var x,y,r;
            canvas.clearRect(0,0,w,rangeHeight);
            canvas.beginPath();
            canvas.fillStyle ="#177b6c";
            for(var i=0;i<counts;i++)
            {
                x = pointStores[i][0];
                y = pointStores[i][1];
                r = pointStores[i][2];
                canvas.arc(x,y,r,0,Math.PI*2,true);
                canvas.closePath();
                canvas.fill();
            }
        };
    }
})(jQuery);
