//Don't know why this is not working - do it manually

console.log('Are we linked?  Yes we are are!');
$(document).ready(console.log('jQuery - are we ready? Yes!'));

var stays =  [
 {
 location : "New York",
 arrive : "2/10/2016",
 leave: "10/10/2016",
 numNights : 4,
 address : "493 1st Street, Brooklyn, NY 11215",
 bookedThrough : "Air BnB",
 paid : "pending",
 totalCost : 1173,
 currency: "Aud",
 booked: true,

 },
{
location : "Quebec",
arrive : "14/10/2016",
leave: "18/10/2016",
numNights : 4,
address : "TBC",
bookedThrough : "Air BnB",
paid : "pending",
totalCost : 562,
currency: "Aud",
booked: true
},
{
location : "Montreal",
arrive : "10/10/2016",
leave: "14/10/2016",
numNights : 4,
address : "888 Rue Saint-François-Xavier 1313, Montréal, Québec H2Y 0A8, Canada",
bookedThrough : "Air BnB",
paid : "pending",
totalCost : 516,
currency: "Aud",
booked: true
},
{
location : "Montreal",
arrive : "18/10/2016",
leave: "19/10/2016",
numNights : 1,
address : "TBC",
bookedThrough : "TBC",
paid : "pending",
totalCost : 0,
currency: "Aud",
booked: "false"
},
{
location : "White Top Mountain",
arrive : "19/10/2016",
leave: "20/10/2016",
numNights : 1,
address : "TBC",
bookedThrough : "TBC",
paid : "pending",
totalCost : 0,
currency: "Aud",
booked: "false"
},
{
location : "Boston",
arrive : "20/10/2016",
leave: "26/10/2016",
numNights : 6,
address : "Pablo's place",
bookedThrough : "Bernard",
paid : "yes",
totalCost : 0,
currency: "Aud",
booked: true
},
{
location : "South Amboy",
arrive : "26/10/2016",
leave: "3/11/2016",
numNights : 4,
address : "Bernard's mum",
	bookedThrough : "Bernard",
	paid : "yes",
	totalCost : 0,
currency: "Aud",
booked: true
},
{
location : "Phillipsburg",
arrive : "3/11/2016",
leave: "5/11/2016",
numNights : 2,
address : "TBC",
	bookedThrough : "Bernard",
	paid : "pending",
	totalCost : 0,
currency: "Aud",
booked: true
},
{
location : "Poconos",
arrive : "5/11/2016",
leave: "7/11/2016",
numNights : 2,
address : "TBC",
	bookedThrough : "",
	paid : "pending",
	totalCost : 0,
currency: "Aud",
booked: "false"
},
{
location : "Villa Nova",
arrive : "07/11/2016",
leave: "10/11/2016",
numNights : 3,
address : "TBC",
	bookedThrough : "TBC",
	paid : "pending",
	totalCost : 0,
currency: "TBC",
booked: "false"
},
{
location : "Washington",
arrive : "10/11/2016",
leave: "18/11/2016",
numNights : 8,
address : "Billy Bartolene",
	bookedThrough : "Bernard",
	paid : "yes",
	totalCost : 0,
currency: "Aud",
booked: true
},
{
location : "South Amboy",
arrive : "23/11/2016",
leave: "25/11/2016",
numNights : 2,
address : "Bernard's mum",
bookedThrough : "Bernard",
paid : "pending",
totalCost : 0,
currency: "Aud",
booked: true
},
{
location : "New York",
arrive : "25/11/2016",
leave: "26/11/2016",
numNights : 1,
address : "Park Slopes",
bookedThrough : "TBC",
paid : "pending",
totalCost : 0,
currency: "Aud",
booked: "false"
}
];


//This code filters the results based on specific criteria - in this instance, the criteria of booked.  For original code - see Duckett p 537.   This version just deals with booked - see below for both booked and unbooked

// var bookedArray = [];
// var booked = function(){
//  stays.forEach(function(staying){
//  if (staying.booked === true ) {
//   bookedArray.push(staying);
//  }
// });
//  console.log(bookedArray);
// };
// booked();
//
// var addBookedTxt = function(){
//  for (var i = 0; i < bookedArray.length; i ++) {
//   var city = bookedArray[i].location;
//   var arrive = bookedArray[i].arrive;
//   var leave = bookedArray[i].leave;
//   var address = bookedArray[i].address;
//   var bookedThrough = bookedArray[i].bookedThrough;
//   var message = "In " + city + " you are staying at " + address + ". You will arrive on " + arrive + " and leave on " + leave + ". This has been booked through " + bookedThrough;
//  var $p = $( "<p></p>" );
//  $p.text(message);
//  $('#booked').append($p);
//   }
//  };
//
// addBookedTxt(bookedArray);


var bookedArray = [];
var unBookedArray = [];
var bookedByBernie = [];
var booked = function(){
 stays.forEach(function(staying){

  if (staying.bookedThrough === "Bernard") {
  bookedByBernie.push(staying);
 }
 else if (staying.booked === true ) {
  bookedArray.push(staying);
 }
 else {
  unBookedArray.push(staying);
 }
});
 // console.log(bookedByBernie);
 // console.log(bookedArray);
 // console.log(unBookedArray);
};
booked();

var addBookedTxt = function(){
 for (var i = 0; i < bookedArray.length; i ++) {
  var city = bookedArray[i].location;
  var arrive = bookedArray[i].arrive;
  var leave = bookedArray[i].leave;
  var address = bookedArray[i].address;
  var bookedThrough = bookedArray[i].bookedThrough;
  var message =  "<strong>" + city + "</strong>"+ ": you are staying at " + address + ". You will arrive on " + arrive + " and leave on " + leave + ". This has been booked through " + bookedThrough;
 var $p = $( "<p></p>" );
 $p.html(message);
 $('#booked').after($p);
  }
 };

addBookedTxt(bookedArray);


var addUnBookedTxt = function(){
 for (var i = 0; i < unBookedArray.length; i ++) {
  var city = unBookedArray[i].location;
  var arrive = unBookedArray[i].arrive;
  var leave = unBookedArray[i].leave;
  var address = unBookedArray[i].address;
  var bookedThrough = unBookedArray[i].bookedThrough;
  var message =  "<strong>" + city + "</strong>"+ ": you are staying at " + address + ". You will arrive on " + arrive + " and leave on " + leave + ". This has been booked through " + bookedThrough;
 var $p = $( "<p></p>" );
 $p.html(message);
 $('#unBooked').after($p);
  }
 };

 addUnBookedTxt();


 var bernieText = function(){
  for (var i = 0; i < unBookedArray.length; i ++) {
   var city = bookedByBernie[i].location;
   var arrive = bookedByBernie[i].arrive;
   var leave = bookedByBernie[i].leave;
   var address = bookedByBernie[i].address;
   var bookedThrough = bookedByBernie[i].bookedThrough;
   var message = "<strong>" + city + "</strong>"+  ": you are staying at " + address + ". You will arrive on " + arrive + " and leave on " + leave + ". This has been booked through " + bookedThrough;
  var $p = $( "<p></p>" );
  $p.html(message);
  $('#bernieB').after($p);
   }
  };

  bernieText();


//accomodation costs


var eachCost = [];
var stayCostArr2 = function(){
 stays.forEach(function(staying){
  eachCost.push(staying.totalCost);
});
console.log(eachCost);
};

stayCostArr2();

var totalStayCosts = eachCost.reduce((prev,curr) => prev+curr );


$('#stayCosts').html("The cost of accomodation is : AUD$ <strong>" + totalStayCosts + "</strong>.  ");

//Free numNights

var freeNightsArr = [];
var paidNightsArr = [];
var nights = function(){
 stays.forEach(function(staying){
  if (staying.bookedThrough === "Bernard") {
  freeNightsArr.push(staying.numNights);
 }
 else {
  paidNightsArr.push(staying.numNights);
 }
});
 console.log(freeNightsArr);
 console.log(paidNightsArr);
 // console.log(unBookedArray);
};
nights();

var totalFreeNights = freeNightsArr.reduce((prev,curr) => prev+curr );
var totalPaidNights = paidNightsArr.reduce((prev,curr) => prev+curr );
var totalNights = totalFreeNights + totalPaidNights;
var nightsPerCentFree = (totalFreeNights / totalNights *100).toFixed();
var nightsPerCentPaid = (totalPaidNights / totalNights *100).toFixed();

var stayCostMsg = "The total number of free nights is " + totalFreeNights + ".  This is "+ nightsPerCentFree + "% of your trip.";
stayCostMsg += "The total number of paid nights is " + totalPaidNights + ".  This is "+ nightsPerCentPaid + "% of your trip.";

$('#stayCosts').append(stayCostMsg);
