var screen = document.getElementById("screen");
var Buttons = document.querySelectorAll(".inputButton");
var reset = document.getElementById("reset");
var equal = document.getElementById("equal");
var backspace = document.getElementById("erase");

for (item of Buttons) {
    item.addEventListener('click', (e) => {
        if (e.target.innerText == '') {
            if (e.target.id == 'reset' || e.target.id == 'equal' || e.target.id == 'erase') {
            }
            else {
                var buttonText = e.target.id;
                screen.value += buttonText;
            }
        }
        else {
            var buttonText = e.target.innerText;
            screen.value += buttonText;
        }
    })
}

backspace.addEventListener('click', () => {
    screen.value = screen.value.substring(0, screen.value.length - 1);
});

equal.addEventListener("click", () => {
    var expression = screen.value;
    var result = eval(expression);
    screen.value = result;
});

reset.addEventListener("click", () => {
    screen.value = '';
});
