
function startBtn() {
    let date = document.getElementById("time").valueAsDate;
    let currentDate = new Date();
    let miliseconds = Math.abs(currentDate - date);
    let seconds = miliseconds / 1000;
    seconds = Math.round(seconds);
    document.getElementById("result").innerText = date.getUTCFullYear() + " " + currentDate.getFullYear() + " " + date.getUTCDay() + " " + miliseconds + " " + seconds;
}