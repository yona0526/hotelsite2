//장바구니
$(document).ready(function(){
	$(window).resize(function(){
		var winW = $(window).width();
			conTop = $('#order').offset().top;
			BtnPayTop = $('#order .payment-btnarea').offset().top;

		if (winW > 1280){
			$(window).scroll(function() {
				var position = $(window).scrollTop();
				if (position > conTop){
					$("#order .payment_info_box").stop().animate({top:position-conTop+"px"},200);
				} else {
					$("#order .payment_info_box").stop().animate({top:0}, 200);
				}
			});
		} else {
			$(".payment_info_box").css({top:0})
		}
	}).resize();
})