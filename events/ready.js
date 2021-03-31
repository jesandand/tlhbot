module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);

    let statuses = [
        `as.help | Aftershine Entertainment`,
        `as.help | Invite Me To Server`,
        `as.help | In ${client.guilds.cache.size} Server`,
        `as.help | Develop By Jesand#1987`,
        `as.help | Discord.io/Aftershines`
    ];

    setInterval(function() {

        let status = statuses[Math.floor(Math.random() * statuses.length)]
        client.user.setPresence({ activity: { name: status, type: "STREAMING"}, status: 'online'});
    }, 1000);
};
