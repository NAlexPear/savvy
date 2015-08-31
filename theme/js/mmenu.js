$(function(){
  $('.menu-icon').click(function(){
    if($('#menubar').hasClass('expanded')){
        $('body').animate({left:'0px'});
        $('#menubar').removeClass('expanded').animate({left:'-250px'});
    } else {
        $('body').animate({left:'200px'});
        $('#menubar').addClass('expanded').animate({left:'-25px'});
      }
    });
  $('#menubar a').click(function(){
    $('body').animate({left:'0px'});
    $('#menubar').removeClass('expanded').animate({left:'-250px'});
  });
});

// USE 'ONE'
// $(function handler1(){
//   $('body').animate({left:'200px'});
//   $('#menubar').animate({left:'0px'});
//   $('.menu-icon').one("click", handler2);
// });
//
// $(function handler2(){
//   $('body').animate({left:'0px'});
//   $('#menubar').animate({left:'-800px'});
//   $('.menu-icon').one('click', handler1);
// });
//
// $('.menu-icon').one('click', handler1);
