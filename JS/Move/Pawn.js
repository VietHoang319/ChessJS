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
                        changeColor(x + i, y)
                    }
                }
            } else {
                if (arrMap[x + 1][y] === " ") {
                    changeColor(x + 1, y)
                }
            }
            if (getTeam(x + 1, y - 1) === "b" && x + 1 <= 7 && y - 1 >= 0) {
                changeColor(x + 1, y - 1);
            }
            if (getTeam(x + 1, y + 1) === "b" && x + 1 <= 7 && y + 1 >= 0) {
                changeColor(x + 1, y + 1);
            }
            break;
        case "b":
            if (x === 6) {
                for (let i = 1; i <= 2; i++) {
                    if (getTeam(x - i, y) === "r") {
                        break;
                    }
                    if (arrMap[x - i][y] === " ") {
                        changeColor(x - i, y)
                    }
                }
            } else {
                if (arrMap[x - 1][y] === " ") {
                    changeColor(x - 1, y)
                }
            }
            if (getTeam(x - 1, y - 1) === "r" && x - 1 <= 7 && y - 1 >= 0) {
                console.log(1)
                changeColor(x - 1, y - 1);
            }
            if (getTeam(x - 1, y + 1) === "r" && x - 1 <= 7 && y + 1 >= 0) {
                changeColor(x - 1, y + 1);
            }
            break;
    }
}