document.addEventListener("DOMContentLoaded", function () {

  const calcBtn = document.getElementById("calcBtn");

  calcBtn.addEventListener("click", function () {

    let age = document.getElementById("age").value;
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    if (!age || !height || !weight) {
      document.getElementById("result").innerText = "Please enter all values!";
      return;
    }

    height = height / 100;

    let bmi = (weight / (height * height)).toFixed(2);

    let status = "";
    let suggestion = "";
    let color = "white";

    if (bmi < 18.5) {
      status = "Underweight";
      suggestion = "Increase calorie intake & strength training";
      color = "#00a8ff";
    } 
    else if (bmi < 24.9) {
      status = "Normal";
      suggestion = "Great! Maintain your fitness";
      color = "#2ed573";
    } 
    else if (bmi < 29.9) {
      status = "Overweight";
      suggestion = "Add cardio & reduce junk food";
      color = "#ffa502";
    } 
    else {
      status = "Obese";
      suggestion = "Strict workout + diet plan needed";
      color = "#ff4757";
    }

    let bodyFat = (1.2 * bmi + 0.23 * age - 5.4).toFixed(2);
    let calories = Math.round(weight * 30);

    let result = document.getElementById("result");
    let suggestionBox = document.getElementById("suggestion");

    result.innerText = `BMI: ${bmi} (${status})`;
    suggestionBox.innerText =
      `Body Fat: ${bodyFat}% | Calories: ${calories} kcal | ${suggestion}`;

    result.style.color = color;
  });

});