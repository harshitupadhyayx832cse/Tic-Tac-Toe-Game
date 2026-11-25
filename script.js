let player = "X";
let isGameActive = true;

// Select all nine cells
const cells = document.querySelectorAll("#box div");

// All possible winning combinations
const winningCombinations = [
    ["c1", "c2", "c3"],
    ["c4", "c5", "c6"],
    ["c7", "c8", "c9"],
    ["c1", "c4", "c7"],
    ["c2", "c5", "c8"],
    ["c3", "c6", "c9"],
    ["c1", "c5", "c9"],
    ["c3", "c5", "c7"]
];

// Handle player clicks
function playerclick(cellid) {

    if (!isGameActive) {
        alert("Please restart the game!");
        return;
    }

    let cell = document.getElementById(cellid);

    // Check if cell is already occupied
    if (cell.textContent !== "") {
        alert("This cell is already occupied!");
        return;
    }

    // Place X or O
    cell.textContent = player;

    // Check winner
    if (checkwinner()) {
        return;
    }

    // Check draw
    if (checkdraw()) {
        return;
    }

    // Switch player
    player = player === "X" ? "O" : "X";

    document.getElementById("result").textContent =
        "Turn: " + player;
}

// Check winner
function checkwinner() {

    for (let combination of winningCombinations) {

        let [a, b, c] = combination;

        let cell1 = document.getElementById(a).textContent;
        let cell2 = document.getElementById(b).textContent;
        let cell3 = document.getElementById(c).textContent;

        if (
            cell1 !== "" &&
            cell1 === player &&
            cell2 === player &&
            cell3 === player
        ) {

            document.getElementById("result").textContent =
                player + " wins!";

            alert(player + " is the winner!");

            isGameActive = false;

            return true;
        }
    }

    return false;
}

// Check draw
function checkdraw() {

    let allFilled = [...cells].every(
        cell => cell.textContent !== ""
    );

    if (allFilled) {

        document.getElementById("result").textContent =
            "Game Draw Ho Gaya Hy Bhaiii!";

        isGameActive = false;

        return true;
    }

    return false;
}

// Restart game
function restartGame() {

    cells.forEach(cell => {
        cell.textContent = "";
    });

    player = "X";
    isGameActive = true;

    document.getElementById("result").textContent =
        "Turn: X";
}
