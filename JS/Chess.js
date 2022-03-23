class Chess {
    chess;
    team;
    x;
    y;

    constructor(chess, team, x, y) {
        this.chess = chess;
        this.team = chess;
        this.x = x;
        this.y = y;
    }

    move() {
        howToMove(this.chess, this.team, this.x, this.y);
    }
}

