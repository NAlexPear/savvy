## Advanced Functions
### `this`, closures, and callbacks

We've used quite a few functions up to this point in the course, and should have a good handle on how to create, modify, and invoke functions (with and without parameters), as well as understanding the differences between _side effects_ and _returned values_. But there's still more to learn!

---

### Functions as inputs

Functions are values, just like numbers, strings, arrays and objects. They can be saved to variables:

```javascript
var say_hi = function () {
  console.log('hi')
}

var greeter = say_hi

say_hi()
greeter()

say_hi = function () {
  console.log('meh')
}

say_hi() // ??
greeter() // ??
```

They can be passed as arguments (inputs) to functions:

```javascript
var runner = function (fn) {
  console.log('Invoking a function now!')
  fn()
}

runner( function(){ console.log('okay') } )
runner(say_hi)
runner(greeter)

runner( say_hi() ) // ??
```

---

### Exercise 1
#### `answerLogger`

Write a function `answerLogger` that takes a function as input, runs it, and places the return value from that function invocation into a `div#answer`.

1. We can test `answerLogger` using the following code, we should not need to change it at all.

  ```javascript
  // this should run if your answerLogger is correct!
  answerLogger(function(){
    return "I should appear in div#answer!"
  })
  ```

  HINT:
  ```javascript
  var answerLogger = function(fn){
    var answer = fn();

    $("#answer").text(answer);
  };
  ```

2. Expand your `answerLogger` function to allow for an array of functions, then run and append each of them. HINT:

  ```javascript
  var answerLogger = function(arr){
    $("#answer").html("<ol></ol>");

    arr.forEach( function(fn){
      var answer = fn();

      $("#answer > ol").append("<li>" + answer + "</li>");
    });
  };
  ```
---

### Functions as outputs

Not only can functions be passed as inputs, they can also be returned as outputs.

```javascript
var returnsFunction = function () {
  return function(){ console.log('BOOP!') }
}

// have we booped yet?
var booper = returnsFunction()

// how about now?
booper()
```

---

### Function Scope

Function define their own local scope. Variables declared within a function invocation are available only inside of that function. It's as if invocations are surrounded by one-way mirrors, they can see out and access variables named in their parent scope, but code running outside can't see in to access parameters or variables defined inside.

```javascript
var word = 'original'
var phrase = " is the word"

var word_changer = function (new_word) {
    var word = new_word
    console.log(word + phrase)
}

console.log(word + phrase) // ??
console.log(new_word + phrase) // ??
word_changer('changed')
console.log(word + phrase) // ??
console.log(new_word + phrase) // ??

// what's different here?
var leaky_word_changer = function (new_word) {
    word = new_word
    console.log(word + phrase)
}

leaky_word_changer('changed')
console.log(word + phrase) // ??
console.log(new_word + phrase) // ??
```

---

### Exercise 2
#### Secret Keeper

Use the same document or JSBin from Exercise 1 to try this out:

1. Write a function `secretKeeper` that defines a variable `secret` inside its code block. Try to access the secret variable from outside the function scope using your JS console. Make sure it's safe! HINT:
  ```javascript
  var secretKeeper = function(){
    var secret = "You can't find meeee";
  };
  ```
2. Allow the user to invoke `secretKeeper` with two strings as arguments. HINT:
  ```javascript
  var secretKeeper = function(string1, string2){
    var secret = "You can't find meeee";
  };
  ```
3. `append()` the two strings to the page with the secret word in between. HINT:
  ```javascript
  var secretKeeper = function(string1, string2){
    var secret = "You can't find meeee";
    var publicPhrase = string1 + " " + secret + " " + string2;

    $("#answer").append(publicPhrase);
  };
  ```

---

### Closure

Returned functions retain scope access at the point they were defined. This is called closure. The scope chain is established at the point WHERE THE KEYWORD `function` IS WRITTEN, not where it is invoked.

```javascript
var returnsFunction = function () {
  var word = 'I can see inside'
  return function(){ console.log('BOOP! ' + word) }
}

var word = 'I can see outside'

var newBooper = returnsFunction()
newBooper() // what does this log? why?

var returnsFunction = function () {
  var number = 5
  return function(){ console.log( "The number is: " + number) }
}

var number = 4
var fn = returnsFunction()
fn() // what will this log? why?

var runner = function(func){
  var number = 3
  func()
}

runner(fn) // what will this log? why?
```

