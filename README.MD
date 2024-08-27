# Tic Tac Toe Game

A simple implementation of the classic Tic Tac Toe game using React and Bootstrap.

![Tic-Tac-Toe Game Board](/public/static/Tic-Tac-Toe.png)


## Features

- Play as X or O
- Keep track of game history
- Jump to any move in the game history
- Board is generated dynamically using two loops
- Toggle button to sort moves in either ascending or descending order
- Highlight the three squares that caused the win
- Display the location for each move in the format (row, col) in the move history list
- Display a message about the winner or result being a draw when no one wins

## How to Play

1. Clone the repository and run `npm start` to start the game.
2. Play as X or O by clicking on a square on the board.
3. Use the move list to jump to any move in the game history.
4. Toggle the order of the move list using the toggle switch.
5. See the location of each move in the format (row, col) in the move history list.
6. When someone wins, the three squares that caused the win will be highlighted.
7. Winner will be displayer. If no one wins, a message will be displayed indicating that the result is a draw.

## Technical Details

- Built using **React** and **Bootstrap**.
- Uses the `useState` hook to manage game state.
- Implements a simple algorithm to generate a position map for the board.
- Uses a toggle switch to change the order of the move list.
- Dynamically generates the board using two loops.
- Highlights the winning squares and displays the result of the game.

## License



## Author

Joyonta Saha
