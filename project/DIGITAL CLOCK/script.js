var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");
var amOrpm = document.getElementById("amORpm");


setInterval(() => {
    var date = new Date();
    var current_hours = date.getHours();
    var current_minutes = date.getMinutes();
    var current_seconds = date.getSeconds();
    if (current_hours < 10) {
        hour.innerText = "0" + current_hours;
    } else if (current_hours > 12) {
        hour.innerText = "0" + (current_hours - 12);
    } else {
        hour.innerText = current_hours;
    }
    if (current_minutes < 10) {
        minute.innerText = "0" + current_minutes;
    } else {
        minute.innerText = current_minutes;
    }
    if (current_seconds < 10) {
        second.innerText = "0" + current_seconds;
    } else {
        second.innerText = current_seconds;
    }
    if (current_hours > 12) {
        amOrpm.innerText = "PM";
    }
    else {
        amOrpm.innerText = "AM";
    }
}, 1000);