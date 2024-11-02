// constants.ts -----------------------------------------------------------------------------------
// Defines project-level constants and types for the game.
// ------------------------------------------------------------------------------------------------

export type HTMLElementOrNull = HTMLElement | null;

export const enum ScreenID {
    HOME = 'home-screen',
    INSTRUCTIONS = 'instructions-screen',
    SELECT_GAME_MODE = 'select-game-mode-screen',
    SELECT_DIFFICULTY = 'select-difficulty-screen'
}

export const enum ButtonClass {
    BACK_BUTTON = '.back-button',
    INSTRUCTIONS_BUTTON = '.instructions-button'
}

export const enum DataAttribute {
    NEXT_SCREEN = 'data-next-screen'
}