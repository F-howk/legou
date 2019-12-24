window.onload = function(){
    $("#prodRight>span").on("click",function(){
        let index = $(this).index();
        $(this).addClass("prTsOn").siblings("span").removeClass("prTsOn");
        $("#prodRight>div").eq(index).slideDown().siblings("div").hide();
    })

    $("#btn").css("cursor","pointer")
    $("#btn").on("click",function(){
        $("#listFlag").show();
    })

    $("#listFlag .false").on("click",function(){
        $("#listFlag").hide();
    })

    $("#listFlag .wrap .fr").on("click",function(){
        $("#listFlag").hide();
    })

    $("#listFlag .true").on("click",function(){
        location.href = "login.html";
    })

    $("#jRight .jrbP>span").css("cursor","pointer")
    $("#jRight .jrbP>span").on("click",function(){
        $(this).addClass("sOn").siblings("span").removeClass("sOn");
    })
    
    $(".jrBottom>div:eq(0)>span").css("cursor","pointer")
    $(".jrBottom>div:eq(0)").on("click","span:eq(0)",function(){
        let a = $(".jrBottom>div:eq(0)").html();
        a=parseInt(a)
        a++;
        $(".jrBottom>div:eq(0)").html(a+"<span>+</span>"+"<span>-</span>")
        $(".jrBottom>div:eq(0)>span").css("cursor","pointer")
    })

    $(".jrBottom>div:eq(0)").on("click","span:eq(1)",function(){
        let a = $(".jrBottom>div:eq(0)").html();
        a=parseInt(a)
        a--;
        if(a<=0){
            a=0;
        }
        $(".jrBottom>div:eq(0)").html(a+"<span>+</span>"+"<span>-</span>")
        $(".jrBottom>div:eq(0)>span").css("cursor","pointer")
    })

    var magnifierConfig = {
		magnifier : "#magnifier1",//最外层的大容器
		width : 300,//承载容器宽
		height : 360,//承载容器高
		moveWidth : null,//如果设置了移动盒子的宽度，则不计算缩放比例
		zoom : 2.6//缩放比例
	};

	var _magnifier = magnifier(magnifierConfig);
}