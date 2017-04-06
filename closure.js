// Closure - A function with access to its own private variables
var birds = 3;

// outer function
function dogHouse() {
  var dogs = 8;
  //console.log(birds); // 3
  //console.log(dogs); // 8
  
  // inner function
  function showDogs() {
    console.log(dogs);
  }
  
  return showDogs();
}

//console.log(birds); // 3
//console.log(dogs); // undefined

var getDogs = dogHouse();

//getDogs; // 8

// Anatomy of a Closure
function outerFunction() {
  var someCount = 0;
  function innerFuntion() {
    someCount++;
    console.log("Called " + someCount + " times");
  }
  return innerFuntion();
}

counter1 = outerFunction();
counter2 = outerFunction();