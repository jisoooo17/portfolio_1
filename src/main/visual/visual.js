$(document).ready(function(){
    var speed = 500;

    activation(0);

    $(".btns li").on("click", function(e){
        e.preventDefault();

        var i_off = $(".btns li.on").index();
        var i_on = $(this).index();

        rect_off(i_off, i_on);    
    
    });

    function activation(i_on){
        $(".btns li").removeClass("on");
        $(".btns li").eq(i_on).addClass("on");

        $(".panel li").removeClass("on");
        $(".panel li").eq(i_on).addClass("on");

        rect_on(i_on);
    }

    function rect_on(i_on){        
        var el = $(".panel li").eq(i_on);
        var $header = $("#header");
        var $h1 = $header.find("h1>a");
        var $h1_mo = $header.find(".menuMo>h1>a");
        var $gnb = $header.find("#gnb>li>a");
        var $btnCall = $header.find(".btnCall");

        
        if(i_on == 0) {  
            $h1.css({color:"#000"});
            $h1_mo.css({color:"#fff"});
            $gnb.css({color : "#000"});
            $btnCall.css({color:"#000"});
            el.find(".left").animate({ height:"100%"},speed, function(){
                el.find(".top").animate({ width:"100%"},speed, function(){
                    el.find(".right").animate({ height:"50%"}, speed, function(){
                        el.find(".square").addClass("on");
                    });
                })
            })
        }     
        
        if(i_on == 1) {
            $h1.css({color:"#fff"});
            $h1_mo.css({color:"#fff"});
            $gnb.css({color : "#fff"});
            $btnCall.css({color:"#fff"});
            el.find(".top").animate({ width: "100%" }, speed, function(){
                el.find(".right").animate({ height: "100%"}, speed, function(){
                    el.find(".bottom").animate({ width:"50%"}, speed, function(){
                        el.find(".square").addClass("on");
                    });
                })
            })
        }

        if(i_on == 2) {  
            $h1.css({color:"#fff"});
            $h1_mo.css({color:"#fff"});
            $gnb.css({color : "#fff"});
            $btnCall.css({color:"#fff"});
            el.find(".left").animate({ height:"50%"},speed, function(){
                el.find(".bottom").animate({ width:"100%"},speed, function(){
                    el.find(".right").animate({ height:"100%"}, speed, function(){
                        el.find(".top").animate({ width: "30%"}, speed, function(){
                            el.find(".square").addClass("on");
                        });
                    });
                })
            })
        }  
    }

    function rect_off(i_off, i_on){        
        var el = $(".panel li").eq(i_off);

        if(i_off == 0) {  
            el.find(".square").removeClass("on");

            el.find(".right").animate({ height:"0%"},speed/2, function(){
                el.find(".top").animate({ width:"0%"},speed/2, function(){
                    el.find(".left").animate({ height:"0%"}, speed/2, function(){      
                        activation(i_on);
                        
                    });
                })
            })
        }
        
        if(i_off == 1) {
            el.find(".square").removeClass("on");

            el.find(".bottom").animate({ width: "0%" }, speed/2, function(){
                el.find(".right").animate({ height: "0%"}, speed/2, function(){
                    el.find(".top").animate({ width:"0%"}, speed/2, function(){                        
                        activation(i_on);
                    });
                })
            })
        }

        if(i_off == 2) {  
            el.find(".square").removeClass("on");

            el.find(".top").animate({ width:"0%"},speed/2, function(){
                el.find(".right").animate({ height:"0%"},speed/2, function(){
                    el.find(".bottom").animate({ width:"0%"}, speed/2, function(){
                       el.find(".left").animate({ height: "0%"}, speed/2, function(){    
                           activation(i_on);
                       })
                    });
                })
            })
        }  
    }


});