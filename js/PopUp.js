var requestedWeapon;
async function openPopup(type, operatorName) {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    document.body.style.overflow = 'hidden';

    let selector;
    if(type === 'primary_settings_button')
        selector = document.getElementById(operatorName + '_primary_select');
    else
        selector = document.getElementById(operatorName + '_secondary_select');


    await requestWeaponAttachments(operatorName, selector.value);

    let popup = document.getElementById('popup_content');
    popup.innerHTML = ''

    let handleSelect = createSelect(requestedWeapon['handles']);
    let sightSelect = createSelect(requestedWeapon['sights']);
    let nozzleSelect = createSelect(requestedWeapon['nozzles']);
    let skinSelect = createSelect(requestedWeapon['skins']);

    popup.appendChild(handleSelect);
    popup.appendChild(sightSelect);
    popup.appendChild(nozzleSelect);
    popup.appendChild(skinSelect);
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    document.body.style.overflow = 'auto';
}