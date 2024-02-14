import {Chess, Move} from "chess.js"
const  mg_value:number[] = [ 82, 337, 365, 477, 1025,  0 ];
const eg_value:number[]= [ 94, 281, 297, 512,  936,  0 ];
const mg_table:number[][][] = [ [[      0,   0,   0,   0,   0,   0,  0,   0,
    98, 134,  61,  95,  68, 126, 34, -11,
    -6,   7,  26,  31,  65,  56, 25, -20,
    -14,  13,   6,  21,  23,  12, 17, -23,
    -27,  -2,  -5,  12,  17,   6, 10, -25,
    -26,  -4,  -4, -10,   3,   3, 33, -12,
    -35,  -1, -20, -23, -15,  24, 38, -22,
    0,   0,   0,   0,   0,   0,  0,   0],
    [0, 0, 0, 0, 0, 0, 0, 0, -22, 38, 24, -15, -23, -20, -1, -35, -12, 33, 3, 3, -10, -4, -4, -26, -25, 10, 6, 17, 12, -5, -2, -27, -23, 17, 12, 23, 21, 6, 13, -14, -20, 25, 56, 65, 31, 26, 7, -6, -11, 34, 126, 68, 95, 61, 134, 98, 0, 0, 0, 0, 0, 0, 0, 0]],
    [[-167, -89, -34, -49,  61, -97, -15, -107,
        -73, -41,  72,  36,  23,  62,   7,  -17,
        -47,  60,  37,  65,  84, 129,  73,   44,
        -9,  17,  19,  53,  37,  69,  18,   22,
        -13,   4,  16,  13,  28,  19,  21,   -8,
        -23,  -9,  12,  10,  19,  17,  25,  -16,
        -29, -53, -12,  -3,  -1,  18, -14,  -19,
        -105, -21, -58, -33, -17, -28, -19,  -23],
        [-23, -19, -28, -17, -33, -58, -21, -105, -19, -14, 18, -1, -3, -12, -53, -29, -16, 25, 17, 19, 10, 12, -9, -23, -8, 21, 19, 28, 13, 16, 4, -13, 22, 18, 69, 37, 53, 19, 17, -9, 44, 73, 129, 84, 65, 37, 60, -47, -17, 7, 62, 23, 36, 72, -41, -73, -107, -15, -97, 61, -49, -34, -89, -167]],
    [[-29,   4, -82, -37, -25, -42,   7,  -8,
        -26,  16, -18, -13,  30,  59,  18, -47,
        -16,  37,  43,  40,  35,  50,  37,  -2,
        -4,   5,  19,  50,  37,  37,   7,  -2,
        -6,  13,  13,  26,  34,  12,  10,   4,
        0,  15,  15,  15,  14,  27,  18,  10,
        4,  15,  16,   0,   7,  21,  33,   1,
        -33,  -3, -14, -21, -13, -12, -39, -21],
        [-21, -39, -12, -13, -21, -14, -3, -33, 1, 33, 21, 7, 0, 16, 15, 4, 10, 18, 27, 14, 15, 15, 15, 0, 4, 10, 12, 34, 26, 13, 13, -6, -2, 7, 37, 37, 50, 19, 5, -4, -2, 37, 50, 35, 40, 43, 37, -16, -47, 18, 59, 30, -13, -18, 16, -26, -8, 7, -42, -25, -37, -82, 4, -29]],
    [[32,  42,  32,  51, 63,  9,  31,  43,
        27,  32,  58,  62, 80, 67,  26,  44,
        -5,  19,  26,  36, 17, 45,  61,  16,
        -24, -11,   7,  26, 24, 35,  -8, -20,
        -36, -26, -12,  -1,  9, -7,   6, -23,
        -45, -25, -16, -17,  3,  0,  -5, -33,
        -44, -16, -20,  -9, -1, 11,  -6, -71,
        -19, -13,   1,  17, 16,  7, -37, -26],
        [-26, -37, 7, 16, 17, 1, -13, -19, -71, -6, 11, -1, -9, -20, -16, -44, -33, -5, 0, 3, -17, -16, -25, -45, -23, 6, -7, 9, -1, -12, -26, -36, -20, -8, 35, 24, 26, 7, -11, -24, 16, 61, 45, 17, 36, 26, 19, -5, 44, 26, 67, 80, 62, 58, 32, 27, 43, 31, 9, 63, 51, 32, 42, 32]],
    [[-28,   0,  29,  12,  59,  44,  43,  45,
        -24, -39,  -5,   1, -16,  57,  28,  54,
        -13, -17,   7,   8,  29,  56,  47,  57,
        -27, -27, -16, -16,  -1,  17,  -2,   1,
        -9, -26,  -9, -10,  -2,  -4,   3,  -3,
        -14,   2, -11,  -2,  -5,   2,  14,   5,
        -35,  -8,  11,   2,   8,  15,  -3,   1,
        -1, -18,  -9,  10, -15, -25, -31, -50],
        [-50, -31, -25, -15, 10, -9, -18, -1, 1, -3, 15, 8, 2, 11, -8, -35, 5, 14, 2, -5, -2, -11, 2, -14, -3, 3, -4, -2, -10, -9, -26, -9, 1, -2, 17, -1, -16, -16, -27, -27, 57, 47, 56, 29, 8, 7, -17, -13, 54, 28, 57, -16, 1, -5, -39, -24, 45, 43, 44, 59, 12, 29, 0, -28]],
    [[-65,  23,  16, -15, -56, -34,   2,  13,
        29,  -1, -20,  -7,  -8,  -4, -38, -29,
        -9,  24,   2, -16, -20,   6,  22, -22,
        -17, -20, -12, -27, -30, -25, -14, -36,
        -49,  -1, -27, -39, -46, -44, -33, -51,
        -14, -14, -22, -46, -44, -30, -15, -27,
        1,   7,  -8, -64, -43, -16,   9,   8,
        -15,  36,  12, -54,   8, -28,  24,  14],
        [14, 24, -28, 8, -54, 12, 36, -15, 8, 9, -16, -43, -64, -8, 7, 1, -27, -15, -30, -44, -46, -22, -14, -14, -51, -33, -44, -46, -39, -27, -1, -49, -36, -14, -25, -30, -27, -12, -20, -17, -22, 22, 6, -20, -16, 2, 24, -9, -29, -38, -4, -8, -7, -20, -1, 29, 13, 2, -34, -56, -15, 16, 23, -65]]
];
const eg_table:number[][][] = [
    [[0,   0,   0,   0,   0,   0,   0,   0,
        178, 173, 158, 134, 147, 132, 165, 187,
        94, 100,  85,  67,  56,  53,  82,  84,
        32,  24,  13,   5,  -2,   4,  17,  17,
        13,   9,  -3,  -7,  -7,  -8,   3,  -1,
        4,   7,  -6,   1,   0,  -5,  -1,  -8,
        13,   8,   8,  10,  13,   0,   2,  -7,
        0,   0,   0,   0,   0,   0,   0,   0],
        [0, 0, 0, 0, 0, 0, 0, 0, -7, 2, 0, 13, 10, 8, 8, 13, -8, -1, -5, 0, 1, -6, 7, 4, -1, 3, -8, -7, -7, -3, 9, 13, 17, 17, 4, -2, 5, 13, 24, 32, 84, 82, 53, 56, 67, 85, 100, 94, 187, 165, 132, 147, 134, 158, 173, 178, 0, 0, 0, 0, 0, 0, 0, 0]],
    [[-58, -38, -13, -28, -31, -27, -63, -99,
        -25,  -8, -25,  -2,  -9, -25, -24, -52,
        -24, -20,  10,   9,  -1,  -9, -19, -41,
        -17,   3,  22,  22,  22,  11,   8, -18,
        -18,  -6,  16,  25,  16,  17,   4, -18,
        -23,  -3,  -1,  15,  10,  -3, -20, -22,
        -42, -20, -10,  -5,  -2, -20, -23, -44,
        -29, -51, -23, -15, -22, -18, -50, -64],
        [-64, -50, -18, -22, -15, -23, -51, -29, -44, -23, -20, -2, -5, -10, -20, -42, -22, -20, -3, 10, 15, -1, -3, -23, -18, 4, 17, 16, 25, 16, -6, -18, -18, 8, 11, 22, 22, 22, 3, -17, -41, -19, -9, -1, 9, 10, -20, -24, -52, -24, -25, -9, -2, -25, -8, -25, -99, -63, -27, -31, -28, -13, -38, -58]],
    [[-14, -21, -11,  -8, -7,  -9, -17, -24,
        -8,  -4,   7, -12, -3, -13,  -4, -14,
        2,  -8,   0,  -1, -2,   6,   0,   4,
        -3,   9,  12,   9, 14,  10,   3,   2,
        -6,   3,  13,  19,  7,  10,  -3,  -9,
        -12,  -3,   8,  10, 13,   3,  -7, -15,
        -14, -18,  -7,  -1,  4,  -9, -15, -27,
        -23,  -9, -23,  -5, -9, -16,  -5, -17],
        [-17, -5, -16, -9, -5, -23, -9, -23, -27, -15, -9, 4, -1, -7, -18, -14, -15, -7, 3, 13, 10, 8, -3, -12, -9, -3, 10, 7, 19, 13, 3, -6, 2, 3, 10, 14, 9, 12, 9, -3, 4, 0, 6, -2, -1, 0, -8, 2, -14, -4, -13, -3, -12, 7, -4, -8, -24, -17, -9, -7, -8, -11, -21, -14]],
    [[13, 10, 18, 15, 12,  12,   8,   5,
        11, 13, 13, 11, -3,   3,   8,   3,
        7,  7,  7,  5,  4,  -3,  -5,  -3,
        4,  3, 13,  1,  2,   1,  -1,   2,
        3,  5,  8,  4, -5,  -6,  -8, -11,
        -4,  0, -5, -1, -7, -12,  -8, -16,
        -6, -6,  0,  2, -9,  -9, -11,  -3,
        -9,  2,  3, -1, -5, -13,   4, -20],
        [-20, 4, -13, -5, -1, 3, 2, -9, -3, -11, -9, -9, 2, 0, -6, -6, -16, -8, -12, -7, -1, -5, 0, -4, -11, -8, -6, -5, 4, 8, 5, 3, 2, -1, 1, 2, 1, 13, 3, 4, -3, -5, -3, 4, 5, 7, 7, 7, 3, 8, 3, -3, 11, 13, 13, 11, 5, 8, 12, 12, 15, 18, 10, 13]],
    [[-9,  22,  22,  27,  27,  19,  10,  20,
        -17,  20,  32,  41,  58,  25,  30,   0,
        -20,   6,   9,  49,  47,  35,  19,   9,
        3,  22,  24,  45,  57,  40,  57,  36,
        -18,  28,  19,  47,  31,  34,  39,  23,
        -16, -27,  15,   6,   9,  17,  10,   5,
        -22, -23, -30, -16, -16, -23, -36, -32,
        -33, -28, -22, -43,  -5, -32, -20, -41],
        [-41, -20, -32, -5, -43, -22, -28, -33, -32, -36, -23, -16, -16, -30, -23, -22, 5, 10, 17, 9, 6, 15, -27, -16, 23, 39, 34, 31, 47, 19, 28, -18, 36, 57, 40, 57, 45, 24, 22, 3, 9, 19, 35, 47, 49, 9, 6, -20, 0, 30, 25, 58, 41, 32, 20, -17, 20, 10, 19, 27, 27, 22, 22, -9]],
    [[-74, -35, -18, -18, -11,  15,   4, -17,
        -12,  17,  14,  17,  17,  38,  23,  11,
        10,  17,  23,  15,  20,  45,  44,  13,
        -8,  22,  24,  27,  26,  33,  26,   3,
        -18,  -4,  21,  24,  27,  23,   9, -11,
        -19,  -3,  11,  21,  23,  16,   7,  -9,
        -27, -11,   4,  13,  14,   4,  -5, -17,
        -53, -34, -21, -11, -28, -14, -24, -43],
        [-43, -24, -14, -28, -11, -21, -34, -53, -17, -5, 4, 14, 13, 4, -11, -27, -9, 7, 16, 23, 21, 11, -3, -19, -11, 9, 23, 27, 24, 21, -4, -18, 3, 26, 33, 26, 27, 24, 22, -8, 13, 44, 45, 20, 15, 23, 17, 10, 11, 23, 38, 17, 17, 14, 17, -12, -17, 4, 15, -11, -18, -18, -35, -74]]
];

