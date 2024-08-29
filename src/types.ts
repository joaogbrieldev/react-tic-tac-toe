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
  board: GameTurn[];
}

export interface GameTurn {
  square: SquarePosition;
  player: PlayerSymbol;
}
