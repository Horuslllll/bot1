const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'dark') {
    if(message.author.bot) return;
    message.reply('dark');
  }
});

client.login('MzE5NTczMTY3MDY2NzEwMDE3.DE5znw.B4lP0ouWNZI3HCRGL1TlOZdGeXw');
