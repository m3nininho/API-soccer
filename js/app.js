const linkDefault = 'https://apiv3.apifootball.com/?action=get_teams&league_id=302&APIkey=';
const apiKey = '14b47eef4be63e8d7d01b52ac8291f127c01de4011aac559448da4f88d7c8060';
const getTeams = linkDefault + apiKey;

getData(getTeams);

function getData(link){
  fetch(link)
  .then(response => response.json())
  .then((data) => {
      return collectedData(data);
    })
}

function collectedData(data){

  const teams = data;
  const teamsBox = document.getElementById('teamsBox');


  teams.forEach((team) => {
    const box = document.createElement('div');

    box.classList.add('box-team');
    teamsBox.appendChild(box);

    box.innerHTML = 
    `
    <img src=${team.team_badge}>
    <p>${team.team_name}</p>
    <img src=${'../assets/arrow-down.svg'} class="arrow">
    `
   
  })

}

