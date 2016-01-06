var refactor = function () {
  var n = 0

  while ( n <= 20 ) {
    if ( n === 13 ) {
      console.log("la-la-la, nothing to say here");
    } else {
      if(n % 2 === 0){
        console.log("I like the number " + n + ", a nice even number.")
      } else {
        console.log("I like the number " + n + ", odd is okay too!")
      }
    }
    n++
  }
}
