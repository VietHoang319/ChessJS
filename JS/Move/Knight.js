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
    if (checkXY(x + 2, y + 1) && (getTeam(x + 2, y + 1) !== team)) {
        if (arrMap[x+2][y+1] === "rKing") {
            checkmateR = true;
        }
        if (arrMap[x+2][y+1] === "bKing") {
            checkmateB = true;
        }
    }
    if (checkXY(x + 2, y - 1) && (getTeam(x + 2, y - 1) !== team)) {
        if (arrMap[x+2][y-1] === "rKing") {
            checkmateR = true;
        }
        if (arrMap[x+2][y-1] === "bKing") {
            checkmateB = true;
        }
    }
    if (checkXY(x - 2, y - 1) && (getTeam(x - 2, y - 1) !== team)) {
        if (arrMap[x-2][y-1] === "rKing") {
            checkmateR = true;
        }
        if (arrMap[x-2][y-1] === "bKing") {
            checkmateB = true;
        }
    }
    if (checkXY(x - 2, y + 1) && (getTeam(x - 2, y + 1) !== team)) {
        if (arrMap[x-2][y+1] === "rKing") {
            checkmateR = true;
        }
        if (arrMap[x-2][y+1] === "bKing") {
            checkmateB = true;
        }
    }
    if (checkXY(x + 1, y + 2) && (getTeam(x + 1, y + 2) !== team)) {
        if (arrMap[x+1][y+2] === "rKing") {
            checkmateR = true;
        }
        if (arrMap[x+1][y+2] === "bKing") {
            checkmateB = true;
        }
    }
    if (checkXY(x - 1, y + 2) && ( getTeam(x - 1, y + 2) !== team)) {
        if (arrMap[x-1][y+2] === "rKing") {
            checkmateR = true;
        }
        if (arrMap[x-1][y+2] === "bKing") {
            checkmateB = true;
        }
    }
    if (checkXY(x - 1, y - 2) && (getTeam(x - 1, y - 2) !== team)) {
        if (arrMap[x-1][y-2] === "rKing") {
            checkmateR = true;
        }
        if (arrMap[x-1][y-2] === "bKing") {
            checkmateB = true;
        }
    }
    if (checkXY(x + 1, y - 2) && (getTeam(x + 1, y - 2) !== team)) {
        if (arrMap[x+1][y-2] === "rKing") {
            checkmateR = true;
        }
        if (arrMap[x+1][y-2] === "bKing") {
            checkmateB = true;
        }
    }
}