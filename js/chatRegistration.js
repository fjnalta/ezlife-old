function registerUser() {
    // REST-API URL
    var url = "https://ezlife.eu/apps/chat";
    
    // Get Variables from HTML-Page
    var user = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var password2 = document.getElementById('password2').value;
    var email = document.getElementById('email').value;
    
    // create JSON from data
    if (password == password2) {
        var data = JSON.stringify({
            "username": user,
            "password": password,
            "email": email
        });
    
        // Start REST-POST
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.setRequestHeader("Authorization", "kAmkjv3879kK0v82");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var json = JSON.parse(xhr.responseText);
                setRegistrationState("success");
            } else {
                setRegistrationState("fail");
            }
        };
        xhr.send(data);
    } else {
        setRegistrationState("fail");
    }
}

function checkPasswordMatch() {
    var password = $("#password").val();
    var confirmPassword = $("#password2").val();
    
    if (password != confirmPassword) {
        $("#password2").css("background-color", "#ff6666");
        $("#divCheckPasswordMatch").html("Passwords do not match!");
    } else {
        $("#password2").css("background-color", "#66cc66");
        $("#divCheckPasswordMatch").html("Passwords match.");        
    }
}

function setRegistrationState(state) {
    switch (state) {
    case "success":
        $("#divCheckRegistration").html("Success! User created");
        break;
    case "fail":
        $("#divCheckRegistration").html("Failed! User not created");
        break;
    default:
        break;
    }
}

$(document).ready(function () {
   $("#password, #password2").keyup(checkPasswordMatch);
});