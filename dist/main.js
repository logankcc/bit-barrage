// main.ts --------------------------------------------------------------------------------------
// Entry point for the application.
// ------------------------------------------------------------------------------------------------
import { HomeScreen } from './home-screen.js';
import { SelectGameModeScreen } from './select-game-mode-screen.js';
import { SelectDifficultyScreen } from './select-difficulty-screen.js';
import { InstructionsScreen } from './instructions-screen.js';
const homeScreen = new HomeScreen();
const instructionsScreen = new InstructionsScreen();
const selectGameModeScreen = new SelectGameModeScreen();
const selectDifficultyScreen = new SelectDifficultyScreen();
homeScreen.initListeners();
instructionsScreen.initListeners();
selectGameModeScreen.initListeners();
selectDifficultyScreen.initListeners();
