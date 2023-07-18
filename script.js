const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

rockButton.addEventListener("click", handleUserChoice);
paperButton.addEventListener("click", handleUserChoice);
scissorsButton.addEventListener("click", handleUserChoice);

function handleUserChoice(event) {
    const userChoice = event.target.id;
    console.log("Player chose: ", userChoice);
}


