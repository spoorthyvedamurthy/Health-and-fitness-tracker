function greet(name) {
    console.log("hell0"+name)
}
greet("yashwanth");


function add(a,b) {
    console.log(a+b);
}
add(5,6)


function addsum(a,b) {
    return a+b;
}
let res=addsum(10,5);
console.log(res);

function square(c){
    return c*c;
}
let sque=square(2);
console.log(sque);

function evvehicle(bateryper){
    if (bateryper===100){
        return "400km"
    }else if (bateryper===75){
        return "300km"
    }else if (bateryper===50){
        return "200km"
    }else if (bateryper===25){
        return "100km"
    }else{
        return "lowbaterry/no charge"
    }
}
console.log(evvehicle(75))
console.log(evvehicle(10))

console.log("JS file loaded");

document.addEventListener("DOMContentLoaded", function () {
  const bookBtn = document.getElementById("bookBtn");

  console.log(bookBtn); // should NOT be null

  bookBtn.addEventListener("click", function () {
    bookBtn.textContent = "Booked Drive";
    bookBtn.disabled = true;
    bookBtn.style.backgroundColor = "#555";
    bookBtn.style.cursor = "not-allowed";
  });
});
