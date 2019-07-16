
function getRandomInt(e, n) {
	return Math.floor(Math.random() * (n - e + 1)) + e
}

function appScroller() {
	function e() {
		if (n == window.pageYOffset)
			return o(e),
				!1;
		var a = "translate3d(0px, -" + (n = window.pageYOffset) + "px, 0px)"
			, i = $(".app-main")[0];
		i.style.webkitTransform = a,
			i.style.mozTransform = a,
			i.style.transform = a,
			o(e)
	}
	var n = -100;
	$(document).ready(function () {
		$("body").height($(".app-main").outerHeight()),
			$(window).resize(function () {
				$("body").height($(".app-main").outerHeight())
			})
	});
	var o = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function (e) {
		window.setTimeout(e, 1e3 / 60)
	};
	e()
}

var $ = jQuery.noConflict();

$(window).on("load", function () {
	$("body").removeClass("is-loading"),
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? $("body").addClass("is-mobile") : appScroller()
});

var classes = ["is-black", "is-white"],
	randomClass = classes[getRandomInt(0, classes.length - 1)];

document.body.className = randomClass;
