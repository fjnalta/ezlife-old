$(document).ready(function () {
    "use strict";
    $("#content").load("content/home.html");
});

function loadContent(content) {
    "use strict";
    switch (content) {
    case "ezlife":
        $("#content").load("content/home.html");
        break;
    case "chat":
        $("#content").load("content/chat.html");
        break;
    default:
        break;
    }
}