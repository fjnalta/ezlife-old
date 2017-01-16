function registerUser() {
    // REST-API URL
    var url = "http://chat.ezlife.eu:9090/plugins/restapi/v1/users";
    
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
        xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.setRequestHeader("Authorization", "kAmkjv3879kK0v82");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var json = JSON.parse(xhr.responseText);
                successMessage();
            } else {
                errorMessage();
            }
        };
        xhr.send(data);
    } else {
        // TODO - Passwords do not match
    }
}

function errorMessage(){
    var error = document.createElement("div");
    var tag = document.createElement("a");
    
    // create Error Message
    tag.setAttribute('href','#');
    tag.setAttribute('data-dismiss','alert');
    tag.setAttribute('arial-label','close');
    tag.innerHTML = "&times;"
    tag.className = "close";
    
    error.className = "alert alert-danger alert-dismissable fade in";
    error.appendChild(tag);
    error.innerHTML = "<strong>ERROR!</strong> User not created"

    // show Error Message
    document.getElementById("home").appendChild(error);
}

function successMessage(){
    var success = document.createElement("div");
    var atag = document.createElement("a");
    
    // create Error Message
    atag.setAttribute('href','#');
    atag.setAttribute('data-dismiss','alert');
    atag.setAttribute('arial-label','close');
    atag.innerHTML = "&times;"
    atag.className = "close";
    
    success.className = "alert alert-success alert-dismissable fade in";
    success.appendChild(tag);
    success.innerHTML = "<strong>SUCCESS!</strong> User created"

    // show Error Message
    document.getElementById("home").appendChild(error);
}