require("dotenv").config();
const { Client, Intents } = require('discord.js');
const pingRes = require("./messageResponders/ping");

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    messageResponse(message)
});

client.on("guildCreate", function(guild){
  //Log being added to new server
});

client.on("guildCreate", function(guild){
  //Log being added to new server
});

client.login(process.env.TOKEN);

messageResponse = async message => {
  // If the message is "ping"
  if (message.content.toLowerCase() === 'ping') {
    await pingRes(message);
  }
}