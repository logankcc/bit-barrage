// screen.ts --------------------------------------------------------------------------------------
// Defines the abstract Screen class as a base for all screens in the game.
// ------------------------------------------------------------------------------------------------
import { ScreenElement } from './screen-elements.js';
// import { warnElementNull } from './utility.js'
export class Screen {
    screenID;
    screenElement;
    static previousElement = ScreenElement.home;
    constructor(screenID) {
        this.screenID = screenID;
        this.screenElement = this.getScreenElement(screenID);
    }
    getScreenElement(screenID) {
        switch (screenID) {
            case "home-screen" /* ScreenID.HOME */:
                return ScreenElement.home;
            case "instructions-screen" /* ScreenID.INSTRUCTIONS */:
                return ScreenElement.instructions;
            case "select-game-mode-screen" /* ScreenID.SELECT_GAME_MODE */:
                return ScreenElement.selectGameMode;
            case "select-difficulty-screen" /* ScreenID.SELECT_DIFFICULTY */:
                return ScreenElement.selectDifficulty;
            default:
                console.warn(`Unknown screen ID: ${screenID}!`);
                return null;
        }
    }
    toggleScreenDisplay(screenElement, displayStyle) {
        if (screenElement) {
            screenElement.style.display = displayStyle;
        }
        else {
            console.warn("Element is null!");
        }
    }
    changeScreen(nextScreenElement) {
        Screen.previousElement = this.screenElement;
        this.toggleScreenDisplay(this.screenElement, 'none');
        this.toggleScreenDisplay(nextScreenElement, 'flex');
    }
    // TODO: Remove message parameter.
    initButtonListener(buttonElement, message = null) {
        if (buttonElement && message) {
            buttonElement.addEventListener('click', () => console.log(message));
        }
        else if (buttonElement) {
            const nextScreenAttribute = buttonElement.getAttribute("data-next-screen" /* DataAttribute.NEXT_SCREEN */);
            const nextScreenElement = nextScreenAttribute ? document.getElementById(nextScreenAttribute) : null;
            buttonElement.addEventListener('click', () => this.changeScreen(nextScreenElement));
        }
        else {
            console.warn("Element is null!");
        }
    }
    initInstructionsButtonListener() {
        const instructionsButtonElement = this.screenElement ? this.screenElement.querySelector(".instructions-button" /* ButtonClass.INSTRUCTIONS_BUTTON */) : null;
        if (instructionsButtonElement) {
            instructionsButtonElement.addEventListener('click', () => this.changeScreen(document.getElementById("instructions-screen" /* ScreenID.INSTRUCTIONS */)));
        }
        else {
            console.warn("Instructions Button element is null!");
        }
    }
    initBackButtonListener() {
        const backButtonElement = this.screenElement ? this.screenElement.querySelector(".back-button" /* ButtonClass.BACK_BUTTON */) : null;
        if (backButtonElement) {
            switch (this.screenID) {
                case "instructions-screen" /* ScreenID.INSTRUCTIONS */:
                    backButtonElement.addEventListener('click', () => this.changeScreen(Screen.previousElement));
                    break;
                case "select-game-mode-screen" /* ScreenID.SELECT_GAME_MODE */:
                    backButtonElement.addEventListener('click', () => this.changeScreen(ScreenElement.home));
                    break;
                case "select-difficulty-screen" /* ScreenID.SELECT_DIFFICULTY */:
                    backButtonElement.addEventListener('click', () => this.changeScreen(ScreenElement.selectGameMode));
                    break;
                default:
                    console.warn("Unknown element ID!");
                    return;
            }
        }
        else {
            console.warn("Back Button element is null!");
        }
    }
}
