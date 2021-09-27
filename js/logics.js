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

function playRound(e) {
    const playerSelection = e.target.id;
    const computerSelection = computerPlay();

    const playerScore = document.querySelector('#playerScore');
    const computerScore = document.querySelector('#computerScore');

    let score;
    if (playerSelection === computerSelection) {
        return;
    } else if (
            playerSelection === 'rock' && computerSelection === 'scissors' ||
            playerSelection === 'paper' && computerSelection === 'rock' ||
            playerSelection === 'scissors' && computerSelection === 'paper'
    ) {
        score = Number(playerScore.textContent) + 1;
        playerScore.textContent = score;
        if (score === 5) {
            announceWinner(0);
        }
    } else {
        score = Number(computerScore.textContent) + 1;
        computerScore.textContent = score;
        if (score === 5) {
            announceWinner(1);
        }
    }
}

function announceWinner(winner) {
    const announcement = document.querySelector('#announcement');
    announcement.textContent = (winner === 0) ?
                               'You WIN! Congratulations!' :
                               'You lose. Wanna play again?';
    announcement.style.visibility = 'visible';

    buttons.forEach((button) => {
        button.disabled = true;
    });
    playAgainButton.classList.remove('hidden');
}

function playAgain() {
    document.querySelector('#playerScore').textContent = '0';
    document.querySelector('#computerScore').textContent = '0';

    buttons.forEach((button) => {
        button.disabled = false;
    });
    playAgainButton.classList.add('hidden');
    const announcement = document.querySelector('#announcement');
    announcement.style.visibility = 'hidden';
}

const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
    button.addEventListener('click', playRound);
});

const playAgainButton = document.querySelector('.playAgainButton');
playAgainButton.addEventListener('click', playAgain);
