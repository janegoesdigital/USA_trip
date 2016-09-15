console.log("Hello Here is a complex data structure and how you can access it");

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


for (var prop in trainTrips) {

 var tripDetails = trainTrips[prop].trainName;
 var tripDetails2 = trainTrips[prop].stations[0];
 var tripDetails3 = trainTrips[prop].url;
 var tripDetails4 = trainTrips[prop].description;
 console.log(tripDetails);
 console.log(tripDetails2);
 console.log(tripDetails3);
 console.log(tripDetails4);
 };


//Rouses Point is the very train station in the USA


var distances = [
 {from: "Montreal",
  to: "Boston",
  time: "6 hours",
  distance: "500km",
  by: "car"
 },

 {from: "St Albans Town",
  to: "Boston",
  time: "4 hours",
  distance: "500km",
  by: "car",
 },

 {from: "Albany",
  to: "Boston",
  time: "2 hours 42 minutes",
  distance: "170 miles",
  by: "car",
 },

 {from: "Albany",
  to: "Boston",
  time: "5 hours",
  distance: "",
  by: "train",
  comments: "only one direct train - 3pm"
 },

 {from: "Lincoln, New Hampshire",
  to: "Boston",
  time: "2 hours 42 minutes",
  distance: "180 miles",
  by: "car",
 },

 {from: "Rouses Point (first train stop in US)",
  to: "Boston",
  time: "5 hours 30 minutes - direct.  7 hours 30 minutes via portsmouth",
  distance: "341 miles",
  by: "car",
 },

 {from: "Montreal",
  to: "Rouses Point",
  time: "1 hours 30 minutes ",
  distance: "341 miles",
  by: "train",
 },


]
