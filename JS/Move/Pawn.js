function movePawn(team, a, b) {
    let x = +a;
    let y = +b;
    switch (team) {
        case "r":
            if (x === 1) {
                for (let i = 1; i <= 2; i++) {
                    if (getTeam(x + i, y) === "b") {
                        break;
                    }
                    if (arrMap[x + i][y] === " ") {
                        arrMove.push(`${x + i}${y}`);
                        changeColor(x + i, y)
                    }
                }
            } else {
                if (checkXY(x+1, y) && arrMap[x + 1][y] === " ") {
                    arrMove.push(`${x + 1}${y}`);
                    changeColor(x + 1, y)
                }
            }
            if (checkXY(x+1, y-1) && getTeam(x + 1, y - 1) === "b") {
                arrMove.push(`${x + 1}${y - 1}`);
                changeColor(x + 1, y - 1);
            }
            if (checkXY(x+1, y+1) && getTeam(x + 1, y + 1) === "b") {
                arrMove.push(`${x + 1}${y + 1}`);
                changeColor(x + 1, y + 1);
            }
            break;
        case "b":
            if (x === 6) {
                for (let i = 1; i <= 2; i++) {
                    if (getTeam(x - i, y) === "r") {
                        break;
                    }
                    if (arrMap[x - i][y] === " " ) {
                        arrMove.push(`${x - i}${y}`);
                        changeColor(x - i, y)
                    }
                }
            } else {
                if (checkXY(x-1, y) && arrMap[x - 1][y] === " ") {
                    arrMove.push(`${x - 1}${y}`);
                    changeColor(x - 1, y)
                }
            }
            if (checkXY(x-1, y-1) &&  getTeam(x - 1, y - 1) === "r") {
                arrMove.push(`${x - 1}${y - 1}`);
                changeColor(x - 1, y - 1);
            }
            if (checkXY(x-1, y+1) && getTeam(x - 1, y + 1) === "r") {
                arrMove.push(`${x - 1}${y + 1}`);
                changeColor(x - 1, y + 1);
            }
            break;
    }
}

function checkmatePawn(team, a, b) {
    let x = +a;
    let y = +b;
    let count_r = 0;
    let count_b = 0;

    switch (team) {
        case "r":
            if (checkXY(x+1, y-1) && getTeam(x + 1, y - 1) === "b") {
                if (arrMap[x+1][y-1] === "bKing") {
                    count_b++;
                    checkB = a.toString()+b.toString();
                    chessCheckB = arrMap[+a][+b];
                    checkmateB = true;
                }
            }
            if (checkXY(x+1, y+1) && getTeam(x + 1, y + 1) === "b") {
                if (arrMap[x+1][y+1] === "bKing") {
                    count_b++;
                    checkB = a.toString()+b.toString();
                    chessCheckB = arrMap[+a][+b];
                    checkmateB = true;
                }
            }
            break;
        case "b":
            if (checkXY(x-1, y-1) &&  getTeam(x - 1, y - 1) === "r") {
                if (arrMap[x-1][y-1] === "rKing") {
                    count_r++;
                    checkR = a.toString()+b.toString();
                    chessCheckR = arrMap[+a][+b];
                    checkmateR = true;
                }
            }
            if (checkXY(x-1, y+1) && getTeam(x - 1, y + 1) === "r") {
                if (arrMap[x-1][y+1] === "rKing") {
                    count_r++;
                    checkR = a.toString()+b.toString();
                    chessCheckR = arrMap[+a][+b];
                    checkmateR = true;
                }
            }
            break;
    }
    if (team === "b") {
        if (count_r === 0) {
            checkR = "";
            chessCheckR = "";
            checkmateR = false;
        }
    }
    if (team === "r") {
        if (count_b === 0) {
            checkB = "";
            chessCheckB = "";
            checkmateB = false;
        }
    }
}