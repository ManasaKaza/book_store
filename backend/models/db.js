const mongoose = require('mongoose');
// Allow Promises
mongoose.Promise = global.Promise;
// Connection
mongoose.connect('mongodb+srv://student_user:oCEQTkO20V0DGTN3@cluster0.gfrftal.mongodb.net/book_store')
  .then(() => console.log('Connected to the database!'))
  .catch(err => console.error('Error with the database!', err));  
