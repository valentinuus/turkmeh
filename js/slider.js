
// Слайдер main
const sliderMain = document.querySelector('.slider');
const sliderPreview = document.querySelector('.slider-preview');

let mySwiperMain = new Swiper(sliderMain, {
	wrapperClass: 'slider__wrapper',
	slideClass: 'slid',
	spaceBetween: 10,
	slidesPerView: 1,
	loop: true,
	thumbs: {
		swiper: sliderPreview,
	}
});
// Слайдер main



// // Слайдер reviews



let mySwiperPreview = new Swiper(sliderPreview, {
	wrapperClass: 'slider-preview__wrapper',
	slideClass: 'slid-preview',
	spaceBetween: 10,
	slidesPerView: 3,
	loop: true,
});


// // Слайдер reviews


// // Слайдер кейсы, превью
// // Слайдер кейсы
// const sliderCase = document.querySelector('.case');
// const sliderPreview = document.querySelector('.preview');

// let mySwiper = new Swiper(sliderCase, {
// 	wrapperClass: 'case__wrapper',
// 	slideClass: 'case__slide',
// 	slidesPerView: 1,
// 	spaceBetween: 5,
// 	thumbs: {
// 		swiper: sliderPreview,
// 	}
// })

// // Слайдер превью
// let mySwiperPreview = new Swiper(sliderPreview, {
// 	wrapperClass: 'preview__wrapper',
// 	slideClass: 'preview__slide',
// 	slidesPerView: 4,
// 	freeMode: true,
// })
// // Слайдер кейсы, превью
