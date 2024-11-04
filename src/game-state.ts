// game-state.ts ----------------------------------------------------------------------------------
// Defines the GameState class to keep track of the current player and global settings.
// ------------------------------------------------------------------------------------------------

import * as Constants from './constants.js';

export class GameState {
    // Current player
    // TODO: Access currentPlayer.
    // private currentPlayer: Constants.Player = Constants.Player.PLAYER_ONE;

    // Game settings
    // TODO: Access gameMode and gameDifficulty.
    // private gameMode!: Constants.GameMode;
    // private gameDifficulty!: Constants.GameDifficulty;

    // Audio settings
    // TODO: Set Constants.MusicSetting = Constants.MusicSetting.ON for music to auto-play when the Play button is clicked.
    private musicSetting: Constants.MusicSetting = Constants.MusicSetting.OFF;
    private soundSetting: Constants.SoundSetting = Constants.SoundSetting.ON;

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