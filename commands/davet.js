const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
 // ARDADEMR YOUTUBE KANALINDAN ALINMIŞTIR
module.exports = {
  name: "davet",
  description: "ArdaDemr - Youtube", 
  execute(client, message) {
  message.channel.send(new Discord.MessageEmbed()
                      .setDescription(
    `
\[Botu sunucunuza eklemek için buraya tıklayın.](Botunuzun davet linkini girin)\n
`)
                       .setColor("ffc300")
                      )    
}
} 