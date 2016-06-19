'use strict';

/* globals $ */
/* eslint-disable no-unused-vars, no-unused-expressions */

function Scroll() {
    // object to hold all public methods
    var obj = {};

    // PRIVATE and CONFIGS
    var selectorArray = ['#howworks', '#whatlearn', '.slide', '#students-copy', '#faq-section'];

    // PUBLIC
    // reveal div contents as the user scrolls through pages
    // takes an array of CSS selectors to be turned into jQuery objects
    obj.fadeIn = function fadeInOnScroll() {
        var arr = selectorArray;
        var windowBottom = $(window).scrollTop() + $(window).height();

        for (var i = 0; i < arr.length; i++) {
            var sel = arr[i];
            // perform the fading function on each array element
            $(sel).each(function fadeSelection() {
                var objectTop = $(this).offset().top;
                // fade in each instance of a selector if it's visible in the window
                if (windowBottom > objectTop && $(this).css('opacity') !== '1') {
                    $(this).animate({
                        'opacity': '1'
                    }, 800);
                }
            });
        }
    };

    return obj;
}