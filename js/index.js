window.onload = function(){
    $("#aside li").on("mouseover",function(){
        $(".sub").css({"display":"block"}).appendTo(this);
        $(this).css({
            "background":"#fff",
            border:"1px solid #f60",
        });
        let index = $(this).index();
        $(this).find("span").css({
            top:index*31+1+"px",
            display:"block"
        })
    }).on("mouseout",function(){
        $(this).find(".sub").css({"display":"none"});
        $(this).css({
            "background":"#f3f3f3",
            border:"0"
        });
        $(this).find("span").css({
            display:"none"
        })
    })
    
    //轮播
    //获取按钮注册事件实现轮播图的切换 封装成一个函数

    //大轮播
    let ban1 = ["img/banner1.jpg","img/banner2.jpg","img/banner3.png","img/banner4.png","img/banner5.png","img/banner6.png"];
    let imgIndex = 0;
    let $img = $("#banner img");
    let $li = $("#bottomBtn li");
    let $leftBtn = $("#banner span:eq(0)");
    let $rightBtn = $("#banner span:eq(1)");
    let ac = "active" ;
    slider($leftBtn,$rightBtn,$li,$img,ban1,imgIndex,ac);


    //books 轮播
    let bPng = ["img/335x220_ljx_0729.jpg","img/dsshbanner-zr-0914.jpg","img/0804zhu.jpg","img/jingguan.jpg"];
    let $sImg = $("#books .banner img");
    let $sli = $("#books .banner li");
    let $sLeftBtn = $("#books .banner span:eq(0)");
    let $sRightBtn = $("#books .banner span:eq(1)");
    let liOn = "lion";
    slider($sLeftBtn,$sRightBtn,$sli,$sImg,bPng,imgIndex,liOn);


    //dress
    let dressPng = ["img/139430026166665_y.jpg","img/162350015511487_y.jpg","img/72190020507327_1_o.jpg","img/68700016969136_y.jpg"];
    let $dressImg = $("#dress .banner img");
    let $dressLi = $("#dress .banner li");
    let $dressLeftBtn = $("#dress .banner span:eq(0)");
    let $dressRightBtn = $("#dress .banner span:eq(1)");
    // let liOn = "lion";
    slider($dressLeftBtn,$dressRightBtn,$dressLi,$dressImg,dressPng,imgIndex,liOn);


    //sport 
    let sportPng = ["img/160801-12909pc-B1.jpg","img/121440017773720_1_o.jpg","img/91540017771809_1_o.jpg","img/160729-3709pc-B.jpg"];
    let $sportImg = $("#sport .banner img");
    let $sportLi = $("#sport .banner li");
    let $sportLeftBtn = $("#sport .banner span:eq(0)");
    let $sportRightBtn = $("#sport .banner span:eq(1)");
    // let liOn = "lion";
    slider($sportLeftBtn,$sportRightBtn,$sportLi,$sportImg,sportPng,imgIndex,liOn);


    //garments 
    let garmentsPng = ["img/86030026281665_y.jpg","img/a_ban_383-340.jpg","img/187720017020448_1_o.jpg","img/lunbo.jpg"];
    let $garmentsImg = $("#garments .banner img");
    let $garmentsLi = $("#garments .banner li");
    let $garmentsLeftBtn = $("#garments .banner span:eq(0)");
    let $garmentsRightBtn = $("#garments .banner span:eq(1)");
    // let liOn = "lion";
    slider($garmentsLeftBtn,$garmentsRightBtn,$garmentsLi,$garmentsImg,garmentsPng,imgIndex,liOn);



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
            imgIndex = $(this).index();
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



    //二维码
    $("#rightAside>div:eq(1)").on("click",function(){
        $(this).closest("#rightAside").find("div").eq(4).stop(true,false).toggle("slow");
    })

    //楼层
    let bg = $("#asideNav>div:not(.aNav2)").css("background")
    $("#asideNav>div:not(.aNav2)").on("mouseover",function(){
        let index = $(this).index();
        let bg = $(".aNav2>div").eq(index).css("background");
        $(this).css({background:bg});
        $(".aNav2>div").eq(index).stop(true,false).show(300);
        $(".aNav2").css("top",40*index);
    }).on("mouseout",function(){
        let index = $(this).index();
        $(".aNav2>div:not(.aNav2)").eq(index).hide();
        $(this).css({background:bg})
    }).on("click",function(){
        let index = $(this).index();
        let t = $(".floor").eq(index).offset().top;
        $("html,body").animate({"scrollTop":t},500)
    })
    /* $(window).scroll(function(){
        let sTop = $(".floor").scrollTop();
        // let index = $(this).index();
        
        console.log(sTop)
    }) */


    //top
    $("#returnTop").on("click",function(){
        let sTop = $("html,body").scrollTop();
        let time = setInterval(function(){
        sTop-=300;
        $("html,body").prop("scrollTop",sTop) 
        if(sTop<=0){
            clearInterval(time)
        }
        },30)
        

    })
}