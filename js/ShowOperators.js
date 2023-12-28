let opersNameTemp = ['Sledge', 'Ash', 'IQ', 'Rook', 'Mute'];

async function showOperators() {
    if(currentWindow === 'operators') return;
    currentWindow = 'operators';
    allTempOperators = [];
    await requestUserOperators(opersNameTemp);
    const content = document.getElementById('content');
    content.innerHTML = '';

    for(let i = 0; i < opersNameTemp.length; i++){
        let operJSON = allTempOperators[i];
        let currentOperNameStr = opersNameTemp[i];

        let singlePanel = document.createElement('div');
        singlePanel.className = 'single_operator_panel';



        let icon = new Image();
        if(operJSON['team'])
            icon.src = 'images/attacker_icons/' + currentOperNameStr + '.png';
        else
            icon.src = 'images/defender_icons/' + currentOperNameStr + '.png';

        icon.className = 'operator_icon';
        singlePanel.appendChild(icon);


        let operatorInfo = document.createElement('div');
        operatorInfo.className = 'operator_info';

        let operatorName = document.createElement('h1');
        operatorName.innerHTML = currentOperNameStr;
        operatorName.className = 'operator_name';
        operatorInfo.appendChild(operatorName);

        let operatorStats = document.createElement('div');
        let statsStr = '';
        statsStr += '<b>' + 'Speed: ' + '</b>' + operJSON['speed'] + '<br>';
        statsStr += '<b>' + 'Armor: ' + '</b>' + operJSON['armor'] + '<br>';
        if(operJSON['team'])
            statsStr += '<b>' + 'Team: ' + '</b>' + 'Attack' + '<br>';
        else
            statsStr += '<b>' + 'Team: ' + '</b>' + 'Defence' + '<br>';


        statsStr += '<b>' + 'Ability: ' + '</b>' + operJSON['ability'] + '<br>';
        statsStr += '<b>' + 'Price: ' + '</b>' + operJSON['price'] + '<br>';
        statsStr += '<b>' + 'Win Rate: ' + '</b>' + operJSON['winRate'] + '<br>';
        statsStr += '<b>' + 'Round Played: ' + '</b>' + operJSON['roundsPlayed'] + '<br>';
        statsStr += '<b>' + 'Difficulty: ' + '</b>' + operJSON['difficulty'] + '<br>';
        operatorStats.innerHTML = statsStr;
        operatorStats.style.color = 'white';
        operatorInfo.appendChild(operatorStats);
        singlePanel.appendChild(operatorInfo);




        let settingsButtonBlock = document.createElement('div');
        settingsButtonBlock.className = 'settings_button_block';

        let primaryButton = document.createElement('button');
        primaryButton.className = 'settings_button';
        primaryButton.id = 'primary_settings_button'
        primaryButton.onclick = function () { openPopup(this.id, currentOperNameStr)};


        settingsButtonBlock.appendChild(primaryButton);

        let secondaryButton = document.createElement('button');
        secondaryButton.className = 'settings_button';
        secondaryButton.id = 'secondary_settings_button';
        secondaryButton.onclick = function () { openPopup(this.id, currentOperNameStr)};
        settingsButtonBlock.appendChild(secondaryButton);

        singlePanel.appendChild(settingsButtonBlock);





        let selectionBlock = document.createElement('div');
        selectionBlock.className = 'selection_block';

        let primaryWeaponSelect = createWeaponSelect(operJSON['weapons'], true, operJSON['selectedPrimary']);
        primaryWeaponSelect.id = currentOperNameStr + '_primary_select';
        primaryWeaponSelect.onchange = function () { sendUpdatedWeapon('change_primary_weapon', this.value, currentOperNameStr)};

        let secondaryWeaponSelect = createWeaponSelect(operJSON['weapons'], false, operJSON['selectedSecondary']);
        secondaryWeaponSelect.id = currentOperNameStr + '_secondary_select';
        secondaryWeaponSelect.onchange = function () { sendUpdatedWeapon('change_secondary_weapon', this.value, currentOperNameStr)};

        let gadgetSelect = createOtherSelect(operJSON['gadgets'], operJSON['selectedGadget']);
        gadgetSelect.id = currentOperNameStr + '_gadget_select';
        gadgetSelect.onchange = function () { sendUpdatedWeapon('change_gadget', this.value, currentOperNameStr)};

        let skinSelect =  createOtherSelect(operJSON['skins'], operJSON['selectedSkin']);
        skinSelect.id = currentOperNameStr + '_skin_select';
        skinSelect.onchange = function () { sendUpdatedWeapon('change_skin', this.value, currentOperNameStr)};

        selectionBlock.appendChild(primaryWeaponSelect);
        selectionBlock.appendChild(secondaryWeaponSelect);
        selectionBlock.appendChild(gadgetSelect);
        selectionBlock.appendChild(skinSelect);
        singlePanel.appendChild(selectionBlock);


        content.appendChild(singlePanel);
    }
}
function determineId(array, id){
    return array.find(obj => obj.id === id);
}
function tempApply(i){
    if(document.getElementById(allTempOperators[i]['name'] + '_primary_select').value !== undefined)
    allTempOperators[i]['selectedPrimary'] = determineId(allTempOperators[i]['weapons'],
        document.getElementById(allTempOperators[i]['name'] + '_primary_select').value);

    if(document.getElementById(allTempOperators[i]['name'] + '_secondary_select').value !== undefined)
        allTempOperators[i]['selectedSecondary'] = determineId(allTempOperators[i]['weapons'],
        document.getElementById(allTempOperators[i]['name'] + '_secondary_select').value);

    if(document.getElementById(allTempOperators[i]['name'] + '_gadget_select').value !== undefined)
        allTempOperators[i]['selectedGadget'] = determineId(allTempOperators[i]['weapons'],
        document.getElementById(allTempOperators[i]['name'] + '_gadget_select').value);

    if(document.getElementById(allTempOperators[i]['name'] + '_skin_select').value !== undefined)
        allTempOperators[i]['selectedSkin'] = determineId(allTempOperators[i]['weapons'],
        document.getElementById(allTempOperators[i]['name'] + '_skin_select').value);
}
function createWeaponSelect (array, isPrimary, selectedId) {
    let selectArr = [];
    let selected
    for(let i = 0; i < array.length; i++) {
        if(array[i]['primary'] === isPrimary)
            selectArr.push(array[i]['name']);

        if(array[i]['id'] === selectedId)
            selected = selectArr.length - 1;
    }
    return createSelect(selectArr, selected);
}
function createOtherSelect(array, selectedId){
    let selectArr = [];
    let selected
    for(let i = 0; i < array.length; i++) {
        selectArr.push(array[i]['name']);
        if(array[i]['id'] === selectedId)
            selected = selectArr.length -1 ;
    }
    return createSelect(selectArr, selected);
}
function createSelect(array, selectedIndex){
    let select = document.createElement('select');
    select.className = 'select_equipment';
    for(let i = 0; i < array.length; i++) {
        let option = document.createElement('option');
        option.value = array[i];
        option.textContent = array[i];
        select.appendChild(option);
        if(i === selectedIndex)
            select.selectedIndex = i; // change to id
    }
    return select;
}