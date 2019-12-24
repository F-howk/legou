window.onload = function(){
    $(".listBtn").on("click",function(){
        $("#listFlag").show();
    })

    $("#listFlag .false").on("click",function(){
        $("#listFlag").hide();
    })

    $("#listFlag span.fr").on("click",function(){
        $("#listFlag").hide();
    })

    $("#listFlag .true").on("click",function(){
        location.href="checkstand.html";
    })
}