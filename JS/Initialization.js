let flag = true;    // biến cờ đỏ đi trước
let isClick = false;
let arrMap = [];    // Ma trận bàn cờ
let arrChess = [];  // Ma trận quân cờ chứa các đối tượng cờ
let arrMove = [];   // Ma trận chứa các lướt đi gợi ý
let position = "";  // Biến lưu vị trí trước
let checkmateR = false; // Biến kiểm tra đã chiếu vua đỏ chưa
let checkmateB = false; // Biến kiểm tra đã chiếu vua đen chưa
let checkR = "";    // Vị trí ô chiếu vua đỏ
let checkB = "";    // Vị trí ô chiếu vua đen
let chessCheckR = "";   // Quân chiếu vua đỏ
let chessCheckB = "";   // Quân chiếu vua đen
let moveRedRook1 = true;   // biến kiểm tra xe đỏ bên trái
let moveRedRook2 = true;   // biến kiểm tra xe đỏ bên phải
let moveBlackRook1 = true; // biến kiểm tra xe đen bên trái
let moveBlackRook2 = true; // biến kiểm tra xe đen bên phải
let moveRedKing = true;    // biến kiểm tra vua đỏ
let moveBlackKing = true;  // biến kiểm tra vua đen
let redWin = false;
let blackWin = false;

function initialization() {
    drawCell();
    initializationChess();
}

function initializationChess() {
    for (let i = 0; i < 8; i++) {
        let a = [];
        arrMap.push(a);
        for (let j = 0; j < 8; j++) {
            a.push(" ")
        }
    }

    for (let i = 0; i <= 7; i++) {
        document.getElementById(`i1${i}`).src = rPawn.img;
        arrMap[1][i] = rPawn.name;
        document.getElementById(`i6${i}`).src = bPawn.img;
        arrMap[6][i] = bPawn.name;
    }
    document.getElementById(`i00`).src = rRook1.img;
    document.getElementById(`i07`).src = rRook2.img;
    document.getElementById(`i70`).src = bRook1.img;
    document.getElementById(`i77`).src = bRook2.img;
    arrMap[0][0] = rRook1.name;
    arrMap[0][7] = rRook2.name;
    arrMap[7][0] = bRook1.name;
    arrMap[7][7] = bRook2.name;

    document.getElementById(`i01`).src = rKnight.img;
    document.getElementById(`i06`).src = rKnight.img;
    document.getElementById(`i71`).src = bKnight.img;
    document.getElementById(`i76`).src = bKnight.img;
    arrMap[0][1] = rKnight.name;
    arrMap[0][6] = rKnight.name;
    arrMap[7][1] = bKnight.name;
    arrMap[7][6] = bKnight.name;

    document.getElementById(`i02`).src = rBishop.img;
    document.getElementById(`i05`).src = rBishop.img;
    document.getElementById(`i72`).src = bBishop.img;
    document.getElementById(`i75`).src = bBishop.img;
    arrMap[0][2] = rBishop.name;
    arrMap[0][5] = rBishop.name;
    arrMap[7][2] = bBishop.name;
    arrMap[7][5] = bBishop.name;

    document.getElementById(`i03`).src = rQueen.img;
    document.getElementById(`i73`).src = bQueen.img;
    arrMap[0][3] = rQueen.name;
    arrMap[7][3] = bQueen.name;

    document.getElementById(`i04`).src = rKing.img;
    document.getElementById(`i74`).src = bKing.img;
    arrMap[0][4] = rKing.name;
    arrMap[7][4] = bKing.name;

    // arrMap[4][4] = bQueen.name;
    // document.getElementById(`i44`).src = bQueen.img;
}

function drawCell() {
    for(let i = 0; i <= 7; i++){
        let a = i+1;
        for(let j = 0; j <= 7; j++){
            let b = j + 1;
            document.getElementById(i.toString() + j.toString()).style.backgroundColor = "rgb(255,255,255)";
            if(a % 2 !== 0 ){
                if(b % 2 === 1)
                    document.getElementById(i.toString() + j.toString()).style.backgroundColor = "rgb(72, 72, 72)";
            }
            else{
                if(b % 2 !== 1)
                    document.getElementById(i.toString() + j.toString()).style.backgroundColor = "rgb(72, 72, 72)";
            }
        }
    }
}