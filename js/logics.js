const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');

const playerIcon = document.querySelector('#playerIcon');
const computerIcon = document.querySelector('#computerIcon');

const announcement = document.querySelector('#announcement');

let currentPlayerScore = 0;
let currentComputerScore = 0;

const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
    button.addEventListener('click', playRound);
});

const playAgainButton = document.querySelector('#playAgainButton');
playAgainButton.addEventListener('click', playAgain);


// make a random choice for the computer
function computerPlay() {
    const randomNumber = Math.floor(Math.random() * 3);
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
    return computerChoice;
}

function playRound() {
    const playerSelection = this.id; // get id of the button being clicked
    const computerSelection = computerPlay();

    changeIcon(playerSelection, computerSelection);

    if (playerSelection === computerSelection) {
        changeIconColor('neither');
        return;
    } else if (
            playerSelection === 'rock' && computerSelection === 'scissors' ||
            playerSelection === 'paper' && computerSelection === 'rock' ||
            playerSelection === 'scissors' && computerSelection === 'paper'
    ) {
        currentPlayerScore++;
        playerScore.textContent = currentPlayerScore;
        changeIconColor('player');
    } else {
        currentComputerScore++;
        computerScore.textContent = currentComputerScore;
        changeIconColor('computer');
    }

    if (currentPlayerScore === 5) {
        announceWinner('player');
    } else if (currentComputerScore === 5) {
        announceWinner('computer');
    }
}

// change the icon according to the choices made by the player and computer
function changeIcon(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        playerIcon.innerHTML = '<i class="fas fa-hand-rock fa-7x"></i>';
    } else if (playerSelection === 'paper') {
        playerIcon.innerHTML = '<i class="fas fa-hand-paper fa-7x"></i>';
    } else {
        playerIcon.innerHTML = '<i class="fas fa-hand-scissors fa-7x"></i>';
    }

    if (computerSelection === 'rock') {
        computerIcon.innerHTML = '<i class="fas fa-hand-rock fa-7x"></i>';
    } else if (computerSelection === 'paper') {
        computerIcon.innerHTML = '<i class="fas fa-hand-paper fa-7x"></i>';
    } else {
        computerIcon.innerHTML = '<i class="fas fa-hand-scissors fa-7x"></i>';
    }
}

// change the color of the text and icons according to who wins
function changeIconColor(winner) {
    if (winner === 'neither') {
        resetColor();
    } else if (winner === 'player') {
        playerIcon.classList.add('yellow');
        computerIcon.classList.remove('yellow');
        document.querySelector('#scoreLeft').classList.add('yellow');
        document.querySelector('#scoreRight').classList.remove('yellow');
    } else {
        playerIcon.classList.remove('yellow');
        computerIcon.classList.add('yellow');
        document.querySelector('#scoreLeft').classList.remove('yellow');
        document.querySelector('#scoreRight').classList.add('yellow');
    }
}


function announceWinner(winner) {
    if (winner === 'player') {
        announcement.textContent = 'You WIN! Congratulations!';
        announcement.classList.add('yellow');
    } else {
        announcement.textContent = 'You lose. Wanna play again?';
        announcement.classList.remove('yellow');
    }
    buttons.forEach((button) => {
        button.disabled = true;
    });
    announcement.classList.remove('hidden');
    playAgainButton.classList.remove('hidden');
}

function playAgain() {
    resetScore();
    resetIcon();
    buttons.forEach((button) => {
        button.disabled = false;
    });
    playAgainButton.classList.add('hidden');
    announcement.classList.add('hidden');
}

// reset scores when a new game is started
function resetScore() {
    currentPlayerScore = 0;
    currentComputerScore = 0;
    playerScore.textContent = currentPlayerScore;
    computerScore.textContent = currentComputerScore;
}

// change icons to the default icons when a new game is started
function resetIcon() {
    playerIcon.innerHTML = '<i class="fas fa-question fa-7x"></i>';
    computerIcon.innerHTML = '<i class="fas fa-question fa-7x"></i>';
    resetColor();
}

// change icon and scoreBoard color to black(can be used when there's a tie/a new game)
function resetColor() {
    playerIcon.classList.remove('yellow');;
    computerIcon.classList.remove('yellow');
    document.querySelector('#scoreLeft').classList.remove('yellow');
    document.querySelector('#scoreRight').classList.remove('yellow');
}
