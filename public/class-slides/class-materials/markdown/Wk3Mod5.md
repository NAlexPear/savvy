## Objects

JavaScript has two built-in _associative array_ data types to help us store and work with collections of values: Arrays, which are collections of values accessible at sequential integer keys...

```javascript
var my_array = ["one", "two", "three"]

my_array[0]
my_array[1]
my_array[2] = "not three"
```

... and Objects, which are collections of values accessible at arbitrary string keys:

```javascript
var person = {
  "name": "Mario",
  "job": "Plumber"
}

person["name"]
person["job"]
```

Like arrays, we can use the bracket syntax to access and set values.

```javascript
person['name'] = 'Luigi'
```

_Unlike_ Arrays, we can also use dot notation to access properties and methods. We do this all the time already (`Array.isArray()`, `console.log()`, etc).

```javascript
person.name = 'Luigi';
```

---

### Exercise 1
#### Arrays to Objects

Remember `contactArray` from last night's class? That worked nicely as an example, but it's not _really_ a great use of Arrays. What if we wanted to change the order in which pieces of information are displayed? Then we'd have to change the way that data is stored, rather than the way data is presented on the front end. And that's generally no good. Plus, that data isn't particularly _sequential_ by nature. Instead, let's move your contact information into an Object!

1. Create a new Object called `contactObject`.
2. Use Object Literal Notation to add the first two pieces of information to our new object. HINT:

```javascript
var contactObject = {
    "name": "Professor Chaos",
    "email": "professor@professorchaos.com"
}
```

3. Use bracket notation to add the next two pieces of information to `contactObject`. HINT:

```javascript
contactObject["twitter"] = "@ProfChaos";
contactObject["quote"] = "Prepare to meet thy doom!"
```

---
4. Just like with arrays, we can use variables as placeholders for keys in bracket notation. Try accessing your quote through a variable instead of directly. HINT:

```javascript
var sayingOfTheDay = "quote";
console.log( contactObject[sayingOfTheDay] );
```

5. Now let's use dot notation to add a method to our object! This method should return the Object's `name` property. HINT:

```javascript
contactObject.getName = function(){
    return contactObject.name //is there a better way to do this?
}

console.log(contactObject.getName());
```

---

### Exercise 2
#### Thinking about Objects!


**As a group**: On lines ending '??', figure out what the expression will evaluate to. First form a hypthosis, then try it in the console.

```javascript
var demo_object = {
    one: 1,
    two: 2,
    three: 3
}
var one = "three"

demo_object['two'] // ??
demo_object[one] // ??

var state_capitals = {
    California: 'Sacramento',
    Texas: 'Austin'
}

var place = 'California'

state_capitals['place'] // ??
state_capitals.place   // ??
state_capitals[place] // ??

state_capitals['California'] // ??
state_capitals.California   // ??
state_capitals[California] // ??
```

---

### `for in` loops
#### That's right, _more loops_


Although it's less common than with arrays, sometimes we'll want to iterate over every property in an object. There is a special language-level statement to handle this, the `for in` loop.

```javascript
var obj = {
    greeting: 'howdy',
    direction: 'down',
    color: 'red',
    'spaces-and-dashes can be used': ' but need to have quotes'
}

for (var key in obj) {
    console.log(obj[key]) //why don't we need quotes around key??
    // what would happen if we logged obj.key instead? Why? Test it.
}
```

---

### Exercise 3
#### Yet another refactor

Remember our loops from working with arrays? As a reminder, we were working with a `contactArray` that looked like this:

```javascript
var contactArray = [
  ["Professor", "Chaos"],
  "professor@professorchaos.com",
  "@ProfChaos",
  "Prepare to meet thy doom"
];
```

... which we've turned into an Object that looks like this:

```javascript
var contactObject = {
    "name": "Professor Chaos",
    "email": "professor@professorchaos.com",
    "twitter": "@ProfChaos",
    "quote": "Prepare to meet thy doom"
}
```

1. Change the `name` property into an Object with properties `firstName` and `lastName`. HINT:

```javascript
var contactObject = {
    "name": {
        "firstName": "Professor",
        "lastName": "Chaos"
    },
    "email": "professor@professorchaos.com",
    "twitter": "@ProfChaos",
    "quote": "Prepare to meet thy doom"
}
```

2. Turn the `quote` property into an array of possible quotes through dot notation. HINT:

```javascript
contactObject.quote = [
    "Prepare to meet thy doom",
    "Nobody expects Professor Chaos",
    "Bow before the power of the DARK SIDE"
]

// check the state of our Object
console.log(contactObject);
```

3. Now, how can we present this data on a webpage in a meaningful way? We can't use `for`, `while`, or `.forEach` loops easily (work through as a group). HINT:

```javascript
var elementLister = function( contactElement ){
  var listString = "<li>" + contactElement + "</li>";

  if(Array.isArray( contactElement )){
    listString = "<ol>";

    contactElement.forEach( function( element ){
      listString += "<li>" + element + "</li>";
    });

    listString += "</ol>";
  } else if(typeof contactElement === "object"){
    listString = "<li>";

    for(var element in contactElement){
      listString += contactElement[element] + " ";  
    }

    listString += "</li>";
  }

  $("#contact-list").append(listString);
};

for(var contactType in contactObject){
  elementLister( contactObject[contactType] );
}
```

---

### Complex Objects

Just like arrays, objects can hold values of any data type. That includes arrays, objects, and functions.

```javascript
var complex_object = {
  string: "I'm a string!",
  number: 42,
  array: ["all sorts of stuff", 10, true, undefined, {me: "an object", more: "find me in here!"}, function(){console.log('beepity-beep')}],
  simple_object: {name: 'bob', location: 'basement'},
  fn: function(){
    console.log("fn has been invoked! Checking both kinds of invocation-time inputs...")
    console.log("what is my calling context?", this)
    console.log("what are my arguments?", arguments)
  }
}

complex_object.string
complex_object.array[4]
complex_object.simple_object.name
complex_object.fn("stuff", "more stuff", "even more stuff!")
```

---

### Exercise 4
#### Dogs

Take a look at this object, and try out the following:

```javascript
var puppyObject = [{
    name: 'Henry',
    age: 0.5,
    breed: 'Aussie',
    food: 'kibble',
    toys: ['tennis ball', 'chew toy'],
    picture: 'http://rubyriverminiaustralianshepherds.com/wp-content/uploads/aussie-puppy-for-sale-940x412.jpg'
}, {
    name: 'Tilly',
    age: 5,
    breed: 'Mutt',
    food: 'kibble',
    toys: ['bone', 'kong', 'squeaky toy'],
    picture: 'http://www.dogchannel.com/images/zones/top_promo/excited-mixed-breed.jpg'
}, {
    name: 'Apollo',
    age: 10,
    breed: 'Labrador',
    food: 'absolutely anything',
    toys: ['old sock', 'other old sock', 'more old socks'],
    picture: 'http://media.cmgdigital.com/shared/img/photos/2014/08/01/5a/66/LadyLabrador.jpg'
}]
```

1. Iterate over `puppyObject` and log each dog's name
2. Iterate over `puppyObject` and add all the toys to a new `allToys` array
3. Write a function that takes an array of dogs and a toy as an input and returns the name of the dog that owns that toy.
4. Using jQuery, place the pictures of each dog on a web page with its name underneath.
