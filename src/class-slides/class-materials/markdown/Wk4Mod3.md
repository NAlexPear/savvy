## Advanced Objects
### Object-Oriented Programming and Design Patterns

Organizing code structures around objects rather than functions is called Object Oriented programming.

As we've seen already, object can have keys which are strings, and values which can any data type: strings, numbers, arrays, objects... even functions!

```javascript
var person = {
  name: 'Bob',
  location: 'Los Angeles',
  age: 56,
  hobbies: ['working', 'partying'],
  cat: {
    name: "mr fuzzles",
    hobbies: [ "being inert", "nudging things off tables" ]
  },
  party: function(){
    console.log('dance, dance, dance!')
  }
}
person.name
person.age

person.hobbies[0]
person.cat.name

person.party // what does this do?
person.party() // how about this?
```

And as we've briefly seen before, Objects can use the `this` keyword to access their calling context. Review the following in your console:

```javascript
var freestanding_fn = function(){
  console.log(arguments, this)
}

freestanding_fn("These are the arguments...", "What is the calling context? -->")
```

Now what happens when we call a function in the context of an object?

```javascript
var obj = {
  key1: 'value 1',
  key2: 'value 2',
  method: function(){
    console.log("I'm being invoked in the context of...", this)
  }
}

obj.method();
```

So how is this useful?

```javascript
person.work = function(){
    console.log("Welcome to McDonald's, I'm " + this.name + ". May I take your order?")
    console.log("Enjoy this beautiful day in " + this.location)
    console.log("Would you like to hear a story about " + this.cat.name + " and his " + this.cat.hobbies[1])
}

person.work()
```

---

### Exercise 1
#### Here in my car

We can also change our object properties by referencing them with `this`:

```javascript
var car = {
    type: "Honda Civic",
    position: 1,
    move: function(){
        var prev = this.position;
        this.position = this.position + 1;
        console.log(this.type + " is moving from " + prev + " to " + this.position);
    }
}
```

1. Invoke car's `move` method and see what happens.
2. Invoke it a few more times. Then check its `position` property.
3. Add a `speed` property (an integer) to car.
4. When a car moves, adjust its position by adding its speed. HINT:
  ```javascript
  var car = {
    type: "Honda Civic",
    position: 1,
    speed: 8,
    move: function(){
      var prev = this.position;
      this.position = this.position + this.speed;
      console.log(this.type + " is moving from " + prev + " to " + this.position);
    }
  }
  ```
5. Instead of defining the method inline, it can be useful to have it defined first and referenced as a variable in the object instantiation. This will allow us to share the function between multiple objects later. Try this out with the `move()` method. HINT:
  ```javascript
  var moveCar = function(){
    var prev = this.position;
    this.position = this.position + this.speed;
    console.log(this.type + " is moving from " + prev + " to " + this.position);
  };

  var car = {
    type: "Honda Civic",
    position: 1,
    speed: 8,
    move: moveCar
  };
  ```
6. Now share the `moveCar` function with a brand new car object! Then try invoking the `.move()` method a few times. HINT:
  ```javascript
  var moveCar = function(){
    var prev = this.position;
    this.position = this.position + this.speed;
    console.log(this.type + " is moving from " + prev + " to " + this.position);
  };

  var honda = {
    type: "Honda Civic",
    position: 1,
    speed: 8,
    move: moveCar
  };

  var lambo = {
    type: "Lamborghini Murcielago",
    position: 1,
    speed: 20,
    move: moveCar
  };

  honda.move();
  lambo.move();
  ```

### Design Patterns
#### The Decorator Pattern

When we pass an object as an input to a function which adds functionality to it, we call this code structure the _Decorator Pattern_.

```javascript
var reverse_adder = function(car){
    car.reverse = function() {
      this.position = this.position - this.speed
    }
}

reverse_adder(car1);
reverse_adder(car2);
```
---

#### Factory Pattern

When we use a function to instantiate new objects of a certain type, we call this code structure the _Factory Pattern_.

```javascript
var car_factory = function (type, speed) {
  var car = {};

  car.position = 0;
  car.type = type;
  car.speed = speed;

  car.move = function () {
    this.position += this.speed;
  };

  return car;
};

var new_toyota = car_factory('Toyota Hilux', 3);
var new_honda = car_factory('Honda Accord', 5);
```

Try creating a car factory that can create car objects like the ones you created already!

---

### Exercise 2
#### Warrior Factory

1. Create a warrior factory that take arguments of a `name` and a `weapon`. HINT:
  ```javascript
  var warriorFactory = function(name, weapon){
    var warrior = {};

    warrior.name = name;
    warrior.weapon = weapon;

    return warrior;
  };
  ```
2. It should return a warrior with those properties as well as...
  1. Each warrior should have an `attack` method that references the `name` and `weapon`.
  2. Each warrior should have an `adventure` method that calls the `attack` method multiple times, along with a legendary adventure.

HINT:
```javascript
var warriorFactory = function(name, weapon){
  var warrior = {};

  warrior.name = name;
  warrior.weapon = weapon;

  warrior.attack = function(){
    return this.name + " attacks with their " + this.weapon + "!";
  };

  warrior.adventure = function(){
    return "Behold, the great warrior " + this.name + ", foremost of all warriors. They draw forth to face the Dragon of Kalamazar. Watch as " + this.attack() + ". Such bravery!";
  };

  return warrior;
};

warriorFactory( "Olav the Destroyer of Weaklings", "Spiked Deathmaul of Lamentation");
```
