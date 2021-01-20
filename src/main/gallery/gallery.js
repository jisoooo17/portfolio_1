$(document).ready(function(){

    //젼역변수
    var $wrap = $(".wrap");
    var $slider = $wrap.find(".slider ul");
    var $prev = $wrap.find(".prev");
    var $next = $wrap.find(".next");
    var speed = 500;
    var isDone = true;    

    //gallery
    var curPos = getSlideWid();        
    $slider.find("li").last().prependTo($slider)

    $(window).on("resize",function(){
        curPos = getSlideWid();
        $slider.css({marginLeft : curPos });    
    });

    $next.on("click",function(e){
        e.preventDefault();

        if(isDone){
            isDone = false;
            next($(this));     
        }
    });

    $prev.on("click",function(e){
        e.preventDefault();

        if(isDone){
            isDone = false;
            prev($(this));     
        }
    });

    function getSlideWid(){
        var result = $slider.find("li").outerWidth();
        result = parseInt(result);   
        result = -result; 
        return result;
    }

    function next(el){   

        $("a").removeClass("on");
        $(el).addClass("on")

        $slider.stop().animate({ marginLeft : curPos*2 },speed, function(){
            $slider.find("li").first().appendTo($slider);
            $slider.css({marginLeft: curPos});
            isDone = true;
        });
    }

    function prev(el){
        $("a").removeClass("on");
        $(el).addClass("on")

        $slider.stop().animate({ marginLeft : 0 },speed, function(){
            $slider.find("li").last().prependTo($slider);
            $slider.css({marginLeft: curPos});
            isDone = true;
        });
    }

    
});