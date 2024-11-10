// constants.ts -----------------------------------------------------------------------------------
// Defines project-level constants, types, enums, and maps for the game.
// ------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------
// Constants
// ------------------------------------------------------------------------------------------------

export const BOARD_SIZE: number = 10

// ------------------------------------------------------------------------------------------------
// Custom Types
// ------------------------------------------------------------------------------------------------

export type Board = BoardTile[][];

export type Coordinate = [number, number];

// ------------------------------------------------------------------------------------------------
// Enums
// ------------------------------------------------------------------------------------------------

export const enum GameDifficulty {
    EASY,
    HARD
}

export const enum GameMode {
    SINGLE_PLAYER,
    MULTI_PLAYER
}

export const enum Player {
    PLAYER_ONE,
    PLAYER_TWO
}

export const enum MusicSetting {
    ON = 'music-on',
    OFF = 'music-off'
}

export const enum SoundSetting {
    ON = 'sound-on',
    OFF = 'sound-off'
}

export const enum BoardTile {
    WATER,
    SHIP,
    HIT_WATER,
    HIT_SHIP
}

export const enum Orientation {
    HORIZONTAL,
    VERTICAL
}

export const enum ShipName {
    BATTLESHIP = 'battleship',
    AIRCRAFT_CARRIER = 'aircraft-carrier',
    DESTROYER = 'destroyer',
    SUBMARINE = 'submarine',
    PATROL_BOAT = 'patrol-boat',
    ROW_BOAT = 'row-boat'
};

export const enum ScreenID {
    HOME = 'home-screen',
    INSTRUCTIONS = 'instructions-screen',
    SELECT_GAME_MODE = 'select-game-mode-screen',
    SELECT_DIFFICULTY = 'select-difficulty-screen',
    FLEET_DEPLOYMENT = 'fleet-deployment-screen',
    GAMEPLAY = 'gameplay-screen'
}

export const enum ButtonID {
    PLAY_BUTTON = 'play-button',
    SINGLE_PLAYER = 'single-player-button',
    MULTI_PLAYER = 'multi-player-button',
    EASY = 'easy-button',
    HARD = 'hard-button',
    SHUFFLE_BUTTON = 'shuffle-button',
    READY_BUTTON = 'ready-button'
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

// ------------------------------------------------------------------------------------------------
// Maps
// ------------------------------------------------------------------------------------------------

export const ShipLength: Map<ShipName, number> = new Map([
    [ShipName.BATTLESHIP, 6],
    [ShipName.AIRCRAFT_CARRIER, 5],
    [ShipName.DESTROYER, 4],
    [ShipName.SUBMARINE, 3],
    [ShipName.PATROL_BOAT, 2],
    [ShipName.ROW_BOAT, 1],
]);
