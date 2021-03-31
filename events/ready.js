module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);

    let statuses = [
        `as.help | Aftershine Entertainment`,
        `as.help | Punten`,
        `as.help | Paket`,
        `as.help | Develop By Jessxyz`,
        `as.help | Discord.io/Aftershines`
    ];

    setInterval(function() {

        let status = statuses[Math.floor(Math.random() * statuses.length)]
        client.user.setPresence({ activity: { name: status, type: "STREAMING"}, status: 'online'});
    }, 1000);
};
