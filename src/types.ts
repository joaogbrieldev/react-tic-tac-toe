export type PlayerSymbol = "X" | "O" | null | undefined;

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
  board: PlayerSymbol[][];
}

export interface GameOverProps {
  winner: PlayerSymbol;
  click: () => void;
}
