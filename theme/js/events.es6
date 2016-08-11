/* globals Helpers, Click, Scroll, Links */
/* eslint-disable max-params, no-unused-expressions */
( function iife( window, document, $, _, Helpers, Click, Scroll, Links ) {
    'use strict';
    // page load events
    Links;
    Helpers.linkUpdate( Links, 'stlouis' );

    // click events
    Click.scroller();
    Click.cities( Links, Helpers );
    Click.slides();
    Click.faq();
    Click.priorityMenu( [
        {
            anchorSelector: '#about',
            dropdownSelector: '#menudrop'
        },
        {
            anchorSelector: '#people',
            dropdownSelector: '#submenudrop'
        }
    ] );

    // scroll events
    // check for position on page load, too
    Scroll.fadeIn();
    // run events when the window is scrolled
    $( window ).scroll( function windowScroller() {
        Scroll.fadeIn();
    } );

    // form validation and response
    $( 'form .subjects' ).on( 'change', function validateFormAndRespond() {
        const $val = $( this ).val();
        const $modal = $( '#other-modal' );
        if ( $val === 'Other' ) {
            $modal.removeClass( 'hidden' );
        } else if ( $modal.hasClass( 'hidden' ) === false ) {
            $modal.addClass( 'hidden' );
        }
    } );

    // default focus on St. Louis city selection button
    $( 'button[name="stl"]' ).focus();
    $( '#cta > .pointer-after' ).css(
        'left',
        Helpers.getArrowPosition( $( 'button[name="stl"]' ) )
    );

    window.city = $( 'button[name="stl"]' );


    // Adjust arrow position for city selection buttons with window resize
    $( window ).on( 'resize', function windowResizeHandler() {
        const debouncedArrowAdjustment = _.debounce(
            function adjustArrow() {
                $( '#cta > .pointer-after' ).css(
                    'left',
                    Helpers.getArrowPosition( window.city )
                );
            },
            250
        );

        debouncedArrowAdjustment();
    } );
}( window, document, window.jQuery, window._, Helpers(), Click(), Scroll(), Links() ) );
