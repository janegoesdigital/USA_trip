console.log("here are the data structures");

//iteration 1

var totalCost = function(numberNights, actualCostPerNight){
  var totalCost = this.numberNights * this.actualCostPerNight;
      return totalCost;
    };

var stays = {
  montreal: {
        hotel: "Royal",
        numberNights: 10,
        actualCostPerNight: 52,
        cost:totalCost
      },
  quebec: {
    hotel: "Quebec",
    numberNights: 10,
    actualCostPerNight: 52,
    cost: totalCost
  },
};

//Retrieving individual things - examples
console.log(stays);
console.log(stays.quebec.numberNights);


//pulls out the keys in the object.  Result will be montreal and quebec

console.log(Object.keys(stays));
console.log(Object.keys(stays.montreal));
console.log(Object.keys(stays.quebec)
           );

//function to calculate the cost of nights.  Can be included in the object

var totalCost = function(numberNights, actualCostPerNight){
var totalCost = this.numberNights * this.actualCostPerNight;
      return totalCost;
    };

           var stays = {
             montreal: {
                   hotel: "Royal",
                   numberNights: 10,
                   actualCostPerNight: 52,
                   cost:totalCost
                 },
             quebec: {
               hotel: "Quebec",
               numberNights: 10,
               actualCostPerNight: 52,
               cost: totalCost
             },
           };


var cost = stays.quebec.numberNights;
console.log("this is the defined term cost "  + cost);

var stays = {
  montreal: {
        hotel: "Royal",
        numberNights: 10,
        actualCostPerNight: 52,
      },
  quebec: {
    hotel: "Quebec",
    numberNights: 15,
    actualCostPerNight: 52,
  },
  newYork1 = {
   hotel: "AirBnB",
   numberNights: 8;
   actualCostPernight: ,
   totalCost: 1173,
   currency: "Aud"

  }
};

//getting stuff out of it

for (var prop in stays){
  var stayCost = stays[prop].actualCostPerNight;
  var nights = stays[prop].numberNights;
  var costPerPlace = stayCost * nights;
  var allCosts = 0
  console.log("nights = " + stays[prop].numberNights);
  console.log("nightly cost = " + stays[prop].actualCostPerNight);
  console.log("The stay in " + prop + " is for " + stays[prop].numberNights);
  console.log("The total cost for " + prop + " is " +  costPerPlace);
  console.log(allCosts);
}


//iterating over it
for (var prop in stays){
 console.log("The stay in " + prop + "is for " + stays[prop].numberNights);
}



// i want a nested object that looks like this

// var object = {
//  nameofLeg: {
//    name: value;
//    name: value;
//  }
// }
//
//
// it's an object in an object.  How can I use a constructor to create it? or do I have to create the object and then add the object to the other object
// //Train trips

for (var prop in trainTrips) {
  console.log(prop);
}


//Journeys

//Here I've created a constructor and a function to create an array of all possible journeys and a contructor to create a new possible trip.  Have included a boolean to say whether we are going on it or not

var allJourneys = [];

//This doesnt' work. It adds the train name, not the object

var allJourneys = [];


var newTrain = function(lineName, stations){
var makeTrain =  function Train(stations) {
  this.stations = stations;
  };
lineName = new makeTrain (stations);
allJourneys.push(lineName);
return lineName;

}


var addTrains = function(lineName, stations){
var newObject = new makeTrain (stations);
var lineName = newObject;
allJourneys.push(lineName);
console.log(lineName.length);
console.log("You have added a new journey, for the " + lineName);
return lineName;

};

var addToAllJourneys = function(journeyName){
  allJourneys.push(journeyName);
  console.log("you have added a new journey it is called " + journeyName);
};



var newTrain = function Train(trainName, stations, url, description,
                               useFor) {

  this.trainName = trainName;
  this.stations = stations;
  this.url = url;
  this.description = description;
  this.useFor = useFor;
  this.add = addToAllJourneys(this.trainName);
  };



var eastTrain = new newTrain("easty", ["station1", "station 2"],
                          "url", "heres something about the train",
                          "lots of things", "eastTrain");

var westTrain = new newTrain("westy", ["station1", "station 2"],
                          "url", "heres something about the west train",
                          "lots of west things");







//Here I've tried to make it so that there I can have a single function that creates the train and add it to the all journeys list

var makeTrain = function Train(stations, uses, duration) {
  this.stations = stations;
this.use = uses;
this.duration = duration
  };

var makeJourney = function Journey(name, stations){
this.name = name
this.details = new makeTrain(stations);
};

var allJourneys = {};

allJourneys.downMiddle = eastTrain;


var addJourney = function(name){
allJourneys.push(name);
};

var oneStep = function(tripName,station){
var newTrip = new makeJourney(tripName,station);
addJourney(newTrip);
}


//This is how I created things manually

var journey = function Journey(name){
var name = {};

this.name = name;
}

var trainTrips = {
 newEnglandCoast:
    {
     trainName: "Downeaster",
     stations: ["Brunswick", "Freeport", "Portland", "Old Orchard Beach", "Saco", "Wells", "Dover", "Durham", "Exeter", "Haverhill", "Woburn", "Boston"],
     url: "www.amtrakdowneaster.com",
     description: "The Amtrak Downeaster is your car-free connection from Brunswick, Maine to Boston, Massachusetts and points in between.",
     useFor: "If go from Quebec to Portland, use as a base to travel to the White Top mountain area and then catch the train down to Boston",
    },


  newEnglandAcross:
     {
      trainName: "Lake Shore Limited",
      stations: ["Albany", "Pittsfield", "Springfield", "Worcester", "Boston"],
      url: "www.amtrak.com/lake-shore-limited-train",
      description: "You'll travel along the south shore of Lake Michigan, the Mohawk River, and the Erie Canal, following a famous Native American Highway. In New York State, you'll pass through the Finger Lakes region to Albany, capital of the Empire State. From there, travel through the Berkshires and stop in Pittsfield, where you can tour the house where Herman Melville wrote Moby Dick. Or, visit the Berkshire Museum. In Boston, make connections to Providence and Mystic Seaport on our Regional service.",
      frequency: "daily",
      userFor: "If catch train back to Albany can catch this train to go across New England",
 },

 newEnglandMiddle:
  {
    trainName: "Vermonter",
    stations: ["St Albans",
        "Essex Junction",
              "Waterbury",
              "Montpelier",
              "Randolph",
              "White River",
              "Windsor",
              "Claremont",
              "Bellows Falls",
              "Brattleboro",
              "Greenfield",
              "Northampton",
              "Holyoke",
              "Springfield"]
 },

};
