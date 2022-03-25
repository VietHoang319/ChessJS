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

function checkmateRook(team, a, b) {
    let x = +a;
    let y = +b;
    let countr = 0;
    let countb = 0;

    // Thẳng dưới
    while (checkXY(x - 1, y) && getTeam(x - 1, y) !== team){
        if (getTeam(x - 1, y) !== team && getTeam(x - 1, y) !== ""){
            if (arrMap[x-1][y] === "rKing") {
                countr += 1;
                checkR = a.toString()+b.toString();
                chessCheckR = arrMap[+a][+b];
                checkmateR = true;
            }
            if (arrMap[x-1][y] === "bKing") {
                countb += 1;
                checkB = a.toString()+b.toString();
                chessCheckB = arrMap[+a][+b];
                checkmateB = true;
            }
            break;
        }
        x -= 1;
    }
    x = +a;
    y = +b;

    // Thẳng trên
    while (checkXY(x + 1, y) && getTeam(x + 1, y) !== team){
        if (getTeam(x + 1, y) !== team && getTeam(x + 1, y) !== ""){
            if (arrMap[x+1][y] === "rKing") {
                countr += 1;
                checkR = a.toString()+b.toString();
                chessCheckR = arrMap[+a][+b];
                checkmateR = true;
            }
            if (arrMap[x+1][y] === "bKing") {
                countb += 1;
                checkB = a.toString()+b.toString();
                chessCheckB = arrMap[+a][+b];
                checkmateB = true;
            }
            break;
        }
        x += 1;
    }
    x = +a;
    y = +b;

    // Thẳng phải
    while (checkXY(x, y + 1) && getTeam(x, y + 1) !== team){
        if (getTeam(x, y + 1) !== team && getTeam(x, y + 1) !== ""){
            if (arrMap[x][y+1] === "rKing") {
                countr += 1;
                checkR = a.toString()+b.toString();
                chessCheckR = arrMap[+a][+b];
                checkmateR = true;
            }
            if (arrMap[x][y+1] === "bKing") {
                countb += 1;
                checkB = a.toString()+b.toString();
                chessCheckB = arrMap[+a][+b];
                checkmateB = true;
            }
            break;
        }
        y += 1;
    }
    x = +a;
    y = +b;

    // Thẳng trái
    while (checkXY(x, y - 1) && getTeam(x, y - 1) !== team){
        if (getTeam(x, y - 1) !== team && getTeam(x, y - 1) !== ""){
            if (arrMap[x][y-1] === "rKing") {
                countr += 1;
                checkR = a.toString()+b.toString();
                chessCheckR = arrMap[+a][+b];
                checkmateR = true;
            }
            if (arrMap[x][y-1] === "bKing") {
                countb += 1;
                checkB = a.toString()+b.toString();
                chessCheckB = arrMap[+a][+b];
                checkmateB = true;
            }
            break;
        }
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