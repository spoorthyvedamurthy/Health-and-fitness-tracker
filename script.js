document.addEventListener("DOMContentLoaded", function () {

const btn = document.getElementById("calcBtn");

if(btn){

btn.addEventListener("click", function(){

let age = Number(document.getElementById("age").value);
let height = Number(document.getElementById("height").value);
let weight = Number(document.getElementById("weight").value);

if(!age || !height || !weight){

document.getElementById("result").innerText="Enter Values";
document.getElementById("caloriesBox").innerText="--";
document.getElementById("healthScore").innerText="--";
document.getElementById("riskLevel").innerText="--";
document.getElementById("suggestion").innerText="Please fill all fields.";

return;
}

height = height / 100;

let bmi = weight / (height * height);
bmi = bmi.toFixed(1);

let calories = Math.round(weight * 30);

let score = 100;
let risk = "";
let suggestion = "";

if(bmi < 18.5){
score -= 25;
risk = "Nutrition Risk";
suggestion = "Increase calorie intake and strength workouts.";
}
else if(bmi < 24.9){
score -= 5;
risk = "Low Risk";
suggestion = "Maintain current healthy routine.";
}
else if(bmi < 29.9){
score -= 20;
risk = "Moderate Risk";
suggestion = "Increase cardio and reduce processed foods.";
}
else{
score -= 35;
risk = "High Risk";
suggestion = "Start structured fitness and nutrition plan.";
}

if(age > 35){
score -= 10;
}

if(score < 0){
score = 0;
}

document.getElementById("result").innerText = bmi;
document.getElementById("caloriesBox").innerText = calories + " kcal";
document.getElementById("healthScore").innerText = score + "/100";
document.getElementById("riskLevel").innerText = risk;
document.getElementById("suggestion").innerText = suggestion;

});

}

});