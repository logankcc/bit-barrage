// select-game-mode-screen.ts ---------------------------------------------------------------------
// Defines the SelectDifficultyScreen class used to represent the Select Difficulty screen in game.
// ------------------------------------------------------------------------------------------------
import { Screen } from './screen.js';
export class SelectDifficultyScreen extends Screen {
    constructor() {
        super("select-difficulty-screen" /* ScreenID.SELECT_DIFFICULTY */);
    }
    initListeners() {
        this.initButtonListener(document.getElementById('easy-button'), 'Easy button pressed!');
        this.initButtonListener(document.getElementById('hard-button'), 'Hard button pressed!');
        this.initInstructionsButtonListener();
        this.initBackButtonListener();
    }
}