let mg_phase:number;
let eg_phase:number;
function evaluate(chess : Chess,colour:boolean) : number{
    let board = chess.board();
    const pieceValues: { [key: string]: number } = {
        'p': 0, // Pawn
        'n': 1, // Knight
        'b': 2, // Bishop
        'r': 3, // Rook
        'q': 4, // Queen
        'k': 5 // King
    };
    const colorValues: { [key: string]: number } = {
        'w': 0,
        'b': 1
    }

    const materialBalance: { [key: string]: number } = {
        'w': 0, // White's material balance
        'b': 0  // Black's material balance
    };
    let i:number = 0;
    for (const row of board) {
        for (const piece of row) {
            if(piece!=null) {
                const color = colorValues[piece.color.toLowerCase()];
                const p = pieceValues[piece.type.toLowerCase()];
                const value = ((mg_value[p]+mg_table[p][color][i])*mg_phase+(eg_value[p]+eg_table[p][color][i])*eg_phase)/24;
                materialBalance[piece.color.toLowerCase()] += value;
            }
            i+=1;
        }
    }
    if(colour){
        return materialBalance["w"]-materialBalance["b"];
    }
    else{
        return materialBalance["b"]-materialBalance["w"];
    }


}

function compareMoves(move1: Move, move2: Move): number {
    const move1Score = (move1.flags.includes('c') || move1.flags.includes('p')) ? 1 : 0;
    const move2Score = (move2.flags.includes('c') || move2.flags.includes('p')) ? 1 : 0;

    if (move1Score !== move2Score) {
        return move2Score - move1Score;
    }

    const move1NonCaptureScore = (move1.flags.includes('n') || move1.flags.includes('b')) ? 1 : 0;
    const move2NonCaptureScore = (move2.flags.includes('n') || move2.flags.includes('b')) ? 1 : 0;

    if (move1NonCaptureScore !== move2NonCaptureScore) {
        return move2NonCaptureScore - move1NonCaptureScore;
    }

    return 0;
}

function quin(chess:Chess,colour:boolean):number{
    return evaluate(chess,colour);

}


let startTime: number;
const maxSearchTime : number = 660;
function MinMaxRec(chess:Chess,depth:number,colour:boolean,alpha:number,beta:number) : number{
    if(depth==0){
        return -quin(chess,!colour);
    }
    else {
        const moves = chess.moves({verbose: true});
        const ordered_moves = moves.sort(compareMoves);
        for(const i of ordered_moves){
            let val:number;
            chess.move(i);
            if(chess.isGameOver()) {
                if (chess.isCheckmate()) {
                    val = Infinity;
                }
                else{
                    val = 0;
                }
            }
            else{
                val = -MinMaxRec(chess,depth-1,!colour,-beta,-alpha);
            }
            chess.undo();
            if(((Date.now() - startTime) >= maxSearchTime)){
                return 0;
            }
            if(beta<=val){
                return beta;
            }
            if(val > alpha){
                alpha=val;
            }
        }
        return alpha;
    }
}
function MinMaxRet(chess:Chess,depth:number,colour:boolean,alpha:number,beta:number) : Move{
    let best_move:Move;
    const moves = chess.moves({verbose: true});
    const ordered_moves = moves.sort(compareMoves);

    for(const i of ordered_moves){
        chess.move(i);
        let val:number;
        if(chess.isGameOver()) {
            if (chess.isCheckmate()) {
                val = Infinity;
            }
            else{
                val = 0;
            }
        }
        else{
            val = -MinMaxRec(chess,depth-1,!colour,-beta,-alpha);
        }
        chess.undo();
        if(((Date.now() - startTime) >= maxSearchTime)){
            // @ts-ignore
            return best_move;
        }
        if(beta<=val){
            return i;
        }
        if(val > alpha){
            alpha=val;
            best_move=i;
        }
    }
    // @ts-ignore
    return best_move;
}

