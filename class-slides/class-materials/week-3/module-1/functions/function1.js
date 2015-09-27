var greeter = function () {
  return 'Hello'
}

// saving the return value
var greeting = greeter()

// what value does the variable greeting hold?

// using the return value to compose larger expressions
console.log(greeting + ", nice to meet you.")

// what's the difference here?
console.log(greeter() + ", nice to meet you.")
