$(document).ready(function(){

    var $tab = $("#tab");
    var $btns = $tab.find(".btns li a");
    var $boxs = $tab.find(".wrap dl");
    var speed = 500;
    var isDone = true;
    
    //binding Event
    $btns.on("click focusin",function(e){
        e.preventDefault();
        var isOn = $(this).hasClass("on");
        if(isOn) return;

        if(isDone){
            var i = $(this).parent("li").index();
            activation(i)
            isDone = false;
        }     
    });

    //function declaration
    function activation(index){
        $btns.removeClass("on");
        $boxs.fadeOut(speed);

        $btns.parent("li").eq(index).children("a").addClass("on");
        $boxs.eq(index).fadeIn(speed,function(){
            isDone = true;
        });
    }
});