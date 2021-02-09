$(document).ready(function(){
    $("#gnb>li").on("mouseenter focusin",function(){
        $(this).children("ul").stop().slideDown();
        $(this).children("a").addClass("on");
    });

    $("#gnb>li").on("mouseleave focusout",function(){
        $(this).children("ul").stop().slideUp();
        $(this).children("a").removeClass("on");
    });
});