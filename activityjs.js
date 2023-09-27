function login() {

  let playerName = document.getElementById("userName").value;

  document.getElementById("userData").innerHTML = playerName;
  document.querySelector(".loginArea").style.display = "none";
  document.querySelector(".score_hide").style.display = "block";
  document.querySelector(".playArea").style.display = "block";
}
function game () {
  let playerScore = 0;
  let computerScore = 0;
  let drawScore = 0;
  let moves = 0;

  function playGame () {
    const rockBtn = document.querySelector(".rock");
    const paperBtn = document.querySelector(".paper");
    const scissorBtn = document.querySelector(".scissor");
    const playerOptions = [rockBtn, paperBtn, scissorBtn];
    const computerOptions = ["rock", "paper", "scissors"];

    playerOptions.forEach((option) => {
      option.addEventListener("click", function () {
        const movesLeft = document.querySelector(".movesleft");
        moves++;
        movesLeft.innerText = `Moves Left: ${10 - moves}`;

        const choiceNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[choiceNumber];

        winner(this.innerText, computerChoice);

        if (moves == 10) {
          gameOver(playerOptions, movesLeft);
        }
      });
    });
  };

  function winner (player, computer) {
    const result = document.querySelector(".result");
    const playerScoreCount = document.querySelector("#playername_Score");
    const computerScoreCount = document.querySelector("#bot_Score");
    const drawScoreCount = document.querySelector("#draw_Score");
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    if (player === computer) {
      result.textContent = "Tie";
      drawScore++;
      drawScoreCount.textContent = drawScore;
    } else if (player == "rock") {
      if (computer == "paper") {
        result.textContent = "Computer Won";
        computerScore++;
        playerScoreCount.textContent = computerScore;
      } else {
        result.textContent = "Player Won";
        playerScore++;
        playerScoreCount.textContent = playerScore;
      }
    } else if (player == "scissors") {
      if (computer == "rock") {
        result.textContent = "Computer Won";
        computerScore++;
        computerScoreCount.textContent = computerScore;
      } else {
        result.textContent = "Player Won";
        playerScore++;
        playerScoreCount.textContent = playerScore;
      }
    } else if (player == "paper") {
      if (computer == "scissors") {
        result.textContent = "Computer Won";
        computerScore++;
        computerScoreCount.textContent = computerScore;
      } else {
        result.textContent = "Player Won";
        playerScore++;
        playerScoreCount.textContent = playerScore;
      }
    }
  };

  function gameOver (playerOptions, movesLeft) {
    const chooseMove = document.querySelector(".move");
    const result = document.querySelector(".result");
    const reloadBtn = document.querySelector(".reload");

    playerOptions.forEach((option) => {
      option.style.display = "none";
    });

    chooseMove.innerText = "Game Over!!";
    movesLeft.style.display = "none";

    if (playerScore > computerScore) {
      result.style.fontSize = "2rem";
      result.innerText = "You Won The Game";
      result.style.color = "#308D46";
    } else if (playerScore < computerScore) {
      result.style.fontSize = "2rem";
      result.innerText = "You Lost The Game";
      result.style.color = "red";
    } else {
      result.style.fontSize = "2rem";
      result.innerText = "Tie";
      result.style.color = "grey";
    }
    reloadBtn.innerText = "Restart";
    reloadBtn.style.display = "block";
    reloadBtn.addEventListener("click", () => {
      window.location.reload();
    });
  };

  playGame();
};

game();
