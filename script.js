const data = ['rock', 'paper', 'stickers'];
var playerScore = 0;
var computerScore = 0;
initButtons();

function initButtons() {
  btns = document.querySelectorAll('button');
  function addBtnEvents(btn) {
    btn.addEventListener('click', function (){
      playRound(btn.id, computerPlay());
    });
  }
  btns.forEach(addBtnEvents);
}

function computerPlay() {
  return data[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {
  ps = playerSelection.toLowerCase();
  cs = computerSelection.toLowerCase();
  var i = data.indexOf(ps);
  var j = i-1 > 0 ? i-1 : data.length-1;
  var result = '';
  if (ps == cs) {
    result = "You tied..."; 
  }
  else if (data[j] == cs) {
    result = "You win " + ps + " beats " + cs;
  }
  else {
    result = "You lose " + cs + " beats " + ps;
  }
  var p = document.getElementById('results');
  p.textContent = result;
  updateScore(result);
}

function updateScore(result) {
  score = document.getElementById('score');
  if (result.indexOf('win') >= 0) {
    playerScore += 1;
  }
  else if (result.indexOf('lose') >= 0) {
    computerScore += 1;
  }
  score.textContent = "Your score: " + playerScore + ", Computer's score: " +   computerScore; 
  if (playerScore == 5){
    score.textContent = "Yeehaw partner, you won!";
  }
  else if (computerScore == 5) {
    score.textContent = "Uh oh, Computer won the match...";
  }
  
  

}
