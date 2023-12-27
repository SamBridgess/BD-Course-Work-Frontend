let opersNameTemp = ['Sledge', 'Ash', 'IQ', 'Rook'];

async function showOperators() {
    if(currentWindow === 'operators') return;
    currentWindow = 'operators';
    const content = document.getElementById('content');
    content.innerHTML = '';

    for(let i = 0; i < opersNameTemp.length; i++){
        let operJSON = singleTempOperator[i];
        let nameStr = opersNameTemp[i];

        let singlePanel = document.createElement('div');
        singlePanel.className = 'single_operator_panel';



        let icon = new Image();
        if(operJSON['team'])
            icon.src = '../images/attacker_icons/' + nameStr + '.png';
        else
            icon.src = '../images/defender_icons/' + nameStr + '.png';

        icon.className = 'operator_icon';
        singlePanel.appendChild(icon);


        let operatorInfo = document.createElement('div');
        operatorInfo.className = 'operator_info';

        let operatorName = document.createElement('h1');
        operatorName.innerHTML = nameStr;
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
        primaryButton.onclick = function () { openPopup(this.id, nameStr)};


        settingsButtonBlock.appendChild(primaryButton);

        let secondaryButton = document.createElement('button');
        secondaryButton.className = 'settings_button';
        secondaryButton.id = 'secondary_settings_button';
        secondaryButton.onclick = function () { openPopup(this.id, nameStr)};
        settingsButtonBlock.appendChild(secondaryButton);

        singlePanel.appendChild(settingsButtonBlock);





        let selectionBlock = document.createElement('div');
        selectionBlock.className = 'selection_block';

        let primaryWeaponSelect = createWeaponSelect(operJSON['weapons'], true);
        primaryWeaponSelect.id = nameStr + '_primary_select';
        let secondaryWeaponSelect = createWeaponSelect(operJSON['weapons'], false);
        secondaryWeaponSelect.id = nameStr + '_secondary_select';
        let gadgetSelect = createSelect(operJSON['gadgets']);
        let skinSelect = createSelect(operJSON['skins']);
        selectionBlock.appendChild(primaryWeaponSelect);
        selectionBlock.appendChild(secondaryWeaponSelect);
        selectionBlock.appendChild(gadgetSelect);
        selectionBlock.appendChild(skinSelect);
        singlePanel.appendChild(selectionBlock);


        content.appendChild(singlePanel);
    }
}
function createWeaponSelect (array, isPrimary) {
    let selectArr = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i]['primary'] === isPrimary)
            selectArr.push(array[i]['name']);
    }
    return createSelect(selectArr);
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