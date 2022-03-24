function howToMove(chess, team, x, y) {
    switch (chess) {
        case "pawn":
            movePawn(team, x, y);
            break;
        case "knight":
            moveKnight(team, x, y);
            break;
        case "bishop":
            moveBishop(team, x, y);
            break;
        case "rook":
            moveRook(team, x, y);
            break;
        case "queen":
            moveQueen(team, x, y);
            break;
    }
}

let cells = document.getElementsByClassName("cell")
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function () {
        click(cells[i].id);
    });
}

function click(id) {
    let x = id.charAt(0);   // cột
    let y = id.charAt(1);   // hàng
    isClick = !isClick;
    if(isClick) {
        getMove(x, y);
    }
}