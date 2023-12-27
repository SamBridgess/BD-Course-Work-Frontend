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
    let handleSelect = createSelect(requestedWeapon['handles']);
    popup.appendChild(handleSelect);

    let sightTitle = document.createElement('h1');
    sightTitle.innerHTML = 'Sights: ';
    sightTitle.className = 'attachments_title';
    popup.appendChild(sightTitle);
    let sightSelect = createSelect(requestedWeapon['sights']);
    popup.appendChild(sightSelect);

    let nozzleTitle = document.createElement('h1');
    nozzleTitle.innerHTML = 'Nozzles: ';
    nozzleTitle.className = 'attachments_title';
    popup.appendChild(nozzleTitle);
    let nozzleSelect = createSelect(requestedWeapon['nozzles']);
    popup.appendChild(nozzleSelect);

    let skinTitle = document.createElement('h1');
    skinTitle.innerHTML = 'Skins: ';
    skinTitle.className = 'attachments_title';
    popup.appendChild(skinTitle);
    let skinSelect = createSelect(requestedWeapon['skins']);
    popup.appendChild(skinSelect);
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    document.body.style.overflow = 'auto';
}