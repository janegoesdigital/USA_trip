//this is a simple set up for our mongoose model

var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/myNewTrip');

//checking that we're connected

mongoose.connection.on('open', function(){
  console.log('mongodb is connected!!');
});

mongoose.connection.on('error', function (err) {
 if (err) {
  console.log('There was an error with the mongoose connection');
}
});



var Schema = mongoose.Schema;

// create a schema
var activitySchema = new Schema({
  city: String,
  name: String,
  description: String,
  cost: Number,
  doIt: Boolean,
  date: Date,
  }
);

// the schema is useless so far
// we need to create a model using it
var Activity = mongoose.model('Activity', activitySchema);


// make this available to our Node applications
module.exports = Activity;
