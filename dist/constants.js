// constants.ts -----------------------------------------------------------------------------------
// Defines project-level constants, types, enums, and maps for the game.
// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------
// Constants
// ------------------------------------------------------------------------------------------------
export const BOARD_SIZE = 10;
;
// ------------------------------------------------------------------------------------------------
// Maps
// ------------------------------------------------------------------------------------------------
export const ShipLength = new Map([
    ["battleship" /* ShipName.BATTLESHIP */, 6],
    ["aircraft-carrier" /* ShipName.AIRCRAFT_CARRIER */, 5],
    ["destroyer" /* ShipName.DESTROYER */, 4],
    ["submarine" /* ShipName.SUBMARINE */, 3],
    ["patrol-boat" /* ShipName.PATROL_BOAT */, 2],
    ["row-boat" /* ShipName.ROW_BOAT */, 1],
]);
