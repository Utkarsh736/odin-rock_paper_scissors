// 1. Create a function computerPlay
// 2. Take user's input
// 3. Create function that gives the result

// computerPlay Function

function computerPlay(){
    let options = ["rock", "paper", "scissor"]
    let computerSelection = options[Math.floor(Math.random(options)*options.length)]

    // console.log("Comp1: " + computerSelection)
    return(computerSelection)
    
}

// Taking user's input

let getInput = prompt("Enter you option")
let flag = 0
if (getInput == null){
    console.log("Try Again")
}
else{
    flag = 1
    
}

// Function to display result of one round
if (flag == 1){
    let playerSelection  = getInput.toLowerCase()

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

    console.log("comp2: " + computerPlay())
    // console.log(main(playerSelection, computerPlay()))
    console.log("comp3: " + computerPlay())
}


function game(){
    for(let i=0; i<=5; i++){
        main(playerSelection, computerPlay())
    }
}

game()



