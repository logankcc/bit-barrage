// screen-elements.ts --------------------------------------------------------------------------------------
// Stores references to main screen elements for easy access.
// ------------------------------------------------------------------------------------------------

import { ScreenID } from './constants.js';

export const ScreenElement = {
    home: document.getElementById(ScreenID.HOME) as HTMLElement,
    instructions: document.getElementById(ScreenID.INSTRUCTIONS) as HTMLElement,
    selectGameMode: document.getElementById(ScreenID.SELECT_GAME_MODE) as HTMLElement,
    selectDifficulty: document.getElementById(ScreenID.SELECT_DIFFICULTY) as HTMLElement,
    fleetDeployment: document.getElementById(ScreenID.FLEET_DEPLOYMENT) as HTMLElement
};