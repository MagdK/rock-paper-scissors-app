console.log("Testing");
const pageContent = () => {
    return `
    <div id="gameDiv">
        <h1 class="gameText" id="playerText">Player: </h1>
        <h1 class="gameText" id="computerText">Computer: </h1>
        <h1 class="gameText" id="resultText">Result: </h1>

        <button class="choiceBtn">ROCK</button>
        <button class="choiceBtn">PAPER</button>
        <button class="choiceBtn">SCISSORS</button>
    </div>
    `
};



const loadEvent = () => {
    const rootElement = document.getElementById("root");
    rootElement.insertAdjacentHTML("beforeend", pageContent());

    const playerText = document.getElementById("playerText");
    console.log(playerText);
    const computerText = document.getElementById("computerText");
    const resultText = document.getElementById("resultText");
    const choiceBtns = document.querySelectorAll(".choiceBtn");
    let player;
    let computer;
    let result; 

    choiceBtns.forEach(button => button.addEventListener("click", () => {

        player = button.textContent;
        computerTurn();
        playerText.textContent = `Player: ${player}`;
        computerText.textContent = `Computer: ${computer}`;
        resultText.textContent = checkWinner();
    }));

    function computerTurn(){
        const randNum = Math.floor(Math.random() * 3) + 1;

        switch(randNum){
            case 1:
                computer = "ROCK";
                break;
            case 2:
                computer = "PAPER";
                break;
            case 3:
                computer = "SCISSORS";
                break;
        }
    }

    function checkWinner() {
        if(player === computer){
            return "Draw!";
        }
        else if(computer === "ROCK"){
            return (player === "PAPER") ? "You win!" : "You lose!"
        }
        else if(computer === "PAPER"){
            return (player === "SCISSORS") ? "You win!" : "You lose!"
        }
        else if(computer === "SCISSORS"){
            return (player === "ROCK") ? "You win!" : "You lose!"
        }
    }
}

window.addEventListener("load", loadEvent);