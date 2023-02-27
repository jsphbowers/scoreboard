teams = []

let team = {
  name: '',
  score: 0
}



function homeScore() {
  console.log("home scored " + teams.team);
  team.score++
  drawScore()
}

function awayScore() {
  console.log("away scored " + teams.team);
  team.score++
  drawScore()
}

function homeBigScore() {
  console.log("big home score " + team);
  team.score += 3
  drawScore()
}

function awayBigScore() {
  console.log("big away score " + team);
  team.score += 3
  drawScore()
}

function scoreReset() {
  console.log("score reset");
  team.score = 0
  team.score = 0
  drawScore()
}

function drawScore() {
  let homeTotalScore = document.getElementById("homeTotal")
  let awayTotalScore = document.getElementById("awayTotal")

  homeTotalScore.innerText = team.score
  awayTotalScore.innerText = team.score
  teamWins()
}

function teamWins() {
  if (team.score >= 10) {
    console.log("YOU WIN!!!")
    let winningTeam = document.getElementById("first-team")
    window.alert(winningTeam + " YOU WIN!!!")
  }
}