import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Board } from "./components/Board";
import { OrderToggleSwitch } from "./components/OrderToggleSwitch";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const[currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  const [isAscendingOrder, setIsAscendingOrder] = useState(true);

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  function handleToggle() {
    setIsAscendingOrder(!isAscendingOrder);
  };

  function generatePositionMap(rows, columns) {
    const positionMap = new Map();
    let index = 0;
  
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        positionMap.set(index, `Row:${row} Column:${col}`);
        index++;
      }
    }
    return positionMap;
  }

  function getPosition(previousSquare, currentSquare) {
    const positionMap = generatePositionMap(3, 3);
    let key;
    for(let i = 0; i < previousSquare.length; i++) {
      if(previousSquare[i] !== currentSquare[i]) {
        key = i;
        break;
      }
    }
    return positionMap.get(key);
  }

  const moves = history.map((squares, move) => {
    
    let description;
    let button;
    let divElement;
    let position;

    if(move !== 0) {
      console.log("alive:"+ history[move]);
      position = getPosition(history[move-1], history[move]);
    }

    if (move === 0) {
      description = "Go to game start";
      button = (
        <button className="btn btn-danger my-1" key={move} onClick={() => jumpTo(move)}>
          {description}
        </button>
      );
    } else if (move === history.length - 1) {
      description = "You are at move #"+ move +" ["+position+"]";
      divElement = (<div key={move} onClick={() => jumpTo(move)}>{description}</div>);
    } else {
      description = "Go to move #"+ move +" ["+position+"]";
      button = (
        <button className="btn btn-success my-1" key={move} onClick={() => jumpTo(move)}>
          {description}
        </button>
      );
    }
  
    return (
      <div key={move} className={!button ? "green" : undefined}>
        {button || divElement}
      </div>
    );
  }).sort((a, b) => {
    if (isAscendingOrder) {
      return a.key - b.key; // Sort by move key in ascending order
    } else {
      return b.key - a.key; // Sort by move key in descending order
    }
  });

  return (
    <div className="game container">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <OrderToggleSwitch isAscending={isAscendingOrder} onToggle={handleToggle}/>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
