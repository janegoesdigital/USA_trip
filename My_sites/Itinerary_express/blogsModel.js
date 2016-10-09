//this is a simple set up for our mongoose model

var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/myNewTrip');

//checking that we're connected

mongoose.connection.on('open', function(){
  console.log('mongodb is connected for blog posts!!');
});

mongoose.connection.on('error', function (err) {
 if (err) {
  console.log('There was an error with the mongoose connection for blogs');
}
});



var Schema = mongoose.Schema;

// create a schema
var blogSchema = new Schema({
	date : Date,
 city: String,
	keywords: String,
 highlight: String,
 lowlight: String,
 reflection: String,
 photo: String

  }
);



// the schema is useless so far
// we need to create a model using it
var Blog = mongoose.model('Blog', blogSchema);


// make this available to our Node applications
module.exports = Blog;
