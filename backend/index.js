const express = require('express');
const bodyParser = require('body-parser');
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


app.listen(PORT, () => console.log(`App running on port ${PORT}`));
