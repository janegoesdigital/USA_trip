console.log("hello jane and betty.  Are we ready main.js? Yep. ready");
$(document).ready(console.log("Are we ready jquery? Yep. I'm ready"));

// dates
// document.getElementById("demo").innerHTML = Date();



// var d = new Date("Mar 25 2015");
//
// document.getElementById("newDate").innerHTML = d;
//
// var day = new Date();
// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// document.getElementById("numDay").innerHTML = day.getDay();
//
// document.getElementById("nameDay").innerHTML = days[day.getDay()];
//
//
  $( function() {
    $( "#datepicker" ).datepicker();
  } );

//putting the input numbers into a form, that can be passed into the date object

var year = "2016";
var month = "10";
var day = "17";

var newStart = year + ", " + month + ", " + day;

var startDate = new Date(dateInput);

console.log(startDate.toString());
console.log(startDate.toDateString());

console.log(newStart);


var start = "2016, 10, 2";
var end = "2016, 10, 8";

//calculating how many nights for each activity

var startDate = 4;
var startMonth = 10;
var endDate = 17;
var endMonth = 11;

var numberOfNights = endDate - startDate;
console.log("The total stay is " + numberOfNights + " nights");

var numberOfNights = function(startMonth,endMonth,startDate,endDate){
      var nights;
    if (startMonth < endMonth)
  {
    nights = endDate + (30-startDate);
    console.log("in different months " + nights + " nights");
  }  else if
    (startMonth === endMonth)
    {
    nights = endDate-startDate;
    console.log("all in the same month " + nights + " nights");

  } else {console.log("You've made a mistake");
}
};

//cost of nights

var estimateNightly = 200;
var numberOfNights;
var estimate = numberOfNights * estimateNightly;
var actualRate;
var actualSpend = numberOfNights * actualRate;
var budgetRun = costEsimate - actualCost;

var costs = {
  montreal: {
        hotel: "Royal",
        numberNights: 10,
        actualCostPerNight: 52,
      },
  quebec: {
    hotel: "Quebec",
    numberNights: 10,
    actualCostPerNight: 52,
  },
}
