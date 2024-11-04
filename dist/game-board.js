// game-board.ts ----------------------------------------------------------------------------------
// Defines the GameBoard class to represent and track the state of each player's game board.
// ------------------------------------------------------------------------------------------------
;
const ShipLength = new Map([
    ["battleship" /* ShipName.BATTLESHIP */, 6],
    ["aircraft-carrier" /* ShipName.AIRCRAFT_CARRIER */, 5],
    ["destroyer" /* ShipName.DESTROYER */, 4],
    ["submarine" /* ShipName.SUBMARINE */, 3],
    ["patrol-boat" /* ShipName.PATROL_BOAT */, 2],
    ["row-boat" /* ShipName.ROW_BOAT */, 1],
]);
const BOARD_SIZE = 10;
export class GameBoard {
    board = this.initBoard();
    constructor() {
    }
    initBoard() {
        return Array.from({ length: BOARD_SIZE }, () => Array(BOARD_SIZE).fill(0 /* BoardTile.WATER */));
    }
    getRandomOrientation() {
        return Math.random() < 0.5 ? 0 /* Orientation.HORIZONTAL */ : 1 /* Orientation.VERTICAL */;
    }
    getRandomStartingCoordinate(shipLength, orientation) {
        if (orientation == 0 /* Orientation.HORIZONTAL */) {
            const row = Math.floor(Math.random() * BOARD_SIZE);
            const col = Math.floor(Math.random() * (BOARD_SIZE - shipLength));
            return [row, col];
        }
        else {
            const row = Math.floor(Math.random() * (BOARD_SIZE - shipLength));
            const col = Math.floor(Math.random() * BOARD_SIZE);
            return [row, col];
        }
    }
    getRandomShipCoordinates(shipLength, orientation) {
        const startingCoordinate = this.getRandomStartingCoordinate(shipLength, orientation);
        const shipCoordinates = [startingCoordinate];
        for (let i = 1; i < shipLength; i++) {
            if (orientation == 0 /* Orientation.HORIZONTAL */) {
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
            if (this.board[row][col] != 0 /* BoardTile.WATER */)
                return false;
        }
        return true;
    }
    placeShipOnBoard(shipCoordinates) {
        for (const [row, col] of shipCoordinates) {
            this.board[row][col] = 1 /* BoardTile.SHIP */;
        }
    }
    shuffleShips() {
        // TODO: Only clear ship positions.
        // Reset the game board
        this.board = this.initBoard();
        // Place each ship from largest to smallest 
        for (const shipLength of ShipLength.values()) {
            let shipCoordinates;
            let isValidPlacement = false;
            // Loop until valid coordinates are found
            do {
                const shipOrientation = this.getRandomOrientation();
                shipCoordinates = this.getRandomShipCoordinates(shipLength, shipOrientation);
                isValidPlacement = this.isValidCoordinates(shipCoordinates);
            } while (!isValidPlacement);
            // Place the current ship on the board
            this.placeShipOnBoard(shipCoordinates);
        }
    }
    printBoard() {
        const boardString = this.board.map(row => row.map(boardTile => (boardTile == 0 /* BoardTile.WATER */ ? 'O' : 'X')).join(' ')).join('\n');
        console.log(boardString);
    }
}
