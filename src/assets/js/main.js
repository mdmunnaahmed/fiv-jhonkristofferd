"user strict";

// Preloader
$(window).on("load", function () {
	$(".preloader").fadeOut(1000);
});

// Menu Click Event
let trigger = $(".sidebar-toggler");
let dropdown = $(".sidebar-wrapper");
if (trigger || dropdown) {
	trigger.each(function () {
		$(this).on("click", function (e) {
			e.stopPropagation();
			dropdown.toggleClass("active");
			trigger.toggleClass("active");
		});
	});
	dropdown.each(function () {
		$(this).on("click", function (e) {
			e.stopPropagation();
		});
	});
	$(document).on("click", function () {
		if (parseInt(screenSize) < parseInt(767)) {
			dropdown.removeClass("active");
			trigger.removeClass("active");
		}
	});
}

// Menu Click Event
let trigger2 = $(".header-trigger");
let dropdown2 = $(".menu");
if (trigger2 || dropdown2) {
	trigger2.each(function () {
		$(this).on("click", function (e) {
			e.stopPropagation();
			dropdown2.slideToggle();
			trigger2.toggleClass("active");
		});
	});
	dropdown2.each(function () {
		$(this).on("click", function (e) {
			e.stopPropagation();
		});
	});
	$(document).on("click", function () {
		if (parseInt(screenSize) < parseInt(767)) {
			dropdown2.slideUp();
			trigger2.removeClass("active");
		}
	});
}

// Submenu Click Event
$(".menu li a").on("click", function (e) {
	if (parseInt(screenSize) < parseInt(991)) {
		$(this).siblings(".sub-menu").slideToggle();
	}
});

//Menu Dropdown
$("ul>li>.sub-menu").parent("li").addClass("has-sub-menu");

// Detect Screen Size
let screenSize = window.innerWidth;
window.addEventListener("resize", function (e) {
	screenSize = window.innerWidth;
});

// Sticky Menu
var header = document.querySelector(".header");
if (header) {
	window.addEventListener("scroll", function () {
		header.classList.toggle("sticky", window.scrollY > 0);
	});
}

// Scroll To Top Event
var scrollTop = $(".scrollToTop");
$(window).on("scroll", function () {
	if ($(this).scrollTop() < 500) {
		scrollTop.removeClass("active");
	} else {
		scrollTop.addClass("active");
	}
});

// Click event to scroll to top
$(".scrollToTop").on("click", function () {
	$("html, body").animate(
		{
			scrollTop: 0,
		},
		300
	);
	return false;
});

// Slider Part
$(".brand-slider").slick({
	fade: false,
	slidesToShow: 6,
	slidesToScroll: 1,
	infinite: true,
	autoplay: true,
	pauseOnHover: true,
	centerMode: false,
	dots: false,
	arrows: false,
	nextArrow: '<i class="las la-arrow-right arrow-right"></i>',
	prevArrow: '<i class="las la-arrow-left arrow-left"></i> ',
	responsive: [
		{
			breakpoint: 1199,
			settings: {
				slidesToShow: 5,
			},
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 5,
			},
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 4,
			},
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 3,
			},
		},
	],
});

//Faq Click Event
$(".faq-item__title").on("click", function (e) {
	var element = $(this).parent(".faq-item");
	if (element.hasClass("open")) {
		element.removeClass("open");
		element.find(".faq-item__content").removeClass("open");
		element.find(".faq-item__content").slideUp(300);
	} else {
		element.addClass("open");
		element.children(".faq-item__content").slideDown(300);
		element.siblings(".faq-item").children(".faq-item__content").slideUp(300);
		element.siblings(".faq-item").removeClass("open");
		element.siblings(".faq-item").find(".faq-item__content").slideUp(300);
	}
});

// Active Path Active
var path = location.pathname.split("/");
var current = location.pathname.split("/")[path.length - 1];
$(".sidebar-menu li a").each(function () {
	if ($(this).attr("href").indexOf(current) !== -1 && current != "") {
		$(this).addClass("active");
	}
});

$(".remove-item").on("click", function () {
	$(this).closest("tr").remove();
});

$(".nav-tabs li a").on("click", function () {
	if ($("#languages").hasClass("active")) {
		$(".addValidatorModal").removeClass("show-btn");
		$(".addLanguageModal").addClass("show-btn");
	} else if ($("#validators").hasClass("active")) {
		$(".addLanguageModal").removeClass("show-btn");
		$(".addValidatorModal").addClass("show-btn");
	}
});

$(document).ready(function () {
	$("select").niceSelect();
});
