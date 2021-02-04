$(document).ready(function(){

    var $skip_a  = $("#skipNavi a");

    /*
    var $header = $("#header");
    var $gnb_li = $("#gnb>li");
    var $sub = $gnb_li.find(".sub");
    var speed = 500;  
    */

    $skip_a.on("focusin",function(){
        $(this).css({top: 0});
    });
    $skip_a.on("focusout",function(){
        $(this).css({top: -30});
    });

    $("#gnb>li").on("mouseenter focusin",function(){
        $(this).children("ul").stop().slideDown();
        $(this).children("a").addClass("on");
    });

    $("#gnb>li").on("mouseleave focusout",function(){
        $(this).children("ul").stop().slideUp();
        $(this).children("a").removeClass("on");
    });

    /*
    $gnb_li.on("mouseenter focusin",function(){
        openSub(this);
    });

    $gnb_li.on("mouseleave focusout",function(){
        closeSub(this);
    });

    function openSub(el){
        var ht = $sub.outerHeight();
        var bg = $sub.css("background-color");
        var posY = $header.outerHeight();
        var isBgGnb = $(".bgGnb").length;//비지지앤비없으면 false인 0이 찍힘
        console.log(isBgGnb);

        if(!isBgGnb) { 
            console.log("test");       
            $header.prepend(
                $("<div class='bgGnb'>")
                    .css({
                        width:"100%",  height:ht, backgroundColor:bg, 
                        position:"absolute", left:0, top:posY, display:"none"
                    })
            )
        }

        
        $(el).children(".sub").stop().slideDown(speed);
        $(".bgGnb").stop().slideDown(speed);
        $(el).children("a").addClass("on");
    }

    function closeSub(el){
        $(el).children(".sub").stop().slideUp(speed/2);
        $(".bgGnb").stop().slideUp(speed/2,function(){
            $(this).remove();
        });
        $(el).children("a").removeClass("on");
    }
    */
});