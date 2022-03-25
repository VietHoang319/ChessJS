function moveKnight(team, a, b) {
    let x = +a;
    let y = +b;
    if (checkXY(x + 2, y + 1) && (getTeam(x + 2, y + 1) !== team)) {
        changeColor(x + 2, y + 1);
        arrMove.push(`${x + 2}${y + 1}`);
    }
    if (checkXY(x + 2, y - 1) && (getTeam(x + 2, y - 1) !== team)) {
        changeColor(x + 2, y - 1);
        arrMove.push(`${x + 2}${y - 1}`);
    }
    if (checkXY(x - 2, y - 1) && (getTeam(x - 2, y - 1) !== team)) {
        changeColor(x - 2, y - 1);
        arrMove.push(`${x - 2}${y - 1}`);
    }
    if (checkXY(x - 2, y + 1) && (getTeam(x - 2, y + 1) !== team)) {
        changeColor(x - 2, y + 1);
        arrMove.push(`${x - 2}${y + 1}`);
    }
    if (checkXY(x + 1, y + 2) && (getTeam(x + 1, y + 2) !== team)) {
        changeColor(x + 1, y + 2);
        arrMove.push(`${x + 1}${y + 2}`);
    }
    if (checkXY(x - 1, y + 2) && ( getTeam(x - 1, y + 2) !== team)) {
        changeColor(x - 1, y + 2);
        arrMove.push(`${x - 1}${y + 2}`);
    }
    if (checkXY(x - 1, y - 2) && (getTeam(x - 1, y - 2) !== team)) {
        changeColor(x - 1, y - 2);
        arrMove.push(`${x - 1}${y - 2}`);
    }
    if (checkXY(x + 1, y - 2) && (getTeam(x + 1, y - 2) !== team)) {
        changeColor(x + 1, y - 2);
        arrMove.push(`${x + 1}${y - 2}`);
    }
}

function checkmateKnight(team, a, b) {
    let x = +a;
    let y = +b;
    let count_r = 0;
    let count_b = 0;

    if (checkXY(x + 2, y + 1) && (getTeam(x + 2, y + 1) !== team)) {
        if (arrMap[x+2][y+1] === "rKing") {
            count_r++;
            checkR = a.toString()+b.toString();
            chessCheckR = arrMap[+a][+b];
            checkmateR = true;
        }
        if (arrMap[x+2][y+1] === "bKing") {
            count_b++;
            checkB = a.toString()+b.toString();
            chessCheckB = arrMap[+a][+b];
            checkmateB = true;
        }
    }
    if (checkXY(x + 2, y - 1) && (getTeam(x + 2, y - 1) !== team)) {
        if (arrMap[x+2][y-1] === "rKing") {
            count_r++;
            checkR = a.toString()+b.toString();
            chessCheckR = arrMap[+a][+b];
            checkmateR = true;
        }
        if (arrMap[x+2][y-1] === "bKing") {
            count_b++;
            checkB = a.toString()+b.toString();
            chessCheckB = arrMap[+a][+b];
            checkmateB = true;
        }
    }
    if (checkXY(x - 2, y - 1) && (getTeam(x - 2, y - 1) !== team)) {
        if (arrMap[x-2][y-1] === "rKing") {
            count_r++;
            checkR = a.toString()+b.toString();
            chessCheckR = arrMap[+a][+b];
            checkmateR = true;
        }
        if (arrMap[x-2][y-1] === "bKing") {
            count_b++;
            checkB = a.toString()+b.toString();
            chessCheckB = arrMap[+a][+b];
            checkmateB = true;
        }
    }
    if (checkXY(x - 2, y + 1) && (getTeam(x - 2, y + 1) !== team)) {
        if (arrMap[x-2][y+1] === "rKing") {
            count_r++;
            checkR = a.toString()+b.toString();
            chessCheckR = arrMap[+a][+b];
            checkmateR = true;
        }
        if (arrMap[x-2][y+1] === "bKing") {
            count_b++;
            checkB = a.toString()+b.toString();
            chessCheckB = arrMap[+a][+b];
            checkmateB = true;
        }
    }
    if (checkXY(x + 1, y + 2) && (getTeam(x + 1, y + 2) !== team)) {
        if (arrMap[x+1][y+2] === "rKing") {
            count_r++;
            checkR = a.toString()+b.toString();
            chessCheckR = arrMap[+a][+b];
            checkmateR = true;
        }
        if (arrMap[x+1][y+2] === "bKing") {
            count_b++;
            checkB = a.toString()+b.toString();
            chessCheckB = arrMap[+a][+b];
            checkmateB = true;
        }
    }
    if (checkXY(x - 1, y + 2) && ( getTeam(x - 1, y + 2) !== team)) {
        if (arrMap[x-1][y+2] === "rKing") {
            count_r++;
            checkR = a.toString()+b.toString();
            chessCheckR = arrMap[+a][+b];
            checkmateR = true;
        }
        if (arrMap[x-1][y+2] === "bKing") {
            count_b++;
            checkB = a.toString()+b.toString();
            chessCheckB = arrMap[+a][+b];
            checkmateB = true;
        }
    }
    if (checkXY(x - 1, y - 2) && (getTeam(x - 1, y - 2) !== team)) {
        if (arrMap[x-1][y-2] === "rKing") {
            count_r++;
            checkR = a.toString()+b.toString();
            chessCheckR = arrMap[+a][+b];
            checkmateR = true;
        }
        if (arrMap[x-1][y-2] === "bKing") {
            count_b++;
            checkB = a.toString()+b.toString();
            chessCheckB = arrMap[+a][+b];
            checkmateB = true;
        }
    }
    if (checkXY(x + 1, y - 2) && (getTeam(x + 1, y - 2) !== team)) {
        if (arrMap[x+1][y-2] === "rKing") {
            count_r++;
            checkR = a.toString()+b.toString();
            chessCheckR = arrMap[+a][+b];
            checkmateR = true;
        }
        if (arrMap[x+1][y-2] === "bKing") {
            count_b++;
            checkB = a.toString()+b.toString();
            chessCheckB = arrMap[+a][+b];
            checkmateB = true;
        }
    }
    if (team === "b") {
        if (count_r === 0) {
            checkR = "";
            chessCheckR = "";
            checkmateR = false;
        }
    }
    if (team === "r") {
        if (count_b === 0) {
            checkB = "";
            chessCheckB = "";
            checkmateB = false;
        }
    }
}