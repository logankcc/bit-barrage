// ------------------------------------------------------------------------------------------------
//  Global Variables
// ------------------------------------------------------------------------------------------------
previousScreen = undefined;

// ------------------------------------------------------------------------------------------------
//  Home Screen Logic
// ------------------------------------------------------------------------------------------------

const homeScreen = (() => {
    // Get HTML element IDs
    const homeElement = document.getElementById('home-screen');
    const playButton = document.getElementById('play-button');

    // Function to show the Home screen
    const show = () => {
        homeElement.style.display = 'flex';
    };

    // Function to hide the Home screen
    const hide = () => {
        previousScreen = homeElement;
        homeElement.style.display = 'none';
    };

    // Play button click event listener
    playButton.addEventListener('click', () => {
        hide();
        selectGameModeScreen.show();
    });

    // Expose public functions
    return {
        show,
        hide
    };
})();

// ------------------------------------------------------------------------------------------------
//  Shared Button Logic
// ------------------------------------------------------------------------------------------------

const sharedButtonLogic = (() => {
    // Get HTML element IDs
    const backButton = document.getElementById('back-button');
    const instructionsButton = document.getElementById('instructions-button');

    // Back button click event listener
    backButton.addEventListener('click', () => {
        console.log('Back button pressed!');
    });

    // Instructions button click event listener
    instructionsButton.addEventListener('click', () => {
        console.log('Instructions button pressed!');
    });
})();

// ------------------------------------------------------------------------------------------------
//  Select Game Mode Screen Logic
// ------------------------------------------------------------------------------------------------

const selectGameModeScreen = (() => {
    // Get HTML element IDs
    const gameModeElement = document.getElementById('select-game-mode-screen');
    const singlePlayerButton = document.getElementById('single-player-button');
    const multiPlayerButton = document.getElementById('multi-player-button');

    // Function to show the Select Game Mode screen
    const show = () => {
        gameModeElement.style.display = 'flex';
    };

    // Function to hide the Select Game Mode screen
    const hide = () => {
        previousScreen = selectGameModeScreen;
        gameModeElement.style.display = 'none';
    };

    // Single Player button click event listener
    singlePlayerButton.addEventListener('click', () => {
        hide();
        selectDifficultyScreen.show();
    });

    // Multiplayer button click event listener
    multiPlayerButton.addEventListener('click', () => {
        console.log('Multiplayer button pressed!');
    });

    // Expose public functions
    return {
        show,
        hide
    };
})();

// ------------------------------------------------------------------------------------------------
//  Select Difficulty Screen Logic
// ------------------------------------------------------------------------------------------------

const selectDifficultyScreen = (() => {
    // Get HTML element IDs
    const difficultyElement = document.getElementById('select-difficulty-screen');
    const easyButton = document.getElementById('easy-button');
    const hardButton = document.getElementById('hard-button');

    // Function to show the Select Difficulty screen
    const show = () => {
        difficultyElement.style.display = 'flex';
    };

    // Function to hide the Select Difficulty screen
    const hide = () => {
        previousScreen = selectDifficultyScreen;
        difficultyElement.style.display = 'none';
    };

    // Easy button click event listener
    easyButton.addEventListener('click', () => {
        console.log('Easy button pressed!');
    });

    // Hard button click event listener
    hardButton.addEventListener('click', () => {
        console.log('Hard button pressed!');
    });

    // Expose public functions
    return {
        show,
        hide
    };
})();