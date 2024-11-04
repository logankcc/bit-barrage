// screen.ts --------------------------------------------------------------------------------------
// Defines the abstract Screen class as a base for all screens in the game.
// ------------------------------------------------------------------------------------------------

// TODO: Clean up imports.
import * as Constants from './constants.js';
import { ScreenElement } from './screen-element.js';
import { GameManager } from './game-manager.js';
import { warnElementNull } from './utility.js'

export abstract class Screen {
    protected screenID: Constants.ScreenID;
    protected screenElement: Constants.HTMLElementOrNull;
    static previousElement: Constants.HTMLElementOrNull = null;

    constructor(screenID: Constants.ScreenID) {
        this.screenID = screenID;
        this.screenElement = this.getScreenElement(screenID);
    }

    private getScreenElement(screenID: Constants.ScreenID): Constants.HTMLElementOrNull {
        switch (screenID) {
            case Constants.ScreenID.HOME:
                return ScreenElement.home;
            case Constants.ScreenID.INSTRUCTIONS:
                return ScreenElement.instructions;
            case Constants.ScreenID.SELECT_GAME_MODE:
                return ScreenElement.selectGameMode;
            case Constants.ScreenID.SELECT_DIFFICULTY:
                return ScreenElement.selectDifficulty;
            case Constants.ScreenID.FLEET_DEPLOYMENT:
                return ScreenElement.fleetDeployment;
            default:
                console.warn(`Unknown screen ID: ${screenID}!`);
                return null;
        }
    }

    abstract initListeners(): void;

    private toggleScreenDisplay(screenElement: Constants.HTMLElementOrNull, displayStyle: string): void {
        if (screenElement) {
            screenElement.style.display = displayStyle;
        } else {
            console.warn("Element is null!");
        }
    }

    private changeScreen(nextScreenElement: Constants.HTMLElementOrNull): void {
        Screen.previousElement = this.screenElement;
        this.toggleScreenDisplay(this.screenElement, 'none');
        this.toggleScreenDisplay(nextScreenElement, 'flex');
    }

    // TODO: Remove message parameter.
    protected initButtonListener(buttonElement: Constants.HTMLElementOrNull, message: string | null = null): void {
        if (buttonElement && message) {
            buttonElement.addEventListener('click', () => console.log(message));
        } else if (buttonElement) {
            const nextScreenAttribute = buttonElement.getAttribute(Constants.DataAttribute.NEXT_SCREEN);
            const nextScreenElement = nextScreenAttribute ? document.getElementById(nextScreenAttribute) : null;
            // TODO: Refactor!
            if (buttonElement.id == Constants.ButtonID.PLAY_BUTTON) {
                // TODO: Uncomment for music to auto-play when the Play button is clicked.
                /*
                buttonElement.addEventListener('click', () => {
                    Screen.gameState.playMusic();
                    this.changeScreen(nextScreenElement);
                });
                */
                buttonElement.addEventListener('click', () => this.changeScreen(nextScreenElement));
            } else if (buttonElement.id == Constants.ButtonID.SINGLE_PLAYER) {
                buttonElement.addEventListener('click', () => {
                    // TODO: Update game mode.
                    // GameManager.gameState.setGameMode(Constants.GameMode.SINGLE_PLAYER);
                    this.changeScreen(nextScreenElement);
                });
            } else if (buttonElement.id == Constants.ButtonID.MULTI_PLAYER) {
                buttonElement.addEventListener('click', () => {
                    // TODO: Update game mode.
                    // GameManager.gameState.setGameMode(Constants.GameMode.MULTI_PLAYER);
                    this.changeScreen(nextScreenElement);
                });
            } else if (buttonElement.id == Constants.ButtonID.EASY) {
                buttonElement.addEventListener('click', () => {
                    // TODO: Update game state.
                    // GameManager.gameState.setGameDifficulty(Constants.GameDifficulty.EASY);
                    this.changeScreen(nextScreenElement);
                });
            } else if (buttonElement.id == Constants.ButtonID.HARD) {
                buttonElement.addEventListener('click', () => {
                    // TODO: Update game state.
                    // GameManager.gameState.setGameDifficulty(Constants.GameDifficulty.HARD);
                    this.changeScreen(nextScreenElement);
                });
            } else if (buttonElement.id == Constants.ButtonID.READY_BUTTON) {
                // TODO: Remove this test block.
                buttonElement.addEventListener('click', () => GameManager.playerOneGameBoard.printBoard());
            } else {
                buttonElement.addEventListener('click', () => this.changeScreen(nextScreenElement));
            }
        } else {
            console.warn("Element is null!");
        }
    }

