// select-game-mode-screen.ts ---------------------------------------------------------------------
// Defines the FleetDeploymentScreen class used to represent the Fleet Deployment screen in game.
// ------------------------------------------------------------------------------------------------

import { ScreenID, HTMLElementOrNull } from './constants.js';
import { Screen } from './screen.js';
import { warnElementNull } from './utility.js';

export class FleetDeploymentScreen extends Screen {
    constructor() {
        super(ScreenID.FLEET_DEPLOYMENT)
    }

    initListeners(): void {
        this.initShuffleButton(document.getElementById('shuffle-button'));
        this.initButtonListener(document.getElementById('ready-button'), 'Ready button pressed!');
        this.initInstructionsButtonListener();
        this.initMusicButtonListener();
        this.initSoundButtonListener();
    }

    protected initShuffleButton(buttonElement: HTMLElementOrNull): void {
        if (buttonElement) {
            buttonElement.addEventListener('click', () => console.log('Shuffle button pressed!'));
        } else {
            warnElementNull('shuffle-button');
        }
    }
}