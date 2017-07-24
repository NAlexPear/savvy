## Async and APIs
### Working with Time

You've come a long way from you very first bits of code! As you've progressed, you've learned to think and develop with increasing levels of abstraction, all while responding to more and more interaction from your users. Let's take a look back through your journey so far:

1. First, we had plain-text content.
2. Next, we added additional attributes and information to that content through HTML and CSS.
3. Then we created our first transient statements of action vs content (e.g. `2 + 2`).
4. Then we started adding these action statements to our static content (e.g. `var greeting = function(){ alert( "hello!" ) };`).
5. Then we started dealing with the idea of responding to user state using an _imperative_ style of programming (e.g. `if` and `else` statements), but our program would only be run once per page load. These weren't applications as much as "scripts".
6. Then we started adding loops and recursion to make our scripts mimic an application (like the Choose Your Own Adventure game).
7. Then we finally built our first truly interactive application once we got to _event-driven_ programming. Now we can respond to custom inputs from users, whenever those inputs happen!

One of the hallmarks of an interactive application is that we, as developers, have a much more fluid interaction with time than we do in steps 1 through 6. Events can happen at any time, in any order, and it's up to us to "listen" to and "handle" any event whenever they end up happening. Up to this point, though, we've been operating under the assumption that the only "delays" that might occur came from users, rather than code. But what happens when we aren't sure how long it'll take for our code to execute? Think about the following:

```javascript
var randomFinish = function( label ){
    var randomTime = Math.random() * 1000;

    setTimeout(
        () => console.log( label + "is done!" ),
        randomTime
    );
};

randomFinish( "function 1" );
randomFinish( "function 2" );
randomFinish( "function 3" );
```

There's no guarantee that the `function`s would finish in order! How could we handle a situation where we always wanted `function 1` to fire before `function 2` before `function 3`, even when we don't know how long it will take for each function to finish?

---

### Exercise 1
#### The Recursive Solution

We could use recursion to make sure that `randomFinish` always called the next iteration in order, like so:

```javascript
var handleFinish = function( count ){
    var label = "function " + count;

    console.log( label + " is done!" );

    if( count < 3 ){
        randomFinish( count + 1 );
    }
};

var randomFinish = function( count ){
    var randomTime = Math.random() * 1000;

    setTimeout(
        () => handleFinish( count ),
        randomTime
    );
};

randomFinish( 1 );
```

While the above _works_, it's not a great solution for a couple of reasons. First, the handling of our function happens within the function itself, which is probably no good. What happens when the spec for these functions changes? What if other functions _also_ depend on `randomFinish`... will those functions be added to `handleFinish` as well?

Hopefully you can see why this would be bad long-term design, even if our solution technically works.

---

### Exercise 2
#### Custom Events

A better solution would be to think of asynchronous JavaScript as fundamentally event-driven, just like user interaction. To make this work, we can use _custom_ events, rather than the built-in events that we know and love (like `click`, `mouseenter`, `mouseleave`, etc.). We'll use jQuery's `trigger` and `on` methods to re-write this exercise:

```javascript
var handleFinish = function( event, count ){ // count is the second parameter after the default event Object
    var label = "function " + count;

    console.log( label + " is done!" );

    if( count < 3 ){
        randomFinish( count + 1 );
    }
};

var randomFinish = function( count ){
    var randomTime = Math.random() * 1000;

    setTimeout(
        $( document ).trigger( "random:done", [ count ] ), // custom event!
        randomTime
    );
}

$( document ).on( "random:done", handleFinish );

randomFinish( 1 );
```

While this doesn't look too different from what we've done before, it provides a bit more flexibility by separating our concerns... in this case, making sure that each function only has to do one thing. With event-driven architecture like this, `randomFinish` can emit `random:done` to its heart's content, and as many functions as would like to listen in are free to do so and respond as they see fit without needing to be jammed into the same handler. Pretty neat!

There are many situations where this type of design is the right choice, especially when there are many listeners waiting to handle a single asynchronous event. But there are a few costs associated with the custom event solution:

1. With complex event systems, it can be pretty difficult to think about which handlers listen to which event at what time and whatnot. Things can get disorganized quickly!
2. There's a performance cost to adding an event listener. You'll notice that we had to attach that listener to the DOM through `$(document).on`. This is a cheap operation, but it isn't free!

So, for simple asynchronous operations, there might be a better solution.

---
### Exercise 3
#### Promises

