let btn = document.getElementById("start");

function startBtn() {
    const date = document.getElementById("time").valueAsDate;
    const currentDate = new Date();
    let utc = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
    let miliseconds = utc - currentDate;

    if (!invalidDate(miliseconds)) {
        alert("Invalid date selected. Please try again.");
    }

    else {
        disable();
        let seconds = miliseconds / 1000;
        seconds = Math.round(seconds);
        convert(seconds);
        let timer = setInterval(function() {
            if (seconds >= 0) {
                convert(seconds)
                seconds--;
            }
            else {
                clearInterval(timer);
                enable();
            }
        }, 1000)
    }

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

function disable() {
    btn.disabled = "disabled";
}

function enable() {
    btn.disabled = false;
}

function invalidDate(miliseconds) {
    if (miliseconds < 0) {
        return false;
    }
    else {
        return true;
    }
}