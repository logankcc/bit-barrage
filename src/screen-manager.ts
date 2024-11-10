// screen-manager.ts -------------------------------------------------------------------------------
// Defines the singleton ScreenManager class that manages screen interactions.
// ------------------------------------------------------------------------------------------------

import { ScreenID } from "./constants.js";
import { StateManager } from "./state-manager.js";
import { getScreenElement } from "./screen-element.js";

export class ScreenManager {
    private static instance: ScreenManager;
    private stateManager: StateManager;

    private constructor() {
        this.stateManager = StateManager.getInstance();
    }

    public static getInstance(): ScreenManager {
        if (!ScreenManager.instance) {
            ScreenManager.instance = new ScreenManager();
        }
        return ScreenManager.instance;
    }

    public changeScreen(nextScreen: HTMLElement | null): void {
        if (!nextScreen) {
            console.warn("Next screen is null. Falling back to the Home screen.");
            nextScreen = getScreenElement(ScreenID.HOME);
        }

        const currentScreen = this.stateManager.getCurrentScreen();
        this.stateManager.setPreviousScreen(currentScreen);
        this.stateManager.setCurrentScreen(nextScreen);
        this.hideScreen(currentScreen);
        this.showScreen(nextScreen);
    }

    private showScreen(screenElement: HTMLElement): void {
        screenElement.style.display = "flex";
    }

    private hideScreen(screenElement: HTMLElement): void {
        screenElement.style.display = "none";
    }
}
