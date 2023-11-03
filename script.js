const options = ["rock", "paper", "scissors"];

document.getElementById("rock").addEventListener("click", play);
document.getElementById("paper").addEventListener("click", play);
document.getElementById("scissors").addEventListener("click", play);

function play(event) {
    const playerChoice = event.target.id;
    const computerChoice = options[Math.floor(Math.random() * 3)];

    const result = getWinner(playerChoice, computerChoice);

    document.getElementById("outcome").textContent = result;
}

function getWinner(player, computer) {
    if (player === computer) {
        return "Empate";
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "Ganaste";
    } else {
        return "Perdiste";
    }
}
