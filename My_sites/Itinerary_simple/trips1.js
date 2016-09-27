console.log("are we ready?");

// This is the first iteration of the functions for trips.  They only use DOM methods and the javasript is really convoluted - especially for getting the costs.  It was a good learning experience thought!  See trips2.js for simpler js and using jquery to append the content to the page.

var trips = [

   

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


//This function displays all the journeys we will take. Woo hoo for me.

function logTrips(element, index, trips) {
  var leg = trips[index];
  var msg = index + '  Travelling from  ' + leg.from + ' to' + leg.to + ' by '  + leg.by + " on "  + leg.date ;
  var newEl = document.createElement('p');
  var newText = document.createTextNode(msg);
  newEl.appendChild(newText);
  var position = document.getElementById('trips');
  position.appendChild(newEl);
  // console.log(msg);
}
trips.forEach(logTrips);


//Now want a function that lists those things that still need to be booked. They will have a booked status as false.  Need to loop through the object and check IF the bookedThrough key in the nested object has a value of false.  If it does have a value of false, then we want to print each item out on the page listing the same info as in the above message.  Is essentially the same as the above, but with an if statement in it.

function unBookedTrips(element, index, trips) {
  let leg = trips[index];
  let msg = leg.from +  ' to ' + leg.to + ' on ' + leg.date;
  let bookingStatus = trips[index].booked;
  // console.log('booking status for' + leg.from + ": " + leg.booked);
  if (bookingStatus === false ) {
    // console.log(msg)
    var newEl = document.createElement('p');
    var newText = document.createTextNode(msg);
    newEl.appendChild(newText);
    var position = document.getElementById('notBooked');
    position.appendChild(newEl);
    // console.log(msg);
 }
 else {
  var newEl = document.createElement('p');
  var newText = document.createTextNode(msg);
  newEl.appendChild(newText);
  var position = document.getElementById('booked');
  position.appendChild(newEl);
  // console.log(msg)

 }
}
trips.forEach(unBookedTrips);

//Costs - first iteration - using map, filter and reduce - looks way too complicated to me

//This was really hard.  I ended up using filter, map and reduce to finally get there -  there being to extract the data from the objects nested in the arrays, and then sum the costs.
//  I haven't got it on the page yet!


var map = function (array, transform) {
 var mapped = [];
 for (var i = 0; i < array.length; i++)
  mapped.push(transform(array[i]));
  return mapped;
};

var tripsWithCosts = trips.filter(function(money){
  // console.log(money.cost);
  // console.log("Cost so far for each trip is:  " + money.from + " to " + money.to + " for $AUD " + money.cost);
 return money.cost > 0;
});

// console.log("The trips which costs already associated with them are: " + tripsWithCosts);

// console.log(map(tripsWithCosts, function(money){
//  return money.cost;
// }
// ));

var tripCostArray = map(tripsWithCosts, function(money){
 var msg = money.from + " to " + money.to + " for $AUD " + money.cost;
 var newEl = document.createElement('p');
 var newText = document.createTextNode(msg);
 newEl.appendChild(newText);
 var position = document.getElementById('eachCost');
 position.appendChild(newEl);

 console.log("Trip costs incurred so far: " + money.from + " to " + money.to + " for $AUD " + money.cost);

 return money.cost;}
);

console.log("The costs incurred so far are  : " + tripCostArray);

var totalCosts = tripCostArray.reduce((prev,curr) => prev+curr );

var message = function(totalCost, tripsWithCosts){
 var costMsg = "The total costs so far are " + totalCosts;
 var newEl = document.createElement('p');
 var newText = document.createTextNode(costMsg);
 newEl.appendChild(newText);
 var position = document.getElementById('costs');
 position.appendChild(newEl);
};

message();


var costMsg = "The total costs are " + totalCosts;
costMsg += "The trips which costs already associated with them are: " + tripsWithCosts;


console.log("The total costs are " + totalCosts);

// iteration 2 - alternate way of calculating costs

var eachJourneyCost = [];
var eachJourneyCostArr = function(){
 trips.forEach(function(going){
  eachJourneyCost.push(going.cost);
});
console.log(eachJourneyCost);
};

eachJourneyCostArr();

var totalJourneyCosts = eachJourneyCost.reduce((prev,curr) => prev+curr );


//alternative way of working out what's booked

var bookedTrips = [];
var unBookedTrips = [];

var booked2 = function(){
 trips.forEach(function(travelling){

  if (travelling.booked === true) {
  bookedTrips.push(travelling);
 }
 else {
  unBookedTrips.push(travelling);
 }
});
};

booked2();

 bookedMsg2 = function(){for (var prop in bookedTrips){
  let msg = "going from " + bookedTrips[prop].from + " and going to " + bookedTrips[prop].to +
 " on " + bookedTrips[prop].date;
 console.log(msg);
 }
};
