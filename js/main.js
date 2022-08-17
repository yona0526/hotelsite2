$(document).ready(function() {
	var swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: '2%',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // init: false,
      breakpoints: {
        1280: {
			slidesPerView: 3,
			//spaceBetween: '3%',
        },
        520: {
			slidesPerView: 2,
			//spaceBetween: '4%',
        }
      }
    });
});


$(document).ready(function () {
  var swiper = new Swiper('.area_swiper', {
    slidesPerView: 4,
    spaceBetween: '2%',
    loop:true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // init: false,
    breakpoints: {
      1280: {
        slidesPerView: 3,
        //spaceBetween: '3%',
      },
      520: {
        slidesPerView: 2,
        //spaceBetween: '4%',
      }
    }
  });
});
