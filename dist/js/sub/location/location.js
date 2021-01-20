window.onload = function(){
    //표시할 지역의 경도, 위도, 줌레벨 설정하여 인스턴스 생성
    var mapContainer = document.querySelector('.showBox'); 
    var branch_btns = document.querySelectorAll(".branch li"); 

    var mapOption = { 
        center: new kakao.maps.LatLng(37.544578357379855,127.20751836910864), 
        level: 4 //숫자가 작아질수록 zoom확대
    };

    //좌표값과 마커이미지 갯수만큼 반복을 돌며 마커생성하고 버튼 이벤트 연결
    var markerOptions = [
        {
            title: '본점',
            latlng: new kakao.maps.LatLng(37.544578357379855,127.20751836910864),
            imgSrc : 'img/placeholder1.png',
            imgSize : new kakao.maps.Size(50,50),
            imgPos : {offset: new kakao.maps.Point(25, 50)},
            button : branch_btns[0]
        },    
        {
            title: '지점',
            latlng: new kakao.maps.LatLng(37.5557719070171,126.936611330097),
            imgSrc : 'img/placeholder1.png',
            imgSize : new kakao.maps.Size(50,50),
            imgPos : {offset: new kakao.maps.Point(25, 50)},
            button : branch_btns[1]
        },
        {
            title: '지점2',
            latlng: new kakao.maps.LatLng(37.49820285746498,127.02674505423784),
            imgSrc : 'img/placeholder1.png',
            imgSize : new kakao.maps.Size(50,50),
            imgPos : {offset: new kakao.maps.Point(25, 50)},
            button : branch_btns[2]
        },
        
    ];


    //초기 화면 맵 생성
    var map = new kakao.maps.Map(mapContainer, mapOption); 


    //스카이뷰 컨트롤 표시
    var mapTypeControl = new kakao.maps.MapTypeControl();
    map.addControl(mapTypeControl, daum.maps.ControlPosition.BOTTOMLEFT);


    //줌 컨트롤 표시
    var zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, daum.maps.ControlPosition.TOPLEFT);


    //버튼클릭시 교통정보 표시  
    var t_on = document.querySelectorAll('.traffic li')[0];
    var t_off = document.querySelectorAll('.traffic li')[1];

    //교통량 정보
    t_on.addEventListener("click", function(e){
        e.preventDefault();
        map.removeOverlayMapTypeId(daum.maps.MapTypeId.TRAFFIC); 
        map.addOverlayMapTypeId(daum.maps.MapTypeId.TRAFFIC);
        t_on.classList.add("on");
        t_off.classList.remove("on");
    });

    t_off.addEventListener("click", function(e){
        e.preventDefault();
        map.removeOverlayMapTypeId(daum.maps.MapTypeId.TRAFFIC); 
        t_off.classList.add("on");
        t_on.classList.remove("on");
    });



    var drag = true; //드래그 가능
    var zoom = false; //휠로 zoom가능 


    //마커옵션의 갯수만큼 반복을 돌며 지점 보기 버튼 이벤트 연결
    for(var i=0; i<markerOptions.length; i++){
        new kakao.maps.Marker({
            map : map,
            position : markerOptions[i].latlng,
            title : markerOptions[i].title,
            image : new kakao.maps.MarkerImage(markerOptions[i].imgSrc, markerOptions[i].imgSize, markerOptions[i].imgPos)
        });    
        
        (function(index){    
            markerOptions[index].button.onclick = function(e){
                e.preventDefault();

                for(var k=0; k<markerOptions.length; k++){
                    markerOptions[k].button.classList.remove("on");
                }
                markerOptions[index].button.classList.add("on");

                moveTo(markerOptions[index].latlng);    
            }
        })(i);    
            
    }    


    //브라우저 리사이즈 시 지도 가운데 정렬
    window.onresize = function(){   
        var active_btn = document.querySelector(".branch li.on");
        var active_index = parseInt(active_btn.getAttribute("data-index"))-1;
        map.setCenter(markerOptions[active_index].latlng);
    }



    //지점으로 맵 이동 함수 정의
    function moveTo(target){
        var moveLatLan = target;
        map.setCenter(moveLatLan);
        return false;
    }


    //드래그기능 활성화 
    setDraggable(drag);           
    function setDraggable(draggable) {
        map.setDraggable(draggable);    
    }


    //줌기능 활성화
    setZoomable(zoom);
    function setZoomable(zoomable) {          
        map.setZoomable(zoomable);    
    }

}