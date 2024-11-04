import { GameAudio } from './game-audio.js';
import { GameBoard } from './game-board.js';
import { GameState } from './game-state.js';
export class GameManager {
    static gameAudio = new GameAudio();
    static gameState = new GameState();
    static playerOneGameBoard = new GameBoard();
    static playerTwoGameBoard = new GameBoard();
}
