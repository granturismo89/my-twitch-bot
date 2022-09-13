const tmi = require('tmi.js');

const client = new tmi.Client({
  connection: {
    reconnect: true
  },
  channels: [
    'granturismo89'
  ]
});

client.connect();

client.on('message', async (channel, context, message) => {
  console.log('channel', {
    channel,
    user: context.username,
    message
  });
});
