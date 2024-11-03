// game-state.ts ----------------------------------------------------------------------------------
// Defines the GameState class to keep track of the global game state.
// ------------------------------------------------------------------------------------------------
import { GameAudio } from './game-audio.js';
export class GameState {
    musicSetting = "music-off" /* MusicSetting.OFF */;
    // TODO: Set SoundSetting = SoundSetting.ON for music to auto-play when the Play button is clicked.
    soundSetting = "sound-on" /* SoundSetting.ON */;
    static gameAudio = new GameAudio();
    playMusic() {
        if (this.musicSetting == "music-on" /* MusicSetting.ON */ && GameState.gameAudio.isPaused()) {
            GameState.gameAudio.playMusic();
        }
    }
    pauseMusic() {
        if (this.musicSetting == "music-off" /* MusicSetting.OFF */ && !GameState.gameAudio.isPaused()) {
            GameState.gameAudio.pauseMusic();
        }
    }
    toggleMusicSetting() {
        if (this.musicSetting == "music-on" /* MusicSetting.ON */) {
            this.musicSetting = "music-off" /* MusicSetting.OFF */;
        }
        else {
            this.musicSetting = "music-on" /* MusicSetting.ON */;
        }
        GameState.gameAudio.toggleMusic();
    }
    toggleSoundSetting() {
        if (this.soundSetting == "sound-on" /* SoundSetting.ON */) {
            this.soundSetting = "sound-off" /* SoundSetting.OFF */;
        }
        else {
            this.soundSetting = "sound-on" /* SoundSetting.ON */;
        }
    }
    getMusicSetting() {
        return this.musicSetting;
    }
    getSoundSetting() {
        return this.soundSetting;
    }
}
