## Intro to JavaScript
### Primitive Data Types

So, we've been at this for a week now, and we've certainly done some cool stuff. But we haven't really done much *programming* yet: we've worked with text content, we've worked with styles, and we've worked with commands through the terminal, but we haven't yet created our own directives for a computer or browser to execute. That changes today!

There are quite a few programming languages in use today, in a variety of contexts. From low-level hardware languages, to languages at the OS level, to server-side frameworks, to client-side scripting languages for the Web. It's this last one that we'll be focusing on for the remainder of the course: JavaScript!

### Exercise 1
#### Programming in the Browser

JavaScript was originally built to add dynamic content to websites (like adding the date or the number of visitors to a site's landing page). Since those inauspicious beginnings, JavaScript has now grown into a full-stack language for use in servers, browsers, and even native applications. We can still see those browser-based beginnings by running JavaScript directly in Chrome, through the Developer Tools console.

![The Dev Console](http://reactorprep.herokuapp.com/assets/images/console.png)

The Dev Console is a JavaScript REPL ("Read Evaluate Print Loop") that is just waiting for us to interact with it. Let's give it a try!

1. Remember the DOM? Let's see if we have access to it by typing `window.document` into the REPL. What's the output?
2. We also have access to data outside of the DOM (in the BOM or "Browser Object Model"). This information is held in the `window` object. Try out a few of these:
  ```javascript
  window.location
  window.history
  ```
3. While that's pretty neat, we're still just looking around. Let's try interacting with the REPL! Try out the following:
  ```javascript
  2 + 2
  2 * 5
  1e4 * 2
  ```
    Now we're programming! The browser is responding to our demands when we give it an input with a **data type** of *Number*. The Number data type includes integers, floating-point numbers (i.e. decimals), and exponent notation (e.g. 1e4).
4. Mathematic operations are called using **operators** that we are all familiar with. These operators do different things for different data types, though. Try this:
  ```javascript
  '2' + '2'
  ```
    What's the answer? It's definitely NOT 4 like you or I might expect. And that's because 2 is not the same thing as '2'. 2 is a number, while '2' is a string of text, or the *character* 2. And for text (with a data type of *String*), the + operator is actually for *concatenation*. It turns multiple Strings into one output string. Try the following:
  ```javascript
  'JavaScript is ' + 'FUN' + '!!'
  '1, 2, 3, and 4 are ' + 'numbers' + ' (sort of)'
  ```
    Note that all strings have to have quotes (either single or double) around them. Words written without quotes are something else entirely...
5. In the 'real world', programming implies that you can create a program to be used later, rather than simply typing in commands. To do that, we need a way to save these bits of data to memory. JavaScript lets us save values to **variables** using the `var` keyword. Try the following:
  ```javascript
  var currentYear = 2016;
  var myCountry = 'USA';
  var myPhrase = currentYear + ' is an election year in the ' + myCountry;
  console.log(myPhrase);
  ```
    A couple of things to notice about these commands:
    + var and the name of the variable are separated by a space, and the variable name can't include spaces
    + variable values can be any data type (that we've covered so far)
    + variable values are assigned using the *assignment operator* (which looks like an equals sign to you and I).
    + the assignment 'phrase' ends with a semicolon. We end JavaScript 'sentences' with semicolons... always!
    + the REPL outputs *undefined* after we define the variable. That's expected, since we're only saving that variable to memory.
    + We can access the value stored to the variable name by typing in that variable's name to the REPL.
    + To actually log the value to the Dev Console (much more useful in real-world applications), we can use the built in function `console.log([variable name])`
    + When we use the variable, we DON'T use quotation marks. Quotes mean Strings, and variables are variables, not strings of text.
6. So now we have some saved data. Wouldn't it be nice if we could test that data? We can, in fact, using the *Boolean* data type. Booleans only have two values: `true` or `false`. They can be stored as a variable of their own, or can be returned as a result of a test. Try the following:
  ```javascript
  var isTrue = true; //notice: no quotes around true!
  var isFalse = false;
  2 === 2
  2 === '2'
  2 > 3
  2 < 3
  2 !== 3
  2 <== 2
  2 >== 2
  'hello' === 'hello'
  'hello' === 'Hello'
  console.log(isTrue === isFalse);
  ```
