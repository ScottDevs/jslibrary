function diamondRank (perms, chat, level) {
	this.permissions = perms;
	this.chatColor = chat;
	this.serverLevel = level;
}

var panda = new diamondRank ("Diamond", "Red", 46);
var fred = new diamondRank ("Diamond", "Blue", 85);

console.log(panda); //Displays Panda rank stats
console.log(panda.permissions); //Displays Panda's Permissions
