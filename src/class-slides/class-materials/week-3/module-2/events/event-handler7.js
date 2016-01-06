$('input#type').on('keypress', function (e) {
  $('label').text(e.keyCode);
});

$('body').on('keypress', function(e){
  String.fromCharCode(e.keyCode);
});