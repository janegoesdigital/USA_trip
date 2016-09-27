//this is a simple set up for our mongoose model

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo');


var Schema = mongoose.Schema;

// create a schema
var todoSchema = new Schema({
  task: String,
  timeEst: Number,
  priority: String,
});

// the schema is useless so far
// we need to create a model using it
var Todo = mongoose.model('Todo', todoSchema);

// make this available in our Node applications
module.exports = Todo;
