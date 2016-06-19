/* globals $, _ */
/* eslint-disable no-unused-vars, no-unused-expressions */

function Click() {
    // object to hold all public methods
    let obj = {};

    // PRIVATE
    const OFFSET = 56;

    // helpers for Priority Plus menu
    function dropup( $dropdown, index ) {
        const multiplier = index + 1;
        const topValue = parseInt( $dropdown.css( 'top' ).split( 'px' )[0], 0 );
        const newTopValue = topValue - ( OFFSET * multiplier );
        const newTopString = ( newTopValue.toString() ) + 'px';

        $dropdown.animate( {
            'top': newTopString
        }, 200 );
    }

    function dropdown( $dropdown ) {
        const topValue = parseInt( $dropdown.css( 'top' ).split( 'px' )[0], 0 );
        const newTopValue = isNaN( topValue ) ? OFFSET : topValue + OFFSET;
        const newTopString = ( newTopValue.toString() ) + 'px';

        $dropdown.animate( {
            'top': newTopString
        }, 200 );
    }

    function drop( $dropdown, index ) {
        // establish baseline value for top (the CSS attr)
        if ( $dropdown.hasClass( 'visible' ) ) {
            dropup( $dropdown, index );
            $dropdown.removeClass( 'visible' );
        } else {
            dropdown( $dropdown );
            $dropdown.addClass( 'visible' );
        }
    }

    function menuClickEmitter( $target, index ) {
        $target.on( 'click', 'a', function menuAnchorClickEventListener() {
            // quick default anchor tag prevention
            if ( $target.attr( 'href' ) === '#' ) {
                event.preventDefault();
            }

            // emit an event to be handled differently according to index number in accordianArray
            $target.trigger( 'menu:click:' + index );
        } );
    }

    function menuClickListener( accordianArray, $target, index ) {
        $target.on( 'menu:click:' + index, function menuClickEventListener() {
            // toggle assigned dropdown visibility
            const $dropdown = $( accordianArray[index].dropdownSelector );

            drop( $dropdown, 0 );

            // get child dropdown elements
            function accordianFilter( menuObject ) {
                return accordianArray.indexOf( menuObject ) > index;
            }

            const otherDropdowns = _.filter( accordianArray, accordianFilter );
            const isTriggered = $target.hasClass( 'triggered' );

            // shouldn't affect menus without children
            otherDropdowns.forEach( function otherDropdownHandler( dropdownObj ) {
                const $otherDropdown = $( dropdownObj.dropdownSelector );
                // top condition should only apply to grandparent elements
                if ( isTriggered && $otherDropdown.hasClass( 'visible' ) ) {
                    drop( $otherDropdown, index + 1 );
                } else if ( $target.hasClass( 'triggered' ) ) {
                    dropup( $otherDropdown, index );
                } else {
                    dropdown( $otherDropdown );
                }
            } );

            isTriggered ? $target.removeClass( 'triggered' ) : $target.addClass( 'triggered' );
        } );
    }
    // PUBLIC
    // Priority Plus menu JavaScript
    obj.priorityMenu = function priorityMenuMethod( accordianArray ) {
        // accordianArray should be an array of Objects.
        // The order should be from top -> bottom,
        // with an anchorSelector and dropdownSelector defined for each item in the array

        _.each( accordianArray, function accordianArrayHandler( menuObject ) {
            const $target = $( menuObject.anchorSelector );
            const index = accordianArray.indexOf( menuObject );

            menuClickEmitter( $target, index );
            menuClickListener( accordianArray, $target, index );
        } );
    };

    // scroll to IDs on the page
    obj.scroller = function scrollToIds() {
        $( 'a' ).click( function anchorToIdClickEventHandler( event ) {
            const href = $.attr( this, 'href' );
            // only run if href points to something other than '#'
            if ( href === '#' ) {
                event.preventDefault();
            } else {
                $( 'html, body' ).animate( {
                    scrollTop: $( href ).position().top
                }, 700, function addUrlHash() {
                    window.location.hash = href;
                } );
            }
        } );
    };
    // city selector buttons (takes the Links object as an input)
    obj.cities = function cityLinker( Links, Helpers ) {
        $( '#location-picker' ).on( 'click', 'li', function locationPicker() {
            const $target = $( this );
            // sets active/inactive style for buttons on click
            if ( $target.hasClass( 'active' ) === false ) {
                $target.siblings( 'li' ).removeClass( 'active' );
                $target.addClass( 'active' );
            }

            // sets city variable by reading the text content of the clicked city button
            const city = $target.text().replace( /[^\w]/gi, '' ).toLowerCase();

            // grabs data from invoked Link object (built via function)
            const CityLinks = Links[city];

            // fires linkSwitch() on the object of city links
            Helpers.linkSwitch( CityLinks );
        } );
    };
    // Week-By-Week Curriculum revealer
    obj.slides = function revealCurriculum() {
        $( '#syllabus' ).on( 'click', 'li', function syllabusClickEventHandler() {
            const n = $( this ).index() + 1;
            const currentSlide = $( '.active-slide' );
            const nextSlide = $( 'div.slide:nth-child(' + n + ')' );

            // animate buttons
            $( this ).siblings( 'li' ).animate( {
                'opacity': '0.6'
            }, 100 );

            $( this ).animate( {
                'opacity': '1'
            }, 100 );

            // change slides
            currentSlide.fadeOut( 100 ).removeClass( 'active-slide' );
            nextSlide.fadeIn( 100 ).addClass( 'active-slide' );
        } );
    };
    // FAQ page active response revealer
    obj.faq = function revealFaqAnswer() {
        $( '#faq-list' ).on( 'click', 'li', function faqQuestionClickHandler() {
            const target = $( this ).children( '.response' );
            const others = $( this ).siblings( 'li' ).children( '.response' );
            if ( target.hasClass( '.active-response' ) ) {
                target.removeClass( '.active-response' ).slideUp( 300 );
            } else {
                others.removeClass( '.active-response' ).slideUp( 300 );
                target.addClass( '.active-response' ).slideDown( 300 );
            }
        } );
    };

    return obj;
}
