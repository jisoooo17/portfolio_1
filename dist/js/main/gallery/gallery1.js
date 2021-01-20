$(document).ready(function(){

    var url = 'https://www.flickr.com/services/rest/?method=flickr.interestingness.getList';
    var url_search = 'https://www.flickr.com/services/rest/?method=flickr.photos.search';
    var key = 'b72cb72d1b89d74effcf0ae695b71db5';

    getFlickr(url, key, 10); 

    $("body").on("click","#gallery ul li a",function(e){
        e.preventDefault();
        var imgSrc = $(this).attr("href");
        createPop(imgSrc);
    });

    $("body").on("click",".Pop span",function(){
        $(this).parent().fadeOut(500,function(){
            $(this).remove();
        })
    });

    $(".wrap3 #search button").on("click",function(){
        var tags = $(this).prev().val();
        getFlickr(url_search,key,10,tags);
    });

    function getFlickr(url, key, num, tags){
        $.ajax({
            url : url,
            dataType : "json", 
            data : {
                api_key : key,
                per_page : num, 
                format : "json", 
                nojsoncallback : 1, 
                tags : tags,
                tagmode : "any",
                privacy_filter : 5
            }
        })
        .success(function(data){
            console.log(data.photos.photo);
            var item = data.photos.photo;

            $("#gallery ul").empty();
    
            $(item).each(function(index,data){
                var p_txt = data.title;
                var len = p_txt.length;
                (len > 20) ? p_txt = p_txt.substr(0,20) + "..." : p_txt;
                console.log(p_txt);

                $(".wrap2 #gallery ul")
                    .append(
                        $("<li>")
                            .append(
                                $("<img class='profile'>")
                                    .attr({
                                        src : "http://farm"+this.farm+".staticflickr.com/"+this.server+"/buddyicons/"+this.owner+".jpg",
                                        onerror : "javascript:this.src = 'img/default.jpg'"
                                    })
                                    .css({
                                        float :"left", width : "50px",
                                        height:"50px",
                                    }),
                                $("<span>")
                                    .text(this.owner),
                                $("<p>").text(p_txt),
                                $("<a>")
                                    .text("VIEW")
                                    .attr({
                                        href : "https://live.staticflickr.com/"+this.server+"/"+this.id+"_"+this.secret+"_b.jpg"
                                    }),   
                                $("<div class='wrap_pic'>")
                                    .append(
                                        $("<img class='pic'>")
                                        .attr({
                                            src : "https://live.staticflickr.com/"+this.server+"/"+this.id+"_"+this.secret+"_b.jpg",
                                            onerror : "javascript:this.src = 'img/default.jpg'"
                                        })   
                                    )
                            )
                    )
            })
    
        })
        .error(function(err){
            console.error(err)
        })
    }

    function createPop(imgSrc){
        $("body").append(
            $("<aside class='Pop'>")
                .append(
                    $("<img>").attr("src",imgSrc),
                    $("<span>").text("CLOSE")
                )
        );
        $(".Pop").fadeIn();
    }

});