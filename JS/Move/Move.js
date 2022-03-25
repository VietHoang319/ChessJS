// Hàm lấy hướng di chuyển của quân cờ
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
        case "king":
            moveKing(team, x, y);
            break;
        default:
            isClick = !isClick;
    }
}

// Bắt sự kiện click cho từng ô thuộc lớp "cell"
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
        position = id;
        getMove(x, y);
        console.log(arrMove)
    }
    else {
        if (checkMoveChess(position, id)){
            flag = !flag;
        }
        arrMove.splice(0, arrMove.length);
        drawCell();
    }
}