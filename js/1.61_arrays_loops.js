var cookies = [
	"Chocolate Chip,",  	//0
	" M&M,",				//1
	" Sugar,",				//2
	" Peanut Butter"		//3
]
var text = ""; //Quotes represent where the text will go.
var i;
for (i = 0; i < cookies.length; i++) { 
	//cookies.length counts the length of cookie types.
	//i = 0 is the starting value in the array. i is defined as variable, causing i++ to INC by 1.
	text += cookies[i];
}
console.log(text);//Calls all the cookie flavors, as plain text.
console.log(cookies[2]); //Still displays the number 2 value.