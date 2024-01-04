

function startBtn() {
    const date = document.getElementById("time").valueAsDate;
    const currentDate = new Date();
    let miliseconds = Math.abs(currentDate - date);
    let seconds = miliseconds / 1000;
    seconds = Math.round(seconds);
    convert(seconds);
    document.getElementById("result").innerText = date.getUTCFullYear() + " " + currentDate.getFullYear() + " " + date.getUTCDay() + " " + miliseconds + " " + seconds;
    let timer = setInterval(function() {
        if (seconds >= 0) {
            convert(seconds)
            seconds--;
        }
        else {
            clearInterval(timer);
        }
    }, 1000)
}

function convert(seconds) {
    let placeholder = seconds;
    let days = Math.floor(placeholder / 86400);
    placeholder = placeholder % 86400;

    let hours = Math.floor(placeholder / 3600);
    placeholder = placeholder % 3600;

    let minutes = Math.floor(placeholder / 60);
    placeholder = placeholder % 60;

    let displaySeconds = placeholder;

    display(days, hours, minutes, displaySeconds);
}

function display(days, hours, minutes, displaySeconds) {
    document.getElementById("day").innerText = days + ":";
    document.getElementById("hour").innerText = hours + ":";
    document.getElementById("minute").innerText = minutes + ":";
    document.getElementById("second").innerText = displaySeconds;
}
