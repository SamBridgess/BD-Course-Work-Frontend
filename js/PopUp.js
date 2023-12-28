var requestedWeapon;
async function openPopup(type, operatorName) {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    document.body.style.overflow = 'hidden';

    let popup = document.getElementById('popup_content');
    popup.innerHTML = ''

    let selector;
    if(type === 'primary_settings_button')
        selector = document.getElementById(operatorName + '_primary_select');
    else
        selector = document.getElementById(operatorName + '_secondary_select');


    await requestWeaponAttachments(operatorName, selector.value);



    let weaponTitle = document.createElement('h1');
    weaponTitle.innerHTML = selector.value;
    weaponTitle.className = 'popup_title';
    popup.appendChild(weaponTitle);


    let handleTitle = document.createElement('h1');
    handleTitle.innerHTML = 'Handles: ';
    handleTitle.className = 'attachments_title';
    popup.appendChild(handleTitle);
    let handleSelect = createOtherSelect(requestedWeapon['handles'], requestedWeapon['selectedHandle']);
    handleSelect.onchange = function () { sendUpdatedAttachments('change_handle', selector.value, this.value, operatorName)};
    popup.appendChild(handleSelect);

    let sightTitle = document.createElement('h1');
    sightTitle.innerHTML = 'Sights: ';
    sightTitle.className = 'attachments_title';
    popup.appendChild(sightTitle);
    let sightSelect = createOtherSelect(requestedWeapon['sights'], requestedWeapon['selectedSight']);
    sightSelect.onchange = function () { sendUpdatedAttachments('change_sight', selector.value, this.value, operatorName)};
    popup.appendChild(sightSelect);

    let nozzleTitle = document.createElement('h1');
    nozzleTitle.innerHTML = 'Nozzles: ';
    nozzleTitle.className = 'attachments_title';
    popup.appendChild(nozzleTitle);
    let nozzleSelect =  createOtherSelect(requestedWeapon['nozzles'], requestedWeapon['selectedNozzle']);
    nozzleSelect.onchange = function () { sendUpdatedAttachments('change_nozzle', selector.value, this.value, operatorName)};
    popup.appendChild(nozzleSelect);

    let skinTitle = document.createElement('h1');
    skinTitle.innerHTML = 'Skins: ';
    skinTitle.className = 'attachments_title';
    popup.appendChild(skinTitle);
    let skinSelect =  createOtherSelect(requestedWeapon['skins'], requestedWeapon['selectedSkin']);
    skinSelect.onchange = function () { sendUpdatedAttachments('change_skin', selector.value, this.value, operatorName)};
    popup.appendChild(skinSelect);
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    document.body.style.overflow = 'auto';
}