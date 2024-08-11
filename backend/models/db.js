const mongoose = require('mongoose');
require('dotenv').config();
// Allow Promises
mongoose.Promise = global.Promise;
// Connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Connected to the database!'))
  .catch(err => console.error('Error with the database!', err));  
