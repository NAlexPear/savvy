## Intro to JavaScript pt. 2
### complex data types and DOM interactions

After yesterday, we've mastered the art of the irritating pop-up. But how do we add more complex functionality to our `.js` projects? And how do we make that added complexity appear in the visible fold? 

### Exercise 1
#### Complex Data Types

Primitive data types like we covered yesterday are meant to represent a single piece of discrete data. It can be a large piece (think of War and Peace as a single String), but it's still just one item. 

Complex or Composite data types represent **Collections** of data. The Complex data types of JavaScript are Array and Object. We'll dig much deeper into both of these data types later, but for now, let's learn how to construct them using *Literal Notation*. 

**Arrays** are ordered lists of data. The data can be of any type, including String, Number, Boolean, or even variables and functions. We can create a variable of type Array like so:

```javascript
//try this out in your console!
var myArray = ['String', 23, 'Another String', true, false];
console.log(myArray);
```

Now try same thing with a mixture of variables and literals:

```javascript
var myString = 'String';
var myNum = 23;
var myBoo = true;

var myArray = [myString, myNum, 'Another String', myBoo, false];
console.log(myArray);
```
The output should be exactly the same for both of those examples!

Just like we can invoke a function using parens (e.g. `prompt()`), we can access data in an array using *bracket notation*. Try it out on `myArray`:

```javascript
console.log(myArray[0] + ' and ' + myArray[2]);
```
Arrays are also *zero-index*, which means that the first piece of data in the collection has a position of 0 (instead of 1). We'll see a lot more of this later. For now, it's enough to just recognize an array when you see one!

**Objects** are collections of data just like Arrays, but we can access data by *name* instead of *sequence*. Let's try to re-write part of `myArray` as an Object:

```javascript
var myObject = { myString: 'String', myNum: 23, myBoo: true };
console.log(myObject.myString);
```

Objects are the foundation of an entire programming paradigm known as **Object Oriented Programming**, which we'll definitely be revisiting. For right now, it's enough to understand that we can store data in Objects and access them by name using *dot notation*. 

Hopefully you recognize that we've already been working with built-in Objects, including `window` and `console`. Typing `window.location` was accessing the `location` property of the `window` Object provided by the browser. `console.log()` invokes the `log` function contained in a `console` Object provided by the browser. `window` and `console` are part of the BOM, or Browser Object Model (notice the 'Object' part of that). It's the collection of all of the data and built-in functions provided by the browser, that we can access at any time. 

### Exercise 2
#### JavaScript, the DOM, and YOU

While using BOM data is extremely useful, most of what users really care about happens inside the DOM: the *Document Object Model*. We can access the DOM by using the provided `document` Object. 

![the DOM](http://reactorprep.herokuapp.com/assets/images/dom2.png)

Let's try exploring your Portfolio project through the `document` Object!

1. Navigate to the latest deployed version of your Portfolio Project in a browser, go to your blog page, then open up the developer console. 
2. Try the following commands from the browser's REPL:

    ```javascript
    document.body;
    document.querySelector('p');
    document.querySelectorAll('p');
    document.querySelector('#nav');
    document.querySelector('.container');
    document.querySelector('#nav li').textContent;
    document.querySelector('h1').textContent = "I'm on the page!";
    ```
3. `querySelector()` and `querySelectorAll()` are both functions accessible through the `document` Object. Every modern browser will expose these functions for you to use! You'll also notice that they each return a different type of complex data type:
    + `querySelector()` returns a single DOM node, which is an Object that contains all of the same useful functions that we saw in the `document` Object (including `querySelector()`!)
    + `querySelectorAll()` returns an array of DOM nodes (where `querySelector()` only returns the first node that matches the selector. 





















