//Rank Inheritance
var iron = {
	rank : "Rank: Iron",
	homes: "Homes: One", 
	food : "Food: Sixteen Steak",
	rankBreak : "---",

	printName : function(){
		console.log(this.rank);//Test
	}

}

var iron = Object.create(iron);
				
var gold = Object.create(iron);
		gold.rank = "Rank: Gold";
		gold.homes = "Homes: Two";
		gold.weapons = "Weapon: Diamond Sword";
		
		

var diamond = Object.create(gold);
		diamond.rank = "Rank: Diamond";
		diamond.homes = "Homes: Three";
		diamond.command = "Commands: Abilty to Fly"
		
// Iron
	console.log(iron.rank);				
	console.log(iron.homes);			
	console.log(iron.food);				
	// Break
		console.log(iron.rankBreak);
// Gold
	console.log(gold.rank);				
	console.log(gold.homes);			
	console.log(gold.food);				
	console.log(gold.weapons);
	// Break
		console.log(gold.rankBreak);
// Diamond
	console.log(diamond.rank);
	console.log(diamond.homes);
	console.log(diamond.food);
	console.log(diamond.weapons);
	console.log(diamond.command);
	// Break
		console.log(diamond.rankBreak);






