// screen.ts --------------------------------------------------------------------------------------
// Defines the abstract Screen class as a base for all screens in the game.
// ------------------------------------------------------------------------------------------------

import { ButtonClass, DataAttribute, ScreenID, HTMLElementOrNull } from './constants.js';
import { ScreenElement } from './screen-elements.js';
// import { warnElementNull } from './utility.js'

export abstract class Screen {
    protected screenID: ScreenID;
    protected screenElement: HTMLElementOrNull;
    static previousElement: HTMLElementOrNull = ScreenElement.home;

    constructor(screenID: ScreenID) {
        this.screenID = screenID;
        this.screenElement = this.getScreenElement(screenID);
    }

    private getScreenElement(screenID: ScreenID): HTMLElementOrNull {
        switch (screenID) {
            case ScreenID.HOME:
                return ScreenElement.home;
            case ScreenID.INSTRUCTIONS:
                return ScreenElement.instructions;
            case ScreenID.SELECT_GAME_MODE:
                return ScreenElement.selectGameMode;
            case ScreenID.SELECT_DIFFICULTY:
                return ScreenElement.selectDifficulty;
            default:
                console.warn(`Unknown screen ID: ${screenID}!`);
                return null;
        }
    }

    abstract initListeners(): void;

    private toggleScreenDisplay(screenElement: HTMLElementOrNull, displayStyle: string): void {
        if (screenElement) {
            screenElement.style.display = displayStyle;
        } else {
            console.warn("Element is null!");
        }
    }

    private changeScreen(nextScreenElement: HTMLElementOrNull): void {
        Screen.previousElement = this.screenElement;
        this.toggleScreenDisplay(this.screenElement, 'none');
        this.toggleScreenDisplay(nextScreenElement, 'flex');
    }

    // TODO: Remove message parameter.
    protected initButtonListener(buttonElement: HTMLElementOrNull, message: string | null = null): void {
        if (buttonElement && message) {
            buttonElement.addEventListener('click', () => console.log(message));
        } else if (buttonElement) {
            const nextScreenAttribute = buttonElement.getAttribute(DataAttribute.NEXT_SCREEN);
            const nextScreenElement = nextScreenAttribute ? document.getElementById(nextScreenAttribute) : null;
            buttonElement.addEventListener('click', () => this.changeScreen(nextScreenElement));
        } else {
            console.warn("Element is null!");
        }
    }

    protected initInstructionsButtonListener(): void {
        const instructionsButtonElement = this.screenElement ? this.screenElement.querySelector(ButtonClass.INSTRUCTIONS_BUTTON) : null;
        if (instructionsButtonElement) {
            instructionsButtonElement.addEventListener('click', () => this.changeScreen(document.getElementById(ScreenID.INSTRUCTIONS)));
        } else {
            console.warn("Instructions Button element is null!");
        }
    }

    protected initBackButtonListener(): void {
        const backButtonElement = this.screenElement ? this.screenElement.querySelector(ButtonClass.BACK_BUTTON) : null;
        if (backButtonElement) {
            switch (this.screenID) {
                case ScreenID.INSTRUCTIONS:
                    backButtonElement.addEventListener('click', () => this.changeScreen(Screen.previousElement));
                    break;
                case ScreenID.SELECT_GAME_MODE:
                    backButtonElement.addEventListener('click', () => this.changeScreen(ScreenElement.home));
                    break;
                case ScreenID.SELECT_DIFFICULTY:
                    backButtonElement.addEventListener('click', () => this.changeScreen(ScreenElement.selectGameMode));
                    break;
                default:
                    console.warn("Unknown element ID!");
                    return;
            }
        } else {
            console.warn("Back Button element is null!");
        }
    }
}