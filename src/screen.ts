// screen.ts --------------------------------------------------------------------------------------
// Defines the abstract Screen class as a base for all screens in the game.
// ------------------------------------------------------------------------------------------------

// TODO: Clean up imports.
import * as Constants from './constants.js';
import { StateManager } from './state-manager.js';
import { ScreenManager } from './screen-manager.js';
import { GameManager } from './game-manager.js';
import { ScreenElement, getScreenElement } from './screen-element.js';
import { warnElementNull } from './utility.js'

export abstract class Screen {
    protected screenID: Constants.ScreenID;
    private screenElement: HTMLElement;
    private stateManager: StateManager;
    private screenManager: ScreenManager;
    private gameManager: GameManager;

    constructor(screenID: Constants.ScreenID) {
        this.screenID = screenID;
        this.screenElement = getScreenElement(screenID);
        this.stateManager = StateManager.getInstance();
        this.screenManager = ScreenManager.getInstance();
        this.gameManager = GameManager.getInstance();
    }

    abstract initListeners(): void;

    // TODO: Remove message parameter.
    protected initButtonListener(buttonElement: HTMLElement | null, message: string | null = null): void {
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
                    this.screenManager.changeScreen(nextScreenElement);
                });
                */
                buttonElement.addEventListener('click', () => this.screenManager.changeScreen(nextScreenElement));
            } else if (buttonElement.id == Constants.ButtonID.SINGLE_PLAYER) {
                buttonElement.addEventListener('click', () => {
                    // TODO: Update game mode.
                    // GameManager.gameState.setGameMode(Constants.GameMode.SINGLE_PLAYER);
                    this.screenManager.changeScreen(nextScreenElement);
                });
            } else if (buttonElement.id == Constants.ButtonID.MULTI_PLAYER) {
                buttonElement.addEventListener('click', () => {
                    // TODO: Update game mode.
                    // GameManager.gameState.setGameMode(Constants.GameMode.MULTI_PLAYER);
                    this.screenManager.changeScreen(nextScreenElement);
                });
            } else if (buttonElement.id == Constants.ButtonID.EASY) {
                buttonElement.addEventListener('click', () => {
                    // TODO: Update game state.
                    // GameManager.gameState.setGameDifficulty(Constants.GameDifficulty.EASY);
                    this.screenManager.changeScreen(nextScreenElement);
                });
            } else if (buttonElement.id == Constants.ButtonID.HARD) {
                buttonElement.addEventListener('click', () => {
                    // TODO: Update game state.
                    // GameManager.gameState.setGameDifficulty(Constants.GameDifficulty.HARD);
                    this.screenManager.changeScreen(nextScreenElement);
                });
            } else if (buttonElement.id == Constants.ButtonID.READY_BUTTON) {
                // TODO: Remove this test block.
                buttonElement.addEventListener('click', () => this.gameManager.getPlayerOneGameBoard().printBoard());
            } else {
                buttonElement.addEventListener('click', () => this.screenManager.changeScreen(nextScreenElement));
            }
        } else {
            console.warn("Element is null!");
        }
    }

    protected initInstructionsButtonListener(): void {
        const instructionsButtonElement = this.screenElement ? this.screenElement.querySelector(Constants.ButtonClass.INSTRUCTIONS_BUTTON) : null;
        if (instructionsButtonElement) {
            instructionsButtonElement.addEventListener('click', () => this.screenManager.changeScreen(document.getElementById(Constants.ScreenID.INSTRUCTIONS)));
        } else {
            console.warn("Instructions Button element is null!");
        }
    }

    protected initBackButtonListener(): void {
        const backButtonElement = this.screenElement ? this.screenElement.querySelector(Constants.ButtonClass.BACK_BUTTON) : null;
        if (backButtonElement) {
            switch (this.screenID) {
                case Constants.ScreenID.INSTRUCTIONS:
                    backButtonElement.addEventListener('click', () => this.screenManager.changeScreen(this.stateManager.getPreviousScreen()));
                    break;
                case Constants.ScreenID.SELECT_GAME_MODE:
                    backButtonElement.addEventListener('click', () => this.screenManager.changeScreen(ScreenElement.home));
                    break;
                case Constants.ScreenID.SELECT_DIFFICULTY:
                    backButtonElement.addEventListener('click', () => this.screenManager.changeScreen(ScreenElement.selectGameMode));
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
        const musicSetting: Constants.MusicSetting = this.stateManager.getMusicSetting();
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

        this.stateManager.toggleMusicSetting();
        this.gameManager.getGameAudio().toggleMusic();
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
        const soundSetting: Constants.SoundSetting = this.stateManager.getSoundSetting();
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

        this.stateManager.toggleSoundSetting();;
        // TODO: Implement gameAudio.toggleSound();
        // this.gameManager.gameAudio.toggleMusic();
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
