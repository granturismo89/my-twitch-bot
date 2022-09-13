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
    setTimeout(() => {client.say(channel, `!betf red`); }, 8000);
  }
  
   if(message.toLowerCase() === 'betting is open for red vs blue. use !bet [amount] [team] to place a wager!') {
    setTimeout(() => {client.say(channel, `!betf red`); }, 8000);
  }
  
     if(message.toLowerCase() === 'betting is open for red vs yellow. use !bet [amount] [team] to place a wager!') {
    setTimeout(() => {client.say(channel, `!betf red`); }, 8000);
  }
  
     if(message.toLowerCase() === 'betting is open for red vs black. use !bet [amount] [team] to place a wager!') {
    setTimeout(() => {client.say(channel, `!betf red`); }, 8000);
  }
  
     if(message.toLowerCase() === 'betting is open for red vs white. use !bet [amount] [team] to place a wager!') {
    setTimeout(() => {client.say(channel, ` !betf red`); }, 8000);
  }
  
       if(message.toLowerCase() === 'betting is open for red vs purple. use !bet [amount] [team] to place a wager!') {
    setTimeout(() => {client.say(channel, `!betf red`); }, 8000);
  }
  
       if(message.toLowerCase() === 'betting is open for red vs brown. use !bet [amount] [team] to place a wager!') {
    setTimeout(() => {client.say(channel, `!betf red`); }, 8000);
  }
  
    if(message.toLowerCase() === 'betting is open for green vs red. use !bet [amount] [team] to place a wager!') {
    setTimeout(() => {client.say(channel, `!betf green`); }, 8000);
  }
  
   if(message.toLowerCase() === 'betting is open for green vs blue. use !bet [amount] [team] to place a wager!') {
    setTimeout(() => {client.say(channel, `!betf green`); }, 8000);
  }
  
     if(message.toLowerCase() === 'betting is open for green vs yellow. use !bet [amount] [team] to place a wager!') {
    setTimeout(() => {client.say(channel, `!betf green`); }, 8000);
  }
  
     if(message.toLowerCase() === 'betting is open for green vs black. use !bet [amount] [team] to place a wager!') {
    setTimeout(() => {client.say(channel, `!betf green`); }, 8000);
  }
  
     if(message.toLowerCase() === 'betting is open for green vs white. use !bet [amount] [team] to place a wager!') {
    setTimeout(() => {client.say(channel, `!betf green`); }, 8000);
  }
  
       if(message.toLowerCase() === 'betting is open for green vs purple. use !bet [amount] [team] to place a wager!') {
    setTimeout(() => {client.say(channel, `!betf green`); }, 8000);
  }
  
       if(message.toLowerCase() === 'betting is open for green vs brown. use !bet [amount] [team] to place a wager!') {
    setTimeout(() => {client.say(channel, `!betf green`); }, 8000);
  }
  
    if(message.toLowerCase() === 'betting is open for white vs green. use !bet [amount] [team] to place a wager!') {
    setTimeout(() => {client.say(channel, `!betf white`); }, 8000);
  }
  
   if(message.toLowerCase() === 'betting is open for white vs blue. use !bet [amount] [team] to place a wager!') {
    setTimeout(() => {client.say(channel, `!betf white`); }, 8000);
  }
  
     if(message.toLowerCase() === 'betting is open for white vs yellow. use !bet [amount] [team] to place a wager!') {
    setTimeout(() => {client.say(channel, `!betf white`); }, 8000);
  }
  
     if(message.toLowerCase() === 'betting is open for white vs black. use !bet [amount] [team] to place a wager!') {
    setTimeout(() => {client.say(channel, `!betf white`); }, 8000);
  }
  
     if(message.toLowerCase() === 'betting is open for white vs white. use !bet [amount] [team] to place a wager!') {
    setTimeout(() => {client.say(channel, `!betf white`); }, 8000);
  }
  
       if(message.toLowerCase() === 'betting is open for white vs purple. use !bet [amount] [team] to place a wager!') {
    setTimeout(() => {client.say(channel, `!betf white`); }, 8000);
  }
  
       if(message.toLowerCase() === 'betting is open for white vs brown. use !bet [amount] [team] to place a wager!') {
    setTimeout(() => {client.say(channel, `!betf white`); }, 8000);
  }
  
    if(message.toLowerCase() === 'betting is open for purple vs red. use !bet [amount] [team] to place a wager!') {
    setTimeout(() => {client.say(channel, `!betf purple`); }, 8000);
  }
  
   if(message.toLowerCase() === 'betting is open for purple vs blue. use !bet [amount] [team] to place a wager!') {
    setTimeout(() => {client.say(channel, `!betf purple`); }, 8000);
  }
  
     if(message.toLowerCase() === 'betting is open for purple vs yellow. use !bet [amount] [team] to place a wager!') {
    setTimeout(() => {client.say(channel, `!betf purple`); }, 8000);
  }
  
     if(message.toLowerCase() === 'betting is open for purple vs black. use !bet [amount] [team] to place a wager!') {
    setTimeout(() => {client.say(channel, `!betf purple`); }, 8000);
  }
  
     if(message.toLowerCase() === 'betting is open for purple vs green. use !bet [amount] [team] to place a wager!') {
    setTimeout(() => {client.say(channel, `!betf purple`); }, 8000);
  }
  
       if(message.toLowerCase() === 'betting is open for purple vs white. use !bet [amount] [team] to place a wager!') {
    setTimeout(() => {client.say(channel, `!betf purple`); }, 8000);
  }
  
       if(message.toLowerCase() === 'betting is open for purple vs brown. use !bet [amount] [team] to place a wager!') {
    setTimeout(() => {client.say(channel, `!betf purple`); }, 8000);
  }
  
    if(message.toLowerCase() === 'betting is open for blue vs red. use !bet [amount] [team] to place a wager!') {
    setTimeout(() => {client.say(channel, `!betf blue`); }, 8000);
  }
  
   if(message.toLowerCase() === 'betting is open for blue vs white. use !bet [amount] [team] to place a wager!') {
    setTimeout(() => {client.say(channel, `!betf blue`); }, 8000);
  }
  
     if(message.toLowerCase() === 'betting is open for blue vs yellow. use !bet [amount] [team] to place a wager!') {
    setTimeout(() => {client.say(channel, `!betf blue`); }, 8000);
  }
  
     if(message.toLowerCase() === 'betting is open for blue vs black. use !bet [amount] [team] to place a wager!') {
    setTimeout(() => {client.say(channel, `!betf blue`); }, 8000);
  }
  
     if(message.toLowerCase() === 'betting is open for blue vs green. use !bet [amount] [team] to place a wager!') {
    setTimeout(() => {client.say(channel, `!betf blue`); }, 8000);
  }
  
       if(message.toLowerCase() === 'betting is open for blue vs blue. use !bet [amount] [team] to place a wager!') {
    setTimeout(() => {client.say(channel, `!betf blue`); }, 8000);
  }
  
       if(message.toLowerCase() === 'betting is open for blue vs brown. use !bet [amount] [team] to place a wager!') {
    setTimeout(() => {client.say(channel, `!betf blue`); }, 8000);
  }
  
  if(message.toLowerCase() === 'betting is open for yellow vs red. use !bet [amount] [team] to place a wager!') {
    setTimeout(() => {client.say(channel, `!betf yellow`); }, 8000);
  }
  
   if(message.toLowerCase() === 'betting is open for yellow vs white. use !bet [amount] [team] to place a wager!') {
    setTimeout(() => {client.say(channel, `!betf yellow`); }, 8000);
  }
  
     if(message.toLowerCase() === 'betting is open for yellow vs blue. use !bet [amount] [team] to place a wager!') {
    setTimeout(() => {client.say(channel, `!betf yellow`); }, 8000);
  }
  
     if(message.toLowerCase() === 'betting is open for yellow vs black. use !bet [amount] [team] to place a wager!') {
    setTimeout(() => {client.say(channel, `!betf yellow`); }, 8000);
  }
  
     if(message.toLowerCase() === 'betting is open for yellow vs green. use !bet [amount] [team] to place a wager!') {
    setTimeout(() => {client.say(channel, `!betf yellow`); }, 8000);
  }
  
       if(message.toLowerCase() === 'betting is open for yellow vs purple. use !bet [amount] [team] to place a wager!') {
    setTimeout(() => {client.say(channel, `!betf yellow`); }, 8000);
  }
  
       if(message.toLowerCase() === 'betting is open for yellow vs brown. use !bet [amount] [team] to place a wager!') {
    setTimeout(() => {client.say(channel, `!betf yellow`); }, 8000);
  }
  
});
