var fencepost_loop = function () {
  var n = 10,
      i = 1,
      string = '';

  while(i <= n){
    if(i !== n){
      string += i+', ';
    } else {
      string += i;
    }
    i++
  }
  document.querySelector('#target').textContent = string;
};

var fencepost_loop_ref = function () {
  var n = 10,
      i = 1,
      string = '';

  while(i <= n){
    if(i !== n){
      if(i % 2 === 0){
        string += '<p class="even">'+i+'<p><hr>';
      } else {
        string += '<p class="odd">'+i+'<p><hr>';
      }
    } else {
        if(i % 2 === 0){
        string += '<p class="even">'+i+'<p>';
      } else {
        string += '<p class="odd">'+i+'<p>';
      }
    }
    i++
  }
  document.querySelector('#target').innerHTML = string;
};
