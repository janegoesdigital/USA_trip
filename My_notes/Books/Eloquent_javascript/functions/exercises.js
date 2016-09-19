// write a function tht takes two arguments and returns their minimum

function minimum(x,y) {
  if (x < y){
    return x;
  } else {
  return y;
}
}

minimum(10,12);





//recursion
// zero is even; one is odd. Ns!
//I have no idea why this workds

function isEven (n) {
  if (n === 0)
    return true;
  else if (n === 1)
    return false;
  else if (n < 0)
    return isEven(-n);
  else
    return isEven(n - 2);
}

function isEven (n) {
  if (n === 0) return true;
  if (n === 1) return false;
  if (n < 0) return isEven(-n);
  return isEven(n - 2);
}




console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false


//Bean counting
// "string".charAt(N);


var countB = function (word) {
  var count = 0;
  for (var i = 0; i <=  word.length-1; i++) {
    var letter = word.charAt(i);
    if (letter === "B") {
      count += 1;
      console.log("B");
      console.log(count);
    } else {
      console.log("no b");
    }
  }
  return count;
};

  countB("bBBBb");
