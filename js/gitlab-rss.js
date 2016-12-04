var feed = "https://ezlife.eu/apps/gitlab/philippm/ezlife.eu/commits/master.atom";

function createEntry(link, title, date) {
    var myFeed = document.createElement("P");
    var mylink = document.createElement("A");
    mylink.setAttribute('href', link);
    mylink.appendChild(document.createTextNode(title));
    myFeed.appendChild(document.createTextNode(date));
    myFeed.appendChild(document.createTextNode(" - "))
    myFeed.appendChild(mylink);
    document.getElementById("ezlifeRSS").appendChild(myFeed);
}

function loadezlifeRSS() {
    $.ajax(feed, {
        accepts: {
            xml: "application/xml"
        },
        dataType: "xml",
        success: function (data) {
            $(data).find("entry").each(function () {
                var el = $(this);
                createEntry(el.find("link").text(), el.find("title").text(), el.find("updated").text());
            });
        }
    });
}