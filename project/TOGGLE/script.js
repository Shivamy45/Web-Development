var root = document.querySelector(":root");
var slider = document.getElementById("slider");
var body = document.querySelector("body");

var isDark = false;

var themeBtn = document.getElementById("changer");
slider.addEventListener("click", () => {
    if (isDark == false) {
        isDark = true;
        slider.style.justifyContent = "right";
        root.style.setProperty("--bgcolor", "black");
        root.style.setProperty("--box-color", "rgb(28, 28, 29)");
        root.style.setProperty("--font-color", "white");
        root.style.setProperty("--bfscolor", "rgb(100, 195, 101)");
        body.style.background = "linear-gradient(45deg, rgb(0, 0, 0) 0%, rgb(255, 255, 255) 50%, rgb(0, 0, 0) 100%)";
    }
    else {
        isDark = false;
        slider.style.justifyContent = "left";
        root.style.setProperty("--bgcolor", "rgb(242, 242, 247)");
        root.style.setProperty("--box-color", "white");
        root.style.setProperty("--font-color", "black");
        root.style.setProperty("--bfscolor", "rgb(233, 233, 234)");
        body.style.background = "linear-gradient(45deg, rgba(180, 85, 225, 1) 0%, rgba(141, 84, 239, 1) 100%)";
    }
});