// state-manager.ts -------------------------------------------------------------------------------
// Defines the singleton StateManager class that manages game state and settings.
// ------------------------------------------------------------------------------------------------
import { getScreenElement } from './screen-element.js';
export class StateManager {
    static instance;
    currentScreen;
    previousScreen;
    // TODO: Access currentPlayer.
    // private currentPlayer: Constants.Player = Constants.Player.PLAYER_ONE;
    // TODO: Access gameMode and gameDifficulty.
    // private gameMode!: Constants.GameMode;
    // private gameDifficulty!: Constants.GameDifficulty;
    musicSetting;
    soundSetting;
    constructor() {
        this.currentScreen = getScreenElement("home-screen" /* Constants.ScreenID.HOME */);
        this.previousScreen = null;
        // TODO: Set Constants.MusicSetting = Constants.MusicSetting.ON for music to auto-play when the Play button is clicked.
        this.musicSetting = "music-off" /* Constants.MusicSetting.OFF */;
        this.soundSetting = "sound-on" /* Constants.SoundSetting.ON */;
    }
    static getInstance() {
        if (!StateManager.instance) {
            StateManager.instance = new StateManager();
        }
        return StateManager.instance;
    }
    setCurrentScreen(currentScreen) {
        this.currentScreen = currentScreen;
    }
    getCurrentScreen() {
        return this.currentScreen;
    }
    setPreviousScreen(previousScreen) {
        this.previousScreen = previousScreen;
    }
    getPreviousScreen() {
        return this.previousScreen;
    }
    /*
    public setCurrentPlayer(currentPlayer:  Constants.Player): void {
        this.currentPlayer = currentPlayer;
    }

    public setGameMode(gameMode: Constants.GameMode): void {
        this.gameMode = gameMode;
    }

    public setGameDifficulty(gameDifficulty: Constants.GameDifficulty): void {
        this.gameDifficulty = gameDifficulty;
    }
    */
    getMusicSetting() {
        return this.musicSetting;
    }
    getSoundSetting() {
        return this.soundSetting;
    }
    toggleMusicSetting() {
        if (this.musicSetting === "music-on" /* Constants.MusicSetting.ON */) {
            this.musicSetting = "music-off" /* Constants.MusicSetting.OFF */;
        }
        else {
            this.musicSetting = "music-on" /* Constants.MusicSetting.ON */;
        }
    }
    toggleSoundSetting() {
        if (this.soundSetting === "sound-on" /* Constants.SoundSetting.ON */) {
            this.soundSetting = "sound-off" /* Constants.SoundSetting.OFF */;
        }
        else {
            this.soundSetting = "sound-on" /* Constants.SoundSetting.ON */;
        }
    }
}
