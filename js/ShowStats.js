async function showStats() {
    if(currentWindow === 'stats') return;
    currentWindow = 'stats';

    const content = document.getElementById('content');
    content.innerHTML = '';

    // Stats Header
    const statsHeader = document.createElement('div');
    statsHeader.className = 'stats_header';


    let pfp = new Image();
    pfp.className = 'profile_picture';
    pfp.src = '../images/default_pfp.jpg';
    statsHeader.appendChild(pfp);

    let levelBlock = document.createElement('div');
    levelBlock.className = 'level_block';
    let levelIcon = new Image();
    levelIcon.className = 'level_icon';
    levelIcon.src = '../images/level_icon.png';
    let levelValue = document.createElement('div');
    levelValue.className = 'level_value';
    levelValue.innerHTML = levelReq;
    levelBlock.appendChild(levelIcon);
    levelBlock.appendChild(levelValue);
    statsHeader.appendChild(levelBlock);



    let username = document.createElement('h1');
    username.className = 'stats_username';
    username.innerHTML = usernameReq;
    statsHeader.appendChild(username);

    content.appendChild(statsHeader);







    let renownBlock = document.createElement('div');
    renownBlock.className = 'renown_block';
    let renownIcon = new Image();
    renownIcon.src = '../images/renown_icon.png';
    renownIcon.className = 'renown_icon';
    let renownValue = document.createElement('div');
    renownValue.className = 'renown_value';
    renownValue.innerHTML = currencyReq;
    renownBlock.appendChild(renownIcon);
    renownBlock.appendChild(renownValue);




    content.appendChild(renownBlock);

    // Stats
    let stats = document.createElement('p')
    stats.className = 'player_stats';

    let statsStr = '';
    statsStr += '<b>' + 'Rank: ' + '</b>' + rankReq + '<br>';
    statsStr += '<b>' + 'Win Rate: ' + '</b>' + winRateReq + '<br>';
    statsStr += '<b>' + 'Wins: ' + '</b>' + winsReq + '<br>';
    statsStr += '<b>' + 'Loses: ' + '</b>' + losesReq + '<br>';
    statsStr += '<b>' + 'K/D: ' + '</b>' + kdReq + '<br>';
    statsStr += '<b>' + 'Kills: ' + '</b>' + killsReq + '<br>';
    statsStr += '<b>' + 'Deaths: ' + '</b>' + deathsReq + '<br>';
    stats.innerHTML = statsStr;


    content.appendChild(stats);
}