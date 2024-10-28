// ------------------------------------------------------------------------------------------------
//  Helper Functions
// ------------------------------------------------------------------------------------------------

function setupButtonListener(button, message) {
    if (message) {
        button.addEventListener('click', () => {
            console.log(message);
        });
    } else {
        const currentScreen = button.closest('div');
        const nextScreenID = button.getAttribute('data-next-screen');
        const nextScreen = document.getElementById(nextScreenID);
        button.addEventListener('click', () => changeScreen(currentScreen, nextScreen));
    }
}

function changeScreen(currentScreen, nextScreen) {
    currentScreen.style.display = 'none';
    nextScreen.style.display = 'flex';
}

function onBackButtonClick(event) {
    const backButton = event.currentTarget;
    const currentScreen = backButton.closest('div');
    const previousScreenID = backButton.getAttribute('data-previous-screen');
    const previousScreen = document.getElementById(previousScreenID);
    changeScreen(currentScreen, previousScreen);
}

// ------------------------------------------------------------------------------------------------
//  Event Listener Initialization Functions
// ------------------------------------------------------------------------------------------------

function initHomeScreenListeners() {
    // Get HTML element IDs
    const playButton = document.getElementById('play-button');

    // Add event listeners
    setupButtonListener(playButton);
}

function initSelectGameModeScreenListeners() {
    // Get HTML element IDs
    const singlePlayerButton = document.getElementById('single-player-button');
    const multiPlayerButton = document.getElementById('multi-player-button');

    // Add event listeners
    setupButtonListener(singlePlayerButton);
    setupButtonListener(multiPlayerButton, 'Multiplayer button pressed!');
}

function initSelectDifficultyScreenListeners() {
    // Get HTML element IDs
    const easyButton = document.getElementById('easy-button');
    const hardButton = document.getElementById('hard-button');

    // Add event listeners
    setupButtonListener(easyButton, 'Easy button pressed!');
    setupButtonListener(hardButton, 'Hard button pressed!');
}

function initBackButtonListener() {
    // Get HTML element IDs
    const backButtons = document.querySelectorAll('.back-button');

    // Add event listeners
    backButtons.forEach(button => {
        button.addEventListener('click', (event) => onBackButtonClick(event));
    });
}

// ------------------------------------------------------------------------------------------------
//  Initialize All Event Listeners
// ------------------------------------------------------------------------------------------------

initHomeScreenListeners();
initSelectGameModeScreenListeners();
initSelectDifficultyScreenListeners();
initBackButtonListener();