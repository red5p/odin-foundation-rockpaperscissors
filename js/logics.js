// randomly return rock/paper/scissors
function computerPlay() {
    // get random number between 0 and 2
    let randomNumber = Math.floor(Math.random() * 3);

    // get corresponding string bases on the random number
    let computerChoice;
    switch (randomNumber) {
        case 0:
            computerChoice = 'rock';
            break;
        case 1:
            computerChoice = 'paper';
            break;
        case 2:
            computerChoice = 'scissors';
            break;
        default:
            alert('Oops, this isn\'t possible!');
    }

    // return the choice
    return computerChoice;
}

// plays a single round of game
function playRound(playerSelection, computerSelection) {
    // make playerSelection case-insensitive
    playerSelection =  playerSelection.toLowerCase();

    // if same, there's a tie
    // else if player = rock AND computer = scissors, player win
    // else if player = paper AND computer = rock, player win
    // else if player = scissors AND computer = paper, player win
    // else if...
    let result;
    if (playerSelection === computerSelection) {
        result = 0;
    } else if (
        playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper'
    ) {
        result = 1;
    } else if (
        computerSelection === 'rock' && playerSelection === 'scissors' ||
        computerSelection === 'paper' && playerSelection === 'rock' ||
        computerSelection === 'scissors' && playerSelection === 'paper'
    ) {
        result = -1;
    }
    // What if use types something like 'banana'?

    return result;
}

// play 5 rounds, keeps score and reports winner or loser
function game() {
    // loops for 5 times
    // each time if someone wins, add one score to him/her
    // if it is a tie, nobody gets score
    let playerScore = 0;
    let computerScore = 0;
    for (let i=0; i<5; i++) {
        let playerSelection = window.prompt('What\'s your choice?');
        let computerSelection = computerPlay();
        console.log(`Player chooses ${playerSelection}, computer chooses ${computerSelection}.`);

        let result = playRound(playerSelection, computerSelection);
        switch (result) {
            case 1:
                playerScore++;
                console.log(`WIN!\nYour ${playerSelection} beats ${computerSelection}!`);
                break;
            case -1:
                computerScore++;
                console.log(`LOSE.\n${computerSelection} beats ${playerSelection}...`);
                break;
            default:
                console.log('TIE.\nThere\'s a tie!');
        }

        console.log(`ROUND ${i+1} Player: ${playerScore} Computer: ${computerScore}\n`);
    }

    // compare the score and report (if any) the winner
    if (playerScore > computerScore) {
        console.log('Player wins!');
    } else if (computerScore > playerScore) {
        console.log('Computer wins.');
    } else {
        console.log('There\'s a draw.');
    }
}

game();