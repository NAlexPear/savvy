$(function(){
//HELPERS
  //'once' helper
  function once(fn, context){
    var result;

    return function () {
      if(fn){
        result = fn.apply(context || this, arguments);
        fn = null
      }
      return result;
    };
  }
  //run through the list of menu items
  var list_runner = function (parent) {
    //set list items for use in overflow
    var li = $(parent+'>li');

    //nuclear 'empty' option to keep repetition bugs out... WIP
    //definitely still buggy
    $('.dropdown').empty();

    //run all of the variables through the test in overflow()
    li.each(function(i){
      if(i > 1){
        console.log($(this).offset().left);
        console.log($(this).attr('id'));
        overflow($(this).attr('id'));
      }
    });
  }
  //populate drop-down with overflowing list-items, to be called when window is resized
  //overflow takes ids of list items (from menu, in theory) as parameter
  var overflow = function (li) {

    //set up target variables
    var target = $('#'+ li);
    var more = $('.overflow');

    //set up conditional actions for menu items
    if(target.hasClass('listed')){
      //remove target from overflow list
        $('.dropdown').remove('.dropdown>li#'+li);
        target.removeClass('listed')
        console.log('removed ' + target.attr('id'));
    } else if (target.offset().left > more.offset().left && ( target.hasClass('listed') === false )) {
      //add list item to menu
      target.clone().appendTo('.dropdown');
      target.addClass('listed');
      console.log('added ' + target.attr('id'));
    }
  };

  //set up function to change MORE to LESS on different events
  var more_less = function () {
    //include arrow-turning function
    arrow();
    //set text changes for MORE-LESS
    var $target = $('.overflow>div>span.more-less');
    var text = $target.text();
    if(text === 'MORE'){
      $target.text('LESS');
    } else {
      $target.text('MORE');
    }
  };

  //rotate arrow using CSS transforms
  var arrow = function () {
    var $target = $('.overflow>div');
    if($target.hasClass('turnt')){
      $target.removeClass('turnt');
    } else {
      $target.addClass('turnt');
    }
  };

//EVENTS
  //only let the 'more' option appear when the window is less than 1000px wide
  //also start calling overflow() on list items
  if($(window).width() < 1000 && $('.overflow').hasClass('hidden')){
    //remove 'hidden' class
    $('.overflow').removeClass('hidden');

    //set dropdown behaviors for different screen widths
      //mobile widths (<640px)
      if($(window).width() < 640){
        //set mobile dropdown target
        var drop = $('.dropdown');

        //bring dropdown menu in from right on touch (mobile only)
        $('.overflow').on('click',function(){
          more_less();
          if(drop.hasClass('active')){
            drop.animate({
              'right':'-100px',
              'opacity':'0'
            },300).removeClass('active');
          } else {
            drop.animate({
              'right':'0',
              'opacity':'1'
            },300).addClass('active');
          }
        });
      } else {
        //set desktop dropdown target
        var drop = $('.dropdown');
        //slide menu down from top on hover (desktop only)
        $('.overflow').on('click',function(){
          more_less();
          if(drop.hasClass('active')){
            drop.animate({
              'opacity':'0',
              'top':'-500px'
            },500).removeClass('active');
          } else {
            drop.animate({
              'opacity':'1',
              'top':'32px'
            },500).addClass('active');
          }
        });
      }
    //window resize event
    $(window).resize(function(){
      console.log('window is being resized');
      list_runner('.navbubbles');
    });
  }
});
