// instructions-screen.ts -------------------------------------------------------------------------
// Defines the InstructionsScreen class used to represent the Instructions screen in game.
// ------------------------------------------------------------------------------------------------
import { Screen } from './screen.js';
export class InstructionsScreen extends Screen {
    constructor() {
        super("instructions-screen" /* ScreenID.INSTRUCTIONS */);
    }
    initListeners() {
        this.initBackButtonListener();
    }
}
