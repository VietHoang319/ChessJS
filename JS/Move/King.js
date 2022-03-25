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
    // if (team === "r" && x === 0 && y === 4) {
    //     if (checkXY(x, y + 1) && getTeam(x, y + 2) !== team) {
    //         changeColor(x, y + 1)
    //     }
    // }
    // if (team === "b" && x === 7 && y === 4) {
    //     if (checkXY(x, y + 1) && getTeam(x, y + 2) !== team) {
    //         changeColor(x, y + 2)
    //     }
    // }
}