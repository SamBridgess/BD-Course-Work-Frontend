function loadStats() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    // Stats Header
    const statsHeader = document.createElement('div');
    statsHeader.className = 'stats_header';

    let pfp = new Image();
    pfp.className = 'profile_picture';
    pfp.src = '../images/default_pfp.jpg';
    statsHeader.appendChild(pfp);

    let username = document.createElement('h1');
    username.className = 'stats_username';
    username.innerHTML = 'SamBridges.-';
    statsHeader.appendChild(username);


    // Stats
    let stats = document.createElement('p')
    stats.className = 'player_stats';

    let statsStr = '';
    statsStr += 'Win Rate: ' + '1.0' + '<br>';
    statsStr += 'Wins: ' + '100' + '<br>';
    statsStr += 'Loses: ' + '100' + '<br>';
    statsStr += 'K/D: ' + '2.0' + '<br>';
    statsStr += 'Kills: ' + '50' + '<br>';
    statsStr += 'Deaths: ' + '25' + '<br>';
    stats.innerHTML = statsStr;


    content.appendChild(statsHeader);
    content.appendChild(stats);
}