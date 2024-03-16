var isEmail = false;
var isPass = false;
var isFinish = false;

var progress = document.getElementById("active");
var progress_slides = document.getElementsByClassName("steps");

var slide1 = document.getElementById("user-slide");
var slide2 = document.getElementById("email-slide");
var slide3 = document.getElementById("password-slide");
var slide4 = document.getElementById("finish-slide");

function nextSlide(slideNum) {
    if (slideNum == 1) {
        let username = document.getElementById("username").value;
        let firstname = document.getElementById("firstname").value;
        let lastname = document.getElementById("lastname").value;
        console.log(username + "/n" + firstname + "/n" + lastname + "/n");
        if (username != "" && firstname != "" && lastname != "") {
            isEmail = true;
            progress.style.width = "25%";
            progress_slides[0].style.backgroundColor = "var(--btn-clr)";
            redirect(2);
        }
    } else if (slideNum == 2) {
        let user_email = document.getElementById("email").value;
        if (user_email != "") {
            isPass = true;
            progress.style.width = "50%";
            progress_slides[1].style.backgroundColor = "var(--btn-clr)";
            redirect(3);
        }
    } else if (slideNum == 3) {
        let pass = document.getElementById("password").value;
        let check_pass = document.getElementById("confirm-password").value;
        if (pass == "") {
            alert("Enter a password first");
        } else if (pass == check_pass) {
            isFinish = true;
            progress.style.width = "75%";
            progress_slides[2].style.backgroundColor = "var(--btn-clr)";
            redirect(4);
        } else {
            alert("Password not matched");
        }
    } else if (slideNum == 4) {
        progress.style.width = "100%";
        progress_slides[3].style.backgroundColor = "var(--btn-clr)";
        setTimeout(() => {
            location.reload();
        }, 5000);
    }
}

function redirect(page_number) {
    if (page_number == 1) {
        slide1.style.display = "flex";
        slide2.style.display = "none";
        slide3.style.display = "none";
        slide4.style.display = "none";
    } else if (page_number == 2 && isEmail == true) {
        slide1.style.display = "none";
        slide2.style.display = "flex";
        slide3.style.display = "none";
        slide4.style.display = "none";
    } else if (page_number == 3 && isPass == true) {
        slide1.style.display = "none";
        slide2.style.display = "none";
        slide3.style.display = "flex";
        slide4.style.display = "none";
    } else if (page_number == 4 && isFinish == true) {
        slide1.style.display = "none";
        slide2.style.display = "none";
        slide3.style.display = "none";
        slide4.style.display = "flex";
    }
}