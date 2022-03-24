function isRedTeam(x, y) {

}

function getTeam(x, y) {
    let name = arrMap[x][y];
    let team = "";
    for (let i = 0; i < arrChess.length; i++) {
        if (name === arrChess[i].name) {
            team = arrChess[i].team;
            break;
        }
    }
    return team;
}

function changeColor(x, y){
    document.getElementById(x.toString() + y.toString()).style.backgroundColor = "#F6CD61";
}

function checkXY(x, y) {
    let f = false;
    if (x >= 0 && x <= 7 && y <=7 && y >= 0) {
        f = true;
    }
    return f;
}

function getChess(x, y) {
    let name = arrMap[x][y];
    let chess = "";
    for (let i = 0; i < arrChess.length; i++) {
        if (name === arrChess[i].name) {
            chess = arrChess[i].chess;
            break;
        }
    }
    return chess;
}

function getMove(x, y) {
    let name = arrMap[x][y];
    for (let i = 0; i < arrChess.length; i++) {
        if (name === arrChess[i].name) {
            arrChess[i].move(x, y);
            break;
        }
    }
}