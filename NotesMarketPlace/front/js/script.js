/* ================= Home section =============== */
$(function () {

	// on page load
	showHideNav();

	$(window).scroll(function () {
		showHideNav();
	});

	function showHideNav() {
		if ($('.navigation').hasClass('white-nav')) {
			$('.navigation').addClass("white-nav-top");
			$(".nav-logo img").attr("src", "./img/logo/blue-logo.png");
		} else {
			if ($(window).scrollTop() > 40) {
				// show white navigation
				$('.navigation').addClass("white-nav-top");
				// logo
				$(".nav-logo img").attr("src", "./img/logo/blue-logo.png");
			} else {
				$('.navigation').removeClass("white-nav-top");
				$(".nav-logo img").attr("src", "./img/logo/top-logo.png");
			}
		}
	}
});

$(function () {
	$('.menu-toggle').click(function () {
		// show and hide Mobile Toggle Btn
		$(".nav-menu-link").toggleClass("mobile-nav");
		$(this).toggleClass("is-active");
	});
});


/* ================= password show/hide =============== */
$(document).ready(function () {
	$("body").on('click', '.toggle-password', function () {
		var input = $($(this).attr("toggle"));

		if (input.attr("type") === "password") {
			input.attr("type", "text");
		} else {
			input.attr("type", "password");
		}
	});
});
