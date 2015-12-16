var cumulative_sum = function () {
  var n = 10,
      i = 1,
      product = 1,
      text = '';

  while (i <= n){
    // *= is shorthand for 'product = product*i'... this works for any math operation
    product *= i;
    i++;
  }
  text = '<p>The nth number was equal to <span class="result">'+n+'</span>, and the product of all positive integers from 1 to n was <span class="input">'+product+'</span>.</p>'
  document.querySelector('#sum').innerHTML=text;
};
