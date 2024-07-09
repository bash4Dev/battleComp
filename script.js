// Step one
function getRandomComputerResult() {
  const options = ["Water", "Plant", "Fire"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}


// Step two
function hasPlayerWonTheRound(player, computer) {

  return (
    (player === "Water" && computer === "Fire") ||
    (player === "Fire" && computer === "Plant") ||
    (player === "Plant" && computer === "Water")
  );

  // if (player === "Water" && computer === "Fire") {
  //   return true;
  // } else if (player === "Fire" && computer === "Plant") {
  //   return true; 
  // } else if (player === "Plant" && computer === "Water") {
  //   return true;
  // } else {return false;}
}


// Step three
let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`
  } else if (userOption === computerResult) {
    return `It's a tie! Both chose ${userOption}`
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`
  }
}


// Step four & five
const playerScoreSpanElement = document.getElementById("playerScore");
const computerScoreSpanElement = document.getElementById("computerScore");
const roundResultsMsg = document.getElementById("roundResults-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const resetGameBtn = document.getElementById("resetGame-btn");
const optionsContainer = document.querySelector(".optionsContainer");

resetGameBtn.style.display = "none";

function showResults(userOption) {

  if (playerScore === 3 || computerScore === 3) {
    if (playerScore === 3) {
      winnerMsgElement.innerText = "Player has won the game"
    } else {
      winnerMsgElement.innerText = "Computer has won the game"
    }
    // winnerMsgElement.innerText = `${(playerScore === 3) ? "Player" : "Computer"} has won the game!`;
    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }

  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;
  roundResultsMsg.innerText = getRoundResults(userOption);

};

// Step six

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;
  resetGameBtn.style.display = "none";
  optionsContainer.style.display = "block";
  roundResultsMsg.innerText = "";
  winnerMsgElement.innerText = "";
};

resetGameBtn.addEventListener("click", resetGame);

const waterBtn = document.getElementById("water-btn");
const fireBtn = document.getElementById("fire-btn");
const plantBtn = document.getElementById("plant-btn");

waterBtn.addEventListener("click", function () {
  showResults("Water");
});

fireBtn.addEventListener("click", function () {
  showResults("Fire");
});

plantBtn.addEventListener("click", function () {
  showResults("Plant");
});