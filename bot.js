 const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "1"
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("527672974518648842")
setInterval(function() {
channel.send(`447 Is here Guys...`);
}, 30)
})


client.on("message", function(message) {
    var args = message.content.split(/ +/g);
    var command = args.shift()
    
    if(command == ".1s") {
        message.channel.send(args.slice(1, args.length).join(" "))    
    }
});



client.on('message', message => {
if (message.content.startsWith(prefix + "say")) {
var args = message.content.split(" ")
args = args.join(" ").slice(args[0].length);

if (!args) return;

message.channel.send(args);
};
})


client.login(process.env.BOT_TOKEN); 
