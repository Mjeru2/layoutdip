// const arrowLeft = document.querySelector(`.slide__arrow-left`);
// const arrowRight = document.querySelector(`.slide__arrow-right`);
// const slider = document.querySelector(`.slider__conteiner`);
// const navCircle1 = document.querySelector(`.slide-to-1`)
// const navCircle2 = document.querySelector(`.slide-to-2`)
// const navCircle3 = document.querySelector(`.slide-to-3`)
// let counter = 0;
// let sliderLength =
// 	document.querySelectorAll(`.slider__item`).length * (375 + 25) - 25;
// console.log(sliderLength);
// let sliderFrame = document.querySelector(`.examples__slider`).offsetWidth;
// let maxScroll = -(sliderLength - sliderFrame);
// console.log(sliderFrame);
// arrowLeft.addEventListener(`click`, () => {
// 	let currentPosition = +slider.style.left.replace("px", "");
// 	console.log(currentPosition);
// 	console.log(slider.style.left);
// 	if (currentPosition + 400 > 0) {
// 		slider.style.left = `0px`;
// 	} else {
// 		slider.style.left = `${currentPosition + 400}px`;
// 		counter++;
// 	}
// });
// arrowRight.addEventListener(`click`, () => {
// 	let currentPosition = +slider.style.left.replace("px", "");
// 	console.log(currentPosition);
// 	console.log(slider.style.left);
// 	console.log(-currentPosition < maxScroll);
// 	if (currentPosition - 400 < maxScroll) {
// 		console.log(`12`);
// 		slider.style.left = `${maxScroll}px`;
// 	} else {
// 		slider.style.left = `${currentPosition - 400}px`;
// 		counter++;
// 	}
// });
// navCircle1.addEventListener(`click`, (event) => {
// 	event.target.classList.add("slider-checked");
// 	navCircle2.classList.remove("slider-checked");
// 	navCircle3.classList.remove("slider-checked");
// 	slider.style.transform =`translate(0px)`
// });
// navCircle2.addEventListener(`click`, (event) => {
// 	event.target.classList.add("slider-checked");
// 	navCircle1.classList.remove("slider-checked");
// 	navCircle3.classList.remove("slider-checked");
// 	slider.style.transform =`translate(-475px)`
// });
// navCircle3.addEventListener(`click`, (event) => {
	// 	event.target.classList.add("slider-checked");
	// 	navCircle2.classList.remove("slider-checked");
// 	navCircle1.classList.remove("slider-checked");
// 	slider.style.transform =`translate(-950px)`
// });
// console.log(`hi`);
$(function(){
	$(document).ready(function(){
		let topPadding = 0;
		if (document.body.clientWidth < 768){ topPadding = 54;}
		window.addEventListener(`resize`, ()=>{
			if (document.body.clientWidth < 768){ topPadding = 54;}
		})
		$(`.popup__input-phone`).inputmask("+7(999)999-99-99");;
		$(`.slider`).slick({
			arrows:true,
			dots:true,
				slidesToShow:3,
				responsive:[{
					breakpoint: 1500,
					settings:{
						slidesToShow:2
					}
				},
				{
					breakpoint: 768,
					settings:{
						slidesToShow:1
					}
				}
				]
			});


		$('.header__list-item').on('click', function(e){
			e.preventDefault();
			$('html,body').animate({ scrollTop: $(`${e.target.getAttribute(`href`)}`).offset().top-topPadding}, 700);
			console.log(123)
		});

		$('.footer__links-item').on('click', function(e){
			e.preventDefault();
			$('html,body').animate({ scrollTop: $(`${e.target.getAttribute(`href`)}`).offset().top-topPadding}, 700);
		});
	});
	$('.burger').on('click', function(e){
		$(`.header__list`).toggleClass(`burger-open`);
	});
	$('.main').on('click', function(e){
		$(`.header__list`).removeClass(`burger-open`);
	})
	$(`.header__link`).on(`click`, function(e){
		$(`.popup`).removeClass(`visually-hidden`);
		$(`.popup`).animate({opacity: 1}, 200, `linear`)
	})
	$(`.social__link`).on(`click`, function(e){
		$(`.popup`).removeClass(`visually-hidden`);
		$(`.popup`).animate({opacity: 1}, 200, `linear`)
	})
	$(`.exapmles_link`).on(`click`, function(e){
		$(`.popup`).removeClass(`visually-hidden`);
		$(`.popup`).animate({opacity: 1}, 200, `linear`)
	})
	$(`.popup`).on(`click`, function(e){
		if(e.target == $(`.popup`)[0]){
			$(`.popup`).animate({opacity: 0},  200, `linear`)	
				window.setTimeout(()=>{$(`.popup`).addClass(`visually-hidden`)},350)
	}
	})
}());

