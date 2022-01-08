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

// button eventListener

// const buttons = document.querySelectorAll('button')
// buttons.forEach((button) => {
//     window.addEventListener('click', () => {
//         let playerSelection = button.id;
//       });
// });

function playerChoice(e){
        console.log(button.id);
}

// console.log(playerSelection);
const buttons = document.querySelectorAll('button')
buttons.forEach(button => button.addEventListener('choice'))
window.addEventListener('click', playerChoice);

// Function to display result of one round

function playRound(playerSelection, computerSelection){

    switch(playerSelection + computerSelection){
        case "rr":
        case "pp":
        case "ss":
            return("Draw")
            break

        case "rs" :
        case "pr":
        case "sp":
            return("Win")
            break

        case "rp" :
        case "ps":
        case "sr":
            return("Lose")
            break 
    }
}

function game(){

    // Taking User's Input
    // let getInput = prompt("Enter you option")
    // let playerSelection  = getInput.toLowerCase()

    // Computer's choice
    let computerSelection = computerPlay()

    // Displaying result

    console.log(`Player: ${playerSelection}`)
    console.log(`Comp: ${computerSelection}`)
    console.log(`Result: ${playRound(playerSelection, computerSelection)}`)
}

// game()

