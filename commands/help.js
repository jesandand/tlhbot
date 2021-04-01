const { MessageEmbed } = require('discord.js')

module.exports = {
    info: {
        name: "help",
        description: "Menampilkan seluruh commands bot",
        usage: "[command]",
        aliases: ["commands", "help me", "pls help"]
    },

    run: async function(client, message, args){
      

        let embed = new MessageEmbed()
        .setAuthor("Commands bot "+client.user.username, "https://cdn.discordapp.com/attachments/822042698152280105/823023536296820776/1-2.jpg")
        .setColor("BLUE")
        .setDescription(allcmds)
        .addField(" <a:9_Style_Discord:789405103303950366>  •  Informasi" , "```\nhelp, invite```")
        .addField(" <a:as:827256384541687859>  •  Music Commands" , "```\nafk, play, pause, resume, volume, loop, \nlyrics, nowplaying, playlist , queue, stop, \nremove, search, shuffle, skip, skipto```")
        .setImage("https://cdn.discordapp.com/attachments/822042698152280105/823022484630405190/aftershine.jpg")
        .setFooter(`Aftershine Entertainment ${client.config.prefix}help | Development By Jesand`)

        if(!args[0])return message.channel.send(embed)
        else {
            let cmd = args[0]
            let command = client.commands.get(cmd)
            if(!command)command = client.commands.find(x => x.info.aliases.includes(cmd))
            if(!command)return message.channel.send("Unknown Command")
            let commandinfo = new MessageEmbed()
            .setTitle("Command: "+command.info.name+" info")
            .setColor("YELLOW")
            .setDescription(`
Name: ${command.info.name}
Description: ${command.info.description}
Usage: \`\`${client.config.prefix}${command.info.name} ${command.info.usage}\`\`
Aliases: ${command.info.aliases.join(", ")}
`)
            message.channel.send(commandinfo)
        }
    }
}
