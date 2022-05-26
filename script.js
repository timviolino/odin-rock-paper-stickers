function computerPlay() {
  var n = Math.floor(Math.random()*3);
  if (n == 0) {
    return "rock";
  }
  else if (n == 1) {
    return "paper";
  }
  else {
    return "stickers";
  }
}

function playGame(playerSelection, computerSelection) {
  var data = ['rock', 'paper', 'stickers'];
  var i = data.indexOf(playerSelection);
  var j = i-1 > 0 ? i-1 : data.length-1;
  console.log(j);
  if (playerSelection == computerSelection) {
    return "You tied..."; 
  }
  else if (data[j] == computerSelection) {
    return "You win " + playerSelection + " beats " + computerSelection;
  }
  return "You lose " + computerSelection + " beats " + playerSelection;
}
