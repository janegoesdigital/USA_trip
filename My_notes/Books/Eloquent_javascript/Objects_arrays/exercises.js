
console.log("Hello Jane and Betyy");

var listNum = function (start, end) {
  var list = [ ];
  for (var i = 0; i <= end; i++){
    list.push(i);
    console.log(list);
  }
};

var listSum = function(array) {
  var sum = 0;
  for (var i = 0; i <=array.length - 1; i++){
    sum += array[i];
    console.log(sum);
  }
};
