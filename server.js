const tmi = require('tmi.js');

const client = new tmi.Client({
  options: { debug: true },
  connection: {
    secure: true,
    reconnect: true
  },
  identity: {
    username: 'gt89bot',
    password: process.env.TWITCH_OAUTH
  },
  channels: ['granturismo89']
});

client.connect();

client.on('message', (channel, tags, message, self) => {
  // Ignore echoed messages.
  if(self) return;

  if(message.toLowerCase() === 'betting is open for red vs green. use !bet [amount] [team] to place a wager!') {
    setTimeout(() => {client.say(channel, `@${tags.username}, !betf red`); }, 5000);
  }
});
