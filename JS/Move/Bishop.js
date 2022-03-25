function moveBishop(team, a, b) {
    let x = +a;
    let y = +b;

    // Chéo phải dưới
    while (checkXY(x - 1, y + 1) && getTeam(x - 1, y + 1) !== team){
        changeColor(x - 1, y + 1);
        arrMove.push(`${x - 1}${y + 1}`);
        if (getTeam(x - 1, y + 1) !== team && getTeam(x - 1, y + 1) !== ""){
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

function checkmateBishop(team, a, b) {
    let x = +a;
    let y = +b;
    let countr = 0;
    let countb = 0;

    // Chéo phải dưới
    while (checkXY(x - 1, y + 1) && getTeam(x - 1, y + 1) !== team){
        if (getTeam(x - 1, y + 1) !== team && getTeam(x - 1, y + 1) !== ""){
            if (arrMap[x-1][y+1] === "rKing") {
                countr += 1;
                checkR = a.toString()+b.toString();
                chessCheckR = arrMap[+a][+b];
                checkmateR = true;
            }
            if (arrMap[x-1][y+1] === "bKing") {
                countb += 1;
                checkB = a.toString()+b.toString();
                chessCheckB = arrMap[+a][+b];
                checkmateB = true;
            }
            break;
        }
        x -= 1;
        y += 1;
    }
    x = +a;
    y = +b;

    // Chéo trái dưới
    while (checkXY(x - 1, y - 1) && getTeam(x - 1, y - 1) !== team){
        if (getTeam(x - 1, y - 1) !== team && getTeam(x - 1, y - 1) !== ""){
            if (arrMap[x-1][y-1] === "rKing") {
                checkR = a.toString()+b.toString();
                chessCheckR = arrMap[+a][+b];
                countr += 1;
                checkmateR = true;
            }
            if (arrMap[x-1][y-1] === "bKing") {
                countb += 1;
                checkB = a.toString()+b.toString();
                chessCheckB = arrMap[+a][+b];
                checkmateB = true;
            }
            break;
        }
        x -= 1;
        y -= 1;
    }
    x = +a;
    y = +b;

    // Chéo phải trên
    while (checkXY(x + 1, y + 1) && getTeam(x + 1, y + 1) !== team){
        if (getTeam(x + 1, y + 1) !== team && getTeam(x + 1, y + 1) !== ""){
            if (arrMap[x+1][y+1] === "rKing") {
                checkR = a.toString()+b.toString();
                chessCheckR = arrMap[+a][+b];
                countr += 1;
                checkmateR = true;
            }
            if (arrMap[x+1][y+1] === "bKing") {
                countb += 1;
                checkB = a.toString()+b.toString();
                chessCheckB = arrMap[+a][+b];
                checkmateB = true;
            }
            break;
        }
        x += 1;
        y += 1;
    }
    x = +a;
    y = +b;

    // Chéo trái trên
    while (checkXY(x + 1, y - 1) && getTeam(x + 1, y - 1) !== team){
        if (getTeam(x + 1, y - 1) !== team && getTeam(x + 1, y - 1) !== ""){
            if (arrMap[x+1][y-1] === "rKing") {
                checkR = a.toString()+b.toString();
                chessCheckR = arrMap[+a][+b];
                countr += 1;
                checkmateR = true;
            }
            if (arrMap[x+1][y-1] === "bKing") {
                countb += 1;
                checkB = a.toString()+b.toString();
                chessCheckB = arrMap[+a][+b];
                checkmateB = true;
            }
            break;
        }
        x += 1;
        y -= 1;
    }
    if (team === "b") {
        if (countr === 0) {
            checkR = "";
            chessCheckR = "";
            checkmateR = false;
        }
    }
    if (team === "r") {
        if (countb === 0) {
            checkB = "";
            chessCheckB = "";
            checkmateB = false;
        }
    }
}