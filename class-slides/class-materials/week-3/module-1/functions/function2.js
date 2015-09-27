var saying_generator = function () {
  var phrase = "Heeey, " + "it's the " + " Fonz."
  return phrase
}

// What is the return value?
var saying = saying_generator()

var broken_saying_generator = function () {
  var phrase = "Heeey, " + "it's the " + " Fonz."
  phrase
}

// What about now?
var broken_saying = broken_saying_generator()
