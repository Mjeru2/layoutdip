$(
	(function () {
		function disableScroll() {
			let padding = window.innerWidth - document.body.offsetWidth;
			console.log(padding);
			let pagePosition = window.scrollY;
			document.body.classList.add(`lock`);
			document.body.dataset.position = pagePosition;
			document.body.style.top = -pagePosition + `px`;
			document.body.style.paddingRight = padding + `px`;
		}
		function enableScroll() {
			
			let pagePosition = parseInt(document.querySelector(`.lock`).dataset.position, 10);
			document.querySelector(`.lock`).style.top = `auto`;
			document.body.classList.remove(`lock`);
			window.scroll({top: pagePosition, left: 0} )
			document.body.removeAttribute(`dataset`);
			document.body.removeAttribute(`style`);
		}
		$(document).ready(function () {
			let topPadding = 0;
			if (document.body.clientWidth < 1024) {
				topPadding = 54;
            }else if((document.body.clientWidth > 1023) && (document.body.clientWidth < 1500)){
                topPadding = 54;
            }
            window.onscroll = ()=>{if(window.scrollY > 28){
                $(`.header`).addClass(`header-pad`)
                $(`.header__link`).addClass(`header__link-pad`)
                
            }if((window.scrollY < 29)){
                if (!($(`body`).hasClass(`lock`))){
                $(`.header`).removeClass(`header-pad`)
                $(`.main`).removeClass(`main-pad`)
                $(`.header__link`).removeClass(`header__link-pad`)}
            }};
            
			window.addEventListener(`resize`, () => {
				if (document.body.clientWidth < 768) {
					topPadding = 54;
				}
			});
			$(`.popup__input-phone`).mask("+7(000)000-00-00", {
				placeholder: "+7(___)___-__-__",
			});
			$(`.slider`).slick({
				arrows: true,
				dots: true,
				slidesToShow: 3,
				responsive: [
					{
						breakpoint: 1500,
						settings: {
							slidesToShow: 2,
							arrows: false
						},
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 1,
							arrows: false
						},
					},
				],
			});

			$(".header__list-item").on("click", function (e) {
				e.preventDefault();
				$("html,body").animate(
					{
						scrollTop:
							$(`${e.target.getAttribute(`href`)}`).offset().top - topPadding,
					},
					700
				);
			});

			$(".footer__links-item").on("click", function (e) {
				e.preventDefault();
				$("html,body").animate(
					{
						scrollTop:
							$(`${e.target.getAttribute(`href`)}`).offset().top - topPadding,
					},
					700
				);
			});
			$(".description__link").on("click", function (e) {
				e.preventDefault();
				$("html,body").animate(
					{
						scrollTop:
							$(`${e.target.getAttribute(`href`)}`).offset().top - topPadding,
					},
					700
				);
			});
			$(".intro__link").on("click", function (e) {
				e.preventDefault();
				$("html,body").animate(
					{
						scrollTop:
							$(`${e.target.getAttribute(`href`)}`).offset().top - topPadding,
					},
					700
				);
			});
		});
		$(".burger").on("click", function (e) {
            $(`.burger`).toggleClass(`burger-active`);
			if ($(`.header__list`).hasClass(`burger-open`)) {
				$(`.header__list`).animate({ opacity: 0 }, 200, `linear`);
				window.setTimeout(() => {
					$(`.header__list`).removeClass(`burger-open`);
					$(`.header__list`).removeAttr("style");
				}, 350);
			} else {
				$(`.header__list`).toggleClass(`burger-open`);
				$(`.header__list`).animate({ opacity: 1 }, 200, `linear`);
			}
        });
        $(".header__list-a").on("click", ()=>{
            $(`.burger`).removeClass(`burger-active`)
            if (document.body.clientWidth < 1500) {
				$(`.header__list`).animate({ opacity: 0 }, 200, `linear`);
				window.setTimeout(() => {
					$(`.header__list`).removeAttr("style");
					$(`.header__list`).removeClass(`burger-open`);
				}, 350);
			}

        })
		$(".main").on("click", function (e) {
            if($(`.burger`).hasClass(`burger-active`)){
                $(`.burger`).removeClass(`burger-active`) 
            }
            
			if (document.body.clientWidth < 1500) {
				$(`.header__list`).animate({ opacity: 0 }, 200, `linear`);
				window.setTimeout(() => {
					$(`.header__list`).removeAttr("style");
					$(`.header__list`).removeClass(`burger-open`);
				}, 350);
			}
		});
		$(".footer").on("click", function (e) {
			if (document.body.clientWidth < 1500) {
				$(`.header__list`).animate({ opacity: 0 }, 200, `linear`);
				window.setTimeout(() => {
					$(`.header__list`).removeAttr("style");
					$(`.header__list`).removeClass(`burger-open`);
				}, 350);
			}
		});
		$(`.header__link`).on(`click`, function (e) {
			disableScroll()
			$(`.popup`).removeClass(`visually-hidden`);
			$(`.popup`).animate({ opacity: 1 }, 200, `linear`);
		});
		$(`.social__link`).on(`click`, function (e) {
			disableScroll();
			$(`.popup`).removeClass(`visually-hidden`);
			$(`.popup`).animate({ opacity: 1 }, 200, `linear`);
		});
		$(`.exapmles_link`).on(`click`, function (e) {
			disableScroll()
			$(`.popup`).removeClass(`visually-hidden`);
			$(`.popup`).animate({ opacity: 1 }, 200, `linear`);
		});
		$(`.tel-icon`).on(`click`, function (e) {
			disableScroll()
			$(`.popup`).removeClass(`visually-hidden`);
			$(`.popup`).animate({ opacity: 1 }, 200, `linear`);
		});
		$(`.popup`).on(`click`, function (e) {
			if (e.target == $(`.popup`)[0]) {
				$(`.popup`).animate({ opacity: 0 }, 200, `linear`);
				enableScroll();
				window.setTimeout(() => {
					$(`.popup`).addClass(`visually-hidden`);
				}, 350);
			}
		});
	})()
);
