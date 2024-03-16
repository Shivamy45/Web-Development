var submit = document.getElementById("submit");
var output = document.getElementById("output");
var isExpanded = false;

submit.addEventListener("click", () => {
    var data = document.getElementById("dob").value;
    let dob = new Date(data);
    var uYear = dob.getFullYear();
    var uMonth = dob.getMonth();
    var uDate = dob.getDate();

    let currentDate = document.getElementById("cdate").value;
    let newDate = new Date(currentDate);
    var yearDiff = newDate.getFullYear() - uYear;
    var monthDiff = newDate.getMonth() - uMonth;
    var dateDiff = newDate.getDate() - uDate;

    // age calculation
    if (monthDiff < 0) {
        monthDiff += 12;
        yearDiff -= 1;
    }
    if (dateDiff < 0) {
        dateDiff += 30;
        monthDiff -= 1;
    }

    // output
    if (isExpanded == false) {
        isExpanded = true;
        output.classList.toggle("is-active");
    }
    if (yearDiff < 0) {
        output.innerHTML = `<p id="yourAge">Invalid Date</p>`;
    } else if (yearDiff == 0 && monthDiff < 0) {
        output.innerHTML = `<p id="yourAge">Invalid Date</p>`;
    } else if (yearDiff == 0 && monthDiff == 0 && dateDiff < 0) {
        output.innerHTML = `<p id="yourAge">Invalid Date</p>`;
    } else if (dateDiff == 0 && monthDiff == 0) {
        output.innerHTML = `<p id="yourAge">HAPPY BIRTHDAY You are ${yearDiff} years old.</p>`;
    } else {
        output.innerHTML = `<p id="yourAge">You are ${yearDiff} years ${monthDiff} months ${dateDiff} days old.</p>`;
    }
});


function dateRefresh() {
    console.log(formatted());
    let cdate = document.getElementById("cdate");
    cdate.value = formatted();
};

function formatted(date = new Date()) {
    return [
        date.getFullYear(),
        short(date.getMonth() + 1),
        short(date.getDate()),
    ].join("-");
};

function short(num) {
    return num.toString().padStart(2, "0");
};

dateRefresh();