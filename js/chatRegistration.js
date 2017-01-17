// always check for Password Match
$(document).ready(function () {
    "use strict";
    $("#password, #password2").keyup(checkPasswordMatch);
});

// Asynchronous Google-Captcha loading - body
var loadCaptcha = function () {
    "use strict";
	grecaptcha.render('captcha', {
        'sitekey' : '6LerExIUAAAAAFxTCbvdsNpOUrsXfxg7yqMniZQT'
    });
};
loadCaptcha();

function setRegistrationState(state) {
    "use strict";
    switch (state) {
    case "success":
        $("#divCheckRegistration").html("Success! User created");
        break;
    case "fail":
        $("#divCheckRegistration").html("Failed! User not created");
        break;
    case "failcaptcha":
        $("#divCheckRegistration").html("Failed! User not created - Captcha wrong");
        break;
    default:
        break;
    }
}

// User Registration
function registerUser() {
    "use strict";
    // REST-API URL
    var url = "https://ezlife.eu/apps/chat";
    
    // Get Variables from HTML-Page
    var user = document.getElementById('username').value;
    var nick = document.getElementById('nickname').value;
    var password = document.getElementById('password').value;
    var password2 = document.getElementById('password2').value;
    var email = document.getElementById('email').value;
    
    // check for captcha first
    if (grecaptcha.getResponse() == "") {
        setRegistrationState("failcaptcha");
    } else {
        // create JSON from data if values match
        if (password === password2 && password.length > 7 && user.length > 2 && user !== "" && nick !== "") {
            var data = JSON.stringify({
                "username": user,
                "password": password,
                "name": nick,
                "email": email
            });
    
            // Start REST-POST
            var xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.setRequestHeader("Authorization", "kAmkjv3879kK0v82");
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 201) {
                    setRegistrationState("success");
                } else {
                    setRegistrationState("fail");
                }
            };
            xhr.send(data);
        } else {
            setRegistrationState("fail");
        }
        grecaptcha.reset();
    }
}

function checkPasswordMatch() {
    "use strict";
    var password = $("#password").val();
    var confirmPassword = $("#password2").val();
    
    if (password !== confirmPassword) {
        $("#password2").css("background-color", "#ff6666");
        $("#divCheckPasswordMatch").html("Passwords do not match!");
    } else {
        $("#password2").css("background-color", "#66cc66");
        $("#divCheckPasswordMatch").html("Passwords match.");
    }
}