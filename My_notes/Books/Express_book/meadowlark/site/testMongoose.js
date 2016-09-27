var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myTrip2db');

//test whether it's running so include a console log error

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 console.log('Woo hoo betty.  We have connected to the database');
});

//define a schema

var toDoSchema = mongoose.Schema({
 what: String,
 how: String,
 estimate: Number,
 actualTime: Number,

 status: Boolean,
});

//compile schema into a model - it's a class we construct with documents

var ToDo= mongoose.model('ToDo', toDoSchema);

//create an entry into the schema

var packTask = new ToDo({
 what: "pack",
 how: "put things in a bag",
 estimate: 120,
 actualTime: 0,
 status: false
}).save();

//test to see if you can get stuff out of the DB

console.log("The database is working.  Looking I have got a word out of it " + packTask.what);

module.exports = ToDo;
