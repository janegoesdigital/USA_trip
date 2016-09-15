Console.log("Yep.  This is objects and arrays");


var simpleArray = ["one", "happy", "grumpby", "nearly there"];

//retrieve whole array
//just type it's name

//retreive a single element from an array  - do it by index number and []

//simpleArray[3];

//to do things on each element of an array - old fashioned looping to retrieve each thing.

// for ( var i  = 0; i < simpleArray.length; i++ )
// {var fruit = simpleArray[ i ];
// console.log( fruit );
// };


//to do things on each element using forEach - ECMA5

// Need to create both a function and then call that function
//Need to create both a function and then call that function


function logArrayElements(element, index, simpleArray)
  console.log('a[' + index + '] = ' + element);
}

simpleArray.forEach(logArrayElements)

//OBJECTS
//remember an object has key: value pair

var simpleObject =
 {one:"I'm happy",
 two: "I'm not so happy",
 three: "I'm not that sure"
 };



 // Retrieve each key in an object  -use a  FOR IN loop

 // for (var prop in simpleObject) {
 //    console.log(prop);
 //  }

 // return all the keys in the object - ECMA5
 // Object.keys(simpleObject);
 //
 // or
 //
 // Object.getOwnPropertyNames(simpleObject)

 // These seem to do the same thing to me!

 //Retrieve a single value in an object

 //by dot notation - note  - this won't accept a string.  if you are passing a string around need to use []

 //simpleObject.one

 //by [] notation - must use ""

 // simpleObject["one"];

 //NESTING OBJECTS IN OBJECTS

sample object
 var nestedObject = {
  firstOne: {
    firstItem: "here I am ",
    secondItem: "yet again"
  },

  secondOne: {
    firstItem: "here I am ",
    secondItem: "yet again"
  },
};

// Retreive all keys of the object  FOR .. IN

for (var prop in nestedObject){
 console.log(prop)
}

//To retreive the nested object
//MUST use [] and not dot notation because need to pass in a string!

for (var prop in nestedObject){
 console.log(nestedObject[prop])
}

//to retreive values in the nested object

for (var prop in nestedObject){
 console.log(nestedObject[prop].firstItem);
}




// OBJECTS NESTED IN AN ARRAY

//Sample object
var objInArray = [
  {
    firstItem: "here I am ",
    secondItem: "yet again"
  },
  {
    firstItem: "another one ",
    secondItem: "yet another again"
  },

];

//To retrieve objects individually

objInArray[1];

//To retrieve VALUES in an object in an an array - individually

objInArray[1].firstItem;
OR
objInArray[1]["firstItem"]

//To iterate over the array  - use the forEach method
function logArrayElements(element, index, objInArray) {
}

objInArray.forEach(logArrayElements);

// to use it to retrieve the objects from the array

function logArrayElements(element, index, objInArray) {
  console.log(element);
}
objInArray.forEach(logArrayElements);

//to use it to retrieve the values in the objects from the array
function logArrayElements(element, index, objInArray) {

  console.log(element.firstItem);
}
objInArray.forEach(logArrayElements);

//To return all the keys in the array as an array
var firstObKeys = Object.keys(firstOb);
var firstObKeysFirstItem = firstObKeys[0];
