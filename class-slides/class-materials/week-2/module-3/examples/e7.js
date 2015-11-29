var multi_loop = function () {
  var i = 0, j, n = 5

  while ( i < n ) {
    j = 0 // What happens if we remove this line?
    while ( j < n ) {
      console.log("i is", i, "and j is", j)
      j++
    }
    i++
  }
};

var number_party = function () {
  var n = 5,
      j = 1,
      z = 1,
      i = 1,
      string = '';

    //set up 'welcome' part of the string
    while (i <= n){
      string += 'Welcome, '+i;
      j=1;
      //the rest of the loop will only fire when n is greater than 1
      if (j < i){
        string += ', meet '+ j;
          z = 1;
          //this part of the loop will only fire if n is greater than 2
          while (z < (i-1)){
            z++;
            //this checks for the 'end' case
            if (z === (i-1)){
              string += ' and '+z;
            } else {
              //this will write a comma-separated string of numbers until the end case is met
              string += ', '+z;
            }
          }
        }
      i++;
    }
  console.log(string);
};
