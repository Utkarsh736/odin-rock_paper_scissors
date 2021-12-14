// 1. Create a function computerPlay
// 2. Take user's input
// 3. Create function that gives the result

// computerPlay Function

function computerPlay(){
    let options = ["rock", "paper", "scissor"]
    let computerChoice = options[Math.floor(Math.random(options)*options.length)]

    // console.log(computerChoice)
    return(computerChoice)

}

// Function to display result of one round

function playRound(playerSelection, computerSelection){

    switch(playerSelection + computerSelection){
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            return("Draw")
            break

        case "rockscissor" :
        case "paperrock":
        case "scissorpaper":
            return("Win")
            break

        case "rockpaper" :
        case "paperscissor":
        case "scissorrock":
            return("Lose")
            break 
    }
}

function game(){
    // Loop to execute the game 5 times
    for (let i = 1; i<6; i++){

        // Taking User's Input
        let getInput = prompt("Enter you option")
        let playerSelection  = getInput.toLowerCase()

        // Computer's choice
        let computerSelection = computerPlay()

        // Displaying result
        console.log(`Game ${i}:`)
        console.log(`Player: ${playerSelection}`)
        console.log(`Comp: ${computerSelection}`)
        console.log(`Result: ${playRound(playerSelection, computerSelection)}`)
        console.log('\n')
    }
}

game()

