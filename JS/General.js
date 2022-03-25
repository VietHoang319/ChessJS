// Đổi màu ô
function changeColor(x, y){
    document.getElementById(x.toString() + y.toString()).style.backgroundColor = "#F6CD61";
}

// Kiểm tra xem có trong kích thước ma trận không
function checkXY(x, y) {
    let f = false;
    if (x >= 0 && x <= 7 && y <=7 && y >= 0) {
        f = true;
    }
    return f;
}

/* Kiểm tra id chuyển đến và di chuyển đến vị trí đã chọn */
function checkMoveChess(id, newid) {
    let check = true;
    if (id.localeCompare(newid) === 0 || arrMove.indexOf(newid) === -1) {
        check =  false;
        return check;
    }
    else {
        document.getElementById("i" + newid).src = document.getElementById("i" + id).src;
        document.getElementById("i" + id).src = "";
        let x1 = id.charAt(0);
        let y1 = id.charAt(1);
        let x2 = newid.charAt(0);
        let y2 = newid.charAt(1);

        arrMap[x2][y2] = arrMap[x1][y1];
        arrMap[x1][y1] = " ";

        if (arrMap[x2][y2] === "rPawn" && x2 === "7") {
            arrMap[x2][y2] = "rQueen";
            document.getElementById("i" + newid).src = "../Pic/Chess/RQueen.png";
        }
        if (arrMap[x2][y2] === "bPawn" && x2 === "0") {
            arrMap[x2][y2] = "bQueen";
            document.getElementById("i" + newid).src = "../Pic/Chess/BQueen.png";
        }

        if (getTeam(x2, y2) === "r") {
            let a = checkR.charAt(0);
            let b = checkR.charAt(1);
            if (arrMap[+a][+b] === chessCheckR) {
                getCheckmate(+a, +b);
            }
            else {
                checkR = "";
                chessCheckR = "";
                checkmateR = false;
            }
        }

        if (getTeam(x2, y2) === "b") {
            let a = checkB.charAt(0);
            let b = checkB.charAt(1);
            if (arrMap[+a][+b] === chessCheckB) {
                getCheckmate(+a, +b);
            }
            else {
                checkB = "";
                chessCheckB = "";
                checkmateB = false;
            }
        }

        getCheckmate(+x2, +y2);
        return check;
    }
}

function isRedTeam(x, y) {
    let check = false;
    if (getTeam(x, y) === "r") {
        check = true;
    }
    return check;
}