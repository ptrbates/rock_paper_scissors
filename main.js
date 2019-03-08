const computerPlay = () => {
  const randInt = Math.floor(Math.random() * 3);
  switch (randInt) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    default:
      return "Scissors";
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
  let ps = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
  if (ps === computerSelection) {
    return "It's a boring tie.";
  } else if (ps === 'Rock' && computerSelection === 'Scissors' ||
    ps === 'Scissors' && computerSelection === 'Paper' ||
    ps === 'Paper' && computerSelection === 'Rock') {
    return 1;
  } else {
    return `You lose. ${computerSelection} beats ${ps}.`;
  }
}
const game = () => {
  let playerWins = 0;
  for (let i = 0; i < 5; i++) {
    const playerChoice = prompt("Paper, Rock, or Scissors?");
    const computerChoice = computerPlay();
    const res = playRound(playerChoice, computerChoice);

    if (res === 1) {
      console.log(`You win. ${playerChoice} beats ${computerChoice}.`);
      playerWins++;
    } else if (res === -1) {
      console.log(`You lose. ${computerChoice} beats ${playerChoice}.`);
    } else {
      console.log(`It's a boring tie of ${playerChoice}s.`);
    }
  }

  if (playerWins >= 3) {
    console.log(`Having won ${playerWins} rounds, you win.`);
  } else {
    console.log(`You only won ${playerWins} rounds. Better luck next time.`);
  }
}