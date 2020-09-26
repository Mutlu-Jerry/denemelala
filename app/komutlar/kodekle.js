const Discord = require('discord.js');
const db = require("quick.db");

exports.run = (client, message) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  
  
  const args = message.content
      .slice()
      .trim()
      .split(" ");
  
  
args.forEach(arg => {
  db.push('abcdef', arg)
})

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kodekle',
  description: '',
  usage: 'kodekle'
};