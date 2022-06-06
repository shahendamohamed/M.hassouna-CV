$(function () {
    'use strict';

    //Smoothely Scroll To Element
    $('header li a').click(function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $(('#' + $(this).data('scroll'))).offset().top
        }, 500);

        window.console.log($(this).data('scroll'));
    });

    //Type write Effects
    var theText = $('.typer').data('text'),
        theTextLngth = theText.length,
        n = 0,
        theTyper = setInterval(function () {

            $('.typer').each(function () {

                $(this).html($(this).html() + theText[n]);

                n += 1;

                if (n >= theTextLngth) {

                    clearInterval(theTyper);
                }

            });

        }, 200);



    // Check if element is scrolled into view
    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop(),
            docViewBottom = docViewTop + $(window).height(),

            elemTop = $(elem).offset().top,
            elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

});  