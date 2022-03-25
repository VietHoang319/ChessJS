function moveRook(team, a, b) {
    let x = +a;
    let y = +b;

    // Thẳng dưới
    while (checkXY(x - 1, y) && getTeam(x - 1, y) !== team){
        changeColor(x - 1, y);
        arrMove.push(`${x - 1}${y}`);
        if (getTeam(x - 1, y) !== team && getTeam(x - 1, y) !== ""){
            break;
        }
        x -= 1;
    }
    x = +a;
    y = +b;

    // Thẳng trên
    while (checkXY(x + 1, y) && getTeam(x + 1, y) !== team){
        changeColor(x + 1, y);
        arrMove.push(`${x + 1}${y}`);
        if (getTeam(x + 1, y) !== team && getTeam(x + 1, y) !== ""){
            break;
        }
        x += 1;
    }
    x = +a;
    y = +b;

    // Thẳng phải
    while (checkXY(x, y + 1) && getTeam(x, y + 1) !== team){
        changeColor(x, y + 1);
        arrMove.push(`${x}${y + 1}`);
        if (getTeam(x, y + 1) !== team && getTeam(x, y + 1) !== ""){
            break;
        }
        y += 1;
    }
    x = +a;
    y = +b;

    // Thẳng trái
    while (checkXY(x, y - 1) && getTeam(x, y - 1) !== team){
        changeColor(x, y - 1);
        arrMove.push(`${x}${y - 1}`);
        if (getTeam(x, y - 1) !== team && getTeam(x, y - 1) !== ""){
            break;
        }
        y -= 1;
    }
}