
// if our user.js file is at app/models/user.js

var express = require('express');
var router = express.Router();
var expressHandlebars = require('express-handlebars');
var app = express();


//Using handlebars to display our content

app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});


//Using mongoose


// var Todo = require('./todoModel');
// var path    = require("path");


app.get('/', function(req, res) {
  res.render('main', { title: 'Express' });
});

app.get('/variable', function (req, res, next) {
    res.render('variables', {
        title: 'Basic Variable',
        user: {
            firstname: 'Jane',
            lastname: 'Hogan',
            email: 'janeodarling@gmail.com'
            },
        key: {
            object: 'question',
            keyInObj: 'answer'
           },
    }
    );
});

// this is how to pass in data from within the routing function.

app.get('/todo', function (req, res, next) {
    res.render('todos', {
      thingsToDo: "here's a list",
      sheets: {
       task: 'Wash the sheets',
       timeEst: '90',
       priority: 'medium'
       },
      clothes: {
       task: 'Wash the clothes',
       timeEst: '90',
       priority: 'medium'
     }
   });
});


//
// var todoFind = Todo.find({}, function(err, todo) {
//   if (err) throw err;

//   // object of all the users
//   console.log(todo);
// });


app.get('/todomongoose', function(req,res){
       Todo.find({}, function(error, returnedMongoArrrayofObjects) {
            if (error) {
               console.log('error fetching todos from mongo', error);
            }
            console.log('our tasks are', returnedMongoArrrayofObjects);
            res.render('todomongooses', { tasksNameForHandlebars: returnedMongoArrrayofObjects });
        });
});






// app.get('/', function (req, res) {
//     res.render('home');
// });

app.set('port', process.env.PORT || 3000);


//This was used to display plain old html
// app.get('/',function(req,res){
//   res.sendFile(path.join(__dirname+'/home.html'));
//   //__dirname : It will resolve to your project folder.
// });


// // create a new user called chris
// var task = new Todo({
//   task: 'Wash the sheets',
//   timeEst: '90',
//   priority: 'medium'
// });
//
//
// var shine = new Todo({
//   task: 'shine',
//   timeEst: '90',
//   priority: 'high'
// });
//
// // call the built-in save method to save to the database
// task.save(function(err) {
//   if (err) throw err;
//
//   console.log('Task saved successfully!');
// });


// shine.save(function(err) {
//   if (err) throw err;
//
//   console.log('shining saved successfully!');
// });



//find all




app.listen(app.get("port"),function(){
 console.log("Express started on http://localhost:" + app.get("port")+ "; press Ctl-C to terminate.");
});
