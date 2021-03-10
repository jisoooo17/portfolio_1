$(document).ready(function(){

    var $skip_a  = $("#skipNavi a");

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
    
});