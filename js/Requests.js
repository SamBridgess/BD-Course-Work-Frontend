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

var opers = [];
let operatorsOfUserUrl = 'http://localhost:52420/api/v1/users/' + currentUser +'/operators/';
async function requestUserOperators(){
    for(let i = 0; i < opersNameTemp.length; i++) {
        await (await fetch(operatorsOfUserUrl + opersNameTemp[i], {
            method: "GET",
        })).json().then(
            function (data){
                opers.push(data);
            }
        );
    }
}

let weaponAttachmentsUrl =
    'http://localhost:52420/api/v1/users/' + currentUser + '/operators/';

async function requestWeaponAttachments(operatorName, weapon){
    await (await fetch(operatorsOfUserUrl + operatorName + '/weapons/' + weapon, {
        method: "GET",
    })).json().then(
        function (data){
            requestedWeapon = data;
        }
    );
}
