## Events
### Building interactive Applications

An _event handler_ is a function (subroutine) that is run each time a specific type of input is received from the user. Try to make the following work in the dev console while inspecting your Portfolio Project:

```javascript
// we've defined a function and set it equal to a variable
var fn = function () {
  console.log('heeey')
}

// of course, we can invoke it manually
fn()

// Alternately, we can ask the browser to run it at a later time

// The below is called an event handler, take a guess at what it does...
// Add it to an HTML document containing a div#target and test it out
document.querySelector('#target').addEventListener('click', fn);

// Often times, instead of using a variable, we'll just define the function inline
document.querySelector('#target').addEventListener('click', function() {
  console.log('same deal')
});
```

Ok, that's the native JavaScript syntax for adding event handlers to the page. Now let's see jQuery's way! Try this in your console as well:

```javascript
$('div').on('click', function(){
  console.log('A div has been clicked!')
})

// shortcut
$('p').click(function(){
  $('p').show().css('color', 'red').text('boom goes the dynamite!')
});
```
