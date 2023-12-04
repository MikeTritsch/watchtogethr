const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://watchtogethr:group2rulez@cluster0.krujsja.mongodb.net/');

module.exports = mongoose.connection;
