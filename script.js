let playerScore = 0;
let computerScore = 0;
let draw = 0
   
   // Get Computer Choice
function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
      return "rock";
    } else if (computerChoice === 1) {
      return "scissors";
    } else (computerChoice === 2)
    return "paper";
  }
  // Get Player Choice
function getPlayerChoice ()   {
    const  playerChoice = prompt ('Enter rock, paper or scissors');
    return playerChoice.toLowerCase()
  }
  // Determine winner and sum score
  function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        draw = draw + 1;
        return "Draw, nobody wins"
    }   else if (playerChoice === 'rock' && computerChoice === 'scissors')   {
        playerScore = playerScore + 1;
        return "You Win! Rock beats Scissors!"
    }   else if (playerChoice === 'paper' && computerChoice === 'rock')   {
        playerScore = playerScore + 1;
        return "You Win! Paper beats Rock!"
    }   else if (playerChoice === 'scissors' && computerChoice === 'paper')  {
        playerScore = playerScore + 1;
        return "You Win! Scissors beats Paper!"
    }   else if (computerChoice === 'scissors' && playerChoice === 'paper')  {
        computerScore = computerScore + 1;
        return "You Lose! Scissors beats Paper!"
    }   else if (computerChoice === 'rock' && playerChoice === 'scissors')  {
        computerScore = computerScore + 1;
        return "You Lose! Rock beats Scissors!"
    }   else
        computerScore = computerScore + 1;
        return "You Lose! Paper beats Rock!"
  }
  // Repeat game 5 times
  function game() {
    for (let i = 1; i < 6; i++) {
        console.log('Round ' + i)
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
            console.log("Computer chose " + `${computerChoice}`);
            console.log("You chose " + `${playerChoice}`)
            console.log(playRound(playerChoice, computerChoice));
    }
  }
            
    function results()  {
        if (playerScore > computerScore) {
        console.log("YOU WIN " + `${playerScore}` + `-` + `${computerScore}`);
        } else
        console.log("COMPUTER WINS " + `${computerScore}` + `-` + `${playerScore}`);
        }
       
game()
results()
