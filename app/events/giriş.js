const Discord = require("discord.js")
const db = require("quick.db");
const Canvas = require('canvas')
    , Image = Canvas.Image
    , Font = Canvas.Font
    , path = require('path');
const snekfetch = require('snekfetch');
const request = require('node-superfetch');

module.exports = async member => {
    var randomMsg = [
                    "Sunucuya Hoşgeldin!",      
                    ];
    var randomMsg_integer = randomMsg[Math.floor((Math.random() * randomMsg.length))]

  let msj = await db.fetch(`girisM_${member.guild.id}`)
  if (!msj) msj = `{uye}, ${randomMsg_integer}`
  let memberChannel = await db.fetch(`gcc_${member.guild.id}`)
  
  const canvas = Canvas.createCanvas(360, 250);
  const ctx = canvas.getContext('2d');
  
  const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/617479203452878860/619836869680693258/Baslksz-1.png');
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  
  ctx.strokeStyle = '#74037b';
  ctx.strokeRect(0, 0, canvas.width, canvas.height);
  
  ctx.fillStyle = `#ffffff`;
  ctx.font = `35px "Impact"`;
  ctx.textAlign = "center";
  ctx.fillText(`${member.user.username.toUpperCase()}`, 170, 210);

  let avatarURL = member.user.avatarURL || member.user.defaultAvatarURL
  const { body } = await request.get(avatarURL);
  const avatar = await Canvas.loadImage(body);
  
  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.fill()
  ctx.lineWidth = 4;
	ctx.arc(112 + 55, 55 + 55, 55, 0, 2 * Math.PI, false);// 1.bilmiyom 2.bilmiyom 3.bilmiyom 4.bilmiyom 5.yuvarlatma
  ctx.clip();
  ctx.drawImage(avatar, 112, 55, 110, 110);
  
  const attachment = new Discord.Attachment(canvas.toBuffer(), 'Hoşgeldin.png');
  member.guild.channels.get(memberChannel).send(attachment)
  member.guild.channels.get(memberChannel).send(msj.replace('{uye}', member).replace('{sunucu}', member.guild.name))
  if (member.user.bot) return member.guild.channels.get(memberChannel).send(`🤖 Bu bir bot, ${member.user.tag}`)
}