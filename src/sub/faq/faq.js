$(document).ready(function(){

    var $tab = $("#tab");
    var $btns = $tab.find(".btns li a");
    var $wrap = $(".wrap");
    var $dt = $wrap.find("dt");
    var $dd = $wrap.find("dd");
    var $pagination = $(".pagination");
    var $num = $pagination.find(".numbers");
    var $num_btns = $num.find("a");
    var speed = 500;
    var isDone = true;

    $btns.on("click",function(e){
        e.preventDefault();
        var isOn = $(this).hasClass("on");
        if(isOn) return;

        if(isDone){
            var i = $(this).index();

            activateBtn(i);
            isDone = false;
        }
    });

    $dt.on("click",function(){

        var isOn = $(this).hasClass("on");

        $dt.removeClass("on");
        $dd.slideUp();

        if(isOn){
            slide($(this));
            return;
        }
        $(this).addClass("on");
        $(this).next("dd").slideDown();    
    });

    $num_btns.on("click",function(e){
        e.preventDefault();
        pagination($(this))

    });

    function activateBtn(index){
        
        $btns.removeClass("on");
        $wrap.find("dl").fadeOut(speed);

        $btns.eq(index).addClass("on");
        $wrap.find("dl").eq(index).fadeIn(speed,function(){
            isDone = true;
        })

        
 
    }

    function slide(el){
        el.removeClass("on");
        el.next("dd").slideUp(); 
    }

    function pagination(el){
        $num_btns.removeClass("on");
        el.addClass("on");
    }

});