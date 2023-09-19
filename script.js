const hourElement = document.getElementById("hours");
const minuteElement = document.getElementById("minutes");
const secondElement = document.getElementById("seconds");
const ampmElement = document.getElementById("ampm");

function updateClock() {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let second = new Date().getSeconds();
    let ampm = "AM";

    if(hours > 12){
        hours = hours - 12;
        ampm = "PM";
    }

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    second = second < 10 ? "0" + second : second;

    hourElement.innerText = hours;
    minuteElement.innerText = minutes;
    secondElement.innerText = second;
    ampm, (innerText = ampm);

    setTimeout(() =>{
        updateClock()
    }, 1000)

}

updateClock();