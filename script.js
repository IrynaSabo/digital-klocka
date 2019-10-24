let clock = document.getElementById("klocka");

const myInterval = setInterval(timer,1000);

function timer(){
let date = new Date();
let time = date.toLocaleTimeString();
clock.innerHTML = time;
}

