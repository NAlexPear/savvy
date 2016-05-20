/* globals $ */
/* eslint-disable no-unused-vars, no-unused-expressions */

function Scroll() {
    // object to hold all public methods
    let obj = {};

    // PRIVATE and CONFIGS
    const selectorArray = [
        '#howworks',
        '#whatlearn',
        '.slide',
        '#students-copy',
        '#faq-section'
    ];

    // PUBLIC
    // reveal div contents as the user scrolls through pages
    // takes an array of CSS selectors to be turned into jQuery objects
    obj.fadeIn = function fadeInOnScroll() {
        const arr = selectorArray;
        const windowBottom = $( window ).scrollTop() + $( window ).height();

        for ( let i = 0; i < arr.length; i++ ) {
            const sel = arr[i];
            // perform the fading function on each array element
            $( sel ).each( function fadeSelection() {
                const objectTop = $( this ).offset().top;
                // fade in each instance of a selector if it's visible in the window
                if ( windowBottom > objectTop && $( this ).css( 'opacity' ) !== '1' ) {
                    $( this ).animate( {
                        'opacity': '1'
                    }, 800 );
                }
            } );
        }
    };

    return obj;
}
