let playerChoice, compChoice;
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function setPlayerChoice(choice) {
    playerChoice = choice;
}
function playGame() {
    compChoice = generateComputerChoice();
    let winner = generateWinner(playerChoice, compChoice);
    let resultTxt = 'Computer chose: ' + compChoice;
    document.getElementById('compChoiceTxt').innerHTML = resultTxt;
    document.getElementById('resultTxt').innerHTML = winner;

    console.log(playerChoice, compChoice);
}
function generateComputerChoice() {
    const randInt = getRandomInt(3);
    switch (randInt) {
        case 0: 
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissor';
    }
}
function generateWinner(player, computer) {
    if (player === computer) {
        return "it\'s a tie";
    }
    if (player === 'rock') {
        if (computer === 'paper') {
            // tie
            return 'computer wins';
        } else {
            return 'you win!';
        }
    } else if (player === 'paper') {
        if (computer === 'rock') {
            return 'you win!';
        } else {
            return 'computer wins';
        }
    } else {
        if (computer === 'rock') {
            return 'computer wins';
        } else {
            return 'you win!';
        }
    }
}