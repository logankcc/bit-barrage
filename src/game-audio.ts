// game-audio.ts ----------------------------------------------------------------------------------
// Defines the GameAudio class to handle game audio.
// ------------------------------------------------------------------------------------------------

export class GameAudio {
    protected backgroundMusic: HTMLAudioElement;

    constructor() {
        this.backgroundMusic = new Audio("assets/audio/background-music.mp3");
        this.backgroundMusic.loop = true;
        this.backgroundMusic.volume = 0.25;
    }

    public isPaused(): boolean {
        return this.backgroundMusic.paused;
    }

    public playMusic(): void {
        if (this.isPaused()) {
            this.backgroundMusic.play().catch(error => console.error("Error playing music:", error));
        }
    }

    public pauseMusic(): void {
        if (!this.isPaused()) {
            this.backgroundMusic.pause();
        }
    }

    public toggleMusic() {
        if (!this.isPaused()) {
            this.pauseMusic();
        } else {
            this.playMusic();
        }
    }
}