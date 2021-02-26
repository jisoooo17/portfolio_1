$(document).ready(function(){

    var $pagination = $(".pagination");
    var $num = $pagination.find(".numbers");
    var $btns = $num.find("a");
    var $tr = $("table tr");
    var $contents = $tr.find(".contents");

    $btns.on("click focusin",function(e){
        e.preventDefault();

        activateBtn($(this));
        
    });

    $contents.on("click focusin",function(e){
        e.preventDefault();
        focus($(this));      
    });

    function activateBtn(el){
        $btns.removeClass("on");
        el.addClass("on");
    }

    function focus(el){
        $contents.removeClass("on");
        el.addClass("on");
    }

});