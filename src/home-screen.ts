// home-screen.ts ---------------------------------------------------------------------------------
// Defines the HomeScreen class used to represent the Home screen in game.
// ------------------------------------------------------------------------------------------------

import { ScreenID } from './constants.js';
import { Screen } from './screen.js';

export class HomeScreen extends Screen {
    constructor() {
        super(ScreenID.HOME)
    }

    initListeners(): void {
        this.initButtonListener(document.getElementById('play-button'));
    }
}