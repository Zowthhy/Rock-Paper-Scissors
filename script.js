

let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function humanChoice(){
    let playerChoice = prompt("rock, paper or scissors?")
    return playerChoice.toLowerCase();
}

function playRound(){

    let player = humanChoice()
    let computer = getComputerChoice()
    
    if (computer === player){
        console.log("Tie! repeat the round");
        playRound();
    }else if (computer == "rock" && player == "scissors"){
        computerScore += 1;
        console.log("Rock beats scissors! a point for the machine!");
    }else if (computer == "scissors" && player == "rock"){
        playerScore += 1;
        console.log("Rock beats scissors! a point for the human!");
    }else if (computer == "paper" && player == "rock"){
        computerScore += 1;
        console.log("Paper beats the rock! A point for the pc!");
    }else if (computer == "rock" && player == "paper"){
        playerScore += 1;
        console.log ("Paper beats the rock! A point for the human!");
    }else if (computer == "scissors" && player == "paper"){
        computerScore += 1;
        console.log("Scissors beats paper! A point for the computer");
    }else{
        playerScore += 1;
        console.log("Scissors beat paper! a point for the human!");
    }
};

function playGame(){
    for (let i = 0; i < 10; i++){
        if (playerScore < 5 && computerScore < 5){
            playRound();
            console.log(`Player Score: ${playerScore}`);
            console.log(`Computer Score: ${computerScore}`);
        }else if(playerScore == 5){
            console.log("You reach 5 points! You Win!")
            break;
        }else{
            console.log("The computer reached 5 points! You Lose!")
            break;
        }

    };
};

playGame();