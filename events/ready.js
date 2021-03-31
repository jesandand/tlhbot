module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);

    let statuses = [
        `as.help | Aftershine Entertainment`,
        `as.help | Invite To Your Server`,
        `as.help | Stay In ${client.guilds.cache.size} Server`,
        `as.help | Development By Jesand#1987`,
        `as.help | Discord.gg/aftershine`
    ];

    setInterval(function() {

        let status = statuses[Math.floor(Math.random() * statuses.length)]
        client.user.setPresence({ activity: { name: status, type: "STREAMING"}, status: 'online'});
    }, 2000);
};
