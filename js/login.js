window.onload = function(){
    $(".loginTop>div").on("click",function(){
        $(this).addClass("loginOn").siblings().removeClass("loginOn");
        let index = $(this).index();
        $(".dA").eq(index).show().siblings(".dA").hide();
    })
}