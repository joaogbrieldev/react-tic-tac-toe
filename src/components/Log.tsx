import { PlayerSymbol, SquarePosition } from "./GameBoard";

interface GameTurn {
  square: SquarePosition;
  player: PlayerSymbol;
}

export const Log = ({ turns }: { turns: GameTurn[] }) => {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} selected {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
};
