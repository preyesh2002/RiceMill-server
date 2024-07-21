const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://preyesh2002:zoor3kFXRSg9aBeC@ricemill-db.z8iwoas.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});