// gnb부분
// $('#gnb >li').on('mouseenter', function () {
// 	$(this).find('.sub').stop().slideDown();
// });
// $('#gnb >li').on('mouseleave', function () {
// 	$(this).find('.sub').stop().slideUp();
// });

// gnb btnCall 부분
let btnCall = document.querySelector('.btnCall');
let menuMo = document.querySelector('.menuMo');

btnCall.addEventListener('click', () => {
	menuMo.classList.toggle('on');
});

//stylecard부분
var swiper = new Swiper('.mySwiper1', {
	effect: 'cards',
	grabCursor: true,
});

// Best_item 부분
$(document).ready(function () {
	//$('#title ul li').on('click', function () {});
	$('#title ul li').click(function () {
		$('#title ul li').removeClass('active');
		//내가 클릭한 li만
		$(this).addClass('active');

		let data = $(this).find('div').attr('data-tab');
		console.log(data);
		$('#Top, #Bottoms, #Outer, #Dress, #Item').removeClass('active');
		$(data).addClass('active');
	});
});

var swiper = new Swiper('.mySwiperTop', {
	loop: true,
	slidesPerView: 4,
	spaceBetween: 20,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'progressbar',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

var swiper = new Swiper('.mySwiperBottoms', {
	loop: true,
	slidesPerView: 4,
	spaceBetween: 20,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'progressbar',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

var swiper = new Swiper('.mySwiperOuter', {
	loop: true,
	slidesPerView: 4,
	spaceBetween: 20,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'progressbar',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

var swiper = new Swiper('.mySwiperDress', {
	loop: true,
	slidesPerView: 4,
	spaceBetween: 20,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'progressbar',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

var swiper = new Swiper('.mySwiperItem', {
	loop: true,
	slidesPerView: 4,
	spaceBetween: 20,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'progressbar',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
//banner부분
var swiper = new Swiper('.mySwiper', {
	direction: 'vertical',
	slidesPerView: 1,
	spaceBetween: 30,
	mousewheel: true,
	loop: true,
	// autoplay: {
	// 	delay: 2500,
	// 	disableOnInteraction: false,
	// },
	// pagination: {
	// 	el: '.swiper-pagination',
	// 	clickable: true,
	// },
});
