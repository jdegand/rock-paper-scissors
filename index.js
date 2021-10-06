
// Modal
var modal = document.getElementById('rulesModal');
var btn = document.querySelector('.rules-button');
var closeBtn = document.querySelector('.cross');

btn.onclick = function() {
  modal.style.display = 'block';
}

closeBtn.onclick = function() {
  modal.style.display = 'none';
}

// Game Logic

const buttons = document.querySelectorAll('.button');
let count = 0;
let scoreCount = document.querySelector('.score-count');
let resultText = document.querySelector('.result');
const playAgainButton = document.querySelector('.play-again-button');
const playAgainDiv = document.querySelector('.play-again');
const gameBody = document.querySelector('.game-body');
const step234 = document.querySelector('.step-234');

const playerChoiceDisplay = document.querySelector('.player-choice');
const computerChoiceDisplay = document.querySelector('.ai-choice');

const choices = ['rock', 'paper', 'scissors'];

buttons.forEach(button => button.addEventListener('click', ()=> {
  const playerSelection = button.dataset.selected;
  determineWinner(playerSelection)
}))

function determineWinner(playerSelection){
  const computerSelection = randomChoice();
  
  playerChoiceDisplay.classList.remove('winner');
  computerChoiceDisplay.classList.remove('winner');

  if(playerSelection === computerSelection){
    setTimeout(()=> {
      resultText.innerText = 'Draw';
    }, 2000)
  } else if((playerSelection === 'rock' && computerSelection === 'scissors') ||
  (playerSelection === 'scissors' && computerSelection === 'paper') ||
  (playerSelection === 'paper' && computerSelection === 'rock')) {
    setTimeout(()=> {
      count++;
      scoreCount.innerText = count;
      resultText.innerText = 'You Win';
      playerChoiceDisplay.classList.add('winner');
    }, 2000)
  } else {
    setTimeout(()=> {
      count--;
      scoreCount.innerText = count;
      resultText.innerText = 'You Lose';
      computerChoiceDisplay.classList.add('winner');
    }, 2000)
  }
  displayResults(playerSelection, computerSelection)
}

function randomChoice(){
  return choices[Math.floor(Math.random() * choices.length)];
}

playAgainButton.addEventListener('click', ()=> {
  gameBody.classList.toggle('hidden');
  step234.classList.toggle('hidden');
  playAgainDiv.classList.toggle('hidden');
  computerChoiceDisplay.innerHTML = "";
  playerChoiceDisplay.classList.remove('winner');
  computerChoiceDisplay.classList.remove('winner');
})

function displayResults(playerSelection, computerSelection){

    setTimeout(()=> {
      playerChoiceDisplay.innerHTML = `
      <button class='button ${playerSelection}'>
        <img src='images/icon-${playerSelection}.svg' alt='${playerSelection}'>
        <span class='screen-reader screen-reader-focusable'>${playerSelection}</span>
      </button>
      `;

      gameBody.classList.toggle('hidden');
      step234.classList.toggle('hidden');
    }, 1000)
 
    setTimeout(()=> {
      computerChoiceDisplay.innerHTML = `
      <button class='button ${computerSelection}'>
      <img src='images/icon-${computerSelection}.svg' alt='${computerSelection}'>
      <span class='screen-reader screen-reader-focusable'>${computerSelection}</span>
    </button>
    `;
      playAgainDiv.classList.toggle('hidden');
    }, 2000)

}