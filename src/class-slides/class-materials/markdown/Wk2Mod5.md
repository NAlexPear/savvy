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

Besides replacing HTML, jQuery is also good at modifying the styles and `css` associated with DOM elements using the `css()` method:

```javascript
$("#header").css("background-color", "#07c4dd");
$("h1").css("color", "pink");
$("div.container").css("padding", "20px");
```

We'll use all three of these methods in the next exercise.

---

### Exercise 1
#### Messing with the DOM

For this next exercise, we've created a document that will act as a bit of a sandbox for you. You can find the link [here](https://savvycoders.com/class-slides/class-materials/week-2/module-4/jquery/jquery-selecting.html). When you've navigated there in your browser, take a look at the source code.

Everything should look pretty normal until you get to the closing `<script>` tag. You should see

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
```

This is a standard JavaScript file that's been _minified_ (hence the `.min`). To save space, all of the variable names have been shortened and whitespace removed. It works just like any other JavaScript file that you or I might write, though. This library is linked using Google's _CDN_, or Content Delivery Network. This is a common way of bringing common external libraries (like jQuery) into your project.

To make sure that jQuery has been loaded into the page, open up the console and type `$`. If you get an error, something has gone wrong... otherwise, you're all set to start using jQuery!

Try the following in the console:

1. Turn all `h1` text `blue`. HINT:
```javascript
$("h1").css("color", "blue");
```
2. Turn the `body`'s `background-color` to `red`. HINT:
```javascript
$("body").css("background-color", "red");
```
3. Increase the `font-size` of the element with an `id` of `everything`. HINT:
```javascript
$("#everything").css("font-size", "120%");
```
4. Add a `border` to all elements with a `class` of `holder`. HINT:
```javascript
$(".holder").css("border", "2px solid black");
```
5. Change the `font-weight` of all `li` elements to `bold`. HINT:
```javascript
$("li").css("font-weight", "bold");
```
6. Change the `color` of all `p` elements that come directly after the `h1` element to `green`. HINT:
```javascript
$("h1+p").css("color", "green");
```
7. Change the `#secret` to a hidden element with `display: none;`. HINT:
```javascript
$("#secret").css("display", "none");

// bonus solution!
$("#secret").hide();
```
8. Replace the text content of `#change-me` with "I feel like a new sentence". HINT:
```javascript
$("#change-me").textContent("I feel like a new sentence");
```
9. Put the new contents of `#change-me` into some paragraph tags. HINT:
```javascript
$("#change-me").html("<p>I feel like a new sentence</p>");
```

---
