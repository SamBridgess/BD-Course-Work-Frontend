var currentUser = 'AshMainNoBrain'

var usernameReq, levelReq, rankReq, currencyReq,
    winRateReq, winsReq, losesReq, kdReq, killsReq, deathsReq;
var maps = [];

let statsOfUserUrl = 'http://localhost:52420/api/v1/users/' + currentUser;
async function requestUserStats(){
    await (await fetch(statsOfUserUrl, {
        method: "GET",
    })).json().then(
        function (data){
            setUserStats(data);
        }
    );
}
function setUserStats(data){
    usernameReq = data['username'];
    levelReq = data['level'];
    rankReq = data['rank'];
    currencyReq = data['currency'];
    winRateReq= data['stats']['winRate'];
    winsReq = data['stats']['wins'];
    losesReq = data['stats']['loses'];
    kdReq = data['stats']['kd'];
    killsReq = data['stats']['kills'];
    deathsReq = data['stats']['deaths'];
}

let mapsOfUserUrl = 'http://localhost:52420/api/v1/statistics/' + currentUser;

async function requestUserMaps(){
    await (await fetch(mapsOfUserUrl, {
        method: "GET",
    })).json().then(
        function (data){
            maps = data;
        }
    );
}
function setUserMaps(data){

}
