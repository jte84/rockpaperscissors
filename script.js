function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
      return "rock";
    } else if (computerChoice === 1) {
      return "scissors";
    } else (computerChoice === 2)
    return "paper";
  }

  function getPlayerChoice ()   {
    let playerChoice = prompt ('Enter rock, paper or scissors');
    return playerChoice.toLowerCase()
  }

  function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Draw"
    }   else if (playerChoice === 'rock' && computerChoice === 'scissors')   {
        return "You Win!"
    }   else if (playerChoice === 'paper' && computerChoice === 'rock')   {
        return "You Win!"
    }   else if (playerChoice === 'scissors' && computerChoice === 'paper')  {
        return "You Win!"
    }   else {
        return "You Lose!"
    }

  }

  console.log(playRound(getPlayerChoice(),getComputerChoice()))
  