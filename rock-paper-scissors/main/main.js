let userScore = 0;
let computerScore = 0;
const uS = document.getElementById('userScoreResult');
const cS = document.getElementById('computerScoreResult');
const scoreBoard = document.querySelector(".score");
const resultText = document.querySelector(".result");
const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById('paper')
const scissorsBtn = document.getElementById('scissors')
const userChoiceSpan = document.querySelector('[data-user-choice]');
const computerChoiceSpan = document.querySelector('[data-computer-choice]');
const resultTable = document.querySelector('[data-result-div]')

function computerChoiceFct() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}


function showResults(userChoice, computerChoice) {
    userChoiceSpan.innerText = userChoice;
    computerChoiceSpan.innerText = computerChoice;
    resultTable.style.visibility = 'visible';
}


function win(userChoice, computerChoice) {
    userScore += 1;
    uS.innerHTML = userScore;
    cS.innerHTML = computerScore;
    resultText.innerHTML = 'User beats computer 🎉' ;
    showResults(userChoice, computerChoice);
    
}

function lose(userChoice, computerChoice) {
    computerScore += 1;
    uS.innerHTML = userScore;
    cS.innerHTML = computerScore;
    resultText.innerHTML = 'Computer beats user 😥' ;
    showResults(userChoice, computerChoice);
    
}

function draw(userChoice, computerChoice) {
    resultText.innerHTML = `It's a draw 🤷‍♀️` ;
    showResults(userChoice, computerChoice);
    
}

function play(userChoice) {
    resultTable.style.visibility = 'visible';
    const computerChoice = computerChoiceFct();
    
    switch (userChoice + computerChoice) {
        case "rockpaper":
        case "rockscissors":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;

        case "paperrock":
        case "scissorsrock":
        case "paperscissors":
            lose(userChoice, computerChoice);
            break;

        case "paperpaper":
        case "scissorsscissors":
        case "rockrock":
            draw(userChoice, computerChoice);
            break;
    }
}



function game() {
    rockBtn.addEventListener('click', function() {
    play('rock')
})
paperBtn.addEventListener('click', function() {
    play('paper')
})
scissorsBtn.addEventListener('click', function() {
    play('scissors')
})
}

game();


