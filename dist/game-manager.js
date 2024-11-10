// game-manager.ts --------------------------------------------------------------------------------
// Defines the singleton GameManager class that manages game components.
// ------------------------------------------------------------------------------------------------
import { GameAudio } from './game-audio.js';
import { GameBoard } from './game-board.js';
export class GameManager {
    static instance;
    gameAudio;
    playerOneGameBoard;
    playerTwoGameBoard;
    constructor() {
        this.gameAudio = new GameAudio();
        this.playerOneGameBoard = new GameBoard();
        this.playerTwoGameBoard = new GameBoard();
    }
    static getInstance() {
        if (!GameManager.instance) {
            GameManager.instance = new GameManager();
        }
        return GameManager.instance;
    }
    getGameAudio() {
        return this.gameAudio;
    }
    getPlayerOneGameBoard() {
        return this.playerOneGameBoard;
    }
    getPlayerTwoGameBoard() {
        return this.playerTwoGameBoard;
    }
}
