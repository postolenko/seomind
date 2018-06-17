var sliderNavThumbs;
var indexSl = 0;
var sliderName;
var indexSlide;
var indexActiveSl;
var activeThumb;

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
        arrows: false,
        autoplay: true,
        autoplaySpeed: 15000,
        speed: 800,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        appendDots: $(".promo-slider_controls .pagination"),
        appendArrows: $(".promo-slider_controls .arrows")
    });

    $('.slider-2').on('init', function(event, slick, direction){

        sliderNavThumbs = $("[ data-slidernav = '"+  $(this).attr("data-slider") + "']");

        indexSl = 0;

        $(this).find(".slick-dots li").each(function() {

            indexSl++;

            $(this).attr("data-index-sl", indexSl);

        });

        indexSl = 0;

        sliderNavThumbs.find(".thumb_7").each(function() {

            indexSl++

            $(this).find(".inner").attr("data-index_work" , indexSl);

        });

        sliderName = $(this).attr("data-slider");

        indexActiveSl = $(this).find(".slick-dots li.slick-active").attr("data-index-sl");

        activeThumb = $(".sliderNav[data-slidernav = '"+ sliderName +"'] .thumb_7 .inner[data-index_work = '"+ indexActiveSl +"']");

        if( !activeThumb.hasClass("active") ) {            

            $(".sliderNav[data-slidernav = '"+ sliderName +"'] .thumb_7 .inner").removeClass("active");

            activeThumb.addClass("active");

        }

    });

    $('.slider-2').on('afterChange', function(event, slick, direction){

        sliderName = $(this).attr("data-slider");

        indexActiveSl = $(this).find(".slick-dots li.slick-active").attr("data-index-sl");

        activeThumb = $(".sliderNav[data-slidernav = '"+ sliderName +"'] .thumb_7 .inner[data-index_work = '"+ indexActiveSl +"']");

        if( !activeThumb.hasClass("active") ) {            

            $(".sliderNav[data-slidernav = '"+ sliderName +"'] .thumb_7 .inner").removeClass("active");

            activeThumb.addClass("active");

        }
    });

    $(".slider-2").not(".slick-initialized").slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 15000,
        speed: 800,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true
    });

    $(".sliderNav .thumb_7 .inner").click(function(e) {

        e.preventDefault();

        sliderName = $(this).closest(".sliderNav").attr("data-slidernav");

        indexSlide = $(this).attr("data-index_work");

        $(this).closest(".sliderNav").find(".inner").removeClass("active");

        $(this).addClass("active");

        $("[data-slider = '"+sliderName+"'] .slick-dots li[data-index-sl = '"+ indexSlide +"'] button").trigger( "click" );

    });

});

