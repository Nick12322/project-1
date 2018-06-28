// client id: y5d67zepc6iut00ks7u7gukvfirtvy

//curl -H 'Client-ID: p0gch4mp101fy451do9uod1s1x9i4a' \
//-X GET 'https://api.twitch.tv/helix/streams?game_id=33214'

$.ajax({
    headers: {
        "Client-ID": "y5d67zepc6iut00ks7u7gukvfirtvy"
    },
    method: "GET",
    url: "https://api.twitch.tv/kraken/streams/?game=Overwatch&limit=20"
}).then(function (res) {
    console.log(res)
}).catch(function (err) {
    console.log("error", err)
});