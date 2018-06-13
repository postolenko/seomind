var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

$(window).load(function() {

    // $("select").each(function() {

    //     var parentBlock = $(this).closest(".select-block");

    //     parentBlock.find(".select2-container").css({
    //         "width" : parentBlock.width() + "px"
    //     });

    // });

    getPromoSliderHeight();

});

$(window).resize(function() {

    getPromoSliderHeight();

});

$(document).ready(function() {
   
	$(".thumbnails_5 .thumb-5").each(function() {

		// console.log( $(this).index() );

		// if( $(this).index() != 0 && $(this).index() % 2 == 0 ) {

		// 	$(this).addClass("n3");

		// }

	});

});

function getPromoSliderHeight() {

	var headerHeight = $(".header-site").height();

	$(".promo-slider .slide").css({
		"height" : $(window).height() - headerHeight + "px"
	});

}