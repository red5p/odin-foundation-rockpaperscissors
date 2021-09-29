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
    const playerSelection = this.id;
    const computerSelection = computerPlay();

    changeIcon(playerSelection, computerSelection);
    
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
        changeIconColor(0);
        if (score === 5) {
            announceWinner(0);
        }
    } else {
        score = Number(computerScore.textContent) + 1;
        changeIconColor(1);
        computerScore.textContent = score;
        if (score === 5) {
            announceWinner(1);
        }
    }
}

function changeIconColor(winner) {
    const playerIcon = document.querySelector('#playerIcon');
    const computerIcon = document.querySelector('#computerIcon');
    if (winner === 0) {
        playerIcon.style.color = 'rgb(255, 196, 0)';
        computerIcon.style.color = 'black';
        document.querySelector('#scoreLeft').style.color = 'rgb(255, 196, 0)';
        document.querySelector('#scoreRight').style.color = 'black';
    } else {
        playerIcon.style.color = 'black';
        computerIcon.style.color = 'rgb(255, 196, 0)';
        document.querySelector('#scoreLeft').style.color = 'black';
        document.querySelector('#scoreRight').style.color = 'rgb(255, 196, 0)';
    }
}

function changeIcon(playerSelection, computerSelection) {
    const playerIcon = document.querySelector('#playerIcon');
    const computerIcon = document.querySelector('#computerIcon');
    if (playerSelection === computerSelection) {
        playerIcon.style.color = 'black';
        computerIcon.style.color = 'black';
        document.querySelector('#scoreLeft').style.color = 'black';
        document.querySelector('#scoreRight').style.color = 'black';
    }
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

function announceWinner(winner) {
    const announcement = document.querySelector('#announcement');
    if (winner === 0) {
        announcement.textContent = 'You WIN! Congratulations!';
        announcement.style.color = 'rgb(255, 196, 0)';
    } else {
        announcement.textContent = 'You lose. Wanna play again?';
        announcement.style.color = 'black';
    }
    announcement.style.visibility = 'visible';

    buttons.forEach((button) => {
        button.disabled = true;
    });
    playAgainButton.classList.remove('hidden');
}

function playAgain() {
    document.querySelector('#playerScore').textContent = '0';
    document.querySelector('#computerScore').textContent = '0';

    resetIcon();

    buttons.forEach((button) => {
        button.disabled = false;
    });
    playAgainButton.classList.add('hidden');
    const announcement = document.querySelector('#announcement');
    announcement.style.visibility = 'hidden';
}

function resetIcon() {
    const playerIcon = document.querySelector('#playerIcon');
    const computerIcon = document.querySelector('#computerIcon');

    computerIcon.innerHTML = '<i class="fas fa-question fa-7x"></i>';
    playerIcon.innerHTML = '<i class="fas fa-question fa-7x"></i>';
    playerIcon.style.color = 'black';
    computerIcon.style.color = 'black';
    document.querySelector('#scoreLeft').style.color = 'black';
    document.querySelector('#scoreRight').style.color = 'black';
}

const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
    button.addEventListener('click', playRound);
});

const playAgainButton = document.querySelector('#playAgainButton');
playAgainButton.addEventListener('click', playAgain);
