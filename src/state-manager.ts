// state-manager.ts -------------------------------------------------------------------------------
// Defines the singleton StateManager class that manages game state and settings.
// ------------------------------------------------------------------------------------------------

import * as Constants from './constants.js';
import { getScreenElement } from './screen-element.js'

export class StateManager {
    private static instance: StateManager;
    private currentScreen: HTMLElement;
    private previousScreen: HTMLElement | null;
    // TODO: Access currentPlayer.
    // private currentPlayer: Constants.Player = Constants.Player.PLAYER_ONE;
    // TODO: Access gameMode and gameDifficulty.
    // private gameMode!: Constants.GameMode;
    // private gameDifficulty!: Constants.GameDifficulty;
    private musicSetting: Constants.MusicSetting;
    private soundSetting: Constants.SoundSetting;

    private constructor() {
        this.currentScreen = getScreenElement(Constants.ScreenID.HOME);
        this.previousScreen = null;
        // TODO: Set Constants.MusicSetting = Constants.MusicSetting.ON for music to auto-play when the Play button is clicked.
        this.musicSetting = Constants.MusicSetting.OFF;
        this.soundSetting = Constants.SoundSetting.ON;

    }

    public static getInstance(): StateManager {
        if (!StateManager.instance) {
            StateManager.instance = new StateManager();
        }
        return StateManager.instance;
    }

    public setCurrentScreen(currentScreen:  HTMLElement): void {
        this.currentScreen = currentScreen;
    }

    public getCurrentScreen(): HTMLElement {
        return this.currentScreen;
    }

    public setPreviousScreen(previousScreen:  HTMLElement | null): void {
        this.previousScreen = previousScreen;
    }

    public getPreviousScreen(): HTMLElement | null {
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

    public getMusicSetting(): Constants.MusicSetting {
        return this.musicSetting;
    }

    public getSoundSetting(): Constants.SoundSetting {
        return this.soundSetting;
    }

    public toggleMusicSetting(): void {
        if (this.musicSetting === Constants.MusicSetting.ON) {
            this.musicSetting = Constants.MusicSetting.OFF;
        } else {
            this.musicSetting = Constants.MusicSetting.ON;
        }
    }

    public toggleSoundSetting(): void {
        if (this.soundSetting === Constants.SoundSetting.ON) {
            this.soundSetting = Constants.SoundSetting.OFF;
        } else {
            this.soundSetting = Constants.SoundSetting.ON;
        }
    }
}
