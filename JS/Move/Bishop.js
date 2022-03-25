function moveBishop(team, a, b) {
    let x = +a;
    let y = +b;

    // Chéo phải dưới
    while (checkXY(x - 1, y + 1) && getTeam(x - 1, y + 1) !== team){
        changeColor(x - 1, y + 1);
        arrMove.push(`${x - 1}${y + 1}`);
        if (getTeam(x - 1, y - 1) !== team && getTeam(x - 1, y - 1) !== ""){
            break;
        }
        x -= 1;
        y += 1;
    }
    x = +a;
    y = +b;

    // Chéo trái dưới
    while (checkXY(x - 1, y - 1) && getTeam(x - 1, y - 1) !== team){
        changeColor(x - 1, y - 1);
        arrMove.push(`${x - 1}${y - 1}`);
        if (getTeam(x - 1, y - 1) !== team && getTeam(x - 1, y - 1) !== ""){
            break;
        }
        x -= 1;
        y -= 1;
    }
    x = +a;
    y = +b;

    // Chéo phải trên
    while (checkXY(x + 1, y + 1) && getTeam(x + 1, y + 1) !== team){
        changeColor(x + 1, y + 1);
        arrMove.push(`${x + 1}${y + 1}`);
        if (getTeam(x + 1, y + 1) !== team && getTeam(x + 1, y + 1) !== ""){
            break;
        }
        x += 1;
        y += 1;
    }
    x = +a;
    y = +b;

    // Chéo trái trên
    while (checkXY(x + 1, y - 1) && getTeam(x + 1, y - 1) !== team){
        changeColor(x + 1, y - 1);
        arrMove.push(`${x + 1}${y - 1}`);
        if (getTeam(x + 1, y - 1) !== team && getTeam(x + 1, y - 1) !== ""){
            break;
        }
        x += 1;
        y -= 1;
    }
}