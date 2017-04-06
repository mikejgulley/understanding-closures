var buttons = document.getElementsByTagName('button');

// if left like this button gets overwritten and ends up being last in array
// solution make function that returns a Closure
//for(var i = 0; i < buttons.length; i += 1) {
//  var button = buttons[i];
//  var buttonName = button.innerHTML;
//  button.addEventListener('click', function() {
//    console.log(buttonName);
//  });
//}

function createHandler(name) {
  return function() {
    console.log(name);
  }
}

for(var i = 0; i < buttons.length; i += 1) {
  var button = buttons[i];
  var buttonName = button.innerHTML;
  button.addEventListener('click', createHandler(buttonName));
}

// this issue has already been addressed in ECMA2015 by using 'let' --> no need for Closure in this case, but not all browses support this yet
//for(var i = 0; i < buttons.length; i += 1) {
//  var button = buttons[i];
//  let buttonName = button.innerHTML;
//  button.addEventListener('click', createHandler(buttonName));
//}
