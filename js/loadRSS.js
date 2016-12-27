function createEntry(link, title, date, id) {
    "use strict";
    var myFeed = document.createElement("P");
    var mylink = document.createElement("A");
    mylink.setAttribute('href', link);
    mylink.appendChild(document.createTextNode(title));
    myFeed.appendChild(document.createTextNode(date));
    myFeed.appendChild(document.createTextNode(" - "));
    myFeed.appendChild(mylink);
    document.getElementById(id).appendChild(myFeed);
}

function loadRSS(feed) {
    "use strict";
    var twitchFeed;
    
    switch (feed) {
    case "ezlife":
        twitchFeed = "https://ezlife.eu/apps/gitlab/philippm/ezlife.eu/commits/master.atom";
        break;
    case "ezRunner":
        twitchFeed = "https://ezlife.eu/apps/gitlab/philippm/unity-android-mario/commits/master.atom";
        break;
    default:
        break;
    }
    
    $.ajax(twitchFeed, {
        accepts: {
            xml: "application/xml"
        },
        dataType: "xml",
        success: function (data) {
            $(data).find("entry").slice(0, 10).each(function () {
                var el = $(this);
                createEntry(el.find("id").text(), el.find("title").text(), el.find("updated").text(), feed);
            });
        }
    });
}