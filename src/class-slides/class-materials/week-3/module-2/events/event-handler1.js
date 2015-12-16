// we've defined a function and set it equal to a variable
var fn = function () {
  console.log('heeey')
}

// of course, we can invoke it manually
fn()

// Alternately, we can ask the browser to run it at a later time

// The below is called an event handler, take a guess at what it does...
// Add it to an HTML document containing a div#target and test it out
document.querySelector('#target').addEventListener('click', fn)

// Often times, instead of using a variable, we'll just define the function inline
document.querySelector('#target').addEventListener('click', function() {
  console.log('same deal')
})