var swiper = new Swiper('.banner', {
	loop: true,
	autoplay: {
		delay: 3500,
		pauseOnMouseEnter: true,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
		dynamicBullets: true,
		dynamicMainBullets: 1,
	},
});

new Swiper('.mySwiper', {
	loop: true,
	autoplay: {
		delay: 3500,
		pauseOnMouseEnter: true,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
