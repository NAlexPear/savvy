## Arrays

We've seen Arrays before (back during our data types day). And we've been using them undercover since then. _Strings_, in fact, are secretly collections of letters stored at sequential memory addresses (a.k.a. arrays). Let's take a look.

### Strings

We can access each letter in a string using square brackets and a zero-indexed number. Try typing out each of the following for yourself, using your own values and variable names:

```javascript
var word = "Hello"

word[0]
word[1]
word[4]
word[5]

var index = 3
word[index]

// strings have a length property
var len = word.length
word[len]
word[len - 1]
```

This works for larger strings too:

```javascript
var greeting = "Hello and welcome to my webpage!"

greeting[0]
greeting[1]
greeting[28]
greeting[29]

var index = 2
greeting[index]

var len = greeting.length
greeting[len]
greeting[len - 1]
```

Sometimes we want collections of items more complex than single letters. Here's a collection of numbers in an Array:

```javascript
var numbers = [99, -5, 82, 65, 39 120, 431, 98, 17, 42]

an array
var nums = [5, 10, 20, 50, 100, 250]

nums[0]
nums[1]
nums[5]
nums[6]

var index = 4
nums[index]

var len = nums.length
nums[len]
nums[len - 1]
```

An array of strings:

```javascript
var words = ["Hello", "and", "welcome", "to", "my", "webpage!"]

words[0]
words[1]
words[5]
words[6]

var the_number_three = 3
words[the_number_three]

var len = words.length
words[len]
words[len - 1]
```

In fact, arrays can hold all kinds of stuff:

```javascript
var all_kinds_of_stuff = ["Hello", 3, undefined, true, ["woah", "dude"], null]

all_kinds_of_stuff[0]
all_kinds_of_stuff[1]
all_kinds_of_stuff[5]
all_kinds_of_stuff[6]

var another_array = all_kinds_of_stuff[4]

// ?
another_array[0]

// ?
all_kinds_of_stuff[4][1]
```

Okay, now we've seen some arrays, let's create a few of our own.

```javascript
// creating a new instance of an array is called instantiation
var arr = []

// we can use bracket access in conjunction w/ the assignment operator
// to store a new value at that index
arr[0] = "0 is the new 1"
arr[1] = 45
arr[2] = null
arr[3] = true

arr[1] = "overwrite 45, just forget about that one, okay?"
```

---

### Exercise 1: Contact Info Array

Let's organize the contact information from your Portfolio project into a quick array! We'll do all of these things in the console.

1. Instantiate a new array and save it to a variable `contactArray`.
2. Use bracket notation to add pieces of contact information by bullet point.
3. Access the first step of your `contactArray` using bracket notation.
4. Create variable called `lastOne` and assign to it a number which represents the index of the last item of your array.
5. Access the last step of your recipe using the last_step variable

---

Arrays have associated with them some properties, like `.length`, and methods, like `.push()`, to help us use our collections more effectively.

```javascript
var arr = ['stuff', 'more stuff', 'even more stuff']

arr.length

arr.push("More on the end!!!")
var lastItem = words.pop()

arr.unshift("More at the beginning!!")
var firstItem = words.shift()
```
---

### Exercise 2
### More contact info!

Let's keep editing that contact information array!

1. `.push()` two more bits of information about you to the array.
2. `.unshift()` an inspirational quote onto the beginning.
3. `.pop()` off the last bit of contact info and save it to the variable `extraContact`
4. `.shift()` off your quote and save it to `dailyInspo`

---

Often we want to consider every element in the array in turn.

```javascript
var i = 0

while (i < words.length) {
  console.log(words[i])
  i++
}
```

### Portfolio Project 1
#### Making Contact

Now let's take our `contactArray` out of the console and into our Portfolio Project!

1. Copy the contents of your `contactArray` list into an array in the javascript file attached to your main index.html page.
2. Get rid of the individual list elements (and their content!) in the HTML document. You should now only have an empty `<ul>`. Give that `ul` an `id` of `contact-list`.
3. Use a while loop and jQuery to append each item in your `contactArray` to the `contact-list`. Remember that they need to be list elements!
4. Refactor your code such that the while loop lives inside a function called `appendStrings` that takes an array as an input (argument).
5. Refactor append_strings such that it takes two arguments: an array of strings, and a string representing the type of element you would like to append (e.g. `li`, `p`, or something else).

---

We do this type of iteration so often, that JavaScript provides us a special kind of loop- the for loop.

```javascript
for (var i = 0; i < words.length; i++) {
  console.log(words[i])
}
```

---

### Portfolio Project 2:

1. Refactor your contact list to use a `for` loop instead of a `while` loop!

---

### `.forEach()`

Often it's cleaner to use Array's native .forEach() method to run a given function once for each item in the array, passing that item in as an argument

```javascript
var log_me = function(word){
  console.log(word)
}

words.forEach(log_me)
```

### Portfolio Project 3

1. Refactor your `appendStrings` function to use `.forEach()` instead of a while loop.

---

### More fun Array methods!

`.concat()` is short for _concatenate_. It smooshes two arrays together.

```javascript
var friends = ['ada', 'will', 'bianca', 'abe']
var enemies = ['john', 'alice']

var frenemies = friends.concat(enemies)

console.log(frenemies)
console.log(friends, enemies) // does not change original arrays!

```

### Exercise:

Write a function array_combiner that takes two arrays as inputs and returns the two of them smooshed together as an output

```javascript
var array_combiner = function(array1, array2) {}

var combined_array = array_combiner([1, 2, 3], [4, 5, 6])
console.log(combined_array)
```

`.splice()` is another confusing one. It destructively removes a number of elements from an array starting at a particular index.

```javascript
var frenemies = ['ada', 'will', 'bianca', 'abe', 'john', 'alice']
var starting_at_index = 3
var number_to_remove = 2

var removed_elements = frenemies.splice(starting_at_index, number_to_remove);

console.log("We took out ", removed_elements)
console.log("The remaining array ", frenemies)
```

### More Exercises:

1. Write a function that takes an array of values and returns an boolean representing if the word "hello" exists in the array. HINT: test each element with a loop!
2. Write a function that takes an array of values and a target value and returns how many times that target value exists in the array.
3. Write a function that takes an array and returns a new array containing only the values at odd indexes in that array.
4. Write a function called sum_array that takes an array of numbers and returns the sum of all of those numbers added together.
