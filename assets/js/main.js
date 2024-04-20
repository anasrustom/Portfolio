
(function ($) {
    "use strict";

	$(document).ready(function ($) {
		
  	// Sticky Header

		var lastScrollTop = 0;
		$(window).scroll(function () {
			var scroll = $(window).scrollTop();

			if (scroll > 300) {
				$(".main-header.header-2").addClass("sticky");
				$(".main-header.header-2").removeClass("sticky-out");
			} else if (scroll < lastScrollTop) {
				if (scroll < 500) {
					$(".main-header.header-2").addClass("sticky-out");
					$(".main-header.header-2").removeClass("sticky");
				}
			} else {
				$(".main-headera.header-2").removeClass("sticky");
			}

			lastScrollTop = scroll;
		});

	// Hamburger Menu

		$(".menu-bar").on("click", function () {
			$(".menu-bar").toggleClass("menu-bar-toggeled");
			$(".header-menu").toggleClass("opened");
			$("body").toggleClass("overflow-hidden");
		});

		$(".header-menu ul li a").on("click", function () {
			$(".menu-bar").removeClass("menu-bar-toggeled");
			$(".header-menu").removeClass("opened");
			$("body").removeClass("overflow-hidden");
		});
   
	// PROJECT SLIDER 
		var $grid = $(".portfolio-box").isotope({
			// options
			masonry: {
				columnWidth: ".portfolio-box .portfolio-sizer",
				gutter: ".portfolio-box .gutter-sizer",
			},
			itemSelector: ".portfolio-box .portfolio-item",
			percentPosition: true,
		});

		// filter items on button click
		$(".filter-button-group").on("click", "button", function () {
			$(".filter-button-group button").removeClass("active");
			$(this).addClass("active");

			var filterValue = $(this).attr("data-filter");
			$grid.isotope({ filter: filterValue });
		});

	// Project Filter BG Color
		function filter_animation() {
			var active_bg = $(".portfolio-filter .button-group .active-bg");
			var element = $(".portfolio-filter .button-group .active");
			$(".portfolio-filter .button-group button").on("click", function () {
				var e = $(this);
				activeFilterBtn(active_bg, e);
			});
			activeFilterBtn(active_bg, element);
		}
		filter_animation();

		function activeFilterBtn(active_bg, e) {
			if (!e.length) {
				return false;
			}
			var leftOff = e.offset().left;
			var width = e.outerWidth();
			var menuLeft = $(".portfolio-filter .button-group").offset().left;
			e.siblings().removeClass("active");
			e.closest("button")
				.siblings()
				.addClass(".portfolio-filter .button-group");
			active_bg.css({ left: leftOff - menuLeft + "px", width: width + "px" });
		}
    
    
    });

    $(window).on("load", function () {
		// WOW JS
			var wow = new WOW({
				boxClass: "wow", // default
				animateClass: "animated", // default
				offset: 100, // default
				mobile: true, // default
				live: true, // default
			});
			wow.init();

		// PRELOADER 
			const svg = document.getElementById("preloaderSvg");
			const tl = gsap.timeline({
				onComplete: startStrokeAnimation,
			});
			const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
			const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

			tl.to(".preloader-heading .load-text , .preloader-heading .cont", {
				delay: 1.5,
				y: -100,
				opacity: 0,
			});
			tl.to(svg, {
				duration: 0.5,
				attr: { d: curve },
				ease: "power2.easeIn",
			}).to(svg, {
				duration: 0.5,
				attr: { d: flat },
				ease: "power2.easeOut",
			});
			tl.to(".preloader", {
				y: -1500,
			});
			tl.to(".preloader", {
				zIndex: -1,
				display: "none",
			});

			function startStrokeAnimation() {
				
			}
        });
})(jQuery);