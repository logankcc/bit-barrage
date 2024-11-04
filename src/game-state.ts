// game-state.ts ----------------------------------------------------------------------------------
// Defines the GameState class to keep track of the global game state.
// ------------------------------------------------------------------------------------------------

import { MusicSetting, SoundSetting } from "./constants.js";
import { GameAudio } from './game-audio.js';
import { GameBoard } from './game-board.js';

export class GameState {
    protected musicSetting: MusicSetting = MusicSetting.OFF;
    // TODO: Set SoundSetting = SoundSetting.ON for music to auto-play when the Play button is clicked.
    protected soundSetting: SoundSetting = SoundSetting.ON;
    static gameAudio: GameAudio = new GameAudio();
    static playerOneGameBoard: GameBoard = new GameBoard();
    static playerTwoGameBoard: GameBoard = new GameBoard();

    // TODO: Remove duplicate audio methods between GameSate and GameAudio.
    public playMusic(): void {
        if (this.musicSetting == MusicSetting.ON && GameState.gameAudio.isPaused()) {
            GameState.gameAudio.playMusic();
        }
    }

    public pauseMusic(): void {
        if (this.musicSetting == MusicSetting.OFF && !GameState.gameAudio.isPaused()) {
            GameState.gameAudio.pauseMusic();
        }
    }

    public toggleMusicSetting(): void {
        if (this.musicSetting == MusicSetting.ON) {
            this.musicSetting = MusicSetting.OFF;
        } else {
            this.musicSetting = MusicSetting.ON;
        }

        GameState.gameAudio.toggleMusic();
    }

    public toggleSoundSetting(): void {
        if (this.soundSetting == SoundSetting.ON) {
            this.soundSetting = SoundSetting.OFF;
        } else {
            this.soundSetting = SoundSetting.ON;
        }
    }

    public getMusicSetting(): MusicSetting {
        return this.musicSetting;
    }

    public getSoundSetting(): SoundSetting {
        return this.soundSetting;
    }
}