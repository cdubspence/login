var mongoose = require('mongoose');

//Set up mongoose connection
var mongoDB = 'mongodb+srv://casey:1111@cluster0.s8ihz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;

//Get default connection
var db = mongoose.connection;

//Check DB connection status
db.on('connected', function() {
    console.log('Connection Established...');
});

db.on('error', function(err) {
    console.log('Connection error:' + err);
})
