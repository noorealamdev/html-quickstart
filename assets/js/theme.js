(function ($) {
    "use strict";

    // Sticky Header Js
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 400) {
            $("#header-sticky").removeClass("header-sticky");
        } else {
            $("#header-sticky").addClass("header-sticky");
        }
    });

    // Mobile Menu Js
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991",
        meanExpand: ['<i class="fas fa-plus"></i>'],
    });

	$(".menu-bar").on("click", function () {
		$(".tpoffcanvas").addClass("opened");
		$(".tpoffcanvas-overlay").addClass("apply");
	});
	$(".tpoffcanvas__close-btn").on("click", function () {
		$(".tpoffcanvas").removeClass("opened");
		$(".tpoffcanvas-overlay").removeClass("apply");
	});
	$(".tpoffcanvas-overlay").on("click", function () {
		$(".tpoffcanvas").removeClass("opened");
		$(".tpoffcanvas-overlay").removeClass("apply");
	});


})(jQuery)