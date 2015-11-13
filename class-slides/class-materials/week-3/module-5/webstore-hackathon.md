# Web Store Hackathon

Get excited, people! Today is the day we finally *MONETIZE*! We will build either an e-commerce store for our community site or a new hot startup to compete with Amazon.com

Please use the GitHub workflow to initialize a repository and save your progress after each step:
```
$ git add .
$ git commit -m "add music pages"
$ git push origin master
```

Share the site hosted live on firebase as well as a link to your GitHub repository.

1. To start, create an HTML document. Include jQuery and Bootstrap (or another css framework) if you'd like.
2. Set up your HTML document such that there is a header, a nav bar, a content area, and a footer.
3. Inside the content area create `<div id="book1">` and `<div id="book2">` and place information about a book (or any other item) for sale in each div. Each product should have the following properties:
    ```
    name
    category
    price
    picture
    a list of selling points
    ```
4. Give the outermost div an id of the book's name and a class based on its category as well as a general class of product. i.e `<div id='twilight' class='book product'>` Give the inner HTML elements the appropriate class to match the information they hold (i.e `<div class="name">`, `<div class="category">`, `<div class="price">`, etc)
5. Add some css styles to make each section of the page stand out. Try to use as many different css selectors and css properties as you can.
6. Now create a second identical page with two music albums (or any other category of item) for sale. Link the two pages together in the nav bar, so that the user can click back and forth between books and music.
7. Now add some content to the header and footer. Notice that we had to do this same work in two different places. As the complexity of an application grows, having to keep information in sync like this isn't just tedious, it leads to big problems if we update information in one place but forget to update the other. The rule is Don't Repeat Yourself!
8. Now, let's refactor this site to be a Single Page Application (i.e. We load all of the HTML, CSS, and JS once, and then dynamically change the page state using JS).

9. First, copy the HTML that shows the two albums into the content area on the books page so that we have books and music together.
10. Now take all the information about our books and music and make them into JavaScript objects. Create variables `book1`, `book2`, `album1`, and `album2`. Set each equal to an object with keys `name`, `category`, and `picture_url`, which hold string values, `price`, which holds a number value, and `selling_points`, which is an array of strings.
11. You may also want to give your objects unique id properties such as `book_1` to more easily generate id attributes for their `divs` on the page.
12. Leaving the HTML tags intact, remove the text content (and image src) about each product from the HTML. Now use jQuery to add the information about each product back onto the page immediately upon page load. So:
```javascript
$('#book1 .name').text(book1.name)
```
13. Refactor your code so that you can call a function `add_to_page(book1)`, passing in an object, and that object will be placed using jQuery into the html page. Now you should just call `add_to_page` for each product and the `add_to_page` function will place it on the page for you.
Refactor your code such that the content div is completely empty on page load, and `addToPage` constructs and appends new HTML elements into it. So:
```javascript
$('#content').append($('<div id=book1>').html( $('<div class=name>').text(book1.name)))
```
14. Make sure each book or album's div has the appropriate class and id attributes generated for it. You should not have to change any css while refactoring.
15. Now add click events to the nav bar such that when the user clicks books the books for sale are placed on the page in the `<div id=content>`, but the albums are removed and vice versa. Will you use `$('#content').empty()` before adding new content or just have two separate divs and `.show()` one and `.hide()` the other. Try both ways!
16. Also have a "show all" button in the nav that shows all products for sale.
17. Now refactor your code so that your products are no longer stored as separate variables `book1`, `book2`, etc, but rather as an array of book objects and array of album objects that you iterate over with a `for`loop. Make sure your nav bar switching still works.
18. At this point you should be able to add more books and albums to your arrays and not have to change a single line of code to have your page still work. Check to see if this is the case. If not, make it so.
19. Now refactor your code such that you have only a single object called `products` with keys `books` and `albums` whose values are arrays of `book` and `album` objects, respectively. Make sure your nav bar switching still works.
20. Refactor the nav bar to use a dropdown menu instead of links. Use the `.change()` event listener and observe the selected value to know what products to display.
21. Refactor your code such that you construct the dropdown menu from a `for-in` loop through the properties of `product`. See if you can remove all hardcoded references to the words "books" and "albums" from your code. You will know you are successful if you can add a third category like electronics to the `products` object and not have to change a single line of code to have your page still work.
22. Add a search box. Show only products whose names or features include that word.

Hint:
```javascript
!!book_name.match(user_input)
```
