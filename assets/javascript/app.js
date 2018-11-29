$.ajax({
    headers: {
        "Client-ID": "y5d67zepc6iut00ks7u7gukvfirtvy"
    },
    method: "GET",
    url: "https://api.twitch.tv/kraken/streams?game=dota+2"
}).then(function (res) {
    console.log(res)
    console.log(res.streams[1].channel.name);
    for (i = 0; i < 10; i++) {
        $("#" + i).attr("value", res.streams[i].channel.name);
        $("#" + i).text(res.streams[i].channel.name);
    }
    $("iframe").attr("src", "https://player.twitch.tv/?channel=" + res.streams[0].channel.name);

}).catch(function (err) {
    console.log("error", err)
});

$.ajax({
    //headers: {
    //"Client-ID": "y5d67zepc6iut00ks7u7gukvfirtvy"
    //},
    method: "GET",
    url: "https://api.opendota.com/api/teams"
}).then(function (res) {

    for (var i = 0; i < 10; i++) {

        var teamRow = $("<tr><td>" + (i + 1) + "</td><td>" + res[i].name + "</td><td>" + res[i].rating + "</td><td>" + res[i].wins +
            "</td><td>" + res[i].losses + "</td></tr>")
        $("#table-body").append(teamRow)

        console.log(res[i].name);
    }

    console.log(res);
    console.log(res["0"].banner)
})

var apiURL = 'https://proxy-cbc.herokuapp.com/proxy';

//the url for google places
var queryURL = 'http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=570&count=7&maxlength=300&format=json'

$.ajax({
    url: apiURL,
    method: "POST",
    data: {
        "url": queryURL
    }
}).then(function (response) {
    console.log(response);
    var steamNews = []
    for (var i = 0; i < response.data.appnews.newsitems.length; i++) {


        var feedCounter = 0;

        if (response.data.appnews.newsitems[i].feed_type === 0 && feedCounter <= 6) {
            feedCounter++;
            steamNews.push(response.data.appnews.newsitems[i])
        };

    }
    for (var j = 0; j< steamNews.length; j++)
        {$("#auth" + j).text(steamNews[j].title);
        $("#auth" + j).attr("href", steamNews[j].url);
        $(".img-link" + j).attr("href", steamNews[j].url);}

});

$(".link").on("click", function () {
    console.log($(this).attr("value"));
    $("iframe").attr("src", "https://player.twitch.tv/?channel=" + $(this).attr("value"));

})

var imagesArray = ['assets/images/Bloodseeker_poster.0.jpg', 'assets/images/dota-2-grimstroke.jpg', 'assets/images/dota-2-update-7-0-changes.jpg.optimal.jpg', 'assets/images/test-your-dota-2-knowledge.jpg', 'assets/images/ursa.jpg', 'assets/images/ember.png']
function getRandomImage(imgAr, path) {
    Shuffle(imgAr);
    for (var i = 0; i <= imgAr.length; i++) {
        path = path || 'assets/images/'; // default path here
        var img = imgAr[i];
        $(".media-object" + i).attr("src", img);
    };
}


getRandomImage(imagesArray, 'assets/images');

function Shuffle(o) {
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

