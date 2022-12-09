const img = '../assets/arrow-down.svg'
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
    const infos = document.createElement('div');
    teamsBox.appendChild(box);
    box.classList.add('box-team');
    box.innerHTML = 
    `
    <img src=${team.team_badge}>
    <p>${team.team_name}</p>
    <img src=${img} class="arrow">
    `   
    teamsBox.appendChild(infos)
    infos.classList.add('box-infos');
    infos.innerHTML = `
      <p>Coach: ${team.coaches[0].coach_name}</p>
    `
  })

  const clubs = document.querySelectorAll('.box-team');
  const infos = document.querySelectorAll('.box-infos');
  const arrow = document.querySelectorAll('.arrow')

  for(let i = 0; i < infos.length; i++){
    clubs[i].addEventListener('click', function (){
      infos[i].classList.toggle('active');
      infos[i].classList.toggle('box-infos');
      arrow[i].classList.toggle('arrow-active');
    })
  }


}



