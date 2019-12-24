window.onload = function(){
    $(".payBtn").on("click",function(){
        $(".payTrue").show();
    })

    $(".payTrue .ptTop>span.fr").on("click",function(){
        $(".payTrue").hide();
    })

    $(".payTrue .PtBottom>.btn").on("click",function(){
        $(".payTrue").hide();
    })


    $(".payBtn").on("click",function(){
        $(".payFalse").show();
    })

    $(".payFalse .ptTop>span.fr").on("click",function(){
        $(".payFalse").hide();
    })

    $(".payFalse .PtBottom>.btn").on("click",function(){
        $(".payFalse").hide();
    })






}