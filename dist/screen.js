// screen.ts --------------------------------------------------------------------------------------
// Defines the abstract Screen class as a base for all screens in the game.
// ------------------------------------------------------------------------------------------------
import { ScreenElement } from './screen-elements.js';
import { GameState } from './game-state.js';
import { warnElementNull } from './utility.js';
export class Screen {
    screenID;
    screenElement;
    static previousElement = null;
    static gameState = new GameState();
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
            case "fleet-deployment-screen" /* ScreenID.FLEET_DEPLOYMENT */:
                return ScreenElement.fleetDeployment;
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
            if (buttonElement.id == "play-button" /* ButtonID.PLAY_BUTTON */) {
                // TODO: Uncomment for music to auto-play when the Play button is clicked.
                /*
                buttonElement.addEventListener('click', () => {
                    this.changeScreen(nextScreenElement);
                    Screen.gameState.playMusic();
                });
                */
                buttonElement.addEventListener('click', () => this.changeScreen(nextScreenElement));
            }
            else if (buttonElement.id == "ready-button" /* ButtonID.READY_BUTTON */) {
                // TODO: Remove this test block.
                buttonElement.addEventListener('click', () => GameState.playerOneGameBoard.printBoard());
            }
            else {
                buttonElement.addEventListener('click', () => this.changeScreen(nextScreenElement));
            }
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
    toggleMusicButton() {
        const musicSetting = Screen.gameState.getMusicSetting();
        const musicButtonElementList = document.querySelectorAll(".music-button" /* ButtonClass.MUSIC_BUTTON */);
        musicButtonElementList.forEach(musicButtonElement => {
            if (musicSetting == "music-on" /* MusicSetting.ON */) {
                musicButtonElement.classList.add("music-off" /* MusicSetting.OFF */);
                musicButtonElement.classList.remove("music-on" /* MusicSetting.ON */);
            }
            else {
                musicButtonElement.classList.add("music-on" /* MusicSetting.ON */);
                musicButtonElement.classList.remove("music-off" /* MusicSetting.OFF */);
            }
        });
        Screen.gameState.toggleMusicSetting();
    }
    initMusicButtonListener() {
        const musicButtonElement = this.screenElement ? this.screenElement.querySelector(".music-button" /* ButtonClass.MUSIC_BUTTON */) : null;
        if (musicButtonElement) {
            musicButtonElement.addEventListener('click', () => this.toggleMusicButton());
        }
        else {
            warnElementNull(".music-button" /* ButtonClass.MUSIC_BUTTON */);
        }
    }
    toggleSoundButton() {
        const soundSetting = Screen.gameState.getSoundSetting();
        const soundButtonElementList = document.querySelectorAll(".sound-button" /* ButtonClass.SOUND_BUTTON */);
        soundButtonElementList.forEach(soundButtonElement => {
            if (soundSetting == "sound-on" /* SoundSetting.ON */) {
                console.log("Sound off!");
                soundButtonElement.classList.add("sound-off" /* SoundSetting.OFF */);
                soundButtonElement.classList.remove("sound-on" /* SoundSetting.ON */);
            }
            else {
                console.log("Sound on!");
                soundButtonElement.classList.add("sound-on" /* SoundSetting.ON */);
                soundButtonElement.classList.remove("sound-off" /* SoundSetting.OFF */);
            }
        });
        Screen.gameState.toggleSoundSetting();
    }
    initSoundButtonListener() {
        const soundButtonElement = this.screenElement ? this.screenElement.querySelector(".sound-button" /* ButtonClass.SOUND_BUTTON */) : null;
        if (soundButtonElement) {
            soundButtonElement.addEventListener('click', () => this.toggleSoundButton());
        }
        else {
            warnElementNull(".sound-button" /* ButtonClass.SOUND_BUTTON */);
        }
    }
}
