// 1. Create a function computerPlay
// 2. Take user's input
// 3. Create function that gives the result

// computerPlay Function

function computerPlay(){
    let options = ["r", "p", "s"]
    let computerChoice = options[Math.floor(Math.random(options)*options.length)]

    // console.log(computerChoice)
    return(computerChoice)

}


// console.log(choice);

// Function to display result of one round

function playRound(playerSelection, computerSelection){

    let result;

    switch(playerSelection + computerSelection){
        case "rr":
        case "pp":
        case "ss":
            result = 'Draw';
            game(playerSelection, computerSelection, result);
            break

        case "rs" :
        case "pr":
        case "sp":
            result = 'Win';
            game(playerSelection, computerSelection, result);
            break

        case "rp" :
        case "ps":
        case "sr":
            result = 'Lose';
            game(playerSelection, computerSelection, result);
            break;
    };
};

// Button eventListener

let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        let playerSelection = button.id;
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    });
});



function game(playerSelection, computerSelection, result){

    // Displaying result

    console.log(`Player: ${playerSelection}`)
    console.log(`Comp: ${computerSelection}`)
    console.log(result);
}

