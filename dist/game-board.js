// game-board.ts ----------------------------------------------------------------------------------
// Defines the GameBoard class to represent and track the state of each player's game board.
// ------------------------------------------------------------------------------------------------
import * as Constants from './constants.js';
export class GameBoard {
    board = this.initBoard();
    shipPositions = new Map();
    // private gameBoardElement = document.querySelector
    initBoard() {
        return Array.from({ length: Constants.BOARD_SIZE }, () => Array(Constants.BOARD_SIZE).fill(0 /* Constants.BoardTile.WATER */));
    }
    getRandomOrientation() {
        return Math.random() < 0.5 ? 0 /* Constants.Orientation.HORIZONTAL */ : 1 /* Constants.Orientation.VERTICAL */;
    }
    getRandomStartingCoordinate(shipLength, orientation) {
        if (orientation == 0 /* Constants.Orientation.HORIZONTAL */) {
            const row = Math.floor(Math.random() * Constants.BOARD_SIZE);
            const col = Math.floor(Math.random() * (Constants.BOARD_SIZE - shipLength));
            return [row, col];
        }
        else {
            const row = Math.floor(Math.random() * (Constants.BOARD_SIZE - shipLength));
            const col = Math.floor(Math.random() * Constants.BOARD_SIZE);
            return [row, col];
        }
    }
    getRandomShipCoordinates(shipLength, orientation) {
        const startingCoordinate = this.getRandomStartingCoordinate(shipLength, orientation);
        const shipCoordinates = [startingCoordinate];
        for (let i = 1; i < shipLength; i++) {
            if (orientation == 0 /* Constants.Orientation.HORIZONTAL */) {
                const row = startingCoordinate[0];
                const col = startingCoordinate[1] + i;
                const nextCoordinate = [row, col];
                shipCoordinates.push(nextCoordinate);
            }
            else {
                const row = startingCoordinate[0] + i;
                const col = startingCoordinate[1];
                const nextCoordinate = [row, col];
                shipCoordinates.push(nextCoordinate);
            }
        }
        return shipCoordinates;
    }
    isValidCoordinates(shipCoordinates) {
        for (const [row, col] of shipCoordinates) {
            if (this.board[row][col] != 0 /* Constants.BoardTile.WATER */)
                return false;
        }
        return true;
    }
    placeShipOnBoard(shipCoordinates) {
        for (const [row, col] of shipCoordinates) {
            this.board[row][col] = 1 /* Constants.BoardTile.SHIP */;
        }
    }
    shuffleShips() {
        // Reset the game board
        for (const shipCoordinates of this.shipPositions.values()) {
            for (const [row, col] of shipCoordinates) {
                this.board[row][col] = 0 /* Constants.BoardTile.WATER */;
            }
        }
        // Place each ship from largest to smallest 
        for (const [shipName, shipLength] of Constants.ShipLength.entries()) {
            let shipCoordinates;
            let isValidPlacement = false;
            // Loop until valid coordinates are found
            do {
                const shipOrientation = this.getRandomOrientation();
                shipCoordinates = this.getRandomShipCoordinates(shipLength, shipOrientation);
                isValidPlacement = this.isValidCoordinates(shipCoordinates);
            } while (!isValidPlacement);
            // Save the position of the ship
            this.shipPositions.set(shipName, shipCoordinates);
            // Place the current ship on the board
            this.placeShipOnBoard(shipCoordinates);
        }
    }
    printBoard() {
        const boardString = this.board.map(row => row.map(boardTile => (boardTile == 0 /* Constants.BoardTile.WATER */ ? 'O' : 'X')).join(' ')).join('\n');
        console.log(boardString);
    }
}
