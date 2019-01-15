
$.ajax({
    //headers: {
    //"Client-ID": "y5d67zepc6iut00ks7u7gukvfirtvy"
    //},
    method: "GET",
    url: "https://api.opendota.com/api/proMatches"
}).then(function (res) {

    console.log(res)

    let radiantTeams = [];
    let direTeams = [];
    let leagueNames = [];
    let winners = [];
    let winnersNames = [];

    // for (let i = 1; i < 8; i ++) {
    //     console.log(res[i]);
    //     $("#tbody").append("<tr><td>"+res[i].dire_name+"</td><td>"+res[i].radiant_name+"</td><td>"+res[i].league_name+"</td><td>"+</tr>")
    // }

    for (let i = 0; i < 8; i++) {
        radiantTeams.push(res[i].radiant_name);
        direTeams.push(res[i].dire_name);
        leagueNames.push(res[i].league_name);
        winners.push(res[i].radiant_win);
    }

    console.log(radiantTeams)
    console.log(direTeams)
    console.log(winners)


    for (let i = 0; i<winners.length; i++) {
        console.log(winners[i]);
        if (winners[i]) {
            console.log(radiantTeams[i])
            winnersNames.push(radiantTeams[i])
        }
        else {
            console.log("Dire won")
            winnersNames.push(direTeams[i])
            console.log(direTeams[i]);
        }
    }
    

    // for (let i = 0; i < winners.length; i++) {
    //     if (winners[i] === "true") {
    //         winnersNames.push(radiantTeams[i]);
    //     }
    //     else {
    //         winnersNames.push(direTeams[i]);
    //     }
    // }

    // console.log("Winners Names:" + winnersNames);

    for (let i = 0; i < radiantTeams.length; i++) {
        $("#tbody").append("<tr><td>"+radiantTeams[i]+"</td><td>"+direTeams[i]+"</td><td>"+leagueNames[i]+"</td><td>"+winnersNames[i]+"</td></tr>")
    }
});