In some async cases, it may be better to use a special kind of Object called a `Promise`. Promises are like IOUs: you can create an IOU, specify how you'd like to handle whatever comes back from the IOU, and then the IOU can resolve in some way later on (either, "here's what you're owed" or "sorry, you get nothing"... just like a real IOU).

Promises are created with the `new` keyword, and is given a callback function that is passed two parameters: a `resolve` function and a `reject` function, which handle the two possible outcomes of a `Promise`. These two options can then be handled using the `.then` or `.catch` methods of the newly-constructed Promise.

That's a lot to take in, so let's see what our example above might look like with Promises:

```javascript
var handleFinish = function( count, resolve ){
    var label = "function " + count;

    console.log( label + " is done!" );

    resolve( count + 1 ); // this will resolve the Promise that was constructed in randomFinish, to be handled with .then()
};

var randomFinish = function( count ){
    var randomTime = Math.random() * 1000;

    return new Promise( // the Promise constructor takes one argument: the function below
        ( resolve ) => { // resolve is a function, too! reject is unused in this example
            setTimeout(
                () => handleFinish( count, resolve ),
                randomTime
            );
        }
    );
};

randomFinish( 1 )
    .then( randomFinish )
    .then( randomFinish );
```

Wow! Check out that final syntax... by returning `Promises`, each iteration of `randomFinish` can be chained together using the `.then` method. Not only is that clear and easy to read, but the important functions are all grouped together to make the whole application's flow easier to understand.

---

## AJAX

So this is neat, but when do we use this "in the real world"? If you have to use `setTimeout` for anything other than class lectures, odds are that something else has gone somewhat awry in your program.

The `Promise` structure and syntax are used primarily for those functions that are meant to fetch data asynchronously. Namely, Asynchronous JavaScript And XML, or AJAX! This is how most JS applications interact with data, pulling information from APIs that can be handled by JavaScript.

---

### Exercise 4
#### JSON APIs

First, let's take a look at an example API that's set up for us to make AJAX requests.

1. Navigate to [https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/) and take a look at the documentation on that page.
2. Now to go [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts). What comes back?
3. Instead of returning HTML, this URL returns plain text formatted according to JavaScript standards. This kind of URL is called a "route" or an "endpoint", and it's returning data in JSON ("JavaScript Object Notation") format. What are the data types you see here?
4. Notice the URL `/posts`. What happens when you go to [https://jsonplaceholder.typicode.com/posts/1](https://jsonplaceholder.typicode.com/posts/1)? Why do you think these routes are set up like this?

---

### Exercise 5
#### `$.ajax()`

If we're going to use data from an API like this one, we have to accept that there are going to be some delays and uncertainties regarding the acquisition of this data. There will be time spent sending the request, time spent retrieving the information, time spent parsing the information, and the possibility of failure throughout the entire operation.

We _could_ use native JavaScript' `XMLHttpResponse` method to retrieve this data, but that method is sometimes tricky to handle properly... most of the time, the response is handled imperatively, even if the data comes back asynchronously. Wouldn't it be nice if we could use `Promise`s instead?

Luckily, jQuery has our back. In addition to the DOM operations that we know and love, the jQuery Object `$` also has a helper method called `$.ajax()` used to make asychronous calls to APIs, parse the returned JSON, and express the resolution or rejection of those AJAX calls as `Promise`. Try the following:

1. JSON placeholder has conveniently exposed the jQuery library for our use on their page. So navigate to the JSON placeholder home page, open up the console, and try the following:

```javascript
var request = $.ajax( "https://jsonplaceholder.typicode.com/posts" );

request.then(
    ( data ) => console.log( data )
);
```
2. You should have noticed a slight delay before the data was output to your console as a fully-parsed JavaScript Object. That's pretty neat! Now see if you can repeat that process from the developer console on your blog page.

---

### Exercise 6
#### Demo Page

1. In your portfolio project, try parsing data that comes back from the `/posts` route of the JSON placholder API and displaying it on your front page.
2. You'll need to be able to iterate over this array of data and append each post to the page in some way, e.g.:

```javascript
var getPosts = $.ajax( "https://jsonplaceholder.typicode.com/posts" );
var handlePost = function( post ){
    var title = "<h3>" + post.title + "</h3>";
    var content = "<p>" + post.body + "</p>";
    var blurb = "<div class='post'>" + title + content + "</div>";

    $( ".content" ).append( blurb );
}

getPosts.then(
    ( posts ) => posts.forEach( handlePost )
);

```
3. Style your new blog roll in the time remaining!
