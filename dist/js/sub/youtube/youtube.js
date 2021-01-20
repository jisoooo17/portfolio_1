$(document).ready(function(){


    callData({
        target : "#vidGallery .inner",
        count : 8,
        key : "AIzaSyBacB96cCPElMkrGCCQ6bJ2fui9xbsLC08",
        playList : "PLPDOqoPK1YvJtGBesJD40s_N7QTSji97u"
    });

    
    $("body").on("click","article .pic",function(e){
        e.preventDefault();
        var vidId = $(this).children("a").attr("href");

        createPop({
            width : "100%",
            height : "100vh",
            bg : "rgba(0,0,0,0.9)",
            vidId : vidId
        });
        $("body").css({overflow:"hidden"})
        // $("header").css({"z-index":0})
    });

    $("body").on("click",".pop .close",function(e){
        e.preventDefault();

        $(this).parent(".pop").remove();
    });

    function callData(opt){
        $.ajax({
            url : 'https://www.googleapis.com/youtube/v3/playlistItems',
            dataType : "jsonp",
            data : {
                part: 'snippet',
                key: opt.key,
                maxResults: 8,
                playlistId: opt.playList
            }
        })
        .success(function(data){
            console.log(data.items);
            var item = data.items;

            $(item).each(function(index,data){
                var p_txt = data.snippet.description;
                var len = p_txt.length;
                var date = data.snippet.publishedAt.split("T")[0];

                var p_txt2 = data.snippet.title;
                var len2 = p_txt2.length;

                (len > 70) ? p_txt = p_txt.substr(0,70) + "..." : p_txt;
                (len2 > 40) ? p_txt2 = p_txt2.substr(0,40) + "..." : p_txt2;

                $(opt.target)
                    .append(
                        $("<article>")
                            .append(
                                $("<div class='pic'>")
                                    .append(
                                        $("<a>")
                                        .attr({href:data.snippet.resourceId.videoId})
                                        .css({backgroundImage: "url("+data.snippet.thumbnails.high.url+")"})
                                    ),                                    
                                $("<div class='con'>")
                                    .append(
                                        $("<h2>").text(p_txt2),
                                        $("<p>").text(p_txt),
                                        $("<span>").text(date)
                                    )        
                            )
                    )
             
            })
        })
        .error(function(err){
            console.error(err)
        });
    }

    function createPop(opt){
        $("body")
            .append(
                $("<aside class='pop'>")
                    .css({
                        width : opt.width, height: opt.height,
                        backgroundColor:opt.bg, position:"fixed", top:"50%", left:"50%",zIndex:3,
                        transform:"translate(-50%, -50%)", boxSizing:"border-box", padding:100
                    })
                    .append (
                        $("<a href='#' class='close'>")
                            .text("close")
                            .css({
                                position: "absolute", top:20, right:20, color:"#fff"
                            }),
                        $("<img src='img/loading.gif'>")
                            .css({
                                width:200, position:"absolute", top:"50%", left:"50%",
                                transform:"translate(-50%,-50%)"
                            }),
                        $("<div class='con'>")
                            .css({
                                width:"100%", height:"100%",  position:"relative",display:"none"
                            })
                            .append(
                                $("<iframe>")
                                    .attr({
                                        src:"https://www.youtube.com/embed/"+opt.vidId,
                                        width : "100%", height:"100%", frameborder:0,
                                        allowfullscreen:true
                                    })
                            )
                    )
            )//append ends
        
        setTimeout(function(){
            $(".pop .con").fadeIn(500,function(){
                $(this).prev().remove();
            });
        },1000);
    }
 

});


