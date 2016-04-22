## Building a Bookstore Part 1
### Halfway Hack-A-Thon!

**Congratulations!** Today we are at the halfway point in our class. Let's celebrate with a hackathon! A hackathon is a great opportunity to work on a larger, real-world(ish) project, while reviewing and solidifying the core concepts that we've covered in the first half of the course.

Today is the day we finally *MONETIZE*! We will build either an e-commerce store for our community site or a new hot startup to compete with Amazon.com. This will be a group project using the same GitHub workflow that we used for the Student Showcase website.

---

## Step 1: Make a Plan

1. Take a few minutes to brainstorm some project ideas related to the design of our bookstore. While we have a pretty solid step-by-step outlined below, there's still room for your team to decide how to divide up tasks and implement individual requirements with a bit of flair.
2. Some examples might include: will you use a CSS framework? What will the color scheme be? Which tasks should be taken by which team member?
3. Review the Step 3: Coding section below to consider the different concepts that we hope to practice during this project.
4. In your group, hold a standup meeting to present your plan of what you'd like to accomplish, and potential stumbling blocks.
5. If someone mentions being concerned about a concept that you feel solid on, offer to be a resource for them if they have questions.

---

## Step 2: Set up a GitHub repo

1. Fork and clone your integration manager/instructor's boilerplate for this project, and make sure that your remotes are set up correctly for the GitHub workflow!
2. If you or your team needs to review, take a look at Wk1Mod5.md.

---

## Step 3: Self-Reflection

The following lists the core web development skills that you should feel comfortable using in your project thus far:

1. Using Markdown to create a README.md file introducing your project.
2. Pushing to GitHub and seeing it rendered on your repository's main page.
3. Creating an HTML document using the following HTML tags:
  + `<html>`, `<head>`, `<title>`, `<body>`
  + header and paragraph tags
  + bold and italic tags
  + `<div>` and `<span>`
  + ordered and unordered lists
  + images and links
  + horizontal rule and line break
4. Using a style attribute on an HTML element, then a `<style>` tag in the head, then a `<link>` tag to a separate `.css` document to include CSS styles in your page. Try to use the following CSS properties at a minimum:
  + `color, background-color, background-image`
  + `font-size, font-family`
  + `height, width, max-width`
  + `margin, padding, border, border-radius`
5. Refactoring your code to use classes and ids.
6. Using some complex CSS selectors, like descendent selectors
7. Using an `iframe` to embed videos or maps on your page
8. Using `float` and and `position:fixed` to position some elements
9. Creating an HTML form incorporating various inputs (`text, password, email, textarea, radio, checkbox, select menu, submit`, etc)
10. Making your form live using Formspree
11. Using the Bootstrap grid system to lay out your page
12. Using some pre-written Bootstrap CSS classes on various elements of your page
13. Using `alert()`, `prompt()`, and `console.log()` where appropriate
14. Setting and retrieving values from JavaScript variables
15. Using `document.querySelector()` in conjunction with `.textContent` and `.innerHTML` to retrieve and place content on the page
16. Using `if`, `elseif` and `else` to implement branching logic on the basis of comparing variables and values
17. Using logical and (`&&`), logical or (`||`), and the ternary operator
18. Using `while` loops to do work multiple times until a condition is met
19. Using the `Math` object and `parseInt()`.
20. Using jQuery to select existing HTML elements on the page
21. Use jQuery's `.css()`, `.attr()`, `.text()`, `.html()`, `.append()`, and `.val()` to both get and set values
22. Use some jQuery effects like `.show()`, `.slideDown()` and `.fadeOut()`

---

## Step 4: Coding!

Let's go through the following steps, dividing up tasks as a team, to get this new mega-store launched. Good luck:

1. To start, make sure your boilerplate code has jQuery, `reset.css`, and `minimal.css` included.
2. Make sure that there is a header, a nav bar, a content area, and a footer.
3. Inside the content area create `<div id="book1">` and `<div id="book2">` and place information about a book for sale in each div. Each product should have the following properties:
    ```
    id
    name
    author
    price
    picture
    a list of selling points
    ```
