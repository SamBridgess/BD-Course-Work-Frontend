var currentUser = sessionStorage.getItem('username');

var usernameReq, levelReq, rankReq, currencyReq,
    winRateReq, winsReq, losesReq, kdReq, killsReq, deathsReq;
var maps = [];

var currentWindow;

var port = '64789';
window.onload = async function () {
    await requestUserStats();
    await requestUserMaps();


    document.getElementById("stats_button").click()
}