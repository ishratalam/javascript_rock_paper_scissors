// console.log('Hello World!!!');

//function to get user input using prompt
function getHumanChoice() {
    let userMoveOrig = prompt('Enter the input');
    let userMove = userMoveOrig.toLowerCase();
    if (userMove === "rock" || userMove === "paper" || userMove === "scissor") {
        // console.log(`You have entered: ${userMove}`);
    } else {
        console.error(`${userMoveOrig} not a valid input, please enter one of these: rock|paper|scissor`);
        alert(`${userMoveOrig} not a valid input, please enter one of these: rock|paper|scissor`);
        getHumanChoice();
    }
    return userMove;
}

function getComputerChoice() {
    const randomNumber = Math.random();
    let computerMove = '';
    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
    } else if (randomNumber > 1/3 && randomNumber <= 2/3) {
        computerMove = 'scissor';
    } else {
        computerMove = 'paper';
    }
    console.log(`computerMove:${computerMove}, randomNumber: ${randomNumber}`);
    return computerMove;
}


// playRound function, takes computer & user input 
function playRound(humanChoice, computerChoice) {
    console.log(`# humanChoice:${humanChoice}, computerChoice:${computerChoice}`);
    if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore += 1;
        console.log('You lose! Paper beats Rock');
    } else if (humanChoice === 'rock' && computerChoice === 'scissor') {
        humanScore += 1;
        console.log('You Win! Paper beats Scissor');
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore += 1;
        console.log('You Win! Paper beats Rock');
    } else if (humanChoice === 'paper' && computerChoice === 'scissor') {
        computerScore += 1;
        console.log('You lose! Scissor beats Paper');
    } else if (humanChoice === 'scissor' && computerChoice === 'rock') {
        computerScore += 1;
        console.log('You lose! Rock beats Scissor');
    } else if (humanChoice === 'scissor' && computerChoice === 'paper') {
        humanScore += 1;
        console.log('You Win! Scissor beats Paper');
    } else {
        tieScore += 1;
        console.log(`Its a Tie! both ${humanChoice}, ${computerChoice}`);
    }
}

let humanScore = 0;
let computerScore = 0;
let tieScore = 0;
//playGame function
function playGame(numRounds = 5) {
    // let round = 5;
    for (let i = 1; i <= numRounds; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);
        console.log(`Round${i} Score: human:${humanScore}, computer:${computerScore}, tie:${tieScore}\n`);
    }

}
playGame();
console.log(`Final Score: human:${humanScore}, computer:${computerScore}, tie:${tieScore}`);
let winner = '';
if (humanScore > computerScore) {
    winner = 'You Won!';

} else if (humanScore < computerScore) {
    winner = 'Computer Won!';
} else {
    winner = 'Tie game!';
}

alert(`${winner}, Score: human:${humanScore}, computer:${computerScore}, tie:${tieScore}`);

