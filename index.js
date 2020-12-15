// Listening for the event of buttons being clicked

var numberOfDrumButtons = document.querySelectorAll(".drum").length;
// Looks for the HTML elements with the class of "drum" and takes a record of how many there are

for (var i = 0; i < numberOfDrumButtons; i++) {
// For as long as the variable i is less than the number of buttons (6), call the function below and also add 1 to i

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
  // Add an event listener for elements with the "drum" class, particularly looking out for a mouse click to then run the function below

    var buttonInnerHTML = this.innerHTML; // Storing the inner HTML of the button clicked
    playSound(buttonInnerHTML); // Calling the function playSound using the buttonInnerHTML as the input for the parameter

  });

}


// Listening for the event of keyboard keys being tapped

document.addEventListener("keydown", function(event) { // A callback function, passing the event detected through the function
// Add an event listener for the entire document (or site), particularly looking out for keyboard taps to then run the function below

  playSound(event.key); // Calling the function playSound using event.key as the input for the parameter

});


// Function to play drum sounds

function playSound(key) { // The function being called above when a click on the button or a keyboard tap is detected
// The parameter 'key' allows for the buttonInnerHTML and event.key to be passed through the function as inputs

  switch (key) { // A less convoluted method of writing if statements

    case "w": // If the input is 'w'
      var tom1 = new Audio("sounds/tom-1.mp3"); // Create a new audio object using the mp3 file stated
      tom1.play(); // Play the audio
      break; // End this set of instructions

    case "a": // If the input is 'a' so on and so forth...
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default: // Else if it none of the above letters just log what was pressed
      console.log(key);

  }

}
