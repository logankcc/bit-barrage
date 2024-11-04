// screen.ts --------------------------------------------------------------------------------------
// Defines the abstract Screen class as a base for all screens in the game.
// ------------------------------------------------------------------------------------------------
import { ScreenElement } from './screen-element.js';
import { GameManager } from './game-manager.js';
import { warnElementNull } from './utility.js';
export class Screen {
    screenID;
    screenElement;
    static previousElement = null;
    constructor(screenID) {
        this.screenID = screenID;
        this.screenElement = this.getScreenElement(screenID);
    }
    getScreenElement(screenID) {
        switch (screenID) {
            case "home-screen" /* Constants.ScreenID.HOME */:
                return ScreenElement.home;
            case "instructions-screen" /* Constants.ScreenID.INSTRUCTIONS */:
                return ScreenElement.instructions;
            case "select-game-mode-screen" /* Constants.ScreenID.SELECT_GAME_MODE */:
                return ScreenElement.selectGameMode;
            case "select-difficulty-screen" /* Constants.ScreenID.SELECT_DIFFICULTY */:
                return ScreenElement.selectDifficulty;
            case "fleet-deployment-screen" /* Constants.ScreenID.FLEET_DEPLOYMENT */:
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
            const nextScreenAttribute = buttonElement.getAttribute("data-next-screen" /* Constants.DataAttribute.NEXT_SCREEN */);
            const nextScreenElement = nextScreenAttribute ? document.getElementById(nextScreenAttribute) : null;
            // TODO: Refactor!
            if (buttonElement.id == "play-button" /* Constants.ButtonID.PLAY_BUTTON */) {
                // TODO: Uncomment for music to auto-play when the Play button is clicked.
                /*
                buttonElement.addEventListener('click', () => {
                    Screen.gameState.playMusic();
                    this.changeScreen(nextScreenElement);
                });
                */
                buttonElement.addEventListener('click', () => this.changeScreen(nextScreenElement));
            }
            else if (buttonElement.id == "single-player-button" /* Constants.ButtonID.SINGLE_PLAYER */) {
                buttonElement.addEventListener('click', () => {
                    // TODO: Update game mode.
                    // GameManager.gameState.setGameMode(Constants.GameMode.SINGLE_PLAYER);
                    this.changeScreen(nextScreenElement);
                });
            }
            else if (buttonElement.id == "multi-player-button" /* Constants.ButtonID.MULTI_PLAYER */) {
                buttonElement.addEventListener('click', () => {
                    // TODO: Update game mode.
                    // GameManager.gameState.setGameMode(Constants.GameMode.MULTI_PLAYER);
                    this.changeScreen(nextScreenElement);
                });
            }
            else if (buttonElement.id == "easy-button" /* Constants.ButtonID.EASY */) {
                buttonElement.addEventListener('click', () => {
                    // TODO: Update game state.
                    // GameManager.gameState.setGameDifficulty(Constants.GameDifficulty.EASY);
                    this.changeScreen(nextScreenElement);
                });
            }
            else if (buttonElement.id == "hard-button" /* Constants.ButtonID.HARD */) {
                buttonElement.addEventListener('click', () => {
                    // TODO: Update game state.
                    // GameManager.gameState.setGameDifficulty(Constants.GameDifficulty.HARD);
                    this.changeScreen(nextScreenElement);
                });
            }
            else if (buttonElement.id == "ready-button" /* Constants.ButtonID.READY_BUTTON */) {
                // TODO: Remove this test block.
                buttonElement.addEventListener('click', () => GameManager.playerOneGameBoard.printBoard());
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
        const instructionsButtonElement = this.screenElement ? this.screenElement.querySelector(".instructions-button" /* Constants.ButtonClass.INSTRUCTIONS_BUTTON */) : null;
        if (instructionsButtonElement) {
            instructionsButtonElement.addEventListener('click', () => this.changeScreen(document.getElementById("instructions-screen" /* Constants.ScreenID.INSTRUCTIONS */)));
        }
        else {
            console.warn("Instructions Button element is null!");
        }
    }
    initBackButtonListener() {
        const backButtonElement = this.screenElement ? this.screenElement.querySelector(".back-button" /* Constants.ButtonClass.BACK_BUTTON */) : null;
        if (backButtonElement) {
            switch (this.screenID) {
                case "instructions-screen" /* Constants.ScreenID.INSTRUCTIONS */:
                    backButtonElement.addEventListener('click', () => this.changeScreen(Screen.previousElement));
                    break;
                case "select-game-mode-screen" /* Constants.ScreenID.SELECT_GAME_MODE */:
                    backButtonElement.addEventListener('click', () => this.changeScreen(ScreenElement.home));
                    break;
                case "select-difficulty-screen" /* Constants.ScreenID.SELECT_DIFFICULTY */:
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
        const musicSetting = GameManager.gameState.getMusicSetting();
        const musicButtonElementList = document.querySelectorAll(".music-button" /* Constants.ButtonClass.MUSIC_BUTTON */);
        musicButtonElementList.forEach(musicButtonElement => {
            if (musicSetting == "music-on" /* Constants.MusicSetting.ON */) {
                musicButtonElement.classList.add("music-off" /* Constants.MusicSetting.OFF */);
                musicButtonElement.classList.remove("music-on" /* Constants.MusicSetting.ON */);
            }
            else {
                musicButtonElement.classList.add("music-on" /* Constants.MusicSetting.ON */);
                musicButtonElement.classList.remove("music-off" /* Constants.MusicSetting.OFF */);
            }
        });
        GameManager.gameState.toggleMusicSetting();
        GameManager.gameAudio.toggleMusic();
    }
    initMusicButtonListener() {
        const musicButtonElement = this.screenElement ? this.screenElement.querySelector(".music-button" /* Constants.ButtonClass.MUSIC_BUTTON */) : null;
        if (musicButtonElement) {
            musicButtonElement.addEventListener('click', () => this.toggleMusicButton());
        }
        else {
            warnElementNull(".music-button" /* Constants.ButtonClass.MUSIC_BUTTON */);
        }
    }
    toggleSoundButton() {
        const soundSetting = GameManager.gameState.getSoundSetting();
        const soundButtonElementList = document.querySelectorAll(".sound-button" /* Constants.ButtonClass.SOUND_BUTTON */);
        soundButtonElementList.forEach(soundButtonElement => {
            if (soundSetting == "sound-on" /* Constants.SoundSetting.ON */) {
                console.log("Sound off!");
                soundButtonElement.classList.add("sound-off" /* Constants.SoundSetting.OFF */);
                soundButtonElement.classList.remove("sound-on" /* Constants.SoundSetting.ON */);
            }
            else {
                console.log("Sound on!");
                soundButtonElement.classList.add("sound-on" /* Constants.SoundSetting.ON */);
                soundButtonElement.classList.remove("sound-off" /* Constants.SoundSetting.OFF */);
            }
        });
        GameManager.gameState.toggleSoundSetting();
        // TODO: Implement gameAudio.toggleSound();
        // GameManager.gameAudio.toggleSound();
    }
    initSoundButtonListener() {
        const soundButtonElement = this.screenElement ? this.screenElement.querySelector(".sound-button" /* Constants.ButtonClass.SOUND_BUTTON */) : null;
        if (soundButtonElement) {
            soundButtonElement.addEventListener('click', () => this.toggleSoundButton());
        }
        else {
            warnElementNull(".sound-button" /* Constants.ButtonClass.SOUND_BUTTON */);
        }
    }
}
