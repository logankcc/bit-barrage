// screen-elements.ts -----------------------------------------------------------------------------
// Stores references to screen elements for easy access.
// ------------------------------------------------------------------------------------------------
export const ScreenElement = {
    home: document.getElementById("home-screen" /* ScreenID.HOME */),
    instructions: document.getElementById("instructions-screen" /* ScreenID.INSTRUCTIONS */),
    selectGameMode: document.getElementById("select-game-mode-screen" /* ScreenID.SELECT_GAME_MODE */),
    selectDifficulty: document.getElementById("select-difficulty-screen" /* ScreenID.SELECT_DIFFICULTY */),
    fleetDeployment: document.getElementById("fleet-deployment-screen" /* ScreenID.FLEET_DEPLOYMENT */)
};
export function getScreenElement(screenID) {
    switch (screenID) {
        case "home-screen" /* ScreenID.HOME */:
            return ScreenElement.home;
        case "instructions-screen" /* ScreenID.INSTRUCTIONS */:
            return ScreenElement.instructions;
        case "select-game-mode-screen" /* ScreenID.SELECT_GAME_MODE */:
            return ScreenElement.selectGameMode;
        case "select-difficulty-screen" /* ScreenID.SELECT_DIFFICULTY */:
            return ScreenElement.selectDifficulty;
        case "fleet-deployment-screen" /* ScreenID.FLEET_DEPLOYMENT */:
            return ScreenElement.fleetDeployment;
        default:
            console.warn(`Unknown screen ID: ${screenID}. Falling back to the Home screen.`);
            return ScreenElement.home;
    }
}
