const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} İsmi İle Giriş Yapıldı!`);
client.user.setStatus("online");
client.user.setPresence({
game: {
name: `OYNUYOR YÜKLENİYOR...`,
type: 'WATCHING'
},
status: 'online'
})
var oyun = [

	"Ares",
	"!yardım / !eğlence /!yetkili",
  "Ares",
	"Ares",
	"!yardım / !eğlence /!yetkili",
  "Ares",
	"Ares",
	"!yardım / !eğlence /!yetkili",
  "Ares",
	"Ares",
	"!yardım / !eğlence /!yetkili",
  "Ares",
	"Ares",
	"!yardım / !eğlence /!yetkili",
  "Ares",
	"Ares",
	"!yardım / !eğlence /!yetkili",
  "Ares",  
	"Ares",
	"!yardım / !eğlence /!yetkili",
  "Ares",  
 	"Ares",
	"!yardım / !eğlence /!yetkili",
  "Ares", 
 	"Ares",
	"!yardım / !eğlence /!yetkili",
  "Ares", 
  
];

setInterval(function() {

var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

client.user.setGame(oyun[random], "https://www.twitch.tv/##");
}, 2 * 2500);
}
