var submit = document.getElementById("submit");
var sumbitBtn = document.getElementById("gotTime");
var resetBtn = document.getElementById("reset");
var pauseBtn = document.getElementById("pause");


var cards = document.getElementsByClassName("card");
var semi = document.getElementsByClassName("sep");
var typeOfTime = document.getElementsByClassName("typeTime");

var days = document.getElementById("days");
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");

let isClicked = true;
var intervalId;

sumbitBtn.addEventListener("click", () => {
    sumbitBtn.style.display = "none";
    resetBtn.style.display = "block";
    pauseBtn.style.display = "block";

    var days_count = days.value;
    var hours_count = hours.value;
    var minutes_count = minutes.value;
    var seconds_count = seconds.value;


    if (days_count == '' && hours_count == '' && minutes_count == '' && seconds_count == '') {
        alert("Please enter a countdown first");
    }
    else {
        intervalId = setInterval(() => {
            pauseBtn.addEventListener("click", pause_resume);

            resetBtn.addEventListener("click", reset);

            if (isClicked == true) {
                // days
                if (days_count == 0) {
                    cards[0].style.display = "none";
                    semi[0].style.display = "none";
                    typeOfTime[0].style.display = "none";
                    typeOfTime[1].style.display = "none";
                }
                else {
                    cards[0].innerHTML = `<p class="time">${days_count}</p>`;
                }

                //hours
                if (hours_count == 0 && minutes_count == 0 && seconds_count == 0 && days_count > 0) {
                    days_count -= 1;
                    hours_count = 24;
                    cards[1].innerHTML = `<p class="time">${hours_count}</p>`;
                }
                else if (hours_count == 0 && days_count == 0) {
                    cards[1].style.display = "none";
                    semi[1].style.display = "none";
                    typeOfTime[2].style.display = "none";
                    typeOfTime[3].style.display = "none";
                }
                else {
                    cards[1].innerHTML = `<p class="time">${hours_count}</p>`;
                }

                // minutes
                if (minutes_count == 0 && seconds_count == 0 && hours_count > 0) {
                    hours_count -= 1;
                    minutes_count = 60;
                    cards[2].innerHTML = `<p class="time">${minutes_count}</p>`;
                }
                else if (minutes_count == 0 && hours_count == 0 && days_count == 0) {
                    cards[2].style.display = "none";
                    semi[2].style.display = "none";
                    typeOfTime[4].style.display = "none";
                    typeOfTime[5].style.display = "none";
                }
                else {
                    cards[2].innerHTML = `<p class="time">${minutes_count}</p>`;
                }

                // seconds
                if (seconds_count == 0 && (minutes_count > 0 || hours_count > 0 || days_count > 0)) {
                    minutes_count -= 1;
                    seconds_count = 60;
                    cards[3].innerHTML = `<p class="time">${seconds_count}</p>`;
                    seconds_count--;
                }
                else if (seconds_count == 0 && minutes_count == 0 && hours_count == 0 && days_count == 0) {
                    reset();
                }
                else {
                    cards[3].innerHTML = `<p class="time">${seconds_count}</p>`;
                    seconds_count--;
                }
            }
        }, 1000);
    }
});

function pause_resume() {
    if (isClicked == true) {
        isClicked = false;
        pauseBtn.innerText = "RESUME";
    }
    else {
        pauseBtn.innerText = "PAUSE";
        isClicked = true;
    }
};

function reset() {
    window.location.reload();
};
