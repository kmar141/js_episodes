// Episode 1

var name = 'Slim Shady';

var printName = function() {
  console.log('Hi! My name is', name);
};

printName();

// This will print 'Hi! My name isSlim Shady'
// 'name' is set as a global variable with string 'Slim Shady'
// function'printName' is called to print 'Hi! My name is' and the string assigned to the name global variable

// Episode 2

score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());

// This will print '3'
// function 'result' will ignore the global variable of score (which is assigned the number 5) and will print the local variable also called score (assigned to 3)

// Episode 3

var myAnimals = ['chickens', 'cats', 'rabbits'];

var listAnimals = function() {
  myAnimals = ['ducks', 'dogs', 'lions'];
  for(var i=0; i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

// This will print 0:ducks, 1:dogs, 2: lions
// function listAnimals will only print the index and the value of the instance variable myAnimals and will ignore the variable with the same name above

// Episode 4

var suspectOne = 'Alan';
var suspectTwo = 'Steve';
var suspectThree = 'John';
var suspectFour = 'Ally';

var allSuspects = function() {
  var suspectThree = 'Adam'
  console.log('Suspects include:', suspectOne, suspectTwo, suspectThree, suspectFour);
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );

// This will print 'Suspects include: Alan, Steve, Adam, Ally' and then print 'Suspect three is: John'
// Like similar examples, well the allSuspect function is called, it will ignore the above variable for suspectThree and over-write this variable with it's own localised version. 
// After the allSuspects method is called, the seperate instance of console.log called to print suspectThree can only see the global variable and thus prints it, differing from the allSuspects function.


// Episode 5

var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());

// This will print 'Poirot'
// When the function detectiveInfo is called, it will assign a key/value pair of name : Poirot to a detective, it then calls the printName function (passing in this same detective) and the printName function returns the value of the key.

// Episode 6

var murderer = 'John';

var outerFunction = function() {
  var murderer = 'Ally';

  var innerFunction = function() {
    murderer = 'Steve';
  }

  innerFunction();
}

outerFunction();
console.log('The murderer is', murderer);

// This will print 'The murderer is John' 
// Again, like previous examples, when console.log is called, it ignores all the murderer instance variables contained in both outerFunction and innerFunction and returns the global murderer variable which has the string John. Although the outerFunction function is called just before console.log, it has no impact on console.log and thus, is ignored. 

// Episode 7

function generateRandomAlphaNum(len) {
    var rdmString = "";
    for( ; rdmString.length < len; rdmString  += Math.random().toString(36).substr(2));
    return  rdmString.substr(0, len);

}

console.log(generateRandomAlphaNum(7))

