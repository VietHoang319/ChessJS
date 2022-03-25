function moveKing(team, a, b) {
    let x = +a;
    let y = +b;
    if (checkXY(x + 1, y) && getTeam(x + 1, y) !== team) {
        changeColor(x + 1, y);
        arrMove.push(`${x+1}${y}`);
    }
    if (checkXY(x - 1, y) && getTeam(x - 1, y) !== team) {
        changeColor(x - 1, y);
        arrMove.push(`${x-1}${y}`);
    }
    if (checkXY(x + 1, y - 1) && getTeam(x + 1, y - 1) !== team) {
        changeColor(x + 1, y - 1);
        arrMove.push(`${x+1}${y - 1}`);
    }
    if (checkXY(x + 1, y + 1) && getTeam(x + 1, y + 1) !== team) {
        changeColor(x + 1, y + 1);
        arrMove.push(`${x+1}${y+1}`);
    }
    if (checkXY(x - 1, y - 1) && getTeam(x - 1, y - 1) !== team) {
        changeColor(x - 1, y - 1)
        arrMove.push(`${x-1}${y-1}`);
    }
    if (checkXY(x - 1, y + 1) && getTeam(x - 1, y + 1) !== team) {
        changeColor(x - 1, y + 1)
        arrMove.push(`${x-1}${y+1}`);
    }
    if (checkXY(x, y + 1) && getTeam(x, y + 1) !== team) {
        changeColor(x, y + 1)
        arrMove.push(`${x}${y+1}`);
    }
    if (checkXY(x, y - 1) && getTeam(x, y - 1) !== team) {
        changeColor(x, y - 1)
        arrMove.push(`${x}${y-1}`);
    }

    if (team === "r" && moveRedKing === true && checkmateR === false) {
        if (checkXY(x, y + 2) && getTeam(x, y + 2) === "" && getTeam(x, y + 1) === "" && moveRedRook2 === true) {
            changeColor(x, y + 2)
            arrMove.push(`${x}${y+2}`);
        }
        if (checkXY(x, y - 2) && getTeam(x, y - 2) === "" && getTeam(x, y - 1) === "" && getTeam(x, y - 3) === "" && moveRedRook1 === true) {
            changeColor(x, y - 2)
            arrMove.push(`${x}${y-2}`);
        }
    }

    if (team === "b" && moveBlackKing === true && checkmateB === false) {
        if (checkXY(x, y + 2) && getTeam(x, y + 2) === "" && getTeam(x, y + 1) === "" && moveBlackRook2 === true) {
            changeColor(x, y + 2)
            arrMove.push(`${x}${y+2}`);
        }
        if (checkXY(x, y - 2) && getTeam(x, y - 2) === "" && getTeam(x, y - 1) === "" && getTeam(x, y - 3) === "" && moveBlackRook1 === true) {
            changeColor(x, y - 2)
            arrMove.push(`${x}${y-2}`);
        }
    }
}