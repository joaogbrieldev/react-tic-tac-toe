import { useState } from "react";

type Player = {
  initialName: string;
  symbol: string;
  isActive: boolean;
};

export const Player = ({ initialName, symbol, isActive }: Player) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setEditing] = useState(false);

  const onChange = () => {
    setEditing((isEditing) => !isEditing);
  };

  const eventListener = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(event.target.value);
  };

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing === false ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            onChange={eventListener}
            required
            defaultValue={playerName}
          ></input>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => onChange()}>
        {isEditing === false ? "Editar" : "Salvar"}
      </button>
    </li>
  );
};
