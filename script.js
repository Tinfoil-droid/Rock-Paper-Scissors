const computerChoiceDisplay = document.getElementById("computerChoiceDisplay")
const userChoiceDisplay = document.getElementById("userChoiceDisplay")
const resultDisplay = document.getElementById("resultDisplay")
const possibleChoices = document.querySelectorAll("button")
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 //or you can use possibleChoices.length

    if (randomNumber === 1) {
        computerChoice = "Rock"
    }
    if (randomNumber === 2) {
        computerChoice = "Scissors"
    }
    if (randomNumber === 3) {
        computerChoice = "Paper"
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "Draw! Try again!"
    }
    if (computerChoice === "Rock" &&  userChoice === "Paper") {
        result = "A Winner is you!"
    }
    if (computerChoice === "Rock" &&  userChoice === "Scissors") {
        result = "You Lost! Try again!"
    }
    if (computerChoice === "Paper" &&  userChoice === "Scissors") {
        result = "A Winner is you!"
    }
    if (computerChoice === "Paper" &&  userChoice === "Rock") {
        result = "You Lost! Try again!"
    }
    if (computerChoice === "Scissors" &&  userChoice === "Rock") {
        result = "A Winner is you!"
    }
    if (computerChoice === "Scissors" &&  userChoice === "Paper") {
        result = "You Lost! Try again!"
    }
    resultDisplay.innerHTML = result
}