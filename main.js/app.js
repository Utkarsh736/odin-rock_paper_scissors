// 1. Create a function computerPlay
// 2. Take user's input
// 3. Create function that gives the result

// computerPlay Function

function computerPlay(){
    let options = ["rock", "paper", "scissor"]
    let computerSelection = options[Math.floor(Math.random(options)*options.length)]

    console.log(computerSelection)
    return(computerSelection)
    
}

// Taking user's input

let getInput = prompt("Enter you option")
let playerSelection  = getInput.toLowerCase()


// Function to display result of one round

function main(playerSelection, computerSelection){

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

console.log(main(playerSelection, computerPlay()))
