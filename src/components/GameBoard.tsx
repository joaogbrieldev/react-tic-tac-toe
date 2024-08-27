import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedBoard[rowIndex][colIndex] = "X";
      return prevGameBoard;
    });
  }

  return (
    <ol id="game-board">
      {initialGameBoard.map((row, index) => (
        <li key={index}>
          <ol>
            {row.map((playerSimbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(index, colIndex)}>
                  {gameBoard}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};
