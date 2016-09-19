console.log("hello jane and betty")

$(document).ready(function(){

});


//triangle
symbol = "#";

var write = function(symbol){
    for (var i = 0; i < 8; i++){
    console.log(symbol);
    var $p = $("<p></p>")
    $p.text(symbol);
    $("#tri").append( $p );
    var symbol = symbol + "#";
  }
};

$( "#triangle" ).click(function() {
  write(symbol);
});


//count

$( "#count" ).click(function() {
for (var i = 1; i < 101; i++){
  var $p = $("<p></p>")
  $p.text(i);
  $("#count").append( $p );
    console.log(i);
}

});





// print numbers divisible by 3 = fizz, by 5 = buzz




var division = function(){
  for (var i = 1; i < 101; i++){
    var $p = $("<p></p>");
    if(i % 3 === 0){
    $p.text(i + " fizz");
    console.log(i + " fizz");
    } else if (i % 5 === 0) {
    $p.text(i + " buzz");
    console.log(i + " buzz");
    } else {
          $p.text(i);
      console.log(i);
    }
    $("#by3").append( $p );
  }
}


$( "#by3" ).click(function() {
  division();
}
)

//board

var row1 = "x0 ";
var row2 = "0x ";
var rows = 8;

var squares = function(rows){
  for(var i = 1; i < rows; i++){
    row1 = row1 + "x0 ";
    row2 = row2 + "0x ";
  }
 return(row1, row2);
};


var board = function(rows){
  squares(rows);
  for (var i = 0; i < rows+1; i++)
    {if (i % 2 === 0){
        var $p = $("<p></p>");
        $p.text(row1);
         console.log(row1);
        } else {
          var $p = $("<p></p>");
          $p.text(row2);
          console.log(row2);
          }
      $("#board").append( $p );
    }
};


$( "#board" ).click(function() {
  board(rows);
}
)
//

// board(rows);
