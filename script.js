// Get the button element
const button = document.getElementById("calcBtn");

// Add click event to button
button.addEventListener("click", function () {

  // Get height and weight values from input
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;

  // Convert height from cm to meters
  height = height / 100;

  // Calculate BMI
  let bmi = weight / (height * height);

  // Round to 2 decimal places
  bmi = bmi.toFixed(2);

  // Variable to store result text
  let resultText = "";

  // Conditions for BMI categories
  if (bmi < 18.5) {
    resultText = "Underweight ??";
  } 
  else if (bmi >= 18.5 && bmi < 24.9) {
    resultText = "Normal weight ?";
  } 
  else if (bmi >= 25 && bmi < 29.9) {
    resultText = "Overweight ??";
  } 
  else {
    resultText = "Obese ?";
  }

  // Display result on screen
  document.getElementById("result").innerText =
    "Your BMI: " + bmi + " (" + resultText + ")";
});