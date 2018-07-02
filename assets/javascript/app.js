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
var queryURL = 'http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=570&count=5&maxlength=300&format=json'

$.ajax({
    url: apiURL,
    method: "POST",
    data: {
        "url": queryURL
    }
}).then(function (response) {
    console.log(response);
    console.log(response.data.appnews.newsitems[1].contents);
    for (var i = 0; i < response.data.appnews.newsitems.length; i++) {
        

        var feedCounter = 0;

        if (response.data.appnews.newsitems[i].feed_type === 0 && feedCounter <= 5) {
            console.log(response.data.appnews.newsitems[i]);
            feedCounter++;
            $("#auth" + i).text(response.data.appnews.newsitems[i].title);
        };


    };

});

$(".link").on("click", function () {
    console.log($(this).attr("value"));
    $("iframe").attr("src", "https://player.twitch.tv/?channel=" + $(this).attr("value"));

})

var imagesArray = ["https://www.pcgamesn.com/sites/default/files/Dota%202%20logo.jpg", "https://image.redbull.com/rbcom/010/2017-03-24/1331850779523_2/0100/0/1/test-your-dota-2-knowledge.jpg", "https://cdn.vox-cdn.com/thumbor/QYlahziT-bFJ4fPoQXzbe_dwJUY=/0x0:1800x1200/1280x854/cdn.vox-cdn.com/uploads/chorus_image/image/40388834/yurnero-dota-2.0.0.jpg", 'http://cdn1-www.gamerevolution.com/assets/uploads/2018/02/dota-2-screenshot.jpg', 'https://cdn.vox-cdn.com/thumbor/Ywn2-0w2b2h797Kyvoi16tGg2-8=/0x0:1107x589/1200x800/filters:focal(270x289:446x465)/cdn.vox-cdn.com/uploads/chorus_image/image/59530203/Screen_Shot_2018_04_26_at_11.28.47_AM.0.png', 'https://dotesports-cdn-prod-tqgiyve.stackpathdns.com/thumbor/av2tftvpRB6SOHuMT_CSEZM94T0=/1200x0/filters:no_upscale()/https://dotesports-cdn-prod-tqgiyve.stackpathdns.com/article/ba87965c-382e-403d-b764-98f9baae54ac.png']
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
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

