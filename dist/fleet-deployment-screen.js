// select-game-mode-screen.ts ---------------------------------------------------------------------
// Defines the FleetDeploymentScreen class used to represent the Fleet Deployment screen in game.
// ------------------------------------------------------------------------------------------------
import { Screen } from './screen.js';
import { warnElementNull } from './utility.js';
import { GameState } from './game-state.js';
export class FleetDeploymentScreen extends Screen {
    constructor() {
        super("fleet-deployment-screen" /* ScreenID.FLEET_DEPLOYMENT */);
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
                GameState.playerOneGameBoard.shuffleShips();
            });
        }
        else {
            warnElementNull('shuffle-button');
        }
    }
}
