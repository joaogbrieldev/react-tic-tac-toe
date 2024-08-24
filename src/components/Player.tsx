import { useState } from "react";

type Player = {
  initialName: string;
  symbol: string;
};

export const Player = ({ initialName, symbol }: Player) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setEditing] = useState(false);

  const onChange = () => {
    setEditing((isEditing) => !isEditing);
  };

  const eventListener = (anotherName) => {
    setPlayerName(anotherName);
  };

  return (
    <li>
      <span className="player">
        {isEditing === false ? (
          <span className="player-name">{initialName}</span>
        ) : (
          <input type="text" required defaultValue={initialName}></input>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => onChange()}>
        {isEditing === false ? "Editar" : "Salvar"}
      </button>
    </li>
  );
};
