var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

// ----------------

var headerTopCoord;

// ----------------

var thumbsHeightArr;
var thumb;
var thumbHeight;
var maxThumbHeight;

// -----------------

var screenParam;
var indexElem;

$(window).load(function() {

    // $("select").each(function() {

    //     var parentBlock = $(this).closest(".select-block");

    //     parentBlock.find(".select2-container").css({
    //         "width" : parentBlock.width() + "px"
    //     });

    // });

    getPromoSliderHeight();

    getTopWrappPadding();
    getAnimation();
    $(".contacts-sect").addClass("active");
    getMapSectParams();
    getHeaderParams();
    getTHumbsHeight();
    getAdaptivePositionElements();

});

$(window).resize(function() {

    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

	getTopWrappPadding();
    getPromoSliderHeight();
    getMapSectParams();
    getHeaderParams();
    getTHumbsHeight();
    getAdaptivePositionElements();

});

$(document).scroll(function() {

    getAnimation();
    getHeaderParams();
    onScroll();

});

$(document).ready(function() {
   
	$(".thumbnails_5 .thumb-5").each(function() {

		// console.log( $(this).index() );

		if( $(this).index() != 0 && $(this).index() % 2 == 0 && $(this).is(":odd") ) {

			$(this).addClass("n3");

		}

	});

	getAnimation();

    onScroll();

    $("input[type='tel']").mask("+7 (999) 999-99-99");

    $('.top-nav a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash,
            menu = target;
            $target = $(target);

        if( $target.length > 0 ) {
        
            $('a').each(function () {
                $(this).removeClass('active');
            });

            $(this).addClass('active');
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top+2
            }, 500, 'swing', function () {
                window.location.hash = target;
            });
        }

    });

    $( ".nav-menu li" ).bind({
	  mouseenter: function() {
	    $( this ).prev("li").addClass( "prev_el" );
	  },
	  mouseleave: function() {
	    $( this ).prev("li").removeClass( "prev_el" );
	  }
	});

    // ---------------

    $(".respmenubtn").click(function() {

        if( $(".resp-nav_wrapp").is(":hidden") ) {

            $(".resp-nav_wrapp").fadeIn(300);

            $(this).addClass("active");

        } else {

            $(".resp-nav_wrapp").fadeOut(300);

            $(this).removeClass("active");

        }

    });

    $(this).keydown(function(eventObject){

        if (eventObject.which == 27 &&
            $(".resp-nav_wrapp").is(":visible") ) {

                $(".resp-nav_wrapp").fadeOut(300);

                $(".respmenubtn").removeClass("active");

        }

    });


});

function getHeaderParams() {

	headerTopCoord = $(".header_wrapp").offset().top;

	if( headerTopCoord >= $(".header_wrapp").height() ) {

		$(".header_wrapp").addClass("scrollposition");

	} else {

		$(".header_wrapp").removeClass("scrollposition");

	}

}

function getTopWrappPadding() {

	$(".wrapper").css({
		"padding-top" : $(".header_wrapp").height() + "px"
	});

}

function getPromoSliderHeight() {

	var slideHeight = $(window).height() - $(".header_wrapp").height() - $(".search_wrapp").outerHeight();

	$(".promo-slider .slide").css({
		"height" : slideHeight + "px"
	});

}


function getMapSectParams() {

    if ( bodyWidth >= 1240 ) {

    	$(".contacts_inner").css({
    		"height" : $(".contacts-sect .contacts-thumbs").outerHeight(true) + "px"
    	});

    	$(".contacts_inner #map").css({
    		"height" : $(".contacts-sect .contacts-thumbs").outerHeight(true) + "px"
    	});

    } else {

        $(".contacts_inner").css({
            "height" : "auto"
        });

        $(".contacts_inner #map").css({
            "height" : 350 + "px"
        });

    }

}

function getAnimation() {

  $("section").each(function() {

    if( $(this).offset().top <= $(document).scrollTop() + $(window).height() ) {

      $(this).addClass("active");

    }

  });  

}

function onScroll(event){

    var scrollPos = $(document).scrollTop();

    $('.top-nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));

        if( refElement.length > 0 ) {

            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.top-nav li a').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }

        }

    });

}

function getTHumbsHeight() {

    $(".set_height").each(function() {

        thumbsHeightArr = [];

        thumb = $(this).find(".heightElem");

        thumb.css({
            "height" : "auto"
        });

        thumb.each(function() {

            thumbHeight = $(this).outerHeight();

            thumbsHeightArr.push(thumbHeight);

        });

        maxThumbHeight = Math.max.apply(null, thumbsHeightArr);

        thumb.outerHeight(maxThumbHeight);

    });

}

function getAdaptivePositionElements() {

    $(".append-elem").each(function() {

        screenParam = parseInt( $(this).attr("data-min-screen") );

        indexElem = $(this).attr("data-append-desktop-elem");

        if( bodyWidth <= screenParam ) {

            $("[data-append-elem = '"+ indexElem +"']").append($(this).children());

        }

         if( bodyWidth > screenParam ) {

            $("[data-append-desktop-elem = '"+ indexElem +"']").append($("[data-append-elem = '"+ indexElem +"']").children());

        }

    });

}