// select-game-mode-screen.ts ---------------------------------------------------------------------
// Defines the SelectGameModeScreen class used to represent the Select Game Mode screen in game.
// ------------------------------------------------------------------------------------------------
import { Screen } from './screen.js';
export class SelectGameModeScreen extends Screen {
    constructor() {
        super("select-game-mode-screen" /* ScreenID.SELECT_GAME_MODE */);
    }
    initListeners() {
        this.initButtonListener(document.getElementById('single-player-button'));
        this.initButtonListener(document.getElementById('multi-player-button'), 'Multiplayer button pressed!');
        this.initBackButtonListener();
        this.initInstructionsButtonListener();
        this.initMusicButtonListener();
        this.initSoundButtonListener();
    }
}
