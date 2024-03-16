var cells = document.querySelectorAll(".cell");
var c1 = document.getElementById("cell1");
var c2 = document.getElementById("cell2");
var c3 = document.getElementById("cell3");
var c4 = document.getElementById("cell4");
var c5 = document.getElementById("cell5");
var c6 = document.getElementById("cell6");
var c7 = document.getElementById("cell7");
var c8 = document.getElementById("cell8");
var c9 = document.getElementById("cell9");
var result = document.getElementById("result");
isPlayer1 = true;

for (item of cells) {
    item.addEventListener("click", (e) => {
        if (e.target.innerHTML == "") {
            if (isPlayer1 == true) {
                isPlayer1 = false;
                e.target.innerHTML = "X";
            } else {
                isPlayer1 = true;
                e.target.innerHTML = "O";
                e.target.style.color = "red";
            }
        }
        if (Xwon()) {
            result.style.height = "360px";
            result.style.width = "360px";
            result.innerText = "Player X won";
            setTimeout(() => {
                location.reload();
            }, 2000);
        }
        else if (Owon()) {
            result.style.height = "360px";
            result.style.width = "360px";
            result.innerText = "Player O won";
            setTimeout(() => {
                location.reload();
            }, 2000);
        }
        else if (tie()) {
            result.style.height = "360px";
            result.style.width = "360px";
            result.innerText = "Tied";
            setTimeout(() => {
                location.reload();
            }, 2000);
        }
    });
}
function Xwon() {
    if ((c1.innerHTML == "X" && c4.innerHTML == "X" && c7.innerHTML == "X") || (c1.innerHTML == "X" && c2.innerHTML == "X" && c3.innerHTML == "X") || (c1.innerHTML == "X" && c5.innerHTML == "X" && c9.innerHTML == "X") || (c3.innerHTML == "X" && c5.innerHTML == "X" && c7.innerHTML == "X") || (c3.innerHTML == "X" && c6.innerHTML == "X" && c9.innerHTML == "X") || (c7.innerHTML == "X" && c8.innerHTML == "X" && c9.innerHTML == "X") || (c4.innerHTML == "X" && c5.innerHTML == "X" && c6.innerHTML == "X") || (c2.innerHTML == "X" && c5.innerHTML == "X" && c8.innerHTML == "X")) {
        return true;
    }
}
function Owon() {
    if ((c1.innerHTML == "O" && c4.innerHTML == "O" && c7.innerHTML == "O") || (c1.innerHTML == "O" && c2.innerHTML == "O" && c3.innerHTML == "O") || (c1.innerHTML == "O" && c5.innerHTML == "O" && c9.innerHTML == "O") || (c3.innerHTML == "O" && c5.innerHTML == "O" && c7.innerHTML == "O") || (c3.innerHTML == "O" && c6.innerHTML == "O" && c9.innerHTML == "O") || (c7.innerHTML == "O" && c8.innerHTML == "O" && c9.innerHTML == "O") || (c4.innerHTML == "O" && c5.innerHTML == "O" && c6.innerHTML == "O") || (c2.innerHTML == "O" && c5.innerHTML == "O" && c8.innerHTML == "O")) {
        return true;
    }
}
function tie() {
    if (c1.innerHTML != "" && c2.innerHTML != "" && c3.innerHTML != "" && c4.innerHTML != "" && c5.innerHTML != "" && c6.innerHTML != "" && c7.innerHTML != "" && c8.innerHTML != "" && c9.innerHTML != "") {
        return true;
    }
}