//this code is connected to the presentation through an "onclick" attribute so that we can see the prompts in action.
var conditional = function () {
  if (true) {
    console.log('oh yeeeaaaahhhh!!');
  }
  if (false) {
    console.log('wait, where am I?');
  }
  if (5 > 4) {
    console.log('Makes sense...');
  }
  if (2 === 5) {
    console.log("if you are seeing this message, something has gone terribly wrong.");
  }
  if (prompt('How are you doing?') === 'good') {
    console.log("You're doing WELL. It's an adverb.");
  }
};
