const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
	bot.user.setGame("Niquer ta mère");
	console.log("Le bot a était connecté");
});

bot.login("NDE4NDQwMzE2MDYwODI3NjQ4.DXhvgQ.Wii7Yaa1gb_5k9eqalE6LMxgoJY");
