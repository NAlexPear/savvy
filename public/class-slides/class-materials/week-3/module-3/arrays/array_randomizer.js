
var test_array = [1,2,3,4,5,6];
var output_array = [];


var randomizer = function(arr_input){
  var rand = Math.floor( Math.random() * arr_input.length);
  output_array.push(arr_input.splice(rand, 1)[0]);
};

var output = function(arr_input){
  var len = arr_input.length;
  for(var i = 0; i < len; i++){
    randomizer(arr_input);
  }
};

output(test_array);

//test to make sure that the test_array is empty, and the output_array is randomized
console.log(test_array);
console.log(output_array);
