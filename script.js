console.log('JavaScript is running!');

// ------------------------------------------------------------------------------------------------
//  Home Screen Logic
// ------------------------------------------------------------------------------------------------

const homeScreen = (() => {
    // Get HTML element IDs
    const homeElement = document.getElementById('home-screen');
    const playButton = document.getElementById('play-button');

    // Function to show the Home screen
    const show = () => {
        homeElement.style.display = 'block';
    };

    // Function to hide the Home screen
    const hide = () => {
        homeElement.style.display = 'none';
    };

    // Play button click event listener
    playButton.addEventListener('click', () => {
        console.log('Play button clicked!');
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

    // Function to show the Select Game Mode screen
    const show = () => {
        gameModeElement.style.display = 'block';
    };

    // Function to hide the Select Game Mode screen
    const hide = () => {
        gameModeElement.style.display = 'none';
    };

    // Expose public functions
    return {
        show,
        hide
    };
})();