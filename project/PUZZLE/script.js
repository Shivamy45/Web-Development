function swapTile(tile1, tile2) {
    var temp = document.getElementById(tile1).className;
    document.getElementById(tile1).className = document.getElementById(tile2).className;
    document.getElementById(tile2).className = temp;
}

var start = document.getElementById("start");
start.addEventListener("click", () => {
    for (let row = 1; row < 4; row++) {
        for (let col = 1; col < 4; col++) {
            var newRow = Math.floor(Math.random() * 3 + 1);
            var newCol = Math.floor(Math.random() * 3 + 1);
            swapTile("tile" + row + col, "tile" + newRow + newCol);
        }
    }
});

function play(row, column) {
    var cell = document.getElementById("tile" + row + column);
    var tile = cell.className;
    if (tile != "tile33") {
        // checking for top
        if (row > 1) {
            if (document.getElementById("tile" + (row - 1) + column).className == "tile tile33") {
                swapTile("tile" + row + column, "tile" + (row - 1) + column);
            }
        }
        // checking for right
        if (column < 3) {
            if (document.getElementById("tile" + row + (column + 1)).className == "tile tile33") {
                swapTile("tile" + row + column, "tile" + row + (column + 1));
            }
        }
        // checking for bottom
        if (row < 3) {
            if (document.getElementById("tile" + (row + 1) + column).className == "tile tile33") {
                swapTile("tile" + row + column, "tile" + (row + 1) + column);
            }
        }
        // checking for left
        if (column > 1) {
            if (document.getElementById("tile" + row + (column - 1)).className == "tile tile33") {
                swapTile("tile" + row + column, "tile" + row + (column - 1));
            }
        }
    }
}