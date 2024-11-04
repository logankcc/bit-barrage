import { GameAudio } from './game-audio.js';
import { GameBoard } from './game-board.js';
import { GameState } from './game-state.js';

export class GameManager {
    static gameAudio: GameAudio = new GameAudio();
    static gameState: GameState = new GameState();
    static playerOneGameBoard: GameBoard = new GameBoard();
    static playerTwoGameBoard: GameBoard = new GameBoard();
}