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

function checkCheckmate(chess, team, x, y) {
    switch (chess) {
        case "pawn":
            checkmatePawn(team, x, y);
            break;
        case "knight":
            checkmateKnight(team, x, y);
            break;
        case "bishop":
            checkmateBishop(team, x, y);
            break;
        case "rook":
            checkmateRook(team, x, y)
            break;
        case "queen":
            checkmateQueen(team, x, y);
            break;
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

    if(isClick){
        // Quân đỏ đi trước
        if(isRedTeam(x, y) !== flag){
            isClick = !isClick;
        }
    }

    if(isClick) {
        position = id;
        getMove(x, y);
    }
    else {
        if (checkMoveChess(position, id)){
            // console.log(arrMap);
            flag = !flag;
        }
        arrMove.splice(0, arrMove.length);
        drawCell();
        if (checkmateB === true) {
            for (let i = 0; i < 8; i++) {
                for (let j = 0; j < 8; j++) {
                    if (arrMap[i][j] === "bKing") {
                        document.getElementById(`${i}${j}`).style.backgroundColor = "rgb(255,123,70)";
                    }
                }
            }
        }

        if (checkmateR === true) {
            for (let i = 0; i < 8; i++) {
                for (let j = 0; j < 8; j++) {
                    if (arrMap[i][j] === "rKing") {
                        document.getElementById(`${i}${j}`).style.backgroundColor = "rgb(255,123,70)";
                    }
                }
            }
        }
    }
}