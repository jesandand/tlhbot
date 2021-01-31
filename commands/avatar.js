const { MessageEmbed } = require('discord.js')

module.exports = {
   info:{

	name:"avatar",

description: "Sends the avatar image of the user tagged.",
usage:["avatar"] ,
aliases:[av] ,

	execute(message) {

        message.channel.send(message.mentions.users.first().avatarURL)

	},

};
