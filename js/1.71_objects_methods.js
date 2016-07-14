//Object Properties

var bike = {
	//Properties
	type			: "Off Road",
	wheelSize		: 29,
	color			: "black",
	wheelSize   	: "XL",
	bikeInfo			: {
		bikeInfoStuff	: [
		//Methods
		{speed : "Fast ", weight : "Fifteen Pounds"}, //0
		{speed : "Medium ", weight : "Ten Pounds"}, //1
		{speed : "Slow ", weight : "Five Pounds"} //2

		]
	}
	
};

console.log(bike); //Calls the bike properties
console.log(bike.bikeInfo.bikeInfoStuff); //Calls for all bikeInfoStuff
console.log(bike.bikeInfo.bikeInfoStuff[1]);//Calls for the second bikeInfoStuff Methods.
