function moveQueen(team, a, b) {
    let x = +a;
    let y = +b;
    moveRook(team, x, y);
    moveBishop(team, x, y);
}

function checkmateQueen(team, a, b) {
    let x = +a;
    let y = +b;
    checkmateRook(team, x, y);
    checkmateBishop(team, x, y);
}