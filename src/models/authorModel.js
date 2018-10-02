const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/libraryAppMongoose2');
const Schema = mongoose.Schema;

var NewAuthorSchema = new Schema({
    name : String,
    age :  Number,
    genre : String,
    image : String
});

var Authordata = mongoose.model('Author-data', NewAuthorSchema);

module.exports = Authordata;
