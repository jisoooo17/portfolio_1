$(document).ready(function(){

    $("input[type=submit]").on("click",function(e){
        if(!isAgree("agree")) e.preventDefault();
        if(!isName("name",2)) e.preventDefault();
        if(!isTxt("userid",8)) e.preventDefault();
        if(!isPwd("pwd1","pwd2")) e.preventDefault();
        if(!isTxt2("address1","address2")) e.preventDefault();
        if(!isSelect("contact")) e.preventDefault();   
        if(!isTxt("email1") || !isSelect("email2")) e.preventDefault();
        if(!isCheck("sms")) e.preventDefault();
        if(!isCheck("join")) e.preventDefault();
    });

    function isAgree(name){

        var isAgree = $("input[name='"+name+"']").is(":checked");

        if(isAgree){
            $("input[name='"+name+"']").parent().find("span").removeClass("error");
            return true;
        }else {
            alert("이용약관 동의에 체크해주세요.");
            $("input[name='"+name+"']").parent().find("span").addClass("error");
            return false;
        } 
    }

    function isName(name,len){
        if(len == undefined) len = 2;
        var txt = $("[name='"+name+"']").val();

         
        if(txt==""){
            $("[name='"+name+"']").parent().find(".name").addClass("error");
            $("[name='"+name+"']").addClass("error");
            return false;

        }else{
            if(txt.length < len){
                $("[name='"+name+"']").parent().find(".name").addClass("error");
                $("[name='"+name+"']").addClass("error");
                return false;
            }else{
                $("[name='"+name+"']").parent().find(".name").removeClass("error");
                $("[name='"+name+"']").removeClass("error");
                return true;
                
            }    
        }

    }


    function isTxt(name,len){
        if(len == undefined) len = 5;
        
        var txt = $("[name='"+name+"']").val();
      
        if(txt==""){
            $("[name='"+name+"']").siblings(".userid1").addClass("error");
            $("[name='"+name+"']").addClass("error");
            return false;

        }else{
            $("[name='"+name+"']").siblings(".userid1").removeClass("error");

            if(txt.length < len){
                $("[name='"+name+"']").siblings(".userid2").addClass("error");
                $("[name='"+name+"']").addClass("error");
                return false;
            }else{
                $("[name='"+name+"']").siblings(".userid2").removeClass("error");
                $("[name='"+name+"']").removeClass("error");
                return true;   
            }         
        }
    }

    function isPwd(name1,name2,len){
        if(len==undefined) len=5;
        var pwd1 = $("input[name='"+name1+"']").val(); 
        var pwd2 = $("input[name='"+name2+"']").val();

        var num = /[0-9]/;
        var eng = /[a-zA-Z]/;
        var spc = /[~!@#$%^&*()_+|{}<>?;:=-\]\[]/;   

        var i=0;  

        if(pwd1 === pwd2){
            (pwd1.length >= len ) ? i++ :
            $("[name='"+name1+"']").siblings(".pwd1").addClass("error");
            (spc.test(pwd1)) ? i++ : 
            $("[name='"+name1+"']").siblings(".pwd1").addClass("error");
            (num.test(pwd1)) ? i++ : 
            $("[name='"+name1+"']").siblings(".pwd1").addClass("error");
            (eng.test(pwd1)) ? i++ : 
            $("[name='"+name1+"']").siblings(".pwd1").addClass("error");
              
            if(i!=4){
                $("[name='"+name2+"']").siblings(".pwd2").removeClass("error");
                $("input[name='"+name1+"']").addClass("error");
                $("input[name='"+name2+"']").addClass("error");
            }else{
                $("input[name='"+name1+"']").removeClass("error");
                $("input[name='"+name2+"']").removeClass("error");
                $("[name='"+name1+"']").siblings(".pwd1").removeClass("error");
                return true;
            }

        }else{
            alert("비밀번호를 동일하게 입력해주세요.");
            $("[name='"+name2+"']").siblings(".pwd2").addClass("error");
            $("input[name='"+name1+"']").addClass("error");
            $("input[name='"+name2+"']").addClass("error");
            return false;
        }
    }

    function isTxt2(name1,name2){
        var txt = $("input[name='"+name1+"']").val();

        if(txt==""){
            $("[name='"+name1+"']").siblings(".address").addClass("error");
            $("[name='"+name1+"']").addClass("error");
            $("[name='"+name2+"']").addClass("error");
            return false;
        }else {
            $("[name='"+name1+"']").siblings(".address").removeClass("error");
            $("[name='"+name1+"']").removeClass("error");      
            $("[name='"+name2+"']").removeClass("error");    
            return true; 
        }
    }

   function isSelect(name){
    var sel = $("select[name='"+name+"']").children("option:selected").val();

        if(sel==""){
            $("select[name='"+name+"']").addClass("error");   
            $("select[name='"+name+"']").parent().find(".contact").addClass("error");
            return false;
        }else{
            $("select[name='"+name+"']").removeClass("error");
            $("select[name='"+name+"']").parent().find(".contact").removeClass("error");
            return true;
        }
    }

        function isCheck(name){
        var isCheck = $("input[name='"+name+"']").is(":checked");

        if(isCheck){
            $("input[name='"+name+"']").parent().find("p").removeClass("error");
            return true;
        }else {
            $("input[name='"+name+"']").parent().find("p").addClass("error");
            return false;
        }        
    }

});