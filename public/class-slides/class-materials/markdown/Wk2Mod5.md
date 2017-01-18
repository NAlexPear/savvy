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
#### `text` and `html`

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
```
8. Replace the text content of `#change-me` with "I feel like a new sentence". HINT:
```javascript
$("#change-me").text("I feel like a new sentence");
```
9. Put the new contents of `#change-me` into some paragraph tags. HINT:
```javascript
$("#change-me").html("<p>I feel like a new sentence</p>");
```

---

### Exercise 2
#### `append`, `prepend`, `hide`, and `show`

Sometimes, we don't want to overwrite all of the text or HTML contents of an element. Instead, we just want to tack some text or HTML to the end or beginning of that element. That's where `.append()` and `.prepend()` come in!

If we start out with the following HTML:

```html
<p>I'm a sentence</p>
```

...we can add content to the front and tail of the sentence like so:

```javascript
$("p").append("!"); //<p>I'm a sentence!</p>
$("p").prepend("Behold, "); //<p>Behold, I'm a sentence!</p>

//or chained together:
$("p").prepend("Behold, ").append("!");
```

This is usually much easier to read and use than String concatenation.

It's also very common to want to show and hide elements on the page. We already tried this with `.css("display", "none")`, and this works just fine. But we use this so often that jQuery has given us a shorthand in `.show()` and `.hide()`.

```javascript
// long form
$("div.toggle-stuff").css("display", "none"); // invisible
$("div.toggle-stuff").css("display", "block"); // visible

// shortcut
$("div.toggle-stuff").hide(); // invisible
$("div.toggle-stuff").show(); // visible
```

Now, using the same sandbox page we used for Exercise 1, try the following:

1. Show and hide the `#secret` element with `.show()` and `.hide()` from the console!
2. `append` a calling card with your name to the end of the page. HINT:

```javascript
var callingCard = "<div><b>Alex was here</b></div>";
$("body").append(callingCard);
```

3. `prepend` a greeting to the beginning of the page's `body`. HINT:

```javascript
var greeting = "<h1>Welcome to the jQuery SandBox</h1>";
$("body").prepend(greeting);
```

---

### Exercise 3
#### Basic Animation

While jQuery simplifies basic DOM operations, it adds also adds some unique animations of its own! Try the following in the same Sandbox we used for Exercises 1 and 2:

```javascript
$('ol li').fadeIn() // fade in a set of matched elements over time
$('p .comments').fadeOut() // fade out as set of matched elements over time
$('div#thing').slideDown() // animate an element sliding down over time
$('#message').slideUp() // animate an element sliding up over time
$('.alert').slideToggle() // toggle between an element sliding up or down over time depending on whether it's visible or not
$('#change-me').animate("font-size", "200%") // animate a CSS property of your choosing!
```

---

### Exercise 4
#### Complex option parameters

We've already seen how to pass in _arguments_ to two functions: `.css()` and `.animate()`. Like most methods in jQuery, these two operations can take a variety of inputs (check the documentation for [`css`](https://api.jquery.com/css/) and [`animate`](https://api.jquery.com/animate/) for a better understanding of all possible inputs.) Both of these methods will behave differently based on if they are passed no arguments, a property name only, a property and a value as strings, or with an Object of properties and values.

You'll recall from earlier in the week that Objects are sets of key/value pairs that can be defined explicitly using curly brackets. e.g.:

```javascript
var myObject = { propertyTheFirst: "This is a value", propertyTheSecond: "This is a different value" };
```

So far we've been using methods on pre-built Objects (like the Object returned by `$()`) through dot notation. But we can also create Objects of our own to be passed into functions (inlucding `.css()` and `.animate()`). In this case, we'll use an Object to pass in a series of properties and values to change!

Try the following in the Sandbox:

1. Change three CSS properties on `#change-me` when the page loads. HINT:
```javascript
// inlined
$("#change-me").css({
    "width": "80%",
    "margin-left": "auto",
    "margin-right": "auto"
});

// separated
var options = {
    "width": "80%",
    "margin-left": "auto",
    "margin-right": "auto"
};

$("#change-me").css( options );
```
2. Now _animate_ three CSS properties on `#change-me` when the page loads. Not every CSS property is animate-able... try to figure out which can be animated, and which can't! HINT:
```javascript
// inlined
$("#change-me").animate({
    "font-size": "300%",
    "margin-left": "200px",
    "padding": "50px"
});

// separated
var options = {
    "font-size": "300%",
    "margin-left": "200px",
    "padding": "50px"
};

$("#change-me").animate( options );
```
---

### Portfolio Project 1
#### SandBox from Scratch (bonus)

> If you want to make an apple pie from scratch, you must first create the Universe.

For today's final exercise, we're going to bring all of our jQuery work together to create an entirely new set of HTML for display. Starting with the standard `index.html` boilerplate, build each part of today's sandbox on page load in the `body` of a page. We'll link this project to our Portfolio page just like `choose-your-own-adventure`. You can use `.html()` and `.text()` to add text content, and add some style with `.css()`... or even `.animate()`!

Once you like your _new_ Sandbox, `stage`, `commit`, `push`, and `deploy` your project.