---

### Exercise 3
#### Multipliers!

Write a function `multipliesBy` that takes a number as input and returns a function that, when invoked with a second number as an argument multiplies the two numbers together.

We can test `multipliesBy` with this code, we should not need to change it at all.
```javascript
var times5 = multipliesBy(5)
times5(4) // 20

var times10 = multipliesBy(10)
times10(32) // 320
```
If you need a HINT:

```javascript
var multipliesBy = function(num1){
  return function(num2) {
    return num1 * num2;
  }
};
```

---

### Functional Programming

Since JavaScript treats functions as first-class citizens, it can be treated as more than just an imperative or Object Oriented language. Instead, we can program in a _functional_ paradigm, where all operations are functions that focus on returned values instead of side effects. There are libraries like Underscore, lodash, and Ramda that help expand JavaScript's built-in functional tools, but there are a few that ship with JS that we should know!

#### `.map()`

Remember how `while` loops are avoided because of a floating count variable? e.g.
```javascript
var i = 0; // awkward counter
var limit = 10; // or some other number

while( i < limit ){
  // do something
  i++; // increments i outside of scope of while loop.
}
```
This is no good in large applications because that `i` variable could easily get away from us. It's a changing and `mutable` value that can't always be depended on (i.e. _order matters_, which is generally not good). The solution was the `for` loop, which kept everything nice and tidy!

We sometimes have the same problem when working with `.forEach()`. Think about how many times we've done something like this:

```javascript
var myArray = [1, 2, 3, 4, 5];
var doubledNumbers = [];

myArray.forEach( function(num){
  doubledNumbers.push( num * 2 );
});
```
See how `doubledNumbers` is separated from the loop that populates it? It's the same order-specific implementation that we generally ought to avoid. What if, instead, we had a function that could create `doubledNumbers` directly? Well, we do! And that function is `.map()`, which is built into the `Array` data type. Try this:

```javascript
var myArray = [1, 2, 3, 4, 5];
var doubledNumbers = myArray.map( function(num){
  return num * 2;
});

console.log(doubledNumbers);
```
Now there's no doubt that `doubledNumbers` comes from `myArray`, and there's no issue of order. The only state to keep track of is that of `myArray`, and that value should never change if we're programming functionally!

#### `.filter()`

How about this scenario:

```javascript
var myArray = [1, 2, 3, 4, 5];
var oddNumbers = [];

myArray.forEach( function(num){
  if(num % 2 !== 0){
    oddNumbers.push( num );
  }
});
```

We can _filter_ values in the same way using the `.filter()` method! `.filter()` expects a `return` value that filters out some results.

```javascript
var myArray = [1, 2, 3, 4, 5];
var oddNumbers = myArray.filter( function(num) {
    return num % 2 !== 0;
});
```

### `.reduce()`

Of the three functions we're learning today, `reduce` is the most complex, but it's so useful that it's important to learn it! Let's think about this situation:

```javascript
var myArray = [1, 2, 3, 4, 5];
var myArraySum = 0; // variable that keeps a sum of all values in myArray

myArray.forEach( function(num){
  myArraySum += num;
});
```

Now let's try to `.reduce()` this array from left to right in a similar way. `.reduce()` takes four possible arguments, but we're going to use the first two (the running total, and the next value to add to that running total... [see the docs for more information](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)).

```javascript
var myArray = [1, 2, 3, 4, 5];
var myArraySum = myArray.reduce( function(previousValue, currentValue) {
  return previousValue + currentValue;
});
```

**BONUS FUN FACT:**
It you want to get really fancy, the latest version of JavaScript (mostly supported in modern browsers) gives us _arrow syntax_ for anonymous functions. This allows us to get rid of the `function` keywords for unnamed functions (like those passed to `.forEach()`, `.map()`, `.filter()`, and `.reduce()`). Combined with _implicit returns_, the syntax for these functions becomes extremely terse:

```javascript
var myArray = [1, 2, 3, 4, 5];

var doubledNumbers = myArray.map(num => num * 2); // [2, 4, 6, 8, 10]
var oddNumbers = myArray.filter(num => num % 2 !== 0); // [1, 3, 5]
var myArraySum = myArray.reduce( (a, b)=> a + b); // 15
```
---

### Portfolio Project

Go through past projects, including the web store Hack-A-Thon, and try to implement some of the new functions that we learned!
