//top 버튼
function gotop(){
	$('html, body').animate({scrollTop:0}, 800)
}


// 레이어팝업 공통 닫기
$(document).ready(function(){
	$('.LayerPop .btn_cancel, .LayerPop .btn_close').click(function(){
		if (!$(this).hasClass('off')){
			$('.overlay').fadeOut(300);
			$('.LayerPop').fadeOut(300);
		}
	})
})
	
function layerclose(){
	$('.overlay').fadeOut(300);
	$('.LayerPop').fadeOut(300);
	$('.LayerPop .LayerContents').scrollTop(0,0);
}

//좌측 메뉴
$(document).ready(function(){
	$('.menuWrap > ul > li > a').click(function(){
		if ($(this).next('.submenu').length==0){

		} else {
			if ($(this).next('.submenu').css('display')=='none'){
				$('.submenu').slideUp();
				$('.menuWrap > ul > li').removeClass('active');
				$(this).parent('li').addClass('active');
				$(this).next('.submenu').stop().slideDown(300);
			} else {
				$(this).parent('li').removeClass('active');
				$(this).next('.submenu').stop().slideUp(300);
			}
		}
	})

	$('.headerWrap .btn_menu').click(function(){
		$('.overlay').fadeIn(300);
		$('#Menu').animate({left:0});
		$('#Menu .btn_menu_close').show();
	})
	$('#Menu .btn_menu_close').click(function(){
		$('.overlay').fadeOut(300);
		$('#Menu').animate({left:'-50%'}, 300);
		$('#Menu .btn_menu_close').hide();
	})

	$('.overlay').click(function(){
		if ($('#Menu').css('left') == '0px'){
			$('.overlay').fadeOut(300);
			$('#Menu').animate({left:'-50%'}, 300);
			$('#Menu .btn_menu_close').hide();
		}

		if ($('.LayerPop').css('display') == 'block'){
			$('.overlay').fadeOut(300);
			$('.LayerPop').fadeOut(300);
			$('.LayerType01 .LayerContents').scrollTop(0,0);
		}
	})

	$(window).resize(function(){
		if (matchMedia("screen and (min-width: 1025px)").matches){
			$('.overlay').hide();
			$('.overlay02').hide();
			$('#Menu').css({left:0})
			$('#Menu .btn_menu_close').hide();
			$('.headerWrap .UtilWrap .SearchArea').show();
			$('.headerWrap .UtilWrap .SearchArea.tabmob').hide();
			$('.LayerPop').hide();
		} else {
			$('.overlay').hide();
			$('#Menu').css({left:'-50%'})
			$('#Menu .btn_menu_close').hide();
			$('.LayerPop').hide();
		}
	}).resize();

})

//상단 검색버튼
function ViewSearch(){
	$('.overlay02').fadeIn(300);
	$('.headerWrap .UtilWrap .SearchArea').fadeIn(300);
}
function ViewSearchClose(){
	$('.overlay02').fadeOut(300);
	$('.headerWrap .UtilWrap .SearchArea').fadeOut(300);
}

$(document).ready(function(){
	$('.overlay02').click(function(){
		if ($('.headerWrap .UtilWrap .SearchArea').css({display:'block'})){
			$('.overlay02').fadeOut(300);
			$('.headerWrap .UtilWrap .SearchArea').fadeOut(300);
		}
	})
})
