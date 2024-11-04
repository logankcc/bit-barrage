// game-audio.ts ----------------------------------------------------------------------------------
// Defines the GameAudio class to handle game audio.
// ------------------------------------------------------------------------------------------------
export class GameAudio {
    backgroundMusic;
    constructor() {
        this.backgroundMusic = new Audio('assets/audio/background-music.mp3');
        this.backgroundMusic.loop = true;
        this.backgroundMusic.volume = 0.25;
    }
    isPaused() {
        return this.backgroundMusic.paused;
    }
    playMusic() {
        if (this.isPaused()) {
            this.backgroundMusic.play().catch(error => console.error('Error playing music: ', error));
        }
    }
    pauseMusic() {
        if (!this.isPaused()) {
            this.backgroundMusic.pause();
        }
    }
    toggleMusic() {
        if (!this.isPaused()) {
            this.pauseMusic();
        }
        else {
            this.playMusic();
        }
    }
}
