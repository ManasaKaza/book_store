const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');  // Import the path module
require('dotenv').config();
require('./models/db');
const app = express();

const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('cors')());
app.use(require('helmet')());
app.use('/api/books', require('./routes/books'));
app.use('/api/user', require('./routes/user'));

// Serve static files in development
if (process.env.NODE_ENV === 'development') {
    app.use(express.static(path.join(__dirname, 'frontend')));
}

// For production, handle serving the client-side files differently
if (process.env.NODE_ENV === 'production') {
    // Handle serving client-side files from a CDN or other static file server
    // Example:
    // app.use(express.static(path.join(__dirname, 'frontend')));
}

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
