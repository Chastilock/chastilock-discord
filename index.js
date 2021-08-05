require("dotenv").config();

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    // If the message is "ping"
    if (message.content.toLowerCase() === 'ping') {
      // Send "pong" to the same channel
      message.channel.send('pong');
    }
  });

client.login(process.env.TOKEN);