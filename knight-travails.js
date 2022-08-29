const VISITED = "VISITED";
const VALID = "VALID";

class Knight {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Chessboard {
  board;
  knight;
  goal;
  stepsSoFar;

  // pass in x y of knight and x y of goal square
  constructor(
    [knightX, knightY],
    [goalX, goalY],
    stepsSoFar = [[knightX, knightY]]
  ) {
    this.board = Array(8).fill(Array(8).fill(VALID));
    this.knight = new Knight(knightX, knightY);
    this.goal = { x: goalX, y: goalY };
    this.stepsSoFar = [...stepsSoFar];
  }

  moveKnight([x, y]) {
    this.knight.x = x;
    this.knight.y = y;
    this.board[x][y] = VISITED;
    this.stepsSoFar.push([x, y]);
  }

  getValidMoves() {
    let translations = [
      { x: 1, y: 2 },
      { x: 2, y: 1 },
      { x: 2, y: -1 },
      { x: 1, y: -2 },
      { x: -1, y: -2 },
      { x: -2, y: -1 },
      { x: -2, y: 1 },
      { x: -1, y: 2 },
    ];

    let validMoves = [];

    for (const translation of translations) {
      const x = this.knight.x + translation.x;
      const y = this.knight.y + translation.y;
      const square = this.board[x]?.[y];
      if (square === VALID) {
        validMoves.push([x, y]);
      }
    }

    return validMoves;
  }

  isKnightAtGoal() {
    return this.knight.x === this.goal.x && this.knight.y === this.goal.y;
  }
}

function knightMoves([knightX, knightY], [goalX, goalY]) {
  const chessboard = new Chessboard([knightX, knightY], [goalX, goalY]);
  let queue = [chessboard];

  function knightMovesRec() {
    // check each board
    if (queue.length) {
      // dequeue board
      const board = queue.shift();

      // check if goal reached
      if (board.isKnightAtGoal()) return board.stepsSoFar;

      // enqueue new board for each valid move
      const validMoves = board.getValidMoves();
      for (const validMove of validMoves) {
        const newBoard = new Chessboard(
          [board.knight.x, board.knight.y],
          [board.goal.x, board.goal.y],
          board.stepsSoFar
        );
        newBoard.moveKnight(validMove);
        queue.push(newBoard);
      }
    }

    return knightMovesRec();
  }

  return knightMovesRec();
}

console.log(knightMoves([3, 3], [4, 3]));
