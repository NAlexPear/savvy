var response, image_path,
    secret_saying = document.querySelector('#message').textContent

if (secret_saying === "An Eagle Flies at Midnight") {
  response = "You may pass"
  image_path = "images/open_door.png"
} else {
  response = "Release the hounds!"
  image_path = "images/attack.png"
}

document.querySelector('#result').textContent = response
document.querySelector('img').src = image_path
