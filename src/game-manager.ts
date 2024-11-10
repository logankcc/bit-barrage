// game-manager.ts --------------------------------------------------------------------------------
// Defines the singleton GameManager class that manages game components.
// ------------------------------------------------------------------------------------------------

import { GameAudio } from './game-audio.js';
import { GameBoard } from './game-board.js';

export class GameManager {
    private static instance: GameManager;
    private gameAudio: GameAudio;
    private playerOneGameBoard: GameBoard;
    private playerTwoGameBoard: GameBoard;

    private constructor() {
        this.gameAudio = new GameAudio();
        this.playerOneGameBoard = new GameBoard();
        this.playerTwoGameBoard = new GameBoard();
    }

    public static getInstance(): GameManager {
        if (!GameManager.instance) {
            GameManager.instance = new GameManager();
        }
        return GameManager.instance;
    }

    public getGameAudio(): GameAudio {
        return this.gameAudio;
    }

    public getPlayerOneGameBoard(): GameBoard {
        return this.playerOneGameBoard;
    }

    public getPlayerTwoGameBoard(): GameBoard {
        return this.playerTwoGameBoard;
    }
}
