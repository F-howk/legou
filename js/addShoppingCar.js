window.onload = function(){
    $(".finalBtn").on("click",function(){
        location.href = "of.html";
    })

    $(".checkbox").css("cursor","pointer")
    let flagOne = true;
    let flagAll = true; 

    $(".checkbox").on("click",function(){
        if(flagOne){
            $(this).addClass("checkboxOn");
        }
        else{
            $(this).removeClass("checkboxOn");
        }  
        flagOne = ! flagOne;
    })
    
    $("#indentTop>.checkbox,#all").on("click",function(){
        if(flagAll){
            $(this).addClass("checkboxOn");
            $(".checkbox").addClass("checkboxOn");
        }
        else{
            $(this).removeClass("checkboxOn");
            $(".checkbox").removeClass("checkboxOn");
        }
        flagAll = !flagAll;
    });
    
    $(".add,.rem").css("cursor","pointer");

    $(".add").on("click",function(){
        let n = $(this).next().html();
        let sum = $(this).prev().html();
        n++;
        sum = parseInt(sum);
        sum=sum*n;
        sum=sum.toFixed(2)
        $(this).closest(".prodRight").find(".money2").html(sum)
        $(this).next().html(n)
    })

    $(".rem").on("click",function(){
        let n = $(this).prev().html();
        let sum = $(this).closest(".prodRight").find(".money").html();
        n--;
        n=n<0?0:n;
        sum = parseInt(sum);
        sum=sum*n;
        sum=sum.toFixed(2);
        sum=sum<=0?"0"+sum:sum
        $(this).closest(".prodRight").find(".money2").html(sum);
        $(this).prev().html(n);
    })

    setInterval(function(){
        let sum = 0;
        let n = $(".prodIndent>.checkbox.checkboxOn");
        n.each(function(){
            let num = $(this).closest(".prodIndent").find(".money2").html();
            num = parseInt(num);
            sum+=num;
        })
        sum=sum.toFixed(2)
        sum=sum<=0?"0"+sum:sum;
        $(".allPrice>span").html(sum)
        $(".allNum>span").html(n.length);
    },300)


}