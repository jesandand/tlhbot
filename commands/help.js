const { MessageEmbed } = require('discord.js')

module.exports = {
    info: {
        name: "help",
        description: "Menampilkan seluruh commands bot",
        usage: "[command]",
        aliases: ["commands", "help me", "pls help"]
    },

    run: async function(client, message, args){
        var allcmds = "";

        client.commands.forEach(cmd => {
            let cmdinfo = cmd.info
            allcmds+=""https://cdn.discordapp.com/attachments/822042698152280105/823033107049087026/Logo.png" • `"+client.config.prefix+cmdinfo.name+" "+cmdinfo.usage+"` ~ "+cmdinfo.description+"\n\n"
        })

        let embed = new MessageEmbed()
        .setAuthor("Commands bot "+client.user.username, "https://cdn.discordapp.com/attachments/822042698152280105/823023536296820776/1-2.jpg")
        .setColor("BLUE")
        .setDescription(allcmds)
        .setFooter(`Aftershine Entertainment ${client.config.prefix}help [command] | Development By Jesand`)

        if(!args[0])return message.channel.send(embed)
        else {
            let cmd = args[0]
            let command = client.commands.get(cmd)
            if(!command)command = client.commands.find(x => x.info.aliases.includes(cmd))
            if(!command)return message.channel.send("Unknown Command")
            let commandinfo = new MessageEmbed()
            .setTitle("Command: "+command.info.name+" info , "https://cdn.discordapp.com/attachments/822042698152280105/823023536296820776/1-2.jpg")
            .setColor("YELLOW")
            .setDescription(`
Nama: ${command.info.name}
Deskripsi: ${command.info.description}
Command: \`\`${client.config.prefix}${command.info.name} ${command.info.usage}\`\`
Atau: ${command.info.aliases.join(", ")}
`)
            message.channel.send(commandinfo)
        }
    }
}
