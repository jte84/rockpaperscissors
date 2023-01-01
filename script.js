function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
      return "rock";
    } else if (randomNumber === 1) {
      return "scissors";
    } else (randomNumber === 2)
    return "paper";
  }

  console.log(getComputerChoice())
  