$(function(){
  $('#week1').click(function(){
    var currentSlide = $('.active-slide');
    var nextSlide = $('#week1-slide');
    // var button = $('#week1');

    // button.animate({opacity:1},200);
    currentSlide.fadeOut(600).removeClass('active-slide');
    nextSlide.fadeIn(600).addClass('active-slide');
  });
  $('#week2').click(function(){
    var currentSlide = $('.active-slide');
    var nextSlide = $('#week2-slide');
    var button = $('#week2');

    button.animate({opacity:1},200);
    currentSlide.fadeOut(600).removeClass('active-slide');
    nextSlide.fadeIn(600).addClass('active-slide');
  });
  $('#week3').click(function(){
    var currentSlide = $('.active-slide');
    var nextSlide = $('#week3-slide');
    var button = $('#week3');

    button.animate({opacity:1},200);
    currentSlide.fadeOut(600).removeClass('active-slide');
    nextSlide.fadeIn(600).addClass('active-slide');
  });
  $('#week4').click(function(){
    var currentSlide = $('.active-slide');
    var nextSlide = $('#week4-slide');
    var button = $('#week4');

    button.animate({opacity:1},200);
    currentSlide.fadeOut(600).removeClass('active-slide');
    nextSlide.fadeIn(600).addClass('active-slide');
  });
});
