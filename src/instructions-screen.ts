// instructions-screen.ts -------------------------------------------------------------------------
// Defines the InstructionsScreen class used to represent the Instructions screen in game.
// ------------------------------------------------------------------------------------------------

import { ScreenID } from './constants.js';
import { Screen } from './screen.js';

export class InstructionsScreen extends Screen {
    constructor() {
        super(ScreenID.INSTRUCTIONS)
    }

    initListeners(): void {
        this.initBackButtonListener()
    }
}