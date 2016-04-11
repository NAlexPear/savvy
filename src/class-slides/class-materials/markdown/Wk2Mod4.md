## `while`
### Fun with loops!

The `while` loop looks a lot like an `if` statement. They both execute their associated code block based on the result of their conditional expression. The difference being, the `while` loop will repeatedly check its conditional expression and continue to run its code block as long as it evaluates to `true`. Give it a try:

 ```javascript
 var n = 0

 console.log("I am called the Count... because I really love to count!")

 while (n < 10) {
   console.log(n, "ha-ha-ha")
   n++
 }

 console.log('fin!')
 ```

### Portfolio Project 1
#### Looping Page

For the rest of today's exercises, we're going to create a very simple HTML document that will demonstrate our looping prowess. To begin, follow the same process used for the `greeting` and `choose-your-own-adventure` pages to create a `while` page, and link that page to your `media` page in your Portfolio project. Make sure to also include a `while.js` file in your `while` directory and link it to your `while` HTML page!

Then work through the following exercises as a group, implementing each in your `while.js` document.

1. **EXERCISE 1**: Create a `while` loop that logs numbers 1 through 10 to the console. HINT:

```javascript
var n = 1;

while (n <= 10) {
    console.log(n);
    n++;
}
```

2. **EXERCISE 2**: Create a `while` loop that logs every _even_ number from 2 through 20 to the console. HINT:

```javascript
var n = 2;

while (n <= 20) {
    console.log(n);
    n += 2;
}
```

3. **EXERCISE 3**: Create a `while` loop that `console.log`s a running total of the cumulative sum of numbers from 1 to `n`. HINT:

```javascript
var n = 100;
var i = 1;
var sum = 0;

while (i < n) {
    sum += i;
    console.log(sum);
    i++;
}
```

4. **EXERCISE 4**: In your HTML document, create a separate `div` for each exercise. Then, in addition to `console.log`-ing each iteration, append all of the results to their respective divs using an unordered list. HINT (for exercise 1... try the others on your own):

```javascript
var n = 1;
var outputTarget = document.querySelector("#exercise-1");
var outputHtml = "<ul>";

while (n <= 10) {
    console.log(n);
    ouputHtml += "<li>" + n + "</li>";
    n++;
}

outputHtml += "</ul>";

outputTarget.innerHTML = outputHtml;
```
5. **EXERCISE 5**: We can also combine `if` and `else` statements in our loops to respond to different input states. For this exercise, count _down_ from 15 by ones. For each number, log "even" or "odd" to the console and to a new div for Exercise 5. HINT:

```javascript
var n = 15;
var outputTarget = document.querySelector("#exercise-5");
var outputHtml = "<ul>";

while (n > 0) {
    console.log(n);
    if ( n % 2 === 0) {
        outputHtml += "<li>even</li>";
    } else {
        outputHtml += "<li>odd</li>";
    }
    n--;
}

ouputHtml = "</ul>";

outputTarget.innerHTML = outputHTML;
```
6. **EXERCISE 6**: Let's extend the idea of `if` and `else` in `while` loops with a pretty common exercise called FizzBuzz. For this exercise, log and output "Fizz" if a number is divisible by 3, "Buzz" if a number by 5, and "FizzBuzz" if a number is divisible by both 3 and 5. If a number is not divisible by 3 or 5, then just output the number. For this exercise, count up from 1 to 100. HINT:

```javascript
var n = 1;
var outputTarget = document.querySelector("#exercise-6");
var outputHtml = "<ul>";

while (n <= 100) {
    if(n % 3 === 0 && n % 5 == 0){
        console.log("FizzBuzz");
        outputHtml += "<li>FizzBuzz</li>";
    } else if (n % 3 === 0) {
        console.log("Fizz");
        outputHtml += "<li>Fizz</li>";        
    } else if (n % 5 === 0) {
        console.log("Buzz");
        outputHtml += "<li>Buzz</li>";
    } else {
        console.log(n);
        ouputHtml += "<li>" + n + "</li>";
    }

    n++;
}

ouputHtml = "</ul>";

outputTarget.innerHTML = outputHTML;
```

Nice work! Be sure to commit all of your stage and `commit` all of your changes before pushing them to GitHub and `deploy`-ing to your live site.

### Exercise 1
#### the Math Object

We've been using Objects pretty frequently already. Every time you've typed `document.querySelector()` or `console.log()`, you've been accessing functions that are attached to the `document` and `console` objects, respecively. These are built into the browser, and we can use any of the pre-built properties on these Objects using dot notation.

There are lots of additional Objects that come packaged within JavaScript, too. One of them is called `Math`. Try out the following in a console:

```javascript
    Math
    Math.PI
    Math.E
    Math.pow(9, 2)
    Math.random()
    Math.floor(7.2)
    Math.ceil(7.2)
    Math.ceil( Math.random() * 10 )
    Math.ceil( Math.random() * 10 )
```

### Portfolio Project 2 (Bonus)
#### Rock, Paper, Scissors

Use `prompt()` to create a Rock, Paper, Scissors game for visitors to your portfolio. Make a new page, linked to your media page, with a `rps.js` file linked in (just like you did with the Choose Your Own Adventure game).

1. Ask for input until the user enters either "R", "P", or "S". HINT:

```javascript
var userChoice = prompt("Choose Rock, Paper, or Scissors by typing 'R', 'P', or 'S'");
```
2. Use `Math.random()` to choose a play for the computer after you've gathered input. HINT:

```javascript
var rng = Math.random();
var computerChoice = "R";

if(rng > 0.66) {
    computerChoice = "P";
} else if (rng > 0.33) {
    computerChoice = "S";
}
```
3. Tell the user what the outcome of the hand was with an `alert()`. HINT:
