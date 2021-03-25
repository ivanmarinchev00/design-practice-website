let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score'); 
const compScore_span = document.getElementById('comp-score'); 
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const scissors_div = document.getElementById('s');
const paper_div = document.getElementById('p');

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const random = Math.floor(Math.random() * 3);
    return choices[random];
}

function convertToWord(letter){
if(letter === "s"){
    return "Scissors";
}
else if(letter === "p"){
    return "Paper";
}
else{
return "Rock";
}
}

function win(user, computer){
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = `${convertToWord(user)}(you) beat ${convertToWord(computer)}(pc). You win!`;
}

function lose(user, computer){
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = `${convertToWord(user)}(you) lost to ${convertToWord(computer)}(pc). You lose!`;
}

function draw(){
    result_div.innerHTML = `It's a draw!`;
}

function game(userChoice){
const computerChoice = getComputerChoice();
switch(userChoice + computerChoice){
    case "rs":
    case "pr":
    case "sp":
       win(userChoice, computerChoice);
        break;
    case "rp":
    case "ps":
    case "sr": 
    lose(userChoice, computerChoice);
        break;
    case "rr":
    case "pp":
    case "ss":
        draw(); 
    break;
}
}


function main(){
    rock_div.addEventListener('click', function(){
        game("r")
    })
    
    paper_div.addEventListener('click', function(){
        game("p")
    })
    
    scissors_div.addEventListener('click', function(){
        game("s")
    })
}

main();