// screen-elements.ts -----------------------------------------------------------------------------
// Stores references to screen elements for easy access.
// ------------------------------------------------------------------------------------------------

import { ScreenID } from "./constants.js";

export const ScreenElement = {
    home: document.getElementById(ScreenID.HOME) as HTMLElement,
    instructions: document.getElementById(ScreenID.INSTRUCTIONS) as HTMLElement,
    selectGameMode: document.getElementById(ScreenID.SELECT_GAME_MODE) as HTMLElement,
    selectDifficulty: document.getElementById(ScreenID.SELECT_DIFFICULTY) as HTMLElement,
    fleetDeployment: document.getElementById(ScreenID.FLEET_DEPLOYMENT) as HTMLElement
};

export function getScreenElement(screenID: ScreenID): HTMLElement {
    switch (screenID) {
        case ScreenID.HOME:
            return ScreenElement.home;
        case ScreenID.INSTRUCTIONS:
            return ScreenElement.instructions;
        case ScreenID.SELECT_GAME_MODE:
            return ScreenElement.selectGameMode;
        case ScreenID.SELECT_DIFFICULTY:
            return ScreenElement.selectDifficulty;
        case ScreenID.FLEET_DEPLOYMENT:
            return ScreenElement.fleetDeployment;
        default:
            console.warn(`Unknown screen ID: ${screenID}. Falling back to the Home screen.`);
            return ScreenElement.home;
    }
}
