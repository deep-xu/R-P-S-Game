let buttons = document.querySelector(".Buttons");
let player = document.querySelector(".player");
let restart = document.querySelector("#restart");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let AI = document.querySelector(".AI");

let resultDisplay = document.createElement("h2"); // Display result
document.querySelector(".page").prepend(resultDisplay); // Position result at the top

let images = {
    rock: "Assets/rock.png",
    paper: "Assets/paper.png",
    scissors: "Assets/sissor.png",
};

let choices = ["rock", "paper", "scissors"];
let playerChoice = "";
let aiChoice = "";

// Function to handle player choice
function playerSelect(choice) {
    player.innerHTML = ""; 
    let img = document.createElement("img");
    img.src = images[choice];
    img.alt = choice;
    player.appendChild(img);
    playerChoice = choice;

    aiTurn(); // AI makes a choice after player
}

// Function to handle AI choice
function aiTurn() {
    AI.innerHTML = ""; 
    let random = Math.floor(Math.random() * choices.length);
    aiChoice = choices[random];

    let aiImg = document.createElement("img");
    aiImg.src = images[aiChoice];
    aiImg.alt = aiChoice;
    AI.appendChild(aiImg);

    checkWinner(); // Check the winner
}

// Function to determine the winner
function checkWinner() {
    if (playerChoice === aiChoice) {
        resultDisplay.innerText = "It's a Draw!";
    } else if (
        (playerChoice === "rock" && aiChoice === "scissors") ||
        (playerChoice === "scissors" && aiChoice === "paper") ||
        (playerChoice === "paper" && aiChoice === "rock")
    ) {
        resultDisplay.innerText = "You Win!";
    } else {
        resultDisplay.innerText = "You Lose!";
    }
}

// Event Listeners for player selection
btn1.addEventListener("click", () => playerSelect("rock"));
btn2.addEventListener("click", () => playerSelect("paper"));
btn3.addEventListener("click", () => playerSelect("scissors"));

// Restart Game
restart.addEventListener("click", () => {
    player.innerHTML = "";
    AI.innerHTML = "";
    resultDisplay.innerText = "";
    playerChoice = "";
    aiChoice = "";
});
