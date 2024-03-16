var totalRow = 40;
var totalCol = 40;
var blockSize = 15;

var snakeX = blockSize * (totalCol / 2);
var snakeY = blockSize * (totalRow / 2);
var snakeBody = [];
var speedX = 0, speedY = 0;

var foodX, foodY;
var score = 0;
var scoreSpan = document.getElementById("score");
var highscore = 0;
var highscoreSpan = document.getElementById("highscore");

var gameOver = false;

var board = document.getElementById("board");
var context = board.getContext("2d");

var start = document.getElementById("start");
var game = document.getElementById("gameStart");

// highscoreSpan.innerHTML = highscore;

document.body.addEventListener("keyup", (e) => {
    if (e.code === "Space") {
        console.log("Space Pressed");
        start.style.display = "none";
        game.style.display = "flex";
    }
});

foodAllocate();

document.addEventListener("keydown", changeDirection);
setInterval(update, 1000 / 10);


// functions

function foodAllocate() {
    foodX = Math.floor(Math.random() * totalCol) * blockSize;
    foodY = Math.floor(Math.random() * totalRow) * blockSize;
}

function changeDirection(e) {
    if (e.code === "ArrowUp" && speedY != 1) {
        speedX = 0;
        speedY = -1;
    } else if (e.code === "ArrowRight" && speedX != -1) {
        speedX = 1;
        speedY = 0;
    } else if (e.code === "ArrowDown" && speedY != -1) {
        speedX = 0;
        speedY = 1;
    } else if (e.code === "ArrowLeft" && speedX != 1) {
        speedX = -1;
        speedY = 0;
    }
    else {
        gameOver = false;
    }
}

function update() {
    if (gameOver) {
        return;
    }

    // background
    context.fillStyle = "black";
    context.fillRect(0, 0, 600, 600);

    // food
    context.fillStyle = "yellow";
    context.fillRect(foodX, foodY, blockSize, blockSize);

    // snake eats food
    if (snakeX == foodX && snakeY == foodY) {
        snakeBody.push([foodX, foodY]);
        score++;
        scoreSpan.innerText = score;
        foodAllocate();
    }

    // snakeBody will grow
    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }

    // snake head
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }

    context.fillStyle = "blue";
    snakeX += speedX * blockSize;
    snakeY += speedY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);

    for (let i = 0; i < snakeBody.length; i++) {
        context.fillStyle = "white";
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize)
    }

    // gameover
    if (snakeX < 0 || snakeX > totalCol * blockSize || snakeY < 0 || snakeY > totalRow * blockSize) {
        gameOver = true;
        console.log(snakeX + "  " + snakeY);
        console.log(speedX + "  " + speedY);
        console.log("snake touched boundary");
        alert("Game Over");
        if (score > highscore) {
            highscore = score;
        }
        location.reload();
    }
    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver = true;
            console.log(snakeX + "  " + snakeY);
            console.log(snakeBody[i][0] + "  " + snakeBody[i][1]);
            console.log(speedX + "  " + speedY);
            console.log("snake eats himself");
            alert("Game Over");
            if (score > highscore) {
                highscore = score;
            }
            location.reload();
        }
    }
}