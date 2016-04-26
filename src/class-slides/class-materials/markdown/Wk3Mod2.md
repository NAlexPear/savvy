## Fun with Functions
### Delving Deeper in to Functions

We've already seen a variety of functions, from built-on functions like `console.log()`, to functions from external libraries like `$()` from jQuery, to a few of our own built using `var functionName = function(){}`. We've also already learned how to _invoke_ or _execute_ functions with `()`, as well as passing in a few simple arguments (like we've done with `.css("property", "value")`). Let's dig into these a bit deeper.

---

### the `return` keyword

Here's a function that `return`s a value without any side effects:

```javascript
var greeter = function () {
  return 'Hello'
}

// saving the return value
var greeting = greeter();

// using the return value to compose larger expressions
console.log(greeting + ", nice to meet you.")

// what's the difference here?
console.log(greeter() + ", nice to meet you.")
```
The result of evaluating an expression consisting of a function reference followed by an invocation operator is the value to the right of the keyword return inside the function when the code is run.

```javascript
var saying_generator = function () {
  var phrase = "Heeey, " + "it's the " + " Fonz."
  return phrase
}

// What is the return value?
var saying = saying_generator()

var broken_saying_generator = function () {
  var phrase = "Heeey, " + "it's the " + " Fonz."
  phrase
}

// What about now?
var broken_saying = broken_saying_generator()
```

### Exercise 1
### Getting Sentences

Go to your Portfolio Project home page, open it with `open-in-browser`, then open up the dev console. Try the following:

1. Define a new function called `getSentence`. HINT:

```javascript
var getSentence = function(){};
```

2. Use `Math.random` to select between some of the contact information listed on your home page. HINT:

```javascript
var getSentence = function(){
  var rng = Math.random();

  if(rng < 0.33){
    $(/* selector for the first element */);
  } else if(rng >= 0.33 && rng < 0.66){
    $(/* selector for the second element */);  
  } else {
    $(/* selector for the third element */);
  }
};
```

3. Return the text content your randomly-generated selection with `return`. HINT:

```javascript
var getSentence = function(){
  var rng = Math.random();
  var sentence;

  if(rng < 0.33){
    sentence = $(/* selector for the first element */).text();
  } else if(rng >= 0.33 && rng < 0.66){
    sentence = $(/* selector for the second element */).text();  
  } else {
    sentence = $(/* selector for the third element */).text();
  }

  return sentence;
};
```

4. Use jQuery to append the selected text to the bottom of the page inside a set of `<p>` tags. HINT:

```javascript
var newSentence = getSentence();

$('body').append('<p>' + newSentence + '</p>');
```

5. Create a new function that generates and appends a sentence in one fell swoop. HINT:

```javascript
var sentenceAppender = function(){
  var newSentence = getSentence();

  $('body').append('<p>' + newSentence + '</p>');
}
```

6. Use a `while` loop to run your new sentence-appending function 10 times. HINT:

```javascript
var i = 0;

while(i < 10){
  sentenceAppender();
  i++;
}
```

---

### Arguments

During every function invocation, you have access to the arguments keyword, which contains all the inputs to the function invocation. Play with this concept until you're sure you understand it.

```javascript
var inspector = function () {
  console.log(arguments)
}

// try each invocation individually and ponder the result
inspector(3)

inspector(3 + 7)
inspector(3, 7)

inspector("hello")
inspector("hello" + " " + "how are you")
inspector("hello", "how are you")

inspector("hello", 7, true, undefined, null, 3 + 12, "nice to" + " meet you")
```

### Exercise 2:

1. In your dev console, create a function `logAndReturn` that `console.log`s all of its inputs and then `return`s them. HINT:

```javascript
var logAndReturn = function(){
  console.log(arguments);
  return arguments;
}
```

2. Store the `return` value as a variable `returnedValues`. HINT:

```javascript
var returnedValues = logAndReturn();
```

3. Pass that variable as an argument to a second invocation of `logAndReturn`. HINT:

```javascript
logAndReturn( returnedValues );
```

---

### Parameters
It's unwieldy to work with the arguments keyword directly. Usually we use named parameters to give our inputs (arguments) variable names for the length of the function invocation

```javascript
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
```

### Exercise 3
#### Simple Math

1. Write a function called `tripler` that takes a number and returns triple the value. HINT:

```javascript
var tripler = function( num ){
  return num * 3;
}
```
2. Create a function `multiply` that takes two numbers as inputs and returns their product. HINT:

```javascript
var multiply = function( num1, num2 ){
  return num1 * num2;
}
```
3. Create a function `divide` that takes two numbers as inputs and returns the result of dividing the first by the second

```javascript
var divide = function( num1, num2 ){
  return num1 / num2;
}
```

4. Create a function `remainder` that takes two numbers as inputs and returns the result of modulo the first by the second

```javascript
var remainder = function( num1, num2 ){
  return num1 % num2;
}
```

5. Using only the functions you wrote above, and no operators, calculate the value of tripling 5, multiplying that by 12, dividing by 2 and then finding the remainder of dividing that by 3.

---

### Portfolio Project 1
#### Sentence Scrambler

Nice work with functions today! For our last activity, we'll implement a Sentence Scrambler as one of our Portfolio Exercises. Build a new page with a `<div id="output">`, and then add the following in a `scrambler.js` file attached to your new page:

1. Write a function called `stringPrinter` that takes a string as an argument and uses `$('#output').text()` to place it into a specific `<div>` on the web page. HINT:

```javascript
var stringPrinter = function( starterString ){
  $('#output').text( starterString )
}
```
2. Call `starterString` multiple times with different strings from the console.
3. Does `starterString` use a side effect or a return value?
4. Write a function called `funnySentence` that takes a noun, an adjective, a verb, and an adverb as inputs, and constructs a string of html text and uses `$('#output').append()` to place it on the page. HINT:

```javascript
var funnySentence = function( noun, adjective, verb, adverb ){
  var sentence = "The " + adjective + " " + noun + " " + verb + " " + adverb + ".";

  stringPrinter(sentence);
};

```
5. Put each word argument you pass in into spans that have css rules that styles them differently to make them stand out.
6. Invoke `funnySentence` 5 times.
Extra Credit: Create a version of `funnySentence` that takes no inputs, but rather constructs a funny sentence on its own from randomly chosen words
