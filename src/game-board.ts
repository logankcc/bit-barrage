// game-board.ts ----------------------------------------------------------------------------------
// Defines the GameBoard class to represent and track the state of each player's game board.
// ------------------------------------------------------------------------------------------------

// TODO: Consider moving enums, types, and maps to a separate constants file.
const enum Orientation {
    HORIZONTAL,
    VERTICAL
}

const enum ShipName {
    BATTLESHIP = 'battleship',
    AIRCRAFT_CARRIER = 'aircraft-carrier',
    DESTROYER = 'destroyer',
    SUBMARINE = 'submarine',
    PATROL_BOAT = 'patrol-boat',
    ROW_BOAT = 'row-boat'
};

const ShipLength: Map<ShipName, number> = new Map([
    [ShipName.BATTLESHIP, 6],
    [ShipName.AIRCRAFT_CARRIER, 5],
    [ShipName.DESTROYER, 4],
    [ShipName.SUBMARINE, 3],
    [ShipName.PATROL_BOAT, 2],
    [ShipName.ROW_BOAT, 1],
]);

type Board = BoardTile[][];

type Coordinate = [number, number];

const BOARD_SIZE: number = 10

const enum BoardTile {
    WATER,
    SHIP,
    HIT_WATER,
    HIT_SHIP
}

export class GameBoard {
    private board: Board = this.initBoard();

    constructor() {
    }

    private initBoard(): BoardTile[][] {
        return Array.from({ length: BOARD_SIZE }, () =>
            Array(BOARD_SIZE).fill(BoardTile.WATER)
        );
    }

    private getRandomOrientation(): Orientation {
        return Math.random() < 0.5 ? Orientation.HORIZONTAL : Orientation.VERTICAL;
    }

    private getRandomStartingCoordinate(shipLength: number, orientation: Orientation): Coordinate {
        if (orientation == Orientation.HORIZONTAL) {
            const row = Math.floor(Math.random() * BOARD_SIZE);
            const col = Math.floor(Math.random() * (BOARD_SIZE - shipLength));
            return [row, col]
        } else {
            const row = Math.floor(Math.random() * (BOARD_SIZE - shipLength));
            const col = Math.floor(Math.random() * BOARD_SIZE);
            return [row, col]
        }
    }

    private getRandomShipCoordinates(shipLength: number, orientation: Orientation): Coordinate[] {
        const startingCoordinate = this.getRandomStartingCoordinate(shipLength, orientation);
        const shipCoordinates: Coordinate[] = [startingCoordinate];

        for (let i = 1; i < shipLength; i++) {
            if (orientation == Orientation.HORIZONTAL) {
                const row = startingCoordinate[0];
                const col = startingCoordinate[1] + i;
                const nextCoordinate: Coordinate = [row, col];
                shipCoordinates.push(nextCoordinate);
            } else {
                const row = startingCoordinate[0] + i;
                const col = startingCoordinate[1];
                const nextCoordinate: Coordinate = [row, col];
                shipCoordinates.push(nextCoordinate);
            }
        }

        return shipCoordinates
    }

    private isValidCoordinates(shipCoordinates: Coordinate[]): boolean {
        for (const [row, col] of shipCoordinates) {
            if (this.board[row][col] != BoardTile.WATER)
                return false;
        }
        return true
    }

    private placeShipOnBoard(shipCoordinates: Coordinate[]): void {
        for (const [row, col] of shipCoordinates) {
            this.board[row][col] = BoardTile.SHIP;
        }
    }

    public shuffleShips(): void {
        // TODO: Only clear ship positions.
        // Reset the game board
        this.board = this.initBoard();

        // Place each ship from largest to smallest 
        for (const shipLength of ShipLength.values()) {
            let shipCoordinates: Coordinate[];
            let isValidPlacement = false;

            // Loop until valid coordinates are found
            do {
                const shipOrientation: Orientation = this.getRandomOrientation();
                shipCoordinates = this.getRandomShipCoordinates(shipLength, shipOrientation)
                isValidPlacement = this.isValidCoordinates(shipCoordinates)
            } while (!isValidPlacement);

            // Place the current ship on the board
            this.placeShipOnBoard(shipCoordinates);
        }
    }

    public printBoard(): void {
        const boardString = this.board.map(row => row.map(boardTile => (boardTile == BoardTile.WATER ? 'O' : 'X')).join(' ')).join('\n');
        console.log(boardString);
    }
}