const mongoose = require('mongoose');

function connectToDatabase() {
  mongoose.connect("mongodb+srv://kishore220822:pk1719@cluster0.t9kcgps.mongodb.net/myDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
}

module.exports = connectToDatabase;
