import { useState } from "react";
import { Square } from "./Square";

export function Board({ xIsNext, squares, onPlay }) {
  let winnerSquares = [];

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares) || isMatchDraw(squares)) {
      return;
    }

    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  function getWinningCombinations() {
    const winningCombinations = [];

    // Iterate over each row
    for (let i = 0; i < 3; i++) {
      const row = [];
      for (let j = 0; j < 3; j++) {
        row.push(i * 3 + j);
      }
      winningCombinations.push(row);
    }

    // Iterate over each column
    for (let i = 0; i < 3; i++) {
      const column = [];
      for (let j = 0; j < 3; j++) {
        column.push(i + j * 3);
      }
      winningCombinations.push(column);
    }

    // Iterate over each diagonal
    const diagonal1 = [];
    const diagonal2 = [];
    for (let i = 0; i < 3; i++) {
      diagonal1.push(i * 4);
      diagonal2.push(i * 2 + 2);
    }

    winningCombinations.push(diagonal1);
    winningCombinations.push(diagonal2);
    return winningCombinations;
  }

  function calculateWinner(squares) {
    const winningCombinations = getWinningCombinations();

    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];

      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        winnerSquares = [a, b, c];
        return squares[a];
      }
    }
  }

  function isMatchDraw(squares) {
    for(let i = 0; i < squares.length; i++) {
      if(!squares[i]) {
        return false;
      }
    }
    return true;
  }

  const getBackgroundStyle = (squareIndex) => {
    return winnerSquares.includes(squareIndex) ? "#057705" : undefined;
  };

  let status;
  if(isMatchDraw(squares)) {
    status = "Match Draw";
  } else {
    const winner = calculateWinner(squares);
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (xIsNext ? "X" : "O");
    }
  }

  return (
    <>
      <div className="status">{status}</div>

      <div className="board-row">
        <Square backgroundValue={getBackgroundStyle(0)} value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square backgroundValue={getBackgroundStyle(1)} value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square backgroundValue={getBackgroundStyle(2)} value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square backgroundValue={getBackgroundStyle(3)} value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square backgroundValue={getBackgroundStyle(4)} value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square backgroundValue={getBackgroundStyle(5)} value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square backgroundValue={getBackgroundStyle(6)} value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square backgroundValue={getBackgroundStyle(7)} value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square backgroundValue={getBackgroundStyle(8)} value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
