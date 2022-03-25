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

/* Kiểm tra id chuyển đến và di chuyển đến vị trí đã chọn */
function checkMoveChess(id, newid) {
    let check = true;
    if (id.localeCompare(newid) === 0 || arrMove.indexOf(newid) === -1 || getChess(+id[0], +id[1]) === " ") {
        check =  false;
        return check;
    }
    else {
        document.getElementById("i" + newid).src = document.getElementById("i" + id).src;
        document.getElementById("i" + id).src = "";
        let x1 = id.charAt(0);
        let y1 = id.charAt(1);
        let x2 = newid.charAt(0);
        let y2 = newid.charAt(1);
        // if (arrMap[x1][y1] === "rRook2") {
        //
        // }
        arrMap[x2][y2] = arrMap[x1][y1];
        arrMap[x1][y1] = " ";
        console.log(arrMap)
        return check;
    }
}
