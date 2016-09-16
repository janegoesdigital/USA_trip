console.log("are we ready?")


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
  "bookedThrough" : false,
  cost: 0, currency : false
 },

 {
  from : "Montreal",
  to : "Quebec",
  travelTime : "3 hours",
  by: "train",
  date: "14/10/2016",
  booked: false,
 bookedThrough: false
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
  "bookedThrough" : false,
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
  "bookedThrough" : false,
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







//This add a single element to the page.  Inner html replaces the p - so can't be used with the function.  Need to add new multiple ps.

var msg = '<p> Travelling from :' + trips[0].from + " to " + trips[0].to + " by "  + trips[0].by + " on "  + trips[0].date + '</p>';
//
// var elTrips = document.getElementById('trips');
// elTrips.innerHTML = msg;

//This puts a single message on the page without replacing the content

// var msg = 'Travelling from :' + trips[0].from + " to " + trips[0].to + " by "  + trips[0].by + " on "  + trips[0].date;
// var newEl = document.createElement('p');
// var newText = document.createTextNode(msg);
// newEl.appendChild(newText);
// var position = document.getElementById('trips');
// position.appendChild(newEl);


//Woo hoo iterating over array with all trips in an object to show all the different legs of the  journey 

function logTrips(element, index, trips) {
  var leg = trips[index];
  var msg = index + '  Travelling from :' + leg.from + ' to ' + leg.to + ' by '  + leg.by + " on "  + leg.date ;
  var newEl = document.createElement('p');
  var newText = document.createTextNode(msg);
  newEl.appendChild(newText);
  var position = document.getElementById('trips');
  position.appendChild(newEl);
  console.log(msg);
}

trips.forEach(logTrips);
