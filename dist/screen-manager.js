// screen-manager.ts -------------------------------------------------------------------------------
// Defines the singleton ScreenManager class that manages screen interactions.
// ------------------------------------------------------------------------------------------------
import { StateManager } from "./state-manager.js";
import { getScreenElement } from "./screen-element.js";
export class ScreenManager {
    static instance;
    stateManager;
    constructor() {
        this.stateManager = StateManager.getInstance();
    }
    static getInstance() {
        if (!ScreenManager.instance) {
            ScreenManager.instance = new ScreenManager();
        }
        return ScreenManager.instance;
    }
    changeScreen(nextScreen) {
        if (!nextScreen) {
            console.warn("Next screen is null. Falling back to the Home screen.");
            nextScreen = getScreenElement("home-screen" /* ScreenID.HOME */);
        }
        const currentScreen = this.stateManager.getCurrentScreen();
        this.stateManager.setPreviousScreen(currentScreen);
        this.stateManager.setCurrentScreen(nextScreen);
        this.hideScreen(currentScreen);
        this.showScreen(nextScreen);
    }
    showScreen(screenElement) {
        screenElement.style.display = "flex";
    }
    hideScreen(screenElement) {
        screenElement.style.display = "none";
    }
}
