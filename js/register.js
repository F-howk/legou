window.onload = function(){
    var flag = {use:false,pwd:false,pwd2:false,tel:false}


    $(".use input").on("input",function(){
        
        if($(this).val().length<2){
            $(".use").css("border","1px solid #f00")
            flag.use=false;
        }
        else{
            $(".use").css("border","1px solid #0f0")
            flag.use=true;
        }
    })


    $(".pwd input").on("input",function(){
        if($(this).val().length<6){
            $(".pwd").css("border","1px solid #f00")
            flag.pwd=false;
        }
        else{
            $(".pwd").css("border","1px solid #0f0")
            flag.pwd=true;
        }
    })


    $(".pwd2 input").on("input",function(){
        if($(this).val()!=$(".pwd input").val()||$(".pwd input").val().length<6){
            $(".pwd2").css("border","1px solid #f00")
            flag.pwd2=false;
        }
        else{
            $(".pwd2").css("border","1px solid #0f0")
            flag.pwd2=true;
        }
    })


    $(".tel input").on("input",function(){
        let reg = /^1[356789]\d{9}$/
        let result = reg.test($(this).val())
        if(result==false){
            $(".tel").css("border","1px solid #f00")
            flag.tel=false;
        }
        else{
            $(".tel").css("border","1px solid #0f0")
            flag.tel=true;
        }
    })


    $("form").on("submit",function(){
        var  pass = true ;
        for(var i in flag){
            if(flag[i]==false){
                $("."+i).css("border","1px solid #f00")
                pass=false
            }
        }
        return pass
    })



}