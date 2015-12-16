var fizz_buzz = function () {
  var i = 1;

  while(i <= 100){
    //you could also just check for i % 15 === 0 below, but this shows the logic better
    if (i % 3 === 0 && i % 5 === 0){
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
    i++;
  }
};

var fizz_buzz_ref = function () {
  var i = 1,
      string = '';

  while(i <= 100){
    //you could also just check for i % 15 === 0 below, but this shows the logic better
    if (i % 3 === 0 && i % 5 === 0){
      string += '<div class="fizz buzz">FizzBuzz</div> ';
    } else if (i % 3 === 0) {
      string += '<div class="fizz">Fizz</div> ';
    } else if (i % 5 === 0) {
      string += '<div class="buzz">Buzz</div> ';
    } else {
      string += '<div>'+i+'</div>';
    }
    i++;
  }
  document.querySelector('#fizzbuzz_output').innerHTML = string;
};
