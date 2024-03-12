// Get DOM elements
const inputBox = document.getElementById('inputbox');
const displayMessage = document.getElementById('message');
const chance = document.getElementById('chances');
const checkButton = document.getElementById('checkButton');

// Create an array to store inputs
const inputArray = [];

// Enable check button when input box is clicked
inputBox.addEventListener('click', enableButton);

// Function to enable check button
function enableButton() {
  checkButton.disabled = false;
}

// Function to handle button click
function addButton() {
  // Check if input is empty or not a number
  if (inputBox.value === "" || isNaN(inputBox.value)) {
    alert("Inputbox is empty or contains invalid input");
    checkButton.disabled = true;
    chance.innerHTML = "";
    return;
  }

  // Check if input is greater than 101 (invalid)
  if (inputBox.value > 101) {
    alert("Invalid input, should be less than or equal to 101");
    checkButton.disabled = true;
    return;
  }

  // Display appropriate message based on input value
  if (inputBox.value > 50 && inputBox.value < 101) {
    displayMessage.innerHTML = "Number is high";
    checkButton.disabled = true;
    check();
  } else if (inputBox.value < 20) {
    displayMessage.innerHTML = "Number is low";
    checkButton.disabled = true;
    check();
  } else if (inputBox.value >= 20) {
    displayMessage.innerHTML = "Number is just right";
    checkButton.disabled = true;
  }

  // Create reset button
  createButton();
}

// Function to create reset button
function createButton() {
  const newButton = document.createElement("button");
  newButton.textContent = "Reset";
  newButton.classList.add("resetButton");

  // Append reset button to the body
  if (inputBox.disabled == true) {
    document.body.appendChild(newButton);

    // Add event listener to reset button
    newButton.addEventListener('click', () => {
      // Reset input box, disable check button, and reset chance message
      inputBox.value = "";
      inputBox.disabled = false;
      checkButton.disabled = true;
      chance.innerHTML = "You have 5 chances left";

      // Clear the input array
      inputArray.length = 0;

      // Remove the reset button
      document.body.removeChild(newButton);
    });
  } else {
    console.log("Hmm");
  }
}

// Function to update chance message
function check() {
  inputArray.push(inputBox.value);

  if (inputArray.length < 6) {
    chance.innerHTML = `You have ${5 - inputArray.length} chance${inputArray.length === 4 ? '' : 's'} left`;
  } else {
    chance.innerHTML = "You have 0 chances left";
    inputBox.value = "";
    checkButton.disabled = true;
    inputBox.disabled = true;
  }
}
