var currentUser = sessionStorage.getItem('username');

var usernameReq, levelReq, rankReq, currencyReq,
    winRateReq, winsReq, losesReq, kdReq, killsReq, deathsReq;
var maps = [];

window.onload = async function () {
    await requestUserStats();
    await requestUserMaps();
    await requestUserOperators(opersNameTemp);

    document.getElementById("stats_button").click()
}