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
        let x1 = id.charAt(0);
        let y1 = id.charAt(1);
        let x2 = newid.charAt(0);
        let y2 = newid.charAt(1);

        if (arrMap[x2][y2] === "rKing") {
            blackWin = true;
        }
        if (arrMap[x2][y2] === "bKing") {
            redWin = true;
        }

        document.getElementById("i" + newid).src = document.getElementById("i" + id).src;
        document.getElementById("i" + id).src = "";
        getMoveSound();

        arrMap[x2][y2] = arrMap[x1][y1];
        arrMap[x1][y1] = " ";

        // Phong hậu
        if (arrMap[x2][y2] === "rPawn" && x2 === "7") {
            arrMap[x2][y2] = "rQueen";
            document.getElementById("i" + newid).src = "../Pic/Chess/RQueen.png";
            getCheckmate(+x2, +y2);
        }
        if (arrMap[x2][y2] === "bPawn" && x2 === "0") {
            arrMap[x2][y2] = "bQueen";
            document.getElementById("i" + newid).src = "../Pic/Chess/BQueen.png";
            getCheckmate(+x2, +y2);
        }

        if (arrMap[x2][y2] === "rRook1") {
            moveRedRook1 = false;
        }

        if (arrMap[x2][y2] === "rRook2") {
            moveRedRook2 = false;
        }

        if (arrMap[x2][y2] === "bRook1") {
            moveBlackRook1 = false;
        }

        if (arrMap[x2][y2] === "bRook2") {
            moveBlackRook2 = false;
        }

        // Vua đỏ nhập thành
        if (arrMap[x2][y2] === "rKing") {
            if (x2 === "0" && y2 === "6") {
                arrMap[0][5] = arrMap[0][7];
                arrMap[0][7] = " ";
                document.getElementById("i05").src = document.getElementById("i07").src;
                document.getElementById("i07").src = "";
                moveRedKing = false;
            }
            if (x2 === "0" && y2 === "2") {
                arrMap[0][3] = arrMap[0][0];
                arrMap[0][0] = " ";
                document.getElementById("i03").src = document.getElementById("i00").src;
                document.getElementById("i00").src = "";
                moveRedKing = false;
            }
        }

        // Vua đen nhập thành
        if (arrMap[x2][y2] === "bKing") {
            if (x2 === "7" && y2 === "6") {
                arrMap[7][5] = arrMap[7][7];
                arrMap[7][7] = " ";
                document.getElementById("i75").src = document.getElementById("i77").src;
                document.getElementById("i77").src = "";
                moveRedKing = false;
            }
            if (x2 === "7" && y2 === "2") {
                arrMap[7][3] = arrMap[7][0];
                arrMap[7][0] = " ";
                document.getElementById("i73").src = document.getElementById("i70").src;
                document.getElementById("i70").src = "";
                moveRedKing = false;
            }
        }

        // Kiểm tra chiếu vua
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
        console.log(checkmateB)
        console.log(checkmateR)
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

function getMoveSound() {
    let audio = new Audio('ChessMoveSound.mp3');
    audio.play();
}

function changeColorPlayer() {
    let tempR = redPlayer;
    redPlayer = document.getElementById("imgRdiv").style.backgroundColor;
    document.getElementById("imgRdiv").style.backgroundColor = tempR;

    let tempB = blackPlayer;
    blackPlayer = document.getElementById("imgBdiv").style.backgroundColor;
    document.getElementById("imgBdiv").style.backgroundColor = tempB;
}