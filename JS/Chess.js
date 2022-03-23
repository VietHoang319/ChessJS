class Chess {
    name;
    chess;
    team;
    img;

    constructor(name, chess, team, img) {
        this.name = name;
        this.chess = chess;
        this.team = chess;
        this.img = img
    }

    move() {
        howToMove(this.chess, this.team);
    }
}

let rPawn = new Chess("pawn", "pawn", "r", "../Pic/Chess/RPawn.png");
let bPawn = new Chess("pawn", "pawn", "b", "../Pic/Chess/BPawn.png");
let rRook1 = new Chess("rook1", "rook", "r", "../Pic/Chess/RRook.png");
let rRook2 = new Chess("rook2", "rook", "r", "../Pic/Chess/RRook.png");
let bRook1 = new Chess("rook1", "rook", "b", "../Pic/Chess/BRook.png");
let bRook2 = new Chess("rook2", "rook", "b", "../Pic/Chess/BRook.png");
let rKnight = new Chess("knight", "knight", "r", "../Pic/Chess/RKnight.png");
let bKnight = new Chess("knight", "knight", "b", "../Pic/Chess/BKnight.png");
let rBishop = new Chess("bishop", "bishop", "r", "../Pic/Chess/RBishop.png");
let bBishop = new Chess("bishop", "bishop", "b", "../Pic/Chess/BBishop.png");
let rKing = new Chess("king", "king", "r", "../Pic/Chess/RKing.png");
let bKing = new Chess("king", "king", "b", "../Pic/Chess/BKing.png");
let rQueen = new Chess("queen", "queen", "r", "../Pic/Chess/RQueen.png");
let bQueen = new Chess("queen", "queen", "b", "../Pic/Chess/BQueen.png");