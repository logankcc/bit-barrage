// constants.ts -----------------------------------------------------------------------------------
// Defines project-level constants and types for the game.
// ------------------------------------------------------------------------------------------------

export type HTMLElementOrNull = HTMLElement | null;

export const enum ScreenID {
    HOME = 'home-screen',
    INSTRUCTIONS = 'instructions-screen',
    SELECT_GAME_MODE = 'select-game-mode-screen',
    SELECT_DIFFICULTY = 'select-difficulty-screen',
    FLEET_DEPLOYMENT = 'fleet-deployment-screen',
    GAMEPLAY = 'gameplay-screen'
}

export const enum ButtonID {
    PLAY_BUTTON = 'play-button'
}

export const enum ButtonClass {
    BACK_BUTTON = '.back-button',
    INSTRUCTIONS_BUTTON = '.instructions-button',
    MUSIC_BUTTON = '.music-button',
    SOUND_BUTTON = '.sound-button'
}

export const enum DataAttribute {
    NEXT_SCREEN = 'data-next-screen'
}

export const enum MusicSetting {
    ON = 'music-on',
    OFF = 'music-off'
}

export const enum SoundSetting {
    ON = 'sound-on',
    OFF = 'sound-off'
}