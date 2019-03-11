const computerPlay = () => {
  const randInt = Math.floor(Math.random() * 3);
  switch (randInt) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    default:
      return "scissors";
  }
}

const testComputerPlay = n => {
  let [rocks, papers, scissors] = [0, 0, 0];
  for (let i = 0; i < n; i++) {
    const res = computerPlay();
    res === "rock" ? rocks++ :
      res === "paper" ? papers++ :
        scissors++;
  }
  console.log(rocks, papers, scissors);
}

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return 0;
  } else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
    playerSelection === 'scissors' && computerSelection === 'paper' ||
    playerSelection === 'paper' && computerSelection === 'rock') {
    return 1;
  } else {
    return -1;
  }
}

let computerWins = 0;
let tiedGames = 0;
let playerWins = 0;
const scoreKeeper = result => {
  if (result === -1) {
    computerWins++;
  } else if (result === 0) {
    tiedGames++;
  } else {
    playerWins++;
  }
}

const updateScoreBoard = result => {
  const pw = document.getElementById('playerWins');
  const cw = document.getElementById('computerWins');
  const tg = document.getElementById('tiedGames');
  pw.textContent = `Player Wins: ${playerWins}`;
  cw.textContent = `Computer Wins: ${computerWins}`;
  tg.textContent = `Tied Games: ${tiedGames}`;
  const announcer = document.getElementById('announcer');
  if (playerWins >= 5) {
    announcer.textContent = `Player wins the game!`;
  } else if (computerWins >= 5) {
    announcer.textContent = `Computer wins the game!`;
  }
}

const updateComputerChooser = choice => {
  const computerChooser = document.getElementById('computerChooser');
  const initText = document.getElementById('initText');
  computerChooser.src = `images/${choice}.jpg`;
  initText.textContent = '';
}

const imgs = document.getElementsByClassName('playerChoices');
for (i of imgs) {
  i.addEventListener('click', e => {
    const compChoice = computerPlay();
    updateComputerChooser(compChoice);
    const result = playRound(e.target.id, compChoice);
    scoreKeeper(result);
    updateScoreBoard(result);
  });
};
