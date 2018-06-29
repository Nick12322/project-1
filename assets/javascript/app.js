$.ajax({
    headers: {
        "Client-ID": "y5d67zepc6iut00ks7u7gukvfirtvy"
    },
    method: "GET",
    url: "https://api.twitch.tv/kraken/streams?game=dota+2"
}).then(function (res) {
    console.log(res)
    console.log(res.streams[1].channel.name);
    $("iframe").attr("src", "https://player.twitch.tv/?channel=" + res.streams[0].channel.name)
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
var queryURL = 'http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=570&count=100&maxlength=300&format=json'

$.ajax({
    url: apiURL,
    method: "POST",
    data: {
        "url": queryURL
    }
}).then(function (response) {
    console.log(response);
    console.log(response.data.appnews.newsitems[1].contents);

});
