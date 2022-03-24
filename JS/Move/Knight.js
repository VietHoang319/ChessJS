function moveKnight(team, a, b) {
    let x = +a;
    let y = +b;
    if (checkXY(x + 2, y + 1) && (arrMap[x + 2][y + 1] === " " || getTeam(x + 2, y + 1) !== team)) {
        changeColor(x + 2, y + 1);
    }
    if (checkXY(x + 2, y - 1) && (arrMap[x + 2][y - 1] === " " || getTeam(x + 2, y - 1) !== team)) {
        changeColor(x + 2, y - 1);
    }
    if (checkXY(x - 2, y - 1) && (arrMap[x - 2][y - 1] === " " || getTeam(x - 2, y - 1) !== team)) {
        changeColor(x - 2, y - 1);
    }
    if (checkXY(x - 2, y - 1) && (arrMap[x - 2][y + 1] === " " || getTeam(x - 2, y + 1) !== team)) {
        changeColor(x - 2, y + 1);
    }
    if (checkXY(x + 1, y + 2) && (arrMap[x + 1][y + 2] === " " || getTeam(x + 1, y + 2) !== team)) {
        changeColor(x + 1, y + 2);
    }
    if (checkXY(x - 1, y + 2) && (arrMap[x - 1][y + 2] === " " || getTeam(x - 1, y + 2) !== team)) {
        changeColor(x - 1, y + 2);
    }
    if (checkXY(x - 1, y - 2) && (arrMap[x - 1][y - 2] === " " || getTeam(x - 1, y - 2) !== team)) {
        changeColor(x - 1, y - 2);
    }
    if (checkXY(x + 1, y - 2) && (arrMap[x + 1][y - 2] === " " || getTeam(x + 1, y - 2) !== team)) {
        changeColor(x + 1, y - 2);
    }
}