var playerScore = 0, computerScore = 0, round = 0;

const roundCount = document.querySelector("#RoundCount");
const playAgain = document.querySelector("#PlayAgain button");
playAgain.style.display = "none";
playAgain.onclick = () => newGame();

const scoreBoardPlayer = document.querySelector("#ScoreBoard .Player");
const scoreBoardComputer = document.querySelector("#ScoreBoard .Computer");

const graphics = document.querySelector("#HandGraphics");
const playerGraphic = document.querySelector("#HandGraphics .Player");
const computerGraphic = document.querySelector("#HandGraphics .Computer");

const buttons = document.querySelector("#Input");
const rockBtn = document.getElementById("Rock");
const paperBtn = document.getElementById("Paper");
const scissorsBtn = document.getElementById("Scissors");

rockBtn.onclick = () => playRound("Rock");
paperBtn.onclick = () => playRound("Paper");
scissorsBtn.onclick = () => playRound("Scissors");

function newGame()
{
    graphics.style.display = "flex";
    buttons.style.display = "flex";
    playAgain.style.display = "none";

    round = 0;
    playerScore = 0;
    computerScore = 0;

    roundCount.textContent = `Round 1`;

    scoreBoardPlayer.textContent = "Player Score: " + playerScore;
    scoreBoardComputer.textContent = "Computer Score: " + computerScore;
}

newGame();

function playRound(value) {
    let playerChoice = value;
    let computerChoice = getComputerChoice();

    playerGraphic.textContent = getIcon(playerChoice);
    computerGraphic.textContent = getIcon(computerChoice);

    round++;
    let resultText = CheckWinner(playerChoice, computerChoice);
    roundCount.textContent = `Round ${round} - ${resultText}`;

    scoreBoardPlayer.textContent = "Player Score: " + playerScore;
    scoreBoardComputer.textContent = "Computer Score: " + computerScore;

    if(playerScore >= 5 || computerScore >= 5 )
    {
        roundCount.textContent = playerScore > computerScore ? "Player wins!" : "Computer wins!";

        graphics.style.display = "none";
        buttons.style.display = "none";
        playAgain.style.display = "flex";
    }
}

function getIcon(value)
{
    // assigning emoji unicode as string does not work, this is a workaround.
    if(value === "Rock") return String.fromCodePoint(9994);
    else if(value === "Paper") return String.fromCodePoint(9995);
    else if (value === "Scissors") return String.fromCodePoint(9996);
}

function getComputerChoice()
{
    let random = Math.random();
    let choice = 0;

    if(random < 0.33)
        choice = "Rock";
    else if(random > 0.66)
        choice = "Paper";
    else 
        choice = "Scissors";

    return choice;
}

function CheckWinner(p, c)
{
    let result = "";
    if(p === c) {
        result = "It's a tie!"
    }

    else if((p === "Rock" && c === "Scissors") || (p === "Scissors" && c === "Paper") || (p === "Paper" && c === "Rock")) {
        playerScore++;
        result = "Player wins!";
    }
    else { 
        computerScore++;
        result = "Computer wins!";
    }

    return result;
}

/* OBSOLETE

GameLoop();

function GameLoop()
{
    let gamesPlayed = 0;

    while(gamesPlayed < 5)
    {   
        let playerChoice = 0
        // while(CheckValidChoice(playerChoice) == false)
        // {        
        //     playerChoice = parseInt(prompt("Type a number: 1 rock || 2 paper || 3 scissors"));
        // }

        //playerChoice = parseInt(prompt("Type a number: 1 rock || 2 paper || 3 scissors"));
        
        console.log(playerChoice);
        let computerChoice = getComputerChoice();
        console.log("Player chooses: " + GetRPS(playerChoice));
    
        console.log("Computer chooses: " + GetRPS(computerChoice));
        CheckWinner(playerChoice, computerChoice);

        gamesPlayed++;
    }
    
}

function CheckValidChoice(i)
{
    if( i === 1 || i === 2 || i === 3)
    {
        return true;
    }
    else
    {
        console.log("Incorrect input");
        console.log(i);
        return false;
    }
}

function GetRPS( i )
{
    if(i === 1)
        return "Rock"
    if(i === 2)
    return "Paper"
    if(i === 3)
    return "Scissors"
} */
