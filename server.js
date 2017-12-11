const express = require('express');

// App setup
const app = express();
const PORT = 3000;
let server = app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT);
});

// static files
app.use(express.static('public'));
