var playerScore = 0, computerScore = 0, round = 0;

const playerGraphic = document.querySelector("#HandGraphics .Player");
const computerGraphic = document.querySelector("#HandGraphics .Computer");

const rockBtn = document.getElementById("Rock");
const paperBtn = document.getElementById("Paper");
const scissorsBtn = document.getElementById("Scissors");

rockBtn.onclick = () => OnPlayerInput("Rock");
paperBtn.onclick = () => OnPlayerInput("Paper");
scissorsBtn.onclick = () => OnPlayerInput("Scissors");

function OnPlayerInput(value) {
    playerGraphic.textContent = GetIcon(value);
}

function GetIcon(value)
{
    if(value === "Rock") return String.fromCodePoint(9994);
    else if(value === "Scissors") return String.fromCodePoint(9995);
    else if (value === "Paper") return String.fromCodePoint(9996);
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

function getComputerChoice()
{
    let random = Math.random();
    let choice = 0;

    if(random < 0.33)
        choice = 1;
    else if(random > 0.66)
        choice = 2;
    else 
        choice = 3;

    console.log(choice);
    return choice;
}

function CheckWinner(p, c)
{
    let consoleMessage = "";
    if(p === c) {
        consoleMessage = "It's a tie!"
    }

    else if((p === 1 && c === 3) || (p === 2 && c === 1) || (p === 3 && c === 2)) {
        playerScore++;
        consoleMessage = "Player wins!";
    }
    else { 
        computerScore++;
        consoleMessage = "computer wins!";
    }

    console.log(consoleMessage);
}

