console.log("are we ready?");
$(document).ready("Yo - jQuery - are we ready!");
$(document).ready(console.log('jQuery - are we ready? Yes!'));


//simplified the JS functions and used jQuery to append the content to the page


var trips = [

 {
 from : "Sydney",
 to : "New York",
 travelTime : "24 hours",
 by : "plane",
 date : "02/10/2016",
 booked : true,
 bookedThrough : "STA",
 cost : 1400,
 currency : "Aud"
},

 {
  from : "New York",
  to : "Montreal",
  travelTime : "TBC",
  by: "train",
  date: "10/10/2016",
  booked: true,
  bookedThrough : false,
  cost: 150,
  currency : false
 },
 {
  from : "Montreal",
  to : "Quebec",
  travelTime : "3 hours",
  by: "train",
  date: "14/10/2016",
  booked: false,
 bookedThrough: false,
 cost: 0,
 currency : false
},

 {
  from : "Quebec",
  to : "Montreal",
  travelTime : "3 hours",
  by: "train",
  date: "18/10/2016",
  booked: false,
 bookedThrough: false,
  cost: 0,
  currency : false
 },

 {
  from : "Montreal",
  to : "Rouses Point",
  travelTime : "1.5 hours",
  by: "train",
  date: "19/10/2016",
  booked: false,
  bookeThrough : false,
  cost: 0,
  currency : false
 },

 {
  from : "Rouses Point (first train stop in US)",
  to : "White Top Mountains",
  travelTime : "3 hours",
  by: "car",
  date: "19/10/2016",
  booked: false,
  bookeThrough : false,
  cost: 0,
  currency : false
 },

 {
  from : "White Top Mountains",
  to : "Boston",
  travelTime : "3 hours",
  by: "car",
  date: "20/10/2016",
  booked: false,
  bookedThrough: false,
  cost: 0,
  currency : false
 },

 {
  from : "Boston",
  to : "New York",
  travelTime : "3 hours",
  by: "train",
  date: "26/10/2016",
  booked: false,
  bookedThrough: false,
  cost: 0,
  currency : false
  },

 {
  from : "New York",
  to : "South Amboy",
  travelTime : "1 hour",
  by: "train",
  date: "30/10/2016",
  booked: false,
  bookedThrough: false,
  cost: 0,
  currency : false
  },

 {
  from : "South Amboy",
  to : "Phillipsburg",
  travelTime : "1 hour",
  by: "car",
  date: "03/11/2016",
  booked: false,
  bookedThrough: false,
  cost: 0,
  currency : false
 },

 {
  from : "Phillipsburg",
  to : "Poconos",
  travelTime : "1 hour",
  by: "car",
  date: "05/11/2016",
  booked: false,
  bookedThrough: false,
  cost: 0,
  currency : false
 },
 {
  from : "Poconos",
  to : "Villa Nova",
  travelTime : "1 hour",
  by: "car",
  date: "07/11/2016",
  booked: false,
  bookedThrough: false,
  cost: 0,
  currency : false
  },

 {
  from : "Villa Nova",
  to : "Washington",
  travelTime : "1 hour",
  by: "car",
  date: "10/11/2016",
  booked: false,
  bookedThrough: false,
  cost: 0,
  currency : false
  },

 {
  from : "Washington",
  to : "New York",
  travelTime : "TBC",
  by: "train",
  date: "18/11/2016",
  booked: false,
  bookedThrough: false,
  cost: 0,
  currency : false
  },

 { from : "New York",
   to : "South Amboy",
   travelTime : "1 hour",
   by: "train",
   date: "23/11/2016",
   booked: false,
   bookedThrough: false,
   cost: 0,
   currency : false
  },

 { from : "South Amboy",
   to : "New York",
   travelTime : "1 hour",
   by: "train",
   date: "25/11/2016",
   booked: false,
   bookedThrough: false,
   cost: 0,
   currency : false
  },

 { from : "New York",
  to : "Sydney",
  travelTime : "24 hour",
  by: "plane",
  date: "26/11/2016",
  booked: true,
  bookedThrough: "STA",
   cost: 0,
   currency : "Aud"
  }
];

//When we're travelling

var allTrips = function(){for (var prop in trips){
 let msg = prop + " going from " + trips[prop].from + " and going to " + trips[prop].to +
" on " + trips[prop].date;
var $p = $( "<p></p>" );
$p.html(msg);
$('#trips').before($p);
}
};

allTrips();


//What's booked and what's not booked

var bookedTrips = [];
var unBookedTrips = [];

var booked = function(){
 trips.forEach(function(travelling){
  if (travelling.booked === true) {
  bookedTrips.push(travelling);
 }
 else {
  unBookedTrips.push(travelling);
 }
});
};

booked();

 bookedMsg = function(){for (var prop in bookedTrips){
  let msg = "from " + bookedTrips[prop].from + " to " + bookedTrips[prop].to +
 " on " + bookedTrips[prop].date;
 var $li = $( "<li></li>" );
 $li.html(msg);
 $('#booked').append($li);
 console.log(msg);
 }
};

bookedMsg();


unBookedMsg = function(){for (var prop in unBookedTrips){
 let msg = "from " + unBookedTrips[prop].from + " to " + unBookedTrips[prop].to +
" on " + unBookedTrips[prop].date;
console.log(msg);
var $li = $( "<li></li>" );
$li.html(msg);
$('#unBooked').append($li);
}
};

unBookedMsg();


// costs


var eachJourneyCost = [];
var eachJourneyCostArr = function(){
 trips.forEach(function(going){
  eachJourneyCost.push(going.cost);
});
console.log(eachJourneyCost);
};

eachJourneyCostArr();

var totalJourneyCosts = eachJourneyCost.reduce((prev,curr) => prev+curr );

$('#totalCost').append(totalJourneyCosts);
