// game-state.ts ----------------------------------------------------------------------------------
// Defines the GameState class to keep track of the current player and global settings.
// ------------------------------------------------------------------------------------------------
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
    musicSetting = "music-off" /* Constants.MusicSetting.OFF */;
    soundSetting = "sound-on" /* Constants.SoundSetting.ON */;
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
