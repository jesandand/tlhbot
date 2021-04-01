const { MessageEmbed } = require('discord.js')

module.exports = {
  info: {
    name: "sayembed",
    description: "membuat embed",
    usage: "sayembed",
    aliases: ["se"],
  },

run: async function (client, message, args) {
  let sayembed = args.slice(0).join(' ')
  if (!sayembed) {
    const non = new MessageEmbed()
    .setDescription("**Mohon isi message tersebut !**")
    .setThumbnail(client.user.displayAvatarURL())
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter("Aftershine by Jesand.")
    message.channel.send(non)
  } else {
    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(sayembed)
    message.channel.send(embed)
    message.channel.bulkDelete(1)
  }
}}