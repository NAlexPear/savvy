$(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('h2').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},1000);

            }

        });
        //repeat for "how it works" section
        $('#howworks').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},1800);

            }

        });
         //repeat for "what do you learn" section
        $('#whatlearn').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},800);

            }

        });
        //repeat for "curricula slides" section
       $('.slide').each( function(i){

           var bottom_of_object = $(this).offset().top + $(this).outerHeight();
           var bottom_of_window = $(window).scrollTop() + $(window).height();

           /* If the object is completely visible in the window, fade it it */
           if( bottom_of_window > bottom_of_object ){

               $(this).animate({'opacity':'1'},800);

           }

       });


    });

});
