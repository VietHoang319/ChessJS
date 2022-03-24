function moveBishop(team, a, b) {
    let x = +a;
    let y = +b;

    while (checkXY(x - 1, y + 1) && getTeam(x - 1, y + 1) !== team){
        changeColor(x - 1, y + 1);
        if (getTeam(x - 1, y - 1) !== team && getTeam(x - 1, y - 1) !== ""){
            break;
        }
        x -= 1;
        y += 1;
    }
    x = +a;
    y = +b;

    while (checkXY(x - 1, y - 1) && getTeam(x - 1, y - 1) !== team){
        changeColor(x - 1, y - 1);
        if (getTeam(x - 1, y - 1) !== team && getTeam(x - 1, y - 1) !== ""){
            break;
        }
        x -= 1;
        y -= 1;
    }
    x = +a;
    y = +b;

    while (checkXY(x + 1, y + 1) && getTeam(x + 1, y + 1) !== team){
        changeColor(x + 1, y + 1);
        if (getTeam(x + 1, y + 1) !== team && getTeam(x + 1, y + 1) !== ""){
            break;
        }
        x += 1;
        y += 1;
    }
    x = +a;
    y = +b;

    while (checkXY(x + 1, y - 1) && getTeam(x + 1, y - 1) !== team){
        changeColor(x + 1, y - 1);
        if (getTeam(x + 1, y - 1) !== team && getTeam(x + 1, y - 1) !== ""){
            break;
        }
        x += 1;
        y -= 1;
    }
}