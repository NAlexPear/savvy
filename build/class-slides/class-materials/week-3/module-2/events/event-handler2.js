$('div').on('click', function(){
  console.log('A div has been clicked!')
})

// shortcut
$('#target').click(function(){
  $('#target').show().css('color', 'red').text('boom goes the dynamite!')
})