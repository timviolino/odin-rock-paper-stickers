const data = ['rock', 'paper', 'stickers'];

function computerPlay() {
  return data[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {
  ps = playerSelection.toLowerCase();
  cs = computerSelection.toLowerCase();
  var i = data.indexOf(ps);
  var j = i-1 > 0 ? i-1 : data.length-1;
  if (ps == cs) {
    return "You tied..."; 
  }
  else if (data[j] == cs) {
    return "You win " + ps + " beats " + cs;
  }
  return "You lose " + cs + " beats " + ps;
}

function game() {
  var playerScore = 0;
  var computerScore = 0;
  for (let i = 1; i <= 5; i++) {
    console.log("Round " + i);
    const playerSelection = prompt("What is your selection?/n");
    const computerSelection = computerPlay();
    var result = playRound(playerSelection, computerSelection);
    console.log(result);
    if (result.indexOf('win') >= 0) {
      playerScore += 1;
    }
    else if (result.indexOf('lose') >= 0) {
      computerScore += 1;
    }
  }
  console.log("Computer won " + computerScore + " time(s)!");
  console.log("You won " + playerScore + " time(s)!");
}
