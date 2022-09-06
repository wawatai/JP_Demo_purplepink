//marqee
$(document).on('ready', function() {
	$(".single-item").slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2500,
		arrows: false,
	})
})

//gwrapBox
$(function(){
    $(".gWrapBox .gameWrap").each(function(){
        if($(this).find("li").length > 2)
        {
            $(".nextBtn")
            .addClass("active");
        }
    })

    var hotN = 0;
    var hotN = 0;

    $(".nextBtn").on("click",function(){
        var total = $(this).prev(".gWrapBox").find("li").length;
        var n = Math.round((total - 3));
        
        hotN ++;

        $(".gWrapBox .gameWrap")
        .css("transform","translateX("+ (-110 * hotN) +"px)");

        if(hotN == n)
        {
            hotN == n;

            $(this)
            .removeClass("active");
        }
    })
})


//backTOtop
$(function(){
	$(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal > 0){
            $(".goTop")
            .addClass("display")
        } else{
            $(".goTop")
            .removeClass("display");
        };
	})

    $(".goTop").click(function(){
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //各瀏覽器相容性
        $body.delay('0').animate({
            scrollTop: 0
        },500)
    })
})
