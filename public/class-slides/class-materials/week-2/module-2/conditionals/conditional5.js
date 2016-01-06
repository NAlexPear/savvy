if (user_input === "happiness") {
  output_el.textContent = "ahh, the enlightened one!"
} else if (!user_input) {
  document.querySelector('input').value = "hey you, type here :z"
} else {
  output_el.textContent = "You're searching for the wrong thing"
}
