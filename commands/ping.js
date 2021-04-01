const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
  info: {
    name: "ping",
    description: "Cek Ping",
    usage: "ping",
    aliases: ["ping"],
  },

run: async function (client, message, args) {
    
message.channel.send('**The Ping-inator!**\nPinging...').then((msg) => {
 ping = msg.createdTimestamp - message.createdTimestamp;
 const embed = new Discord.MessageEmbed()
  .setAuthor('After's Entertainment', client.user.displayAvatarURL({ dynamic: true }))
  .setColor(`RANDOM`)
  .setTitle(`
  `)
  .setDescription(
   "**PONG!!**\n<a:Huruf_TLH:798672888592859157>  | `" + ping + 'ms`.\n'
  )
  .setTimestamp()
  .setFooter('by Jesand');
 message.channel.send(embed);
 msg.delete();
});
}
