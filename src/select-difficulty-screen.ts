// select-game-mode-screen.ts ---------------------------------------------------------------------
// Defines the SelectDifficultyScreen class used to represent the Select Difficulty screen in game.
// ------------------------------------------------------------------------------------------------

import { ScreenID } from './constants.js';
import { Screen } from './screen.js';

export class SelectDifficultyScreen extends Screen {
    constructor() {
        super(ScreenID.SELECT_DIFFICULTY)
    }

    initListeners(): void {
        this.initButtonListener(document.getElementById('easy-button'));
        this.initButtonListener(document.getElementById('hard-button'));
        this.initBackButtonListener()
        this.initMusicButtonListener();
        this.initSoundButtonListener();
    }
}