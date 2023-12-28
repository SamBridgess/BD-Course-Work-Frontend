async function showMaps() {
    if(currentWindow === 'maps') return;
    currentWindow = 'maps';
    const content = document.getElementById('content');
    content.innerHTML = '';

    for (let i = 0; i < maps.length; i++) {
        let mapNameStr = maps[i]['name'];

        let singlePanel = document.createElement('div');
        singlePanel.className = 'single_map_panel';
        singlePanel.style.backgroundImage =
            'linear-gradient(to left, transparent, #333333 70%), ' +
            'url("images/maps/' + mapNameStr + '.jpg")';

        let mapName = document.createElement('div');
        mapName.className = 'map_name';
        mapName.innerHTML = mapNameStr;
        singlePanel.appendChild(mapName);


        let stats = document.createElement('p')
        stats.className = 'map_stats';

        let statsStr = '';
        statsStr += '<b>' + 'Difficulty: ' + '</b>' + maps[i]['difficulty'] + '<br>';
        statsStr += '<b>' + 'Rounds played: ' + '</b>' + maps[i]['roundsPlayed'] + '<br>';
        if (maps[i]['ranked']) {
            statsStr += '<b style="color:green;">' + 'Ranked' + '</b>' + '<br>';
        } else {
            statsStr += '<b style="color:red;">' + 'Unranked' + '</b>' + '<br>';
        }
        stats.innerHTML = statsStr;
        singlePanel.appendChild(stats);


        content.appendChild(singlePanel);
    }
}
