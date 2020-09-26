const Discord = require('discord.js');
const db = require("quick.db");

exports.run = (client, message, args) => {
    
  let kodlar = db.get(`abcdef`);
  let kod = kodlar[Math.floor(Math.random() * kodlar.length)];
  if(kodlar=='') message.channel.send('Sistemde Kullanılabilir Kod Kalmamıştır, Yöneticiye Bildiriniz.')
  if(db.fetch(`anahtar.${message.author.name}`) == 1) return message.channel.send('Bu komutu sadece bir kez kullanabilirsin.')
db.set(`anahtar.${message.author.name}`, 1)
     message.author.sendMessage(kod);
  db.set('abcdef', kodlar.filter(kod2 => kod2 !== kod))
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kodal',
  description: '',
  usage: 'kodal'
};