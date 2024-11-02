// server.js --------------------------------------------------------------------------------------
// Sets up an HTTP server to serve static files for the game.
// ------------------------------------------------------------------------------------------------

const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve static files from the dist directory for compiled JavaScript
app.use('/dist', express.static(path.join(__dirname, 'dist')));

// Serve index.html as the main entry point
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});