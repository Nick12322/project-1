<<<<<<< HEAD
// client id: y5d67zepc6iut00ks7u7gukvfirtvy

//curl -H 'Client-ID: p0gch4mp101fy451do9uod1s1x9i4a' \
//-X GET 'https://api.twitch.tv/helix/streams?game_id=33214'

// $.ajax({
//     headers: {
//         "Client-ID": "y5d67zepc6iut00ks7u7gukvfirtvy"
//     },
//     method: "GET",
//     url: "https://api.twitch.tv/kraken/streams?game=dota+2"
// }).then(function (res) {
//     console.log(res)
//     console.log(res.streams[1].channel.name);
//     $("iframe").attr("src", "https://player.twitch.tv/?channel=" + res.streams[1].channel.name)
// }).catch(function (err) {
//     console.log("error", err)
// });
=======
$.ajax({
    headers: {
        "Client-ID": "y5d67zepc6iut00ks7u7gukvfirtvy"
    },
    method: "GET",
    url: "https://api.twitch.tv/kraken/streams?game=dota+2"
}).then(function (res) {
    console.log(res)
    console.log(res.streams[1].channel.name);
    $("iframe").attr("src","https://player.twitch.tv/?channel="+ res.streams[0].channel.name)
}).catch(function (err) {
    console.log("error", err)
});
>>>>>>> 64cae119795c61b25ead3e808001baa745c736b9

$.ajax({
    //headers: {
    //"Client-ID": "y5d67zepc6iut00ks7u7gukvfirtvy"
    //},
    method: "GET",
    url: "https://api.opendota.com/api/teams"
}).then(function (res) {
<<<<<<< HEAD

    for (var i = 0; i < 10; i++) {

        var teamRow = $("<tr><td>" + (i + 1) + "</td><td>" + res[i].name + "</td><td>" + res[i].rating + "</td><td>" + res[i].wins +
            "</td><td>" + res[i].losses + "</td></tr>")
        $("#table-body").append(teamRow)

        console.log(res[i].name);
    }
    console.log(res[0]);
})

// var apiURL = 'https://proxy-cbc.herokuapp.com/proxy';

// //the url for google places
// var queryURL = 'http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=570&count=20&maxlength=300&format=json'

// $.ajax({
//     url: apiURL,
//     method: "POST",
//     data: {
//         "url": queryURL
//     }
// }).then(function (response) {
//     console.log(response);

//     var feedCounter = 0;

//     for (var i = 0; i < response.data.appnews.newsitems.length; i++) {

//         if (response.data.appnews.newsitems[i].feed_type === 0 && feedCounter < 10) {
//             console.log(response.data.appnews.newsitems[i]);
//             feedCounter++;

//             console.log(feedCounter);
//         };

//     };

// });



var teamRow = $("<tr><td></td><td></td><td></td><td></td><td></td></tr>")
$("#table-body").append(teamRow)

// Take news articles for Dota 2 and return top 10 feed_type: 0 articles
// var feedCounter = 0;

//     for (var i = 0; i < response.data.appnews.newsitems.length; i++) {

//         if (response.data.appnews.newsitems[i].feed_type === 0 && feedCounter < 10) {
//             console.log(response.data.appnews.newsitems[i]);
//             feedCounter++;

//             console.log(feedCounter);
//         };

//     };
=======
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
>>>>>>> 64cae119795c61b25ead3e808001baa745c736b9
