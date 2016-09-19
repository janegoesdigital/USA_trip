//Create  triangle with #


var symbol = "#";

var write = function(symbol){
  for (var i = 0; i < 8; i++){
    console.log(symbol);
    var symbol = symbol + "#";
  }
};


write(symbol);

//print all the numbers - 1 to 100
for (var i = 1; i < 101; i++){
console.log(i);
}

// print numbers divisible by 3 = fizz, by 5 = buzz

for (var i = 1; i < 101; i++){
  if(i % 3 === 0){
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else {console.log(i);
  }
}

//add fizz buzz if divisible by both 3 and 5

for (var i = 1; i < 101; i++){
  if ((i % 3 === 0) && (i % 5 === 0)){
    console.log(i + "fizzbuzz");
   } else if (i % 3 === 0){
    console.log(i + "fizz");
  } else if (i % 5 === 0) {
    console.log(i + "buzz");
  } else {console.log(i);
  }
}


var row1 = "x0 ";
var row2 = "0x ";
var rows = 16;

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
         console.log(row1);
        } else {console.log(row2);
    }
    }
};

board(rows);