    protected initInstructionsButtonListener(): void {
        const instructionsButtonElement = this.screenElement ? this.screenElement.querySelector(Constants.ButtonClass.INSTRUCTIONS_BUTTON) : null;
        if (instructionsButtonElement) {
            instructionsButtonElement.addEventListener('click', () => this.changeScreen(document.getElementById(Constants.ScreenID.INSTRUCTIONS)));
        } else {
            console.warn("Instructions Button element is null!");
        }
    }

    protected initBackButtonListener(): void {
        const backButtonElement = this.screenElement ? this.screenElement.querySelector(Constants.ButtonClass.BACK_BUTTON) : null;
        if (backButtonElement) {
            switch (this.screenID) {
                case Constants.ScreenID.INSTRUCTIONS:
                    backButtonElement.addEventListener('click', () => this.changeScreen(Screen.previousElement));
                    break;
                case Constants.ScreenID.SELECT_GAME_MODE:
                    backButtonElement.addEventListener('click', () => this.changeScreen(ScreenElement.home));
                    break;
                case Constants.ScreenID.SELECT_DIFFICULTY:
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

    private toggleMusicButton(): void {
        const musicSetting: Constants.MusicSetting = GameManager.gameState.getMusicSetting();
        const musicButtonElementList = document.querySelectorAll(Constants.ButtonClass.MUSIC_BUTTON);

        musicButtonElementList.forEach(musicButtonElement => {
            if (musicSetting == Constants.MusicSetting.ON) {
                musicButtonElement.classList.add(Constants.MusicSetting.OFF);
                musicButtonElement.classList.remove(Constants.MusicSetting.ON);
            } else {
                musicButtonElement.classList.add(Constants.MusicSetting.ON);
                musicButtonElement.classList.remove(Constants.MusicSetting.OFF);
            }
        });

        GameManager.gameState.toggleMusicSetting();
        GameManager.gameAudio.toggleMusic();
    }

    protected initMusicButtonListener(): void {
        const musicButtonElement = this.screenElement ? this.screenElement.querySelector(Constants.ButtonClass.MUSIC_BUTTON) : null;
        if (musicButtonElement) {
            musicButtonElement.addEventListener('click', () => this.toggleMusicButton());
        } else {
            warnElementNull(Constants.ButtonClass.MUSIC_BUTTON);
        }
    }

    private toggleSoundButton(): void {
        const soundSetting: Constants.SoundSetting = GameManager.gameState.getSoundSetting();
        const soundButtonElementList = document.querySelectorAll(Constants.ButtonClass.SOUND_BUTTON);

        soundButtonElementList.forEach(soundButtonElement => {
            if (soundSetting == Constants.SoundSetting.ON) {
                console.log("Sound off!");
                soundButtonElement.classList.add(Constants.SoundSetting.OFF);
                soundButtonElement.classList.remove(Constants.SoundSetting.ON);
            } else {
                console.log("Sound on!");
                soundButtonElement.classList.add(Constants.SoundSetting.ON);
                soundButtonElement.classList.remove(Constants.SoundSetting.OFF);
            }
        });

        GameManager.gameState.toggleSoundSetting();
        // TODO: Implement gameAudio.toggleSound();
        // GameManager.gameAudio.toggleSound();
    }

    protected initSoundButtonListener(): void {
        const soundButtonElement = this.screenElement ? this.screenElement.querySelector(Constants.ButtonClass.SOUND_BUTTON) : null;
        if (soundButtonElement) {
            soundButtonElement.addEventListener('click', () => this.toggleSoundButton());
        } else {
            warnElementNull(Constants.ButtonClass.SOUND_BUTTON);
        }
    }
}