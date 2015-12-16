var mouse_tracker = function(event){
  console.log(event.pageX, event.pageY, !!event.which);
};

$('body').on('mousemove', mouse_tracker);