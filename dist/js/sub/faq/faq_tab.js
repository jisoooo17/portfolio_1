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
            // var ht = $boxs.eq(i).outerHeight(true);
            // var dd_ht = $boxs.find("dd").outerHeight();
            // var total = ht + dd_ht;

            activation(i)
            isDone = false;
        }     
    });

    //fubction declaration
    function activation(index){
        $btns.removeClass("on");
        $boxs.fadeOut(speed);

        $btns.parent("li").eq(index).children("a").addClass("on");
        $boxs.eq(index).fadeIn(speed,function(){
            isDone = true;
        });

        // $tab.animate({height : height},speed,function(){
        //     isDone = true;
        // });
    }
});