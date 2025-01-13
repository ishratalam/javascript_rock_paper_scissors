// console.log('Hello World!!!');

//function to get user input using prompt : 
function getHumanChoice() {
    let userMoveOrig = prompt('Enter the input');
   
    // console.log(userMoveOrig);
    let userMove = userMoveOrig.toLowerCase();
    console.log(`userMov: ${userMove}`);
    if (userMove === "rock" || userMove === "paper" || userMove === "scissor") {
        console.log(`You have entered: ${userMove}`);
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
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }
    // console.log(`computerMove:${computerMove}, randomNumber: ${randomNumber}`);
    return computerMove;
}


// playRound function, takes computer & user input 
// When playing from console, userInput can be taken by function
// but when using buttons, then buttonClick is userInput, so Need to
// call playGame on each button click instead of getting userInput

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'paper'
        || humanChoice === 'paper' && computerChoice === 'scissors'
        || humanChoice == 'scissors' && computerChoice == 'rock'
    ) {
        score.computerScore += 1; score.roundWinner = 'Computer!';
    } else if (humanChoice === 'rock' && computerChoice === 'scissors'
        || humanChoice === 'paper' && computerChoice === 'rock'
        || humanChoice === 'scissors' && computerChoice === 'paper'
    ) {
        score.humanScore += 1; score.roundWinner = 'You!';
    } else {
        score.tieScore += 1; score.roundWinner = 'Tie!';
    }
    //Update the score outside of function 
    console.log(`${score.roundWinner}! : YourChoice: ${humanChoice}, computerChoice: ${computerChoice}`);

    //Final Round Winner
    if ( score.humanScore > score.computerScore) {
        score.finalWinner = 'YOU WON!';
    } else if ( score.humanScore < score.computerScore) {
        score.finalWinner = 'COMPUTER WON!';
    } else {
        score.finalWinner = 'TIE';
    }
    // total number of round played
    score.numRounds += 1;
    return score;
}


//Result dict
let score = {
    humanScore: 0,
    computerScore: 0,
    tieScore: 0,
    roundWinner: '',
    finalWinner: '',
    numRounds: 0
};
let scoreText = '';

let results = document.querySelector('#results');
let roundWinner = document.querySelector('#round-winner');
let finalWinner = document.querySelector('#final-winner');

//reset score
let reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    score = {
        humanScore: 0,
        computerScore: 0,
        tieScore: 0,
        roundWinner: '',
        finalWinner: '',
        numRounds: 0
    };
    updateScore();
});

// function to update score
function updateScore() {
    scoreText = `Score : human: ${score.humanScore}, computer: ${score.computerScore}, 
        tie: ${score.tieScore}, totalRounds: ${score.numRounds}`;
    results.textContent = scoreText;
    roundWinner.textContent = `Current Round Winner : ${score.roundWinner}`;
    finalWinner.textContent = `Game Winner : ${score.finalWinner}`;
}

//playGame using userInput from button 
let btnRock = document.querySelector('#rock');
btnRock.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
    updateScore();
});
let btnPaper = document.querySelector('#paper');
btnPaper.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
    updateScore();
});

let btnScissors = document.querySelector('#scissors');
btnScissors.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
    updateScore();
});
