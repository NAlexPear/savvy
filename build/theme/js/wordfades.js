$(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        //repeat for "how it works" section
        $('#howworks').each( function(i){

            var top_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > top_of_object ){

                $(this).animate({'opacity':'1'},800);

            }

        });
         //repeat for "what do you learn" section
        $('#whatlearn').each( function(i){

            var top_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > top_of_object ){

                $(this).animate({'opacity':'1'},800);

            }

        });
        //repeat for "curricula slides" section
       $('.slide').each( function(i){

           var top_of_object = $(this).offset().top;
           var bottom_of_window = $(window).scrollTop() + $(window).height();

           /* If the object is completely visible in the window, fade it it */
           if( bottom_of_window > top_of_object ){

               $(this).animate({'opacity':'1'},800);

           }

       });
       //repeat for "students" section
      $('#students-copy').each( function(i){

          var top_of_object = $(this).offset().top;
          var bottom_of_window = $(window).scrollTop() + $(window).height();

          /* If the object is completely visible in the window, fade it it */
          if( bottom_of_window > top_of_object ){

              $(this).animate({'opacity':'1'},800);

          }

      });


    });

});
