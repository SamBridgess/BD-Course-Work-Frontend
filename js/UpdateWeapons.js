let changeWeaponUrl = 'http://localhost:' + port + '/api/v1/users/' + currentUser +'/operators/';
async function sendUpdatedWeapon(mode, weapon, operatorName) {
    let obj = {};
    if(mode === 'change_primary_weapon') obj = {"weaponName": weapon};
    if(mode === 'change_secondary_weapon') obj = {"weaponName": weapon};
    if(mode === 'change_gadget') obj = {"gadgetName": weapon};
    if(mode === 'change_skin') obj = {"skinName": weapon};

    await (await fetch(changeWeaponUrl + operatorName + '/' + mode, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',

        },
        mode: 'cors',

        body: JSON.stringify(obj)
    })).json().then(
        function (data){
            console.log(data);
        }
    );
}

let changeAttachmentUrl = 'http://localhost:' + port +'/api/v1/users/' + currentUser +'/operators/';

async function sendUpdatedAttachments(mode, weapon, attachment, operatorName) {
    let obj = {};
    if(mode === 'change_handle') obj = {"handleName": attachment};
    if(mode === 'change_sight') obj = {"sightName": attachment};
    if(mode === 'change_nozzle') obj = {"nozzleName": attachment};
    if(mode === 'change_skin') obj = {"skinName": attachment};


    await (await fetch(changeAttachmentUrl + operatorName + '/weapons/' + weapon + '/' + mode, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',

        },
        mode: 'cors',

        body: JSON.stringify(obj)
    })).json().then(
        function (data){
            console.log(data);
        }
    );
}