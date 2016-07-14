// Functions

//Global Variables
var myAge = 21;
var favNum = 7;
var monthsOfYear = 12;


function varMath(){ // Variable math*
	//Local Variables
	var x = myAge;
	var y = favNum;
	var z = monthsOfYear;
	//Prep for Local calling
	console.log(x, "x: myAge."); 
	console.log(y, "y: favNum");
	console.log(z, "z: monthsOfYear");
	//Math
	console.log(x * y, "Multiplication: myAge*favNum");
	console.log(x + y, "Addition: myAge+favNum");
	console.log(x - y, "Subtraction: myAge-favNum");
	console.log(x / y, "Division: myAge/favNum");


}
//Local Calling of variables
varMath();


// Calling the Global variables
console.log(myAge);
console.log(favNum);
console.log(monthsOfYear);
