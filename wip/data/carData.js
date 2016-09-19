
console.log("are we ready for car hire data")

//creating it - data structure1 = objects in objects
// this is the manual creation - could also use a constructor
var carHire = {
  tripDetails: {
   start: 19102016,
   end: 26102016,
   days: 7,
   dropOff: "Boston"
  },

 stAlbans: {
  pickUp: "St Albans",
  cost: 520,
  carSize: "Mid Corolla",
  source: "expedia"
 },

 albany: {
  pickUp: "Albany",
  cost: 453,
  carSize: "Mid Corolla",
  source: "expedia"
 },

 burlington: {
  pickUp: "Burlington",
  cost: 492,
  carSize: "Mid Corolla",
  source: "expedia"
 },

 boston: {
  pickUp: "Boston",
  cost: 309,
  carSize: "Mid Corolla",
  source: "expedia"
 },
};






//Getting data out of it

for (var prop in carHire){
console.log(carHire[prop].cost);
};

for (var prop in carHire){
console.log("The range of costs is " + carHire[prop].cost);
};



// data structure2 - arrays in an object - I got this to work using the forEach method in ECMA 6 and the eval() method to evuluate the statement I had constructred as a string.  The bit that made it click for me, was having to create the statement by turning the string into something that was evaluated, rather than a string.

var carHireBoston = [
   {
   pickUp: "St Albans or Rouses Point",
   cost: 520,
   carSize: "Mid Corolla",
   source: "expedia"
   },

   {
   pickUp: "Albany",
   cost: 453,
   carSize: "Mid Corolla",
   source: "expedia"
   },

   {
    pickUp: "Burlington",
    cost: 492,
    carSize: "Mid Corolla",
    source: "expedia"
   },

  {
    pickUp: "Boston",
    cost: 309,
    carSize: "Mid Corolla",
    source: "expedia"
 },
];

//To retreive the cost from it
function logArrayElements(element, index, carHireBoston) {
console.log("The cost of car hire to Boston from " + element.pickUp + " is " + element.cost);
}
carHireBoston.forEach(logArrayElements);
