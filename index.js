const pageContent = () => {
    return `
    <div id="gameDiv">
        <h1 class="gameText" id="playerText">Player: </h1>
        <h1 class="gameText" id="computerText">Computer: </h1>
        <h1 class="gameText" id="resultText">Result: </h1>

        <button>ROCK</button>
        <button>PAPER</button>
        <button>SCISSORS</button>
    </div>
    `
};


const loadEvent = () => {
    const rootElement = document.getElementById("root");
    rootElement.insertAdjacentHTML("beforeend", pageContent());

    const playerText = document.getElementById("playerText");
    const computerText = document.getElementById("computerText");
    const resultText = document.getElementById("resultText");
    const choiceBtns = document.querySelectorAll("button");

    let player;
    let computer;
    // let result; 


    choiceBtns.forEach(button => button.addEventListener("click", () => {
        // Add value to player from the button that has been clicked
        player = button.textContent;
        playerText.textContent = `Player: ${player}`;

        // 1. Add value to the computer with the function below, 2. then update the text, 3. then call the compare function
        computerTurn();
        computerText.textContent = `Computer: ${computer}`;
        resultText.textContent = checkWinner();
    }));


    // Randomize computer value
    computerTurn = () => {
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
    };


    // Compare the two values, return text
    const win = "You win!";
    const lose = "You lose!";
    const tie = "It is a tie";

    checkWinner = () => {
        if(player === computer){
            return `Result: ${tie}!`;
        }
        else if(computer === "ROCK"){
            return (player === "PAPER") ? `Result: ${win}` : `Result: ${lose}!`
        }
        else if(computer === "PAPER"){
            return (player === "SCISSORS") ? `Result: ${win}` : `Result: ${lose}!`
        }
        else if(computer === "SCISSORS"){
            return (player === "ROCK") ? `Result: ${win}` : `Result: ${lose}!`
        }
    };
};

window.addEventListener("load", loadEvent);