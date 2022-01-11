let userScore = 0;
let compScore = 0;
const rock_button = document.getElementById('r');
const paper_button = document.getElementById('p');
const scissors_button = document.getElementById('s');
const user_span = document.getElementById('user-score');
const comp_span = document.getElementById('comp-score');
const result_p = document.querySelector('.result > p');

// computerPlay Function

function computerPlay(){
    let options = ["r", "p", "s"]
    let computerChoice = options[Math.floor(Math.random(options)*options.length)]

    return(computerChoice)

}

// Functions for the result

function win(){
    userScore++;
    user_span.innerHTML = userScore;
    comp_span.innerHTML = compScore;
    result_p.innerHTML = `Win`;
};

function lose(){
    compScore++;
    user_span.innerHTML = userScore;
    comp_span.innerHTML = compScore;
    result_p.innerHTML = `Lost`;
};

function draw(){
    user_span.innerHTML = userScore;
    comp_span.innerHTML = compScore;
    result_p.innerHTML = `Draw`;
};


// Function to display result of one round

function playRound(playerSelection){

    let computerSelection = computerPlay();

    switch(playerSelection + computerSelection){
        
        case "rr":
        case "pp":
        case "ss":
            draw();
            break

        case "rs" :
        case "pr":
        case "sp":
            win();
            break

        case "rp" :
        case "ps":
        case "sr":
            lose();
            break
    };
};

function main(){
    rock_button.addEventListener('click', () => playRound('r'));
    paper_button.addEventListener('click', () => playRound('p'));
    scissors_button.addEventListener('click', () => playRound('s'));
};

main();

