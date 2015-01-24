//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
var isTyler = function(name) {
	if(name == 'Tyler') {
		return true;
	} else {
		return false;
	}
}

//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
var getName = function() {
	var getUserName = prompt("Enter your name: ");
	return getUserName;
}

//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
var welcome = function() {
	getName();
	alert("Welcome, " + name);
}

//Next problem




//What is the difference between arguments and parameters?

  //Answer Here
/*
	Paramaters are variables that a function is calling in order to use their info in the function
	Arguments mostly use paramaters to perform calculations.

	paramaters are names of variables, arguments are their values.
*/

//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
/*
	False, undefined, 0, '', null, NaN
	check by using an if or if else statement
*/


//Next Problem



//Create a function called myName that returns your name

  //Code Here

var myName = function() {
	return name;
}

//Now save the function definition of myName into a new variable called newMyName

  //Code Here

var newMyName = myName();

//Now alert the result of invoking newMyName

alert(newMyName);

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here

var outerFn = function() {
	return function() {
		return name;
	}
}

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here

var innerFn = outerFn();

//Now invoke innerFn.

innerFn();