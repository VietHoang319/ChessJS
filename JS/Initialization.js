let flag = true;
let isClick = true;
let arr = []

function initialization() {
    for (let i = 0; i < 8; i++) {
        let a = [];
        arr.push(a);
        for (let j = 0; j < 8; j++) {
            a.push(" ")
        }
    }

    for (let i = 1; i <= 8; i++) {
        document.getElementById(`i2${i}`).src = rPawn.img;
        arr[1][i-1] = rPawn.name;
        document.getElementById(`i7${i}`).src = bPawn.img;
        arr[6][i-1] = bPawn.name;
    }
    document.getElementById(`i11`).src = rRook1.img;
    document.getElementById(`i18`).src = rRook2.img;
    document.getElementById(`i81`).src = bRook1.img;
    document.getElementById(`i88`).src = bRook2.img;
    arr[0][0] = rRook1.name;
    arr[0][7] = rRook2.name;
    arr[7][0] = bRook1.name;
    arr[7][7] = bRook2.name;

    document.getElementById(`i12`).src = rKnight.img;
    document.getElementById(`i17`).src = rKnight.img;
    document.getElementById(`i82`).src = bKnight.img;
    document.getElementById(`i87`).src = bKnight.img;
    arr[0][1] = rKnight.name;
    arr[0][6] = rKnight.name;
    arr[7][1] = bKnight.name;
    arr[7][6] = bKnight.name;

    document.getElementById(`i13`).src = rBishop.img;
    document.getElementById(`i16`).src = rBishop.img;
    document.getElementById(`i83`).src = bBishop.img;
    document.getElementById(`i86`).src = bBishop.img;
    arr[0][2] = rBishop.name;
    arr[0][5] = rBishop.name;
    arr[7][2] = bBishop.name;
    arr[7][5] = bBishop.name;

    document.getElementById(`i14`).src = rQueen.img;
    document.getElementById(`i84`).src = bQueen.img;
    arr[0][3] = rQueen.name;
    arr[7][3] = bQueen.name;

    document.getElementById(`i15`).src = rKing.img;
    document.getElementById(`i85`).src = bKing.img;
    arr[0][4] = rKing.name;
    arr[7][4] = bKing.name;
}

function click(id) {
    let x = id.charAt(0);
    let y = id.charAt(1);
    isClick = !isClick;
}
