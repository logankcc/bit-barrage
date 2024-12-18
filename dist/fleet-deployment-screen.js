// select-game-mode-screen.ts ---------------------------------------------------------------------
// Defines the FleetDeploymentScreen class used to represent the Fleet Deployment screen in game.
// ------------------------------------------------------------------------------------------------
import { Screen } from './screen.js';
import { GameManager } from './game-manager.js';
import { warnElementNull } from './utility.js';
export class FleetDeploymentScreen extends Screen {
    constructor() {
        super("fleet-deployment-screen" /* Constants.ScreenID.FLEET_DEPLOYMENT */);
    }
    initListeners() {
        this.initShuffleButton(document.getElementById('shuffle-button'));
        this.initButtonListener(document.getElementById('ready-button'));
        this.initInstructionsButtonListener();
        this.initMusicButtonListener();
        this.initSoundButtonListener();
    }
    initShuffleButton(buttonElement) {
        if (buttonElement) {
            buttonElement.addEventListener('click', () => {
                console.log('Shuffle button pressed!');
                GameManager.getInstance().getPlayerOneGameBoard().shuffleShips();
            });
        }
        else {
            warnElementNull("shuffle-button" /* Constants.ButtonID.SHUFFLE_BUTTON */);
        }
    }
}
