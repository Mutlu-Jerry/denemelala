const Discord = require('discord.js');
const db = require("quick.db");

exports.run = (client, message, args) => {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
if (message.content=''){
  
}
let kodlar =db.fetch(`abcdef`)
let kodlarliste = Array(kodlar.join('\n'));
  message.channel.send(kodlarliste)
if(kodlarliste =="")
  {
    message.channel.send("Kodlar Bitti! Yöneticilerden Kod eklemelerini talep ediniz.")
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kodlarliste',
  description: '',
  usage: 'kodlarliste'
};
