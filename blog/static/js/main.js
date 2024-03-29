jQuery(document).ready(function () {

    if (is_touch_device()) {
        jQuery('.full-screen-scroll article').css('opacity', '1', '!important');
    }

    var ua = navigator.userAgent.toLowerCase();
    if ((ua.indexOf("safari/") !== -1 && ua.indexOf("windows") !== -1 && ua.indexOf("chrom") === -1) || is_touch_device()) {

        jQuery("html").css('overflow', 'auto');

        jQuery(".scroll-top").click(function () {
            jQuery('html, body').animate({scrollTop: 0}, 2000);
            return false;
        });

    } else {
        jQuery("html, .menu-left-part, #cbp-bislideshow.scroll").niceScroll({
            cursorcolor: "#5B5B5B",
            scrollspeed: 100,
            mousescrollstep: 80,
            cursorwidth: "12px",
            cursorborder: "none",
            cursorborderradius: "0px"
        });

        //Scroll Top animation
        jQuery(".scroll-top").click(function () {
            jQuery("html").getNiceScroll(0).doScrollTop(0);
        });

        jQuery(".sidebar").mouseover(function () {
            jQuery(".menu-left-part").getNiceScroll().resize();
        });
    }


    //Placeholder show/hide
    var textareaInput = jQuery('input, textarea');
    textareaInput.focus(function () {
        jQuery(this).data('placeholder', jQuery(this).attr('placeholder'));
        jQuery(this).attr('placeholder', '');
    });
    textareaInput.blur(function () {
        jQuery(this).attr('placeholder', jQuery(this).data('placeholder'));
    });


// preload the images
    jQuery('#cbp-bislideshow.scroll').imagesLoaded(function () {
        var count = 0;
        var scrollItemWidth = jQuery('.cbp-bislideshow.scroll li').outerWidth();
        jQuery('#cbp-bislideshow.scroll').children('li').each(function () {
            var $item = jQuery(this);
            $item.css({'left': count * scrollItemWidth});
            count++;
        });
    });

    //Fix for default menu
    jQuery('.default-menu ul').addClass('main-menu sm sm-clean');

});


jQuery(window).on("load", function () {

    jQuery(".blog-item-holder").hover(function () {
            jQuery(".blog-item-holder").not(this).addClass('blur');
        },
        function () {
            jQuery(".blog-item-holder").removeClass('blur');
        });


//Set menu
    jQuery('.main-menu').smartmenus({
        subMenusSubOffsetX: 1,
        subMenusSubOffsetY: -8,
        markCurrentItem: true
    });


//Set each image slider
    jQuery(".image-slider").each(function () {
        var id = jQuery(this).attr('id');
        var paginationValue = window[id + '_pagination'] === 'true';
        var autoValue = window[id + '_auto'] === 'true';
        var hoverPause = window[id + '_hover'] === 'true';
        var speedValue = window[id + '_speed'];

        jQuery('#' + id).carouFredSel({
            responsive: true,
            width: 'variable',
            auto: {
                play: autoValue,
                pauseOnHover: hoverPause
            },
            pagination: paginationValue,
            scroll: {
                fx: 'crossfade',
                duration: parseFloat(speedValue)
            },
            swipe: {
                onMouse: true,
                onTouch: true
            },
            items: {
                height: 'variable'
            }
        });
    });

    jQuery('.carousel_pagination').each(function () {
        var pagination_width = jQuery(this).width();
        var windw_width = jQuery('.image-slider-wrapper').width();
        jQuery(this).css("margin-left", (windw_width - pagination_width) / 2);
    });


//Show-Hide header sidebar
    jQuery('#toggle').on("click", multiClickFunctionStop);
});


jQuery(window).resize(function () {

    var count = 0;
    var scrollItemWidth = jQuery('.cbp-bislideshow.scroll li').outerWidth();
    jQuery('#cbp-bislideshow.scroll').children('li').each(function () {
        var $item = jQuery(this);
        $item.css({'left': count * scrollItemWidth});
        count++;
    });

    jQuery('.carousel_pagination').each(function () {
        var pagination_width = jQuery(this).width();
        var windw_width = jQuery('.image-slider-wrapper').width();
        jQuery(this).css("margin-left", (windw_width - pagination_width) / 2);
    });

});

//------------------------------------------------------------------------
//Helper Methods -->
//------------------------------------------------------------------------


var multiClickFunctionStop = function (e) {
    var toggle = jQuery('#toggle');
    e.preventDefault();
    toggle.off("click");
    toggle.toggleClass("on");
    jQuery('#sidebar, .menu-left-part, .menu-right-part').toggleClass("open");
    toggle.on("click", multiClickFunctionStop);
};

function is_touch_device() {
    return 'ontouchstart' in window;
}

jQuery(window).bind("scroll", function () {
    if (jQuery(this).scrollTop() > 700) {
        jQuery('.scroll-top').fadeIn(500);
    } else {
        jQuery('.scroll-top').fadeOut(500);
    }
});


// todo: fucking get rid of this!!!
function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
}


var SendMail = function () {

    var emailVal = jQuery('#contact-email').val();

    if (isValidEmailAddress(emailVal)) {
        var params = {
            'action': 'SendMessage',
            'name': jQuery('#name').val(),
            'email': jQuery('#contact-email').val(),
            'subject': jQuery('#subject').val(),
            'message': jQuery('#message').val()
        };
        jQuery.ajax({
            type: "POST",
            url: "php/sendMail.php",
            data: params,
            success: function (response) {
                if (response) {
                    var responseObj = jQuery.parseJSON(response);
                    if (responseObj.ResponseData) {
                        alert(responseObj.ResponseData);
                    }
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                //xhr.status : 404, 303, 501...
                var error = null;
                switch (xhr.status) {
                    case "301":
                        error = "Redirection Error!";
                        break;
                    case "307":
                        error = "Error, temporary server redirection!";
                        break;
                    case "400":
                        error = "Bad request!";
                        break;
                    case "404":
                        error = "Page not found!";
                        break;
                    case "500":
                        error = "Server is currently unavailable!";
                        break;
                    default:
                        error = "Unespected error, please try again later.";
                }
                if (error) {
                    alert(error);
                }
            }
        });
    } else {
        alert('Your email is not in valid format');
    }
};
