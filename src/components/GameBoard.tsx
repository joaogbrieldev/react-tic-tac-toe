// Definindo os tipos
export type PlayerSymbol = "X" | "O" | null;

export interface SquarePosition {
  row: number;
  col: number;
}

export interface GameTurn {
  square: SquarePosition;
  player: PlayerSymbol;
}

export interface GameBoardProps {
  onSelectSquare: (rowIndex: number, colIndex: number) => void;
  turns: GameTurn[];
}

const initialGameBoard: PlayerSymbol[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }: GameBoardProps) {
  const gameBoard = initialGameBoard.map((row) => row.slice());

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
