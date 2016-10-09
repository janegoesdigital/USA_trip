//this is a simple set up for our mongoose model

var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/myNewTrip');

//checking that we're connected

mongoose.connection.on('open', function(){
  console.log('mongodb is connected for trips!!');
});

mongoose.connection.on('error', function (err) {
 if (err) {
  console.log('There was an error with the mongoose connection for trips');
}
});



var Schema = mongoose.Schema;

// create a schema
var tripSchema = new Schema({
 from : String,
	 to : String,
	travelTime : Number,
	by : String,
	date : Date,
	booked : Boolean,
	bookedThrough : String,
	cost : Number,
	currency : String,
 completed: Boolean,

  }
);



// the schema is useless so far
// we need to create a model using it
var Trip = mongoose.model('Trip', tripSchema);


// make this available to our Node applications
module.exports = Trip;
