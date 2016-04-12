## jQuery
### Making the DOM Great Again

jQuery is a library (a bunch of pre-written code), written in JavaScript, designed to make it easier to manipulate a web page and do various web-related work. [Open it up](https://code.jquery.com/jquery-2.1.1.js) and skim over it. How many lines of code is it?

---

### The `$` Character

We've already been working with a lot of Objects. `Math`, `window`, `console`, `document`, and so on. To work with the jQuery library, we work through the jQuery Object. In the same way that `window` stores an object with a bunch of properties and methods related to the web page, jQuery uses the `$` variable to store an object that contains the library's functionality. To see if jQuery is included on the page, type `$` into the JavaScript console. You should see the following in reply:

>`function jQuery(selector, context)`

`$()` is a function designed to take in a string- a css selector- such as `$('#primary')` as input, and return all matching elements, wrapped with jQuery super powers... _i.e._, the jQuery Object. To access jQuery's properties and methods, we'll use the same dot notation we've used up to this point. e.g.:

```javascript
$("p").text("Here's some text!"); //equivalent to .textContent
$("body").html("<div id='content'><h1>Here's a new title!</h1></div>"); //equivalent to .innerHTML
```

### Exercise 1
#### Messing with the DOM
