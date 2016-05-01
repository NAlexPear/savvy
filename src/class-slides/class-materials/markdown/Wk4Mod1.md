## Building a Bookstore Part 2
### Halfway-er Hack-A-Thon!

Remember last week's bookstore Hack-A-Thon? This week, we're going to give it another go using more of our complex data types, loops, and events! Good Luck:

1. Start where you left off with Part One of our bookstore project. You should have a few books set up with jQuery, a way of submitting new books through a basic form, and some basic book objects (which should make a lot more sense after last week's lessons on Objects). Remember, book objects should take the form:

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

2. Make sure that you have an `addToPage` function that is called on page load for each book object and `append`s content to the page. Something like:

  ```javascript
  var addToPage = function( obj ){
    var contentId = 'book' + obj.id;
    var $contentNode = $('#' + contentId); // the "$" here is just a naming convention

    $('#content').append($("<div id='" + contentId + "'></div>");
    $contentNode.append($("<div class='name'>").text(obj.name));
    $contentNode.append($("<div class='author'>").text(obj.author));
    $contentNode.append($("<div class='price'>").text(obj.price));
    $contentNode.append($("<div class='cover'>").html("<img src='" + obj.picture_url + "'>"))
  };

  addToPage( book1 );
  addToPage( book2 );
  ```
3. Up until last week, we didn't really know how to deal with an array of selling points. But now we know that we can loop over that array with `.forEach()`. Try using a loop within `addToPage()` to add `selling_points` to your page as an ordered list. HINT:

  ```javascript
  var addToPage = function( obj ){
    var contentId = 'book' + obj.id;
    var $contentNode = $('#' + contentId); // the "$" here is just a naming convention

    var sellingPointsListItems = ''; // placeholder for all selling point list items
    obj.selling_points.forEach( function(sellingPoint){
      sellingPointsListItems += "<li>" + sellingPoint + "</li>";
    } );

    $('#content').append($("<div id='" + contentId + "'></div>");
    $contentNode.append($("<div class='name'>").text(obj.name));
    $contentNode.append($("<div class='author'>").text(obj.author));
    $contentNode.append($("<div class='price'>").text(obj.price));
    $contentNode.append($("<div class='cover'>").html("<img src='" + obj.picture_url + "'>"));

    // new div containing an ordered list appending selling points
    $contentNode.append($("<div class='selling-points'").html("<ol>" + sellingPointsListItems + "</ol>"));
  };
  ```

4. We know from our work last week that it can be pretty inefficient to call `addToPage()` on each object individually. Who knows how many books we'll eventually have... wouldn't it be better if we could loop over them? To do that, let's add our `book` objects to an array called `products`. HINT:

  ```javascript
  var products = [book1, book2];
  ```
5. Now we can loop over our `products` array on page load to call `addToPage()`! Give it a try. HINT:

  ```javascript
  products.forEach( function(product){
    addToPage(product);
  } );
  ```
6. You should already have a form for adding new books to the page. If not, add one now! You can also re-use the code that we worked with last week to get the form to do some work for us:

```javascript
    var count = 2;

    $("form").on("submit", function(event) {
        event.preventDefault(); // prevents default page re-routing on form submit

        var data = $(this).serializeArray(); // jQuery function that parses form data
        var formObject = {}; // an empty product object to be returned later

        formObject.id = ++count; // id incrementer for nth object
        data.forEach( function(field){
            formObject[field.name] = field.value; // loop that rearranges data object
        } );

        addToPage(formObject); // use jQuery to add new object to the page
    });
```
7. Hopefully the code from last week makes a bit more sense now that we have events, arrays, and Objects under our belts. But we still have to hard-code a `count` variable and append an individual product to the page. We don't really want either. How can we refactor this code to work without hard-coding elements? Try the following:

  ```javascript
  $("form").on("submit", function(event) {
      event.preventDefault();

      var data = $(this).serializeArray();
      var formObject = {};

      formObject.id = products.length++; // measures the length of the global products array
      data.forEach( function(field){
          formObject[field.name] = field.value;
      } );

      $('#content').empty(); // jQuery function that refreshes the #content div

      products.push(formObject); // adds the new product to the global products array
      products.forEach( function(product){
        addToPage(product); // re-renders each product in the array
      } );
  });
  ```
8. Take a minute to think about our code above... it's gotten pretty difficult to reason about, and our event handler is doing a lot of tasks. How can we divide up responsibilities for this function and make things a bit more read-able and repeat-able? Here's an example (but your refactor might look different):

  ```javascript
  var parseProductForm = function( form ){
    var data = $(form).serializeArray();
    var formObject = {};

    formObject.id = products.length++; // measures the length of the global products array
    data.forEach( function(field){
        formObject[field.name] = field.value;
    } );

    return formObject;
  };

  var renderNewProduct = function( formObject ){
    $('#content').empty(); // jQuery function that refreshes the #content div

    products.push(formObject); // adds the new product to the global products array
    products.forEach( function(product){
      addToPage(product); // re-renders each product in the products array
    } );
  };

  // Now our submit event is much more readable, and each function only does one thing!

  $("form").on("submit", function(event) {
      event.preventDefault();
      var formObject = parseProductForm(this);
      renderNewProduct(formObject);
  });
  ```

9. This all works great for just books, but what if we wanted to add music to our store? We'll need another refactor! How could we re-organize our `products` data to account for the differences between types of products? Let's try turning `products` into an object with product arrays divided by type. HINT:
  ```javascript
  var products = {
    "books": [book1, book2],
    "music": [album1, album2] // albums should be identical to book objects
  }
  ```
10. Add a few albums to your new `products` object to go along with your books!
11. So `products` is now nicely organized, but now we have some bugs that keeps items from rendering! Let's think about each function and re-write as needed:
    1. `addToPage()` should be mostly fine, except for the `contentId` variable. Not every product is a book any more! In this case, it would be easiest to add a `productType` property to each of our products. Go through your existing products and add a product type, then modify `addToPage()` to include that type in `contentId`. HINT:
      ```javascript
      var addToPage = function( obj ){
        var contentId = obj.productType + obj.id;

        // THE REST OF THE FUNCTION SHOULD BE THE SAME...
      };
      ```
    2. Since we abstracted away the `parseProductForm()` and `renderNewProduct()` fuctions from our `submit` event, we won't need to change anything in our form submission event!
    3. `parseProductForm()` needs to change, though... now that `products` has changed into an Object of multiple arrays, we want the length of the `books` or `music` arrays instead. Let's a assume that form data will include a `type` property, then refactor. HINT:
      ```javascript
      var parseProductForm = function( form ){
        var data = $(form).serializeArray();
        var formObject = {};
        var productArray; // create variable for "books" or "music" array

        data.forEach( function(field){
            formObject[field.name] = field.value;
        } );

        productArray = products[formObject.type]; // grabs specific product array by type
        formObject.id = productArray.length++; // set id to the length of a type of product's array

        return formObject;
      };
      ```
    4. Now we can finish up with `renderFormObject()`. Here we need to change the `push` location and the way that products are rendered. Let's try the following:
      ```javascript
      var renderNewProduct = function( formObject ){
        var productType = formObject.type; // will be either "music" or "books"
        $('#content').empty();

        products[productType].push(formObject); // adds the new product to the proper product Array

        for(var productType in products){ // re-renders each product in the products Object
          productType.forEach( function(product){
            addToPage(product);
          } );
        }
      };
      ```
    5. The last thing to do is make sure that our form includes a radio button with values set to "books" and "music". HINT:
      ```html
      <input type="radio" name="type" value="books"> Book</br>
      <input type="radio" name="type" value="music"> Album</br>
      ```
12. If everything went as planned, you should have a variety of different products rendered on the page! In the time remaining, add some styles to each element, deploy your project live, and add a link to this project from your portfolio page. Good work!