4. Give the outermost div an id of `book` plus that book's `id`, e.g. `<div id='book1'>` (for a book with an `id` of `1`). Give the inner HTML elements the appropriate class to match the information they hold (i.e `<div class="name">`, `<div class="category">`, `<div class="price">`, etc).
5. Create a `<form>` element that will allow a user to input a new book (eventually). Make sure that each field has a `name` attribute that's _exactly the same_ as the corresponding object property (you'll see why in a minute).
5. Add some css styles to make each section of the page stand out. Try to use as many different css selectors and css properties as you can.
6. Now add some content to the header and footer. Notice that we had to do this same work in two different places. As the complexity of an application grows, having to keep information in sync like this isn't just tedious, it leads to big problems if we update information in one place but forget to update the other. The rule is Don't Repeat Yourself!
7. Now, let's refactor this site to be a **Single Page Application** (i.e. We load all of the HTML, CSS, and JS once, and then dynamically change the page state using JS).
9. Now take all the information about our books and make them into JavaScript Objects. Create variables `book1`, `book2`, `album1`, and `album2`. Set each equal to an object with keys `name`, `author`, and `picture_url`, which hold string values, `price` and `id`, which holds a number value, and `selling_points`, which is an array of strings. EXAMPLE:

```javascript
var book1 = {
    "id": 1,
    "name": "Lasagna: A Retrospective",
    "author": "Garfield"
    "picture_url": "http://graphics8.nytimes.com/images/2015/10/15/dining/15RECIPE20DIN/15RECIPE20DIN-articleLarge.jpg",
    "price": 24,
    "selling_points": [
        "Lasagna is delicious.",
        "The essential guide to Italian casseroles of all types.",
        "Real G's move silent, like Lasagna. -Lil Wayne"
    ]
}
```

10. You may also want to give your objects unique id properties such as `book_1` to more easily generate id attributes for their `divs` on the page.
11. Leaving the HTML tags intact, remove your existing text content (and image `src`) about each product from the HTML. Now use jQuery to add the information about each product back onto the page immediately upon page load. So:

```javascript
$('#book1 .name').text(book1.name)
```

12. Refactor your code so that you can call a function `add_to_page(book1)`, passing in an object, and that object will be placed using jQuery into the html page. Now you should just call `add_to_page` for each book and the `add_to_page` function will place it on the page for you.

Refactor your code such that the content div is completely empty on page load, and `addToPage` constructs and appends new HTML elements into it. So:

```javascript
$('#content').append($("<div id='book" + book1.id + "'>").html( $('<div class=name>').text(book1.name)))
```
13. Make sure each book or album's div has the appropriate class and id attributes generated for it. You should not have to change any css while refactoring.
14. Now let's make this form work! There will be some special tricks used to make sure that users can click "Submit" to add a new book to the page. We'll be getting into these `Event`s later in the week! For today, though, try copy->pasting the following:

    ```javascript
        var count = 2;

        $("form").on("submit", function(event) {
            event.preventDefault();

            var data = $(this).serializeArray();
            var formObject = {};

            formObject.id = ++count;
            data.forEach( function(field){
                formObject[field.name] = field.value;
            } );

            append_to_page(formObject);
        });
    ```

    We'll explain how the code above works over the next week!
15. Now you should be able to append our new book object to the page when a user submits the form! But we don't want just _any_ user to be able to add a new book. Let's make sure that only users with the right password can add content. Add a "password" field to the top of the form.
16. Now we can use a quick "admin" check in our form script to make sure that a user knows the (not-so-secret) password. Try it yourself first (there are lots of ways to do this). _HINT_:

```javascript
    var count = 2;

    $("form").on("submit", function(event) {
        event.preventDefault();

        var data = $(this).serializeArray();
        var formObject = {};

        formObject.id = ++count;
        data.forEach( function(field){
            formObject[field.name] = field.value;
        } );

        if(formObject.password === "banana"){
            append_to_page(formObject);
        } else {
            alert( "Sorry, you didn't enter the correct password" );
        }
    });
```
