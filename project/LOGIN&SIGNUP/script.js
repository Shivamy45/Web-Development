var pageInfo = document.getElementById("pageInfo");
var emailInput = document.getElementById("emailInput");
var passwordBox = document.getElementById("password");
var newEmail = document.getElementById("newEmail");
var loginbtn = document.getElementById("login");
var otpbtn = document.getElementById("otpbtn");
var newORforgot = document.getElementById("newORforgot");

function loginPage() {
    pageInfo.innerText = "Login";
    emailInput.style.display = "block";
    passwordBox.style.display = "block";
    newEmail.style.display = "none";
    loginbtn.style.display = "block";
    otpbtn.style.display = "none";
    newORforgot.innerHTML =
        `
    <a href="#" id="fpass">Forgot password?</a>
    <div id="signup">
    <p id="idInfo">Didn't have an account </p>
    <p id="newUser" onclick="signupPage()">Sign up</p>
    </div>
    `;
}

function signupPage() {
    pageInfo.innerText = "Sign Up";
    emailInput.style.display = "none";
    passwordBox.style.display = "none";
    idInfo.innerText = "Already have an account";
    newUser.innerText = "Login";
    loginbtn.style.display = "none";
    otpbtn.style.display = "block";
    fpass.style.display = "none";
    newEmail.style.display = "block";
    newORforgot.innerHTML =
        `
        <div class="login">
            <p id="idInfo">Already have an account </p>
            <p id="newUser" onclick="loginPage()">Login</p>
        </div>
    `;
}

function togglePass() {
    var pass = document.getElementById("passInput");
    var showhidebtn = document.getElementById("show&hide");
    if (pass.type == "password") {
        pass.type = "text";
        showhidebtn.setAttribute("class", "fa-solid fa-eye-slash");
    } else {
        pass.type = "password";
        showhidebtn.setAttribute("class", "fa-regular fa-eye");
    }
}