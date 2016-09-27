var express = require('express');
var expressHandlebars = require('express-handlebars');

var app = express();

app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');




var Activity = require('./activitiesModel');
// var path    = require("path");

// //add some seed database
// var newYork =  new Activity({ "city" : "Washington", "name" : "Monticello", "description" : "Jefferson's place - with all its contradictions", "cost" : 20, "doIt" : true, "date" : "2016-11-05T00:00:00Z" });
//
//   newYork.save(function(error){
//     if (error) {console.log('oh no something has gone wrong with the saving!');
//      }
//      console.log('Activity saved successfully!');
// });

app.get('/', function(req, res) {
  res.render('home');
});

app.get('/activity', function(req,res){
       Activity.find({}, function(error, returnedMongoArrrayofObjects) {
            console.log('here is the array returned by mongodb:', returnedMongoArrrayofObjects);
            if (error) {
               console.log('error fetching activities from mongo', error);
            }
            console.log('our activities are', returnedMongoArrrayofObjects);
            res.render('activities', { tasksNameForHandlebars: returnedMongoArrrayofObjects });
        });
});

// version that just retrieves New York activities

// app.get('/', function(req,res){
//        Activity.find({city:"New York"}, function(error, returnedMongoArrrayofObjects) {
//             console.log('here is the array returned by mongodb:', returnedMongoArrrayofObjects);
//             if (error) {
//                console.log('error fetching activities from mongo', error);
//             }
//             console.log('our activities are', returnedMongoArrrayofObjects);
//             res.render('home', { tasksNameForHandlebars: returnedMongoArrrayofObjects });
//         });
// });


// app.get('/', function(req, res) {
//   res.render('home');
// });





app.set('port', process.env.PORT || 3000);

app.listen(app.get("port"),function(){
 console.log("So exciting! Express started on http://localhost:" + app.get("port")+ "; press Ctl-C to terminate.");
});
