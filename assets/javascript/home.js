
$.ajax({
    //headers: {
    //"Client-ID": "y5d67zepc6iut00ks7u7gukvfirtvy"
    //},
    method: "GET",
    url: "https://api.opendota.com/api/proMatches"
}).then(function (res) {


    let radiantTeams = [];
    let direTeams = [];
    let leagueNames = [];
    let winners = [];
    let winnersNames = [];

    for (let i = 0; i < 8; i++) {
        radiantTeams.push(res[i].radiant_name);
        direTeams.push(res[i].dire_name);
        leagueNames.push(res[i].league_name);
        winners.push(res[i].radiant_win);
    }

    for (let i = 0; i<winners.length; i++) {
        if (winners[i]) {
            winnersNames.push(radiantTeams[i])
        }
        else {
            winnersNames.push(direTeams[i])
        }
    }

    for (let i = 0; i < radiantTeams.length; i++) {
        $("#tbody").append("<tr><td>"+radiantTeams[i]+"</td><td>"+direTeams[i]+"</td><td>"+leagueNames[i]+"</td><td>"+winnersNames[i]+"</td></tr>")
    }
});