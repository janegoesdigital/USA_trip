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


    // $(".select").hide();
    $(".travel").hide();
    $(".dates").hide();
    $(".tripSummary").hide();


  // find what things have been selected and start to put logic around the display of the page - using jquery

    $("input[name=chooseEvent]").click(function(){
    console.log("you clicked");
    var eventType = $("input[name=eventType]:checked").val();
    console.log(eventType);
    var message = "You have selected " + eventType;
    $("#eventMessage" ).append( "<p>"  + message + "</p>" );
    $(".travel").show();
  });



  $("input[name=chooseLocation]").click(function(){
    console.log("I saw you - you  clicked");
    var choosenLocation = $( "input[name=location]:checked").val();
    console.log(choosenLocation);
    var messageLocation = "You have selected " + choosenLocation;
    $("#eventMessage" ).append( "<p>"  + messageLocation + "</p>" );
    $(".dates").show();
  });


  $("input[name=startDate]").click(function(){
    console.log("I saw you - you  clicked");
    var choosenDay = $( "input[name=startDay]").val();
    console.log(choosenDay);
    var messageLocation = "The day you have selected is " + choosenDay;
    $("#eventMessage" ).append( "<p>"  + messageLocation + "</p>" );
    $(".dates").show();
  });






$("input[name=chooseMonth]").click(function(){
    var selectedMonth = $("#month option:selected").text();
    var messageMonth = "The month you have selected is " + selectedMonth;
    $("#eventMessage" ).append( "<p>"  + messageMonth + "</p>" );
    $(".dates").show();
    console.log("You clicked the month");
    console.log(selectedMonth);

  });
