// MAIN BUTTON
const calcBtn = document.getElementById("calcBtn");
const saveBtn = document.getElementById("saveBtn");

// LOAD HISTORY
window.onload = function () {
  showHistory();
};

// CALCULATE HEALTH
calcBtn.addEventListener("click", function () {

  let age = document.getElementById("age").value;
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;

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
  } else if (bmi < 24.9) {
    status = "Normal weight";
    suggestion = "Great! Maintain your lifestyle.";
  } else if (bmi < 29.9) {
    status = "Overweight";
    suggestion = "Exercise more and eat healthy.";
  } else {
    status = "Obese";
    suggestion = "Follow a strict fitness plan.";
  }

  let bodyFat = (1.2 * bmi) + (0.23 * age) - 5.4;
  bodyFat = bodyFat.toFixed(2);

  let calories = weight * 30;

  document.getElementById("result").innerText =
    `BMI: ${bmi} (${status})`;

  document.getElementById("suggestion").innerText =
    `Body Fat: ${bodyFat}% 
Calories/day: ${calories} kcal
Advice: ${suggestion}`;
});

// SAVE WORKOUT
saveBtn.addEventListener("click", function () {

  let workout = document.getElementById("workout").value;
  let minutes = document.getElementById("minutes").value;

  if (workout === "" || minutes === "") {
    alert("Enter workout details!");
    return;
  }

  let data = JSON.parse(localStorage.getItem("fitnessData")) || [];

  let today = new Date().toLocaleDateString();

  data.push({
    date: today,
    workout: workout,
    minutes: minutes
  });

  localStorage.setItem("fitnessData", JSON.stringify(data));

  showHistory();

  document.getElementById("workout").value = "";
  document.getElementById("minutes").value = "";
});

// SHOW HISTORY
function showHistory() {
  let list = document.getElementById("history");
  list.innerHTML = "";

  let data = JSON.parse(localStorage.getItem("fitnessData")) || [];

  data.forEach(item => {
    let li = document.createElement("li");
    li.innerText = `${item.date} - ${item.workout} (${item.minutes} mins)`;
    list.appendChild(li);
  });
}