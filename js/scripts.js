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

    // getPromoSliderHeight();

    getAnimation();

    $(".contacts-sect").addClass("active");
    getMapSectParams();

});

$(window).resize(function() {

    // getPromoSliderHeight();
    getMapSectParams();

});

$(document).scroll(function() {

  getAnimation();

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

});

function getPromoSliderHeight() {

	var headerHeight = $(".header-site").height();

	$(".promo-slider .slide").css({
		"height" : $(window).height() - headerHeight + "px"
	});

}


function getMapSectParams() {

	$(".contacts_inner").css({
		"height" : $(".contacts-sect .contacts-thumbs").outerHeight(true) + "px"
	});

	$(".contacts_inner #map").css({
		"height" : $(".contacts-sect .contacts-thumbs").outerHeight(true) + "px"
	});

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