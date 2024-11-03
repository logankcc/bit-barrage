// main.ts --------------------------------------------------------------------------------------
// Entry point for the application.
// ------------------------------------------------------------------------------------------------

import { HomeScreen } from './home-screen.js';
import { InstructionsScreen } from './instructions-screen.js';
import { SelectGameModeScreen } from './select-game-mode-screen.js';
import { SelectDifficultyScreen } from './select-difficulty-screen.js';
import { FleetDeploymentScreen } from './fleet-deployment-screen.js';

const homeScreen = new HomeScreen();
const instructionsScreen = new InstructionsScreen();
const selectGameModeScreen = new SelectGameModeScreen();
const selectDifficultyScreen = new SelectDifficultyScreen();
const fleetDeploymentScreen = new FleetDeploymentScreen();

homeScreen.initListeners();
instructionsScreen.initListeners();
selectGameModeScreen.initListeners();
selectDifficultyScreen.initListeners();
fleetDeploymentScreen.initListeners();