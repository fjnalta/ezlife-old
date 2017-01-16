function registerUser() {
    // REST-API URL
    var url = "https://chat.ezlife.eu:9091/plugins/restapi/v1/users";
    
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
            }
        };
    
        xhr.send(data);
        
    } else {
        // TODO - Error Handling
    }
}