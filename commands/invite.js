const { MessageEmbed } = require("discord.js");

module.exports = {

	name: 'avatar',	description: 'Sends the avatar image of the user tagged.',

	execute(message) {

        message.channel.send(message.mentions.users.first().avatarURL)

	},

};

module.exports = {
  info: {
    name: "invite",
    description: "Link invite bot Aftershine Entertainment ke server kamu",
    usage: "[invite]",
    aliases: ["inv"],
  },

  run: async function (client, message, args) {
    
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 37080128;
    
    let invite = new MessageEmbed()
    .setTitle(`Invite ${client.user.username}`)
    .setDescription(`Want me in your server? Invite me today! \n\n [Invite Link](https://discord.com/api/oauth2/authorize?client_id=788117077118418974&permissions=1865940817&scope=bot)`)
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=788117077118418974&permissions=1865940817&scope=bot`)
    .setColor("BLUE")
    return message.channel.send(invite);
  },
};
