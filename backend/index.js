const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();
require('./models/db');
const app = express();

const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('cors')());
app.use(require('helmet')());
app.use('/api/books', require('./routes/books'));
app.use('/api/user', require('./routes/user'));

if (process.env.NODE_ENV === 'production') {

    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(PORT, () => console.log(`App running on port ${PORT}`));