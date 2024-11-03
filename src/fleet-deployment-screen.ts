// select-game-mode-screen.ts ---------------------------------------------------------------------
// Defines the FleetDeploymentScreen class used to represent the Fleet Deployment screen in game.
// ------------------------------------------------------------------------------------------------

import { ScreenID } from './constants.js';
import { Screen } from './screen.js';

export class FleetDeploymentScreen extends Screen {
    constructor() {
        super(ScreenID.FLEET_DEPLOYMENT)
    }

    initListeners(): void {
        // TODO: init buttons listeners.
    }
}