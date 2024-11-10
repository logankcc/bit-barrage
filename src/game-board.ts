// game-board.ts ----------------------------------------------------------------------------------
// Defines the GameBoard class to represent and track the state of each player's game board.
// ------------------------------------------------------------------------------------------------

import * as Constants from './constants.js';

export class GameBoard {
    private board: Constants.Board = this.initBoard();
    private shipPositions: Map<Constants.ShipName, Constants.Coordinate[]> = new Map();
    // private gameBoardElement = document.querySelector

    private initBoard(): Constants.BoardTile[][] {
        return Array.from({ length: Constants.BOARD_SIZE }, () =>
            Array(Constants.BOARD_SIZE).fill(Constants.BoardTile.WATER)
        );
    }

    private getRandomOrientation(): Constants.Orientation {
        return Math.random() < 0.5 ? Constants.Orientation.HORIZONTAL : Constants.Orientation.VERTICAL;
    }

    private getRandomStartingCoordinate(shipLength: number, orientation: Constants.Orientation): Constants.Coordinate {
        if (orientation == Constants.Orientation.HORIZONTAL) {
            const row = Math.floor(Math.random() * Constants.BOARD_SIZE);
            const col = Math.floor(Math.random() * (Constants.BOARD_SIZE - shipLength));
            return [row, col]
        } else {
            const row = Math.floor(Math.random() * (Constants.BOARD_SIZE - shipLength));
            const col = Math.floor(Math.random() * Constants.BOARD_SIZE);
            return [row, col]
        }
    }

    private getRandomShipCoordinates(shipLength: number, orientation: Constants.Orientation): Constants.Coordinate[] {
        const startingCoordinate = this.getRandomStartingCoordinate(shipLength, orientation);
        const shipCoordinates: Constants.Coordinate[] = [startingCoordinate];

        for (let i = 1; i < shipLength; i++) {
            if (orientation == Constants.Orientation.HORIZONTAL) {
                const row = startingCoordinate[0];
                const col = startingCoordinate[1] + i;
                const nextCoordinate: Constants.Coordinate = [row, col];
                shipCoordinates.push(nextCoordinate);
            } else {
                const row = startingCoordinate[0] + i;
                const col = startingCoordinate[1];
                const nextCoordinate: Constants.Coordinate = [row, col];
                shipCoordinates.push(nextCoordinate);
            }
        }

        return shipCoordinates
    }

    private isValidCoordinates(shipCoordinates: Constants.Coordinate[]): boolean {
        for (const [row, col] of shipCoordinates) {
            if (this.board[row][col] != Constants.BoardTile.WATER)
                return false;
        }
        return true
    }

    private placeShipOnBoard(shipCoordinates: Constants.Coordinate[]): void {
        for (const [row, col] of shipCoordinates) {
            this.board[row][col] = Constants.BoardTile.SHIP;
        }
    }

    public shuffleShips(): void {
        // Reset the game board
        for (const shipCoordinates of this.shipPositions.values()) {
            for (const [row, col] of shipCoordinates) {
                this.board[row][col] = Constants.BoardTile.WATER
            }
        }

        // Place each ship from largest to smallest 
        for (const [shipName, shipLength] of Constants.ShipLength.entries()) {
            let shipCoordinates: Constants.Coordinate[];
            let isValidPlacement = false;

            // Loop until valid coordinates are found
            do {
                const shipOrientation: Constants.Orientation = this.getRandomOrientation();
                shipCoordinates = this.getRandomShipCoordinates(shipLength, shipOrientation)
                isValidPlacement = this.isValidCoordinates(shipCoordinates)
            } while (!isValidPlacement);

            // Save the position of the ship
            this.shipPositions.set(shipName, shipCoordinates)
            // Place the current ship on the board
            this.placeShipOnBoard(shipCoordinates);
        }
    }

    public printBoard(): void {
        const boardString = this.board.map(row => row.map(boardTile => (boardTile == Constants.BoardTile.WATER ? 'O' : 'X')).join(' ')).join('\n');
        console.log(boardString);
    }

    /*
    private createGrid(): void {
        for (let i = 0; i < Constants.BOARD_SIZE * Constants.BOARD_SIZE; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            this.gameBoardElement.appendChild(cell);
        }
    }

    public renderBoard(): void {
        // Clear existing content in each cell
        Array.from(this.gameBoardElement.children).forEach((cell, index) => {
            cell.innerHTML = ""; // Clear any existing sprites
            const row = Math.floor(index / Constants.BOARD_SIZE);
            const col = index % Constants.BOARD_SIZE;

            // Check if there's a ship in this cell
            if (this.board[row][col] === Constants.BoardTile.SHIP) {
                const shipImg = document.createElement("img");
                shipImg.src = "path/to/ship-sprite.png"; // Set correct path
                shipImg.classList.add("ship-sprite");
                cell.appendChild(shipImg);
            }
        });
    }
    */
}
