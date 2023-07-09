
//Shop Detail
$(document).ready(function(){
	//제품 미리보기 썸네일

		var galleryThumbs = new Swiper('.gallery-thumbs', {
			spaceBetween: '1.2%',
			slidesPerView: 5,
			freeMode: true,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
		});
		var galleryTop = new Swiper('.gallery-top', {
			spaceBetween: 10,
			navigation: {
				nextEl: '.prd-button-next',
				prevEl: '.prd-button-prev',
			},
			thumbs: {
				swiper: galleryThumbs
			}

	});


	// //객실 미리보기 썸네일
	// $('.room-preview-top .swiper-wrapper').slick({
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	arrows: false,
	// 	fade: true,
	// 	infinite: false,
	// 	asNavFor: '.room-preview-thumbs .swiper-wrapper'
	// });
	// $('.room-preview-thumbs .swiper-wrapper').slick({
	// 	slidesToShow: 5,
	// 	slidesToScroll: 1,
	// 	infinite: false,
	// 	asNavFor: '.room-preview-top .swiper-wrapper',
	// 	dots: false,
	// 	focusOnSelect: true
	// });


	//selectbox placeholder
	$('#shop.view .ReservationTable .reser_form td select').on('change', function() {
	  if ($(this).val() == 'hidden') {
		return $(this).css('color', '#999');
	  } else {
		return $(this).css('color', '#222');
	  }
	});
	$('select').change();
/*
	$('.ReservationTable .btn_booking').click(function(){
		if (!$(this).hasClass('on')){
			$('.ReservationTable .btn_booking').removeClass('on');
			$('.ReservationTable tr').removeClass('on');
			$('.ReservationTable .res_booking_wrap').hide();
			$('#shop.view .ReservationTable .tbl_res > tbody > tr').css({'background':'#fff'});
			$(this).addClass('on');
			$(this).closest('tr').addClass('on');
			$(this).closest('tr').next('tr').addClass('on');
			$(this).closest('tr').next('tr').find('.res_booking_wrap').slideDown(function(){
				reserQuick();
			});
			$(this).closest('tr').next('tr').find('.res_booking_wrap .room-preview-top .swiper-wrapper').get(0).slick.setPosition();
			$(this).closest('tr').next('tr').find('.res_booking_wrap .room-preview-thumbs .swiper-wrapper').get(0).slick.setPosition();
		} else {
			$(this).removeClass('on');
			$(this).closest('tr').removeClass('on');
			$(this).closest('tr').next('tr').find('.res_booking_wrap').hide();
		}
	})
*/
	//앵커태그 부드럽게 이동
	$('.PrdQuick ul li a').click(function(){
		$('html, body').animate({
		scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 500);
		return false;
	});

	$('#shop.view .ReservationTable .tbl_res > tbody > tr').mouseenter(function(){
		if (!$(this).hasClass('on')){
			$(this).css({'background':'#f3f3f7'});
		}
	}).mouseleave(function(){
		if (!$(this).hasClass('on')){
			$(this).css({'background':'#fff'});
		}
	})
})

//관광지소개 레이어팝업
function ViewTour(){
	$('.overlay').fadeIn(300);
	$('#FacilityLayer').fadeIn(300);
}


function reserQuick(){
	$(window).on('scroll', function(){
		var position = $(window).scrollTop();
			resTop = $('.ReservationTable tr.on .res_booking').offset().top;
			resconH =  $('.ReservationTable tr.on .res_booking').height();
			paymentH = $('.ReservationTable tr.on .payment_info_box').height();
			quickscrollH = resconH - paymentH

			if (position > resTop){
				if (quickscrollH > position-resTop){
					$('#order .payment_info_box').removeClass('bottom');
					$('#order .payment_info_box').stop().animate({top:position-resTop+"px"},200);
				} else {
					$('#order .payment_info_box').addClass('bottom');
				}
			} else {
				$('#order .payment_info_box').stop().animate({top:0}, 200);
			}
	})
}
