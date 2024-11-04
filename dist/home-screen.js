// home-screen.ts ---------------------------------------------------------------------------------
// Defines the HomeScreen class used to represent the Home screen in game.
// ------------------------------------------------------------------------------------------------
import { Screen } from './screen.js';
export class HomeScreen extends Screen {
    constructor() {
        super("home-screen" /* ScreenID.HOME */);
    }
    initListeners() {
        this.initButtonListener(document.getElementById('play-button'));
    }
}
