window.onload = function (){
    document.getElementById("stats_button").click()
}
async function loadStats() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    await requestUserStats();

    // Stats Header
    const statsHeader = document.createElement('div');
    statsHeader.className = 'stats_header';

    let pfp = new Image();
    pfp.className = 'profile_picture';
    pfp.src = '../images/default_pfp.jpg';
    statsHeader.appendChild(pfp);

    let username = document.createElement('h1');
    username.className = 'stats_username';
    username.innerHTML = usernameReq;
    statsHeader.appendChild(username);


    // Stats
    let stats = document.createElement('p')
    stats.className = 'player_stats';

    let statsStr = '';
    statsStr += 'Win Rate: ' + winRateReq + '<br>';
    statsStr += 'Wins: ' + winsReq + '<br>';
    statsStr += 'Loses: ' + losesReq + '<br>';
    statsStr += 'K/D: ' + kdReq + '<br>';
    statsStr += 'Kills: ' + killsReq + '<br>';
    statsStr += 'Deaths: ' + deathsReq + '<br>';
    stats.innerHTML = statsStr;


    content.appendChild(statsHeader);
    content.appendChild(stats);
}