const button = document.getElementById("calcBtn");

button.addEventListener("click", function () {

  let age = document.getElementById("age").value;
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;

  // Validation
  if (age === "" || height === "" || weight === "") {
    document.getElementById("result").innerText = "Please fill all fields!";
    return;
  }

  height = height / 100;

  let bmi = (weight / (height * height)).toFixed(2);

  let status = "";
  let suggestion = "";

  if (bmi < 18.5) {
    status = "Underweight";
    suggestion = "Eat more nutritious food and do strength training.";
  } 
  else if (bmi >= 18.5 && bmi < 24.9) {
    status = "Normal weight";
    suggestion = "Great! Maintain your diet and exercise regularly.";
  } 
  else if (bmi >= 25 && bmi < 29.9) {
    status = "Overweight";
    suggestion = "Do cardio exercises and reduce junk food.";
  } 
  else {
    status = "Obese";
    suggestion = "Consult a doctor, follow strict diet and workout plan.";
  }

  document.getElementById("result").innerText =
    `BMI: ${bmi} (${status})`;

  document.getElementById("suggestion").innerText =
    `Suggestion: ${suggestion}`;
});