// screen.ts --------------------------------------------------------------------------------------
// Defines the abstract Screen class as a base for all screens in the game.
// ------------------------------------------------------------------------------------------------

// TODO: Clean up imports.
import { MusicSetting, SoundSetting, ButtonID, ButtonClass, DataAttribute, ScreenID, HTMLElementOrNull } from './constants.js';
import { ScreenElement } from './screen-elements.js';
import { GameState } from './game-state.js';
import { warnElementNull } from './utility.js'

export abstract class Screen {
    protected screenID: ScreenID;
    protected screenElement: HTMLElementOrNull;
    static previousElement: HTMLElementOrNull = null;
    static gameState: GameState = new GameState();

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
            case ScreenID.FLEET_DEPLOYMENT:
                return ScreenElement.fleetDeployment;
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
            if (buttonElement.id == ButtonID.PLAY_BUTTON) {
                // TODO: Uncomment for music to auto-play when the Play button is clicked.
                /*
                buttonElement.addEventListener('click', () => {
                    this.changeScreen(nextScreenElement);
                    Screen.gameState.playMusic();
                });
                */
                buttonElement.addEventListener('click', () => this.changeScreen(nextScreenElement));
            } else if (buttonElement.id == ButtonID.READY_BUTTON) {
                // TODO: Remove this test block.
                buttonElement.addEventListener('click', () => GameState.playerOneGameBoard.printBoard());
            } else {
                buttonElement.addEventListener('click', () => this.changeScreen(nextScreenElement));
            }
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

    private toggleMusicButton(): void {
        const musicSetting: MusicSetting = Screen.gameState.getMusicSetting();
        const musicButtonElementList = document.querySelectorAll(ButtonClass.MUSIC_BUTTON);

        musicButtonElementList.forEach(musicButtonElement => {
            if (musicSetting == MusicSetting.ON) {
                musicButtonElement.classList.add(MusicSetting.OFF);
                musicButtonElement.classList.remove(MusicSetting.ON);
            } else {
                musicButtonElement.classList.add(MusicSetting.ON);
                musicButtonElement.classList.remove(MusicSetting.OFF);
            }
        });

        Screen.gameState.toggleMusicSetting();
    }

    protected initMusicButtonListener(): void {
        const musicButtonElement = this.screenElement ? this.screenElement.querySelector(ButtonClass.MUSIC_BUTTON) : null;
        if (musicButtonElement) {
            musicButtonElement.addEventListener('click', () => this.toggleMusicButton());
        } else {
            warnElementNull(ButtonClass.MUSIC_BUTTON);
        }
    }

    private toggleSoundButton(): void {
        const soundSetting: SoundSetting = Screen.gameState.getSoundSetting();
        const soundButtonElementList = document.querySelectorAll(ButtonClass.SOUND_BUTTON);

        soundButtonElementList.forEach(soundButtonElement => {
            if (soundSetting == SoundSetting.ON) {
                console.log("Sound off!");
                soundButtonElement.classList.add(SoundSetting.OFF);
                soundButtonElement.classList.remove(SoundSetting.ON);
            } else {
                console.log("Sound on!");
                soundButtonElement.classList.add(SoundSetting.ON);
                soundButtonElement.classList.remove(SoundSetting.OFF);
            }
        });

        Screen.gameState.toggleSoundSetting();
    }

    protected initSoundButtonListener(): void {
        const soundButtonElement = this.screenElement ? this.screenElement.querySelector(ButtonClass.SOUND_BUTTON) : null;
        if (soundButtonElement) {
            soundButtonElement.addEventListener('click', () => this.toggleSoundButton());
        } else {
            warnElementNull(ButtonClass.SOUND_BUTTON);
        }
    }
}