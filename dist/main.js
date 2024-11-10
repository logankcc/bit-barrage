// main.ts --------------------------------------------------------------------------------------
// Entry point for the application.
// ------------------------------------------------------------------------------------------------
import { HomeScreen } from './home-screen.js';
import { InstructionsScreen } from './instructions-screen.js';
import { SelectGameModeScreen } from './select-game-mode-screen.js';
import { SelectDifficultyScreen } from './select-difficulty-screen.js';
import { FleetDeploymentScreen } from './fleet-deployment-screen.js';
const screens = {
    home: new HomeScreen(),
    instructions: new InstructionsScreen(),
    selectGameMode: new SelectGameModeScreen(),
    selectDifficulty: new SelectDifficultyScreen(),
    fleetDeployment: new FleetDeploymentScreen(),
};
Object.values(screens).forEach(screen => screen.initListeners());
