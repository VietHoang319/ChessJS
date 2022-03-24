class Chess {
    name;
    chess;
    team;
    img;

    constructor(name, chess, team, img) {
        this.name = name;
        this.chess = chess;
        this.team = team;
        this.img = img
    }

    move(x, y) {
        howToMove(this.chess, this.team, x, y);
    }
}

let rPawn = new Chess("rPawn", "pawn", "r", "../Pic/Chess/RPawn.png");
let bPawn = new Chess("bPawn", "pawn", "b", "../Pic/Chess/BPawn.png");
let rRook1 = new Chess("rRook1", "rook", "r", "../Pic/Chess/RRook.png");
let rRook2 = new Chess("rRook2", "rook", "r", "../Pic/Chess/RRook.png");
let bRook1 = new Chess("bRook1", "rook", "b", "../Pic/Chess/BRook.png");
let bRook2 = new Chess("bRook2", "rook", "b", "../Pic/Chess/BRook.png");
let rKnight = new Chess("rKnight", "knight", "r", "../Pic/Chess/RKnight.png");
let bKnight = new Chess("bKnight", "knight", "b", "../Pic/Chess/BKnight.png");
let rBishop = new Chess("rBishop", "bishop", "r", "../Pic/Chess/RBishop.png");
let bBishop = new Chess("bBishop", "bishop", "b", "../Pic/Chess/BBishop.png");
let rKing = new Chess("rKing", "king", "r", "../Pic/Chess/RKing.png");
let bKing = new Chess("bKing", "king", "b", "../Pic/Chess/BKing.png");
let rQueen = new Chess("rQueen", "queen", "r", "../Pic/Chess/RQueen.png");
let bQueen = new Chess("bQueen", "queen", "b", "../Pic/Chess/BQueen.png");

arrChess = [rPawn, bPawn, rRook1, rRook2, bRook1, bRook2, rKing, bKing, rKnight, bKnight, rBishop, bBishop, rQueen, bQueen];

