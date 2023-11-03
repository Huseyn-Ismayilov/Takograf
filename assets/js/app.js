// $(window).scroll(function () {
// 	var scroll = $(window).scrollTop();

// 	if (scroll >= 250) {
// 		$(".site_header").addClass("scroll_down");
// 	} else {
// 		$(".site_header").removeClass("scroll_down");
// 	}
// });


// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.site_header').outerHeight();

$(window).scroll(function (event) {
	didScroll = true;
});

setInterval(function () {
	if (didScroll) {
		hasScrolled();
		didScroll = false;
	}
}, 250);

function hasScrolled() {
	var st = $(this).scrollTop();

	// Make sure they scroll more than delta
	if (Math.abs(lastScrollTop - st) <= delta)
		return;

	// If they scrolled down and are past the navbar, add class .nav-up.
	// This is necessary so you never see what is "behind" the navbar.
	if (st > lastScrollTop && st > navbarHeight) {
		// Scroll Down
		$('.site_header').removeClass('nav-down').addClass('nav-up');
	} else {
		// Scroll Up
		if (st + $(window).height() < $(document).height()) {
			$('.site_header').removeClass('nav-up').addClass('nav-down');
		}
	}

	lastScrollTop = st;
}


// 


$('.site_header .toggle, .mobile_menu .close_btn').click(function () {
	$('.mobile_menu').toggleClass('opened');
	$('.nav_menu').toggleClass('opened');
	$('.site_header .toggle').toggleClass('opened')
});

$('.mobile_menu .menu .dropdown .nav_link').click(function (e) {
	$(this).next().toggleClass('opened');
	return false;
});
$('.mobile_menu .menu .back_btn').click(function (e) {
	$(this).parent().removeClass('opened');
});

// end


// end
$(document).click(function (event) {
	if (!$(event.target).closest(".site_header .toggle, .mobile_menu .inner").length) {
		$("body").find(".mobile_menu .inner").parent().removeClass("opened");
		$('.site_header .toggle').removeClass('opened');
	}
});


$(document).ready(function () {
	$(window).on("load scroll", function () {
		var parallaxElement = $(".parallax_scroll"),
			parallaxQuantity = parallaxElement.length;
		window.requestAnimationFrame(function () {
			for (var i = 0; i < parallaxQuantity; i++) {
				var currentElement = parallaxElement.eq(i),
					windowTop = $(window).scrollTop(),
					elementTop = currentElement.offset().top,
					elementHeight = currentElement.height(),
					viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.1,
					scrolled = windowTop - elementTop + viewPortHeight;
				currentElement.css({
					transform: "translate3d(0," + scrolled * 0.1 + "px, 0)"
				});
			}
		});
	});
});


function cycleImages() {
	var $active = $('#cycler .active');
	var $next = ($active.next().length > 0) ? $active.next() : $('#cycler div:first');
	$next.css('z-index', 2);
	$active.fadeOut(700, function () {
		$active.css('z-index', 1).removeClass('active');
		$next.css('z-index', 3).addClass('active');
	});
}

$(document).ready(function () {
	setInterval('cycleImages()', 2000);
})

// 

function cycleImages1() {
	var $active1 = $('#cycler1 .active');
	var $next1 = ($active1.next().length > 0) ? $active1.next() : $('#cycler1 div:first');
	$next1.css('z-index', 2);
	$active1.fadeOut(700, function () {
		$active1.css('z-index', 1).removeClass('active');
		$next1.css('z-index', 3).addClass('active');
	});
}

$(document).ready(function () {
	setInterval('cycleImages1()', 2000);
})


function cycleImages2() {
	var $active1 = $('#cycler2 .active');
	var $next1 = ($active1.next().length > 0) ? $active1.next() : $('#cycler2 div:first');
	$next1.css('z-index', 2);
	$active1.fadeOut(700, function () {
		$active1.css('z-index', 1).removeClass('active');
		$next1.css('z-index', 3).addClass('active');
	});
}

$(document).ready(function () {
	setInterval('cycleImages2()', 1000);
})



$('.accardion_list .accardion_item .head').click(function () {
	$(this).next().slideToggle()
	$(this).toggleClass('opened');
});


$('.product_features .feature_items .item .plus_btn').click(function () {
	$(this).parent().toggleClass('opened')
	$(this).toggleClass('opened')
});

