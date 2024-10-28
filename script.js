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
        gameModeElement.style.display = 'none';
    };

    // Single Player button click event listener
    singlePlayerButton.addEventListener('click', () => {
        console.log('Single Player button pressed!')
    });

    // Multiplayer button click event listener
    multiPlayerButton.addEventListener('click', () => {
        console.log('Multiplayer button pressed!')
    });

    // Expose public functions
    return {
        show,
        hide
    };
})();