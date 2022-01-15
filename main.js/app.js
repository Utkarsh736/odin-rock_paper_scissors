let userScore = 0;
let compScore = 0;

const buttons = document.querySelectorAll('button');
const user_span = document.getElementById('user-score');
const comp_span = document.getElementById('comp-score');
const result_p = document.querySelector('.result > p');


function computerPlay(){
    let options = ["r", "p", "s"];
    let computerSelection = options[Math.floor(Math.random(options)*options.length)];

    return(computerSelection);

};

function game_over(){
    result_p.textContent = `Game Over`;
    buttons.forEach(elem => {
        elem.disabled = true
    });
};


function letterConverter(letter){
    if(letter === "r")return 'Rock';
    if(letter === "p")return 'Paper';
    return 'Sciccors';
};


function win(userChoice, compChoice){
    userScore++;
    user_span.innerHTML = userScore;
    comp_span.innerHTML = compScore;
    result_p.innerHTML = `${letterConverter(userChoice)} beats ${letterConverter(compChoice)}. You Win`;

    if(userScore == 5){
        game_over();
    };


};

function lose(userChoice, compChoice){
    compScore++;
    user_span.innerHTML = userScore;
    comp_span.innerHTML = compScore;
    result_p.innerHTML = `${letterConverter(userChoice)} loses to ${letterConverter(compChoice)}. You Lost`;

    if(compScore == 5){
        game_over();
    };

};

function draw(userChoice, compChoice){
    user_span.innerHTML = userScore;
    comp_span.innerHTML = compScore;
    result_p.innerHTML = `${letterConverter(userChoice)} equals ${letterConverter(compChoice)}. It's a Draw`;
};


function playRound(userChoice){

    let compChoice = computerPlay();

    switch(userChoice + compChoice){
        
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, compChoice);
            break

        case "rs" :
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break

        case "rp" :
        case "ps":
        case "sr":
            lose(userChoice, compChoice);
            break
    };
};


function main(){
    buttons.forEach((button => {
        button.addEventListener('click', ()=>{
            playRound(button.id);
        });
    }));
};

main()