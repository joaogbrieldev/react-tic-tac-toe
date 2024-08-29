import { GameOverProps } from "../types";

export const GameOver = ({ winner, click }: GameOverProps) => {
  return (
    <div id="game-over">
      <h2>Game Over! </h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It's a draw!</p>}
      <p>
        <button onClick={click}>Rematch!</button>
      </p>
    </div>
  );
};
