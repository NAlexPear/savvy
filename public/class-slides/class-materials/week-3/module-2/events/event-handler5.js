var el_finder = function(event){
  console.log("calling el_finder for:", this, event.target)
  $(this).attr('id', 'active');
}

$('div').click(el_finder)