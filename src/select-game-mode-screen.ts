// select-game-mode-screen.ts ---------------------------------------------------------------------
// Defines the SelectGameModeScreen class used to represent the Select Game Mode screen in game.
// ------------------------------------------------------------------------------------------------

import { ScreenID } from './constants.js';
import { Screen } from './screen.js';

export class SelectGameModeScreen extends Screen {
    constructor() {
        super(ScreenID.SELECT_GAME_MODE)
    }

    initListeners(): void {
        this.initButtonListener(document.getElementById('single-player-button'));
        this.initButtonListener(document.getElementById('multi-player-button'), 'Multiplayer button pressed!');
        this.initBackButtonListener();
        this.initInstructionsButtonListener();
        this.initMusicButtonListener();
        this.initSoundButtonListener();
    }
}