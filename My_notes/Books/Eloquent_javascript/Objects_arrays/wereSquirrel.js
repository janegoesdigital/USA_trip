
var day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"],
};

var journal = [
    {
      events: ["work", "touched tree", "pizza", "running"],
      squirel: false
    },
    {
      events: ["weekend", "cycle", "peanus", "running"],
      squirel: true
    },
];

var addEntry = function(events, squirrel){
journal.push({
  events: events,
  squirrel: squirrel
});
};


//function to determine if the event is in there

var hasEvent = function(event,entry){
 return entry.events.indexOf(event) != -1
};


var tableFor = function(event,journal){
 var table = [0,0,0,0];
 for (var i = 0; i < journal.length)
}
