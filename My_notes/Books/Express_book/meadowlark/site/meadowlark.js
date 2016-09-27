var express = require("express");
var fortune = require("./lib/fortune.js");
var testMongoose = require("testMongoose.js");

var app = express();

//set up handlebars view engine

var handlebars = require('express-handlebars').create({
 defaultLayout:'main',
 helpers: {
  section:function(name, options){
   if(!this._section) this._sections = {};
   this._sections[name]=options.fn(this);
   return null;
  }
 }

});

 app.engine('handlebars', handlebars.engine);

 app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

// mocked weather data
function getWeatherData(){
    return {
        locations: [
            {
                name: 'Portland',
                forecastUrl: 'http://www.wunderground.com/US/OR/Portland.html',
                iconUrl: 'http://icons-ak.wxug.com/i/c/k/cloudy.gif',
                weather: 'Overcast',
                temp: '54.1 F (12.3 C)',
            },
            {
                name: 'Bend',
                forecastUrl: 'http://www.wunderground.com/US/OR/Bend.html',
                iconUrl: 'http://icons-ak.wxug.com/i/c/k/partlycloudy.gif',
                weather: 'Partly Cloudy',
                temp: '55.0 F (12.8 C)',
            },
            {
                name: 'Manzanita',
                forecastUrl: 'http://www.wunderground.com/US/OR/Manzanita.html',
                iconUrl: 'http://icons-ak.wxug.com/i/c/k/rain.gif',
                weather: 'Light Rain',
                temp: '55.0 F (12.8 C)',
            },
        ],
    };
}

//middleware to inject it into the res.locals.partials object ie to add it to the context

app.use(function(req, res, next){
	if(!res.locals.partials) res.locals.partials = {};
 	res.locals.partials.weatherContext = getWeatherData();
 	next();
});
//static middleware eg pictures etc

app.use(express.static(__dirname + '/public'));


//testing

app.use(function(req, res, next){
	res.locals.showTests = app.get('env') !== 'production' &&
		req.query.test === '1';
	next();
});


// routes

app.get('/', function(req,res){
 res.render('home');
});

app.get('/about', function (req,res){
 res.render('about', {
  fortune: fortune.getFortune(),
  pageTestScript: '/qa/tests-about.js'
 });
});

//Cross-page testing example

app.get('/tours/hood-river', function(req,res){
 res.render('tours/hood-river');
});


app.get('/tours/request-group-rate', function(req, res){
	res.render('tours/request-group-rate');
});

//custom 404 page

app.use(function(req,res, next){
 res.status(404);
 res.render('404');
});

// custom 500 page

app.use(function(err,req,res,next){
 console.error(err.stack);
 // res.type('text/plain');
 res.status(500);
 res.render('500');
 });




app.listen(app.get("port"),function(){
 console.log("Express started on http://localhost:" + app.get("port")+ "; press Ctl-C to terminate.");
});
