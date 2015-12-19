$(function(){
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
      console.log('now we aint');
    } else {
      $target.addClass('turnt');
      console.log('we turnt!');
    }
  };

  //only let the 'more' option appear when the window is less than 1000px wide
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
  }
});