function iterative_deepening(chess:Chess,colour:boolean) : Move {
    let best:Move;
    startTime= Date.now();
    for (let depth = 1; ((Date.now() - startTime) <= maxSearchTime); depth++) {
        let move:Move = MinMaxRet(chess,depth,colour,-Infinity,Infinity);
        if((Date.now() - startTime) < maxSearchTime){
            if(move!=null) {
                best = move;
            }
        }
        console.log("depth");
        console.log(depth);
    }

    return best!;
}

function checkmate(chess: Chess) : Move{
    const moves = chess.moves({verbose: true});
    for(const i of moves){
        chess.move(i);
        if(chess.isCheckmate()) {
            return i!;
        }
        chess.undo();
    }
    return null;
}
export function botMove(chess: Chess): Move {
    const moves = chess.moves({ verbose: true });
    let colour:boolean = false;
    if(chess.turn()=='w'){
        colour=true;
    }
    const phaseValues: { [key: string]: number } = {
        'p': 0, // Pawn
        'n': 1, // Knight
        'b': 1, // Bishop
        'r': 2, // Rook
        'q': 4, // Queen
        'k': 0 // King
    };
    mg_phase = 0;
    for (const row of chess.board()) {
        for (const piece of row) {
            if (piece != null) {
                mg_phase += phaseValues[piece.type.toLowerCase()];
            }
        }
    }
    eg_phase = 24-mg_phase;
    let best:Move;
    best = checkmate(chess);
    if(best!=null){
        return best;
    }
    best = iterative_deepening(chess, colour);
    if(best == null){
        best = chess.moves({verbose: true})[0];
    }
    return best;
}
