$(window).on("load",function(){

	$(".scroll").mCustomScrollbar();

});

$(document).ready(function() {		

	$("select").each(function() {

		$(this).select2({
			minimumResultsForSearch: Infinity
		});

	});


    $(".promo-slider").not(".slick-initialized").slick({
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 800,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        appendDots: $(".promo-slider_controls .pagination"),
        appendArrows: $(".promo-slider_controls .arrows")
    });

});

