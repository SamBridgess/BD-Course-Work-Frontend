function loadOperators() {
    const content = document.getElementById('content');
    content.innerHTML = '';

///////// for cycle
    for(let i = 0; i < 7; i++){
        let nameStr = 'Ash';

        let singlePanel = document.createElement('div');
        singlePanel.className = 'single_panel';


        let icon = new Image();
        icon.src = '../images/attacker_icons/' + nameStr + '.png';
        icon.className = 'operator_icon';
        singlePanel.appendChild(icon);

        let operatorInfo = document.createElement('div');
        operatorInfo.className = 'operator_info';

        let operatorName = document.createElement('h1');
        operatorName.innerHTML = nameStr;
        operatorName.style.color = 'white';
        operatorName.style.fontSize = '30px';
        operatorInfo.appendChild(operatorName);

        let equipmentSelect = document.createElement('div');
        equipmentSelect.className = 'selection_block';

        let primaryArray = ['primary1', 'primary2', 'primary3'];
        let secondaryArray = ['secondary1', 'secondary2', 'secondary3'];
        let gadgetArray = ['gadget1', 'gadget2', 'gadget3'];
        let skinArray = ['skin1', 'skin2', 'skin3'];
        let primaryWeaponSelect = createSelect(primaryArray, 1); // change to id
        let secondaryWeaponSelect = createSelect(secondaryArray, 1); // change to id
        let gadgetSelect = createSelect(gadgetArray, 1); // change to id
        let skinSelect = createSelect(skinArray, 1); // change to id
        equipmentSelect.appendChild(primaryWeaponSelect);
        equipmentSelect.appendChild(secondaryWeaponSelect);
        equipmentSelect.appendChild(gadgetSelect);
        equipmentSelect.appendChild(skinSelect);
        operatorInfo.appendChild(equipmentSelect);

        singlePanel.appendChild(operatorInfo);

        content.appendChild(singlePanel);
    }


/////////
}
function createSelect(array, selectedIndex){
    let select = document.createElement('select');
    select.className = 'select_equipment';
    // select.style.flexGrow = '1';
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