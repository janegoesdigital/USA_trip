var fortuneCookies = [
 "Conquer your fears or they will conquer you",
 "Do not fear what you don't know",
 "Rivers need springs",
 "You will have a pleasant surprise",
 "Whenever possible, keep it simple"
];

//exports makes it a global variable

exports.getFortune = function(){
 var idx = Math.floor(Math.random() * fortuneCookies.length);
 return fortuneCookies[idx];
};
