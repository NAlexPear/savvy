var value_logger = function (value) {
  console.log(value)
}

value_logger("Howdy ho, neighborino!")

// parameters and variables defined in function invocations are local to that invocation
value     // ReferenceError: No variable 'value' exists


value_logger(3 + 7)

// where's the seven?
value_logger(3, 7)

var doubler = function (num) {
  return num * 2
}

// is it ten?
var should_be_ten = doubler(5)

var double_value_logger = function (value1, value2) {
  console.log(value1, value2)
}

double_value_logger("hello", "how are you")

// what is value2?
double_value_logger("hello")

var add = function(num1, num2){
  return num1 + num2
}

var sum = add(7, 12)
