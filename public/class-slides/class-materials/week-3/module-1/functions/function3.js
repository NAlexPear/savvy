var inspector = function () {
  console.log(arguments)
}

// try each invocation individually and ponder the result
inspector(3)

inspector(3 + 7)
inspector(3, 7)

inspector("hello")
inspector("hello" + " " + "how are you")
inspector("hello", "how are you")

inspector("hello", 7, true, undefined, null, 3 + 12, "nice to" + " meet you")
