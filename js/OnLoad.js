var currentUser = 'AshMainNoBrain'

var usernameReq, levelReq, rankReq, currencyReq,
    winRateReq, winsReq, losesReq, kdReq, killsReq, deathsReq;
var maps = [];

window.onload = async function () {
    await requestUserStats();
    await requestUserMaps();

    document.getElementById("stats_button").click()
}