var opersNameTemp = ['Sledge', 'Ash', 'IQ', 'Rook'];

async function loadOperators() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    for(let i = 0; i < opersNameTemp.length; i++){
        let oper = opers[i];
        let nameStr = opersNameTemp[i];

        let singlePanel = document.createElement('div');
        singlePanel.className = 'single_operator_panel';



        let icon = new Image();
        if(oper['team'])
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
        statsStr += 'Speed: ' + oper['speed'] + '<br>';
        statsStr += 'Armor: ' + oper['armor'] + '<br>';
        statsStr += 'Team: ' + oper['team'] + '<br>';
        statsStr += 'Ability: ' + oper['ability'] + '<br>';
        statsStr += 'Price: ' + oper['price'] + '<br>';
        statsStr += 'Win Rate: ' + oper['winRate'] + '<br>';
        statsStr += 'Round Played: ' + oper['roundsPlayed'] + '<br>';
        statsStr += 'Difficulty: ' + oper['difficulty'] + '<br>';
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

        let primaryWeaponSelect = createWeaponSelect(oper['weapons'], true);
        primaryWeaponSelect.id = nameStr + '_primary_select';
        let secondaryWeaponSelect = createWeaponSelect(oper['weapons'], false);
        secondaryWeaponSelect.id = nameStr + '_secondary_select';
        let gadgetSelect = createSelect(oper['gadgets']);
        let skinSelect = createSelect(oper['skins']);
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