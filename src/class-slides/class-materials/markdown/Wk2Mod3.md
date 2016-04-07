## DOM Review and Choose-Your-Own Adventure
### ...plus builds and booleans!

Up to this point, our JavaScript exercises have added a bit of flair to some existing websites, but haven't really been 'programs' in the their own right. Today we change that! But first, a bit more info about the Boolean data type:

### More Boolean!

While `if`, `else`, and `else if` combined with `===`, `<==`, `>==`, and `!==` can go a long way, we sometimes need to test for multiple conditions at the same time. To help us out with that, we can use the `||` or `&&` operators.

`||` means "or"... it returns `true` if either the first term _or_ the second term _or_ both are true.
`&&` means "and"... it returns `true` if (and only if) both tested terms are true.

Try out some of the following in your console to see the results:

```
!true
!false
!!false
!!true

true && true
true && false
true || true
true || false
false || true
false || false
```

### Portfolio Project 1
#### Greeter 3.0

In the last class, we worked on making a greeter for visitors to our website. Now let's add some extra logic to make our program more useful!

1. First, open up your Portfolio Project in Atom and navigate to the `index.html` file in your `media` directory.
2. Make sure that you've styled the `#greeting` section and have a `greeting.js` document that contains the following:

```javascript
var name = prompt("Hi there! What's your name?");
var output = document.querySelector('#greeting');
output.html = "<p>Thanks for visiting, " + name + ".</p>";
```

3. Now let's make sure that users have actually input a name! We'll do that using a neat trick of JavaScript, where strings evaluate to `true`, but _empty_ strings evaluate to `false`. Try the following in `greeting.js`:

```javascript
var name = prompt("Hi there! What's your name?");
var output = document.querySelector('#greeting');

if(name){
    output.html = "<p>Thanks for visiting, " + name + ".</p>";
} else {
    output.html = "<p>Please tell us your name!</p>";
}
```

4. Let's make things a little more complicated by asking users for their first _and_ last names. The following will only output a visitor's name if they provide both a first _and_ last name. Try this:

```javascript
var firstName = prompt("Hi there! What's your first name?");
var lastName = prompt("What's your last name?");
var output = document.querySelector('#greeting');

if(firstName && lastName){
    output.html = "<p>Thanks for visiting, " + firstName + " " + lastName + ".</p>";
} else {
    output.html = "<p>Please tell us your first and last names!</p>";
}
```

5. We can use the 'or' operator (`||`) to give users a default name, instead of just pleading with them to respond to our prompts. With this, we can also get rid of the `if` and `else` behavior to simplify our code! Make sure you understand how this 'default' behavior works:

```javascript
var firstName = prompt("Hi there! What's your first name?") || "Visitor";
var lastName = prompt("What's your last name?") || "McDefaultson";
var output = document.querySelector('#greeting');

output.html = "<p>Thanks for visiting, " + firstName + " " + lastName + ".</p>";
```

### Portfolio Project 2
#### Choose-Your-Own-Adventure Game

Let's spend the rest of class creating a "choose your own adventure" style text adventure game by using multiple prompts and branching if/ else conditional statements. Write a story into an HTML document on the basis of the user's responses to the prompts. The story will be a bit open-ended, but you should set up your game like so:

1. In your `media` directory, add a new directory named `choose-your-own-adventure`.
2. Add an `index.html` file to the root of the CYOA directory and set it up according to best practices.
3. In your media page (the `index.html` document at the root of the `media` directory), add a link to the CYOA page.
4. Create a `cyoa.js` document and link it to your CYOA `HTML` document with a `<script>` tag.
5. Use `prompt()` to lead visitors down different story paths. Something like this:

```javascript
var response = prompt("You walk into a room with a chair and a window. Type 'sit' to sit in the chair, type 'gaze' to gaze wistfully out the window and sigh");

if(response === "sit"){
    response = prompt("Here's a new prompt, with new options");
} else if (response === "gaze") {
    response = prompt("Here's a new prompt, with new options");    
} else {
    alert("Please type in a valid input! Refresh the page to try again.");
}
```

Try to add some options that include responses for multiple options using the `||` and `&&` operators. Good luck! When you like your story, be sure to `add`, `commit`, and `push` your commits to GitHub. 
