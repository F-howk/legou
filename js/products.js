window.onload = function(){
    let ban1 = ["img/banner1.jpg","img/banner2.jpg","img/banner3.png","img/banner4.png","img/banner5.png","img/banner6.png"];
    let imgIndex = 0;
    let $img = $("#banner .bannerLeft img");
    let $li = $("#bottomBtn li");
    let $leftBtn = $("#banner .bannerLeft span:eq(0)");
    let $rightBtn = $("#banner .bannerLeft span:eq(1)");
    let ac = "active" ;
    slider($leftBtn,$rightBtn,$li,$img,ban1,imgIndex,ac);

    //手风琴
    $(".bannerRight>.b").on("mouseover",function(){
        $(this).addClass("brBook").siblings(".b").removeClass("brBook")
        $(this).removeClass("brBooks").siblings(".b").addClass("brBooks")
    })









    function slider($leftBtn,$rightBtn,$li,$img,ban1,imgIndex,active){
        //上一张
        $leftBtn.on("click",function(){
            imgIndex--;
            if(imgIndex<0){
                imgIndex = ban1.length-1;
            }
            $img.prop("src",ban1[imgIndex]);
            zOn($li,imgIndex,active)
        });

        //下一张
        $rightBtn.on("click",function(){
            imgIndex++;
            if(imgIndex>=ban1.length){
                imgIndex = 0;
            }
            $img.prop("src",ban1[imgIndex]);
            zOn($li,imgIndex,active);
        });

        //获取li点击li切换图片
        $li.on("click",function(){
            $(this).addClass(active).siblings().removeClass(active)
            let $index = $(this).index();
            $img.prop("src",ban1[$index]);
        })

        //自动切换
        setInterval(function(){
            imgIndex++;
            if(imgIndex>=ban1.length){
                imgIndex = 0;
            }
            $img.prop("src",ban1[imgIndex-1]).fadeOut("fast");
            $img.prop("src",ban1[imgIndex]).stop(false,true).fadeIn(500);
            zOn($li,imgIndex,active)
        },2000)

        //切换选中状态
        function zOn(obj,index,active){
            obj.eq(index).addClass(active).siblings().removeClass(active);
        }
    }
}