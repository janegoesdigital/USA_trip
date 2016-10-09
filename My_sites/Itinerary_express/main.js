var express = require('express');
var expressHandlebars = require('express-handlebars');

var app = express();

app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


//Working with our data

var Activity = require('./activitiesModel');
var Trip = require('./tripsModel');
var Blog = require('./blogsModel')

// var path    = require("path");

//add some seed data



// var newBlog =  new Blog({"city" : "New York",
//  "date" : "2016-10-04T00:00:00Z",
//  "city": "New York",
//  "keywords": "first subway trip; first bagel Park Slope, Greenwich Village; Blue Note Cafe; funny Italian coffee shop; Washington Square Park; Times Square; walk to Central Park; Empire State Building; Carnegie Hall Deli protest; pastrami sandwich, bloody Mary in a cool bar near Times Square; afternoon nap in the lovely New York room, Park Slope Ale House and salad; meeting Mikey",
//  "highlight": "Meeting Bernard's son, Mikey",
//  "lowlight" : "The subway - I didn't feel like I was in a first world country! Be deliberately bumped into by a potential thief. How sad Mike looked.  It just oozes from him.  His marriage is breaking down.",
//  "reflection": "New York is a city of absolute contradictions.  Lots of wealth and lots of povery",
//   "photo": "TBC"
// });
//
//   newBlog.save(function(error){
//     if (error) {console.log('oh no something has gone wrong with the saving for a blog!');
//      }
//      console.log('Blog saved successfully!');
// });



// var newActivity =  new Activity({"city" : "New York",
// 	"name" : "Don Giovani",
// 	"description" : "Opera at the New York Metropolitan Opera House!",
// 	"cost" : 240,
// 	"doIt" : true,
// 	"date" : "2016-10-04T00:00:00Z"
// });
//
//   newActivity.save(function(error){
//     if (error) {console.log('oh no something has gone wrong with the saving!');
//      }
//      console.log('Activity saved successfully!');
// });


// new trip

// var newTrip =  new Trip({
//  "from" : "New York",
//  "to" : "Sydney",
//  "travelTime" :24,
//  "by" : "plane",
//  "date" : "2016-11-26T00:00:00Z",
//  "booked" : true,
//  "bookedThrough" : "STA",
//  "cost" : 0,
//  "currency" : "Aud",
//  "completed": false
// });
//
//   newTrip.save(function(error){
//     if (error) {console.log('oh no something has gone wrong with the saving!');
//      }
//      console.log('New trip saved successfully!');
// });

app.get('/', function(req, res) {
  res.render('home');
});

//retrieving activities

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


//retrieving trips

app.get('/trip', function(req,res){
       Trip.find({}, function(error, allTrips) {
            console.log('here is the array returned by mongodb:', allTrips);
            if (error) {
               console.log('error fetching activities from mongo', error);
            }
            console.log('our activities are', allTrips);
            res.render('trips', { displayAllTrips: allTrips });
        });
});


app.get('/blog', function(req,res){
       Blog.find({}, function(error, allBlogs) {
            console.log('here is the array returned by mongodb:', allBlogs);
            if (error) {
               console.log('error fetching activities from mongo', error);
            }
            console.log('our activities are', allBlogs);
            res.render('blogs', { displayAllBlogs: allBlogs });
        });
});




// app.get('/', function(req, res) {
//   res.render('home');
// });





app.set('port', process.env.PORT || 3000);

app.listen(app.get("port"),function(){
 console.log("So exciting! Express started on http://localhost:" + app.get("port")+ "; press Ctl-C to terminate.");
});
