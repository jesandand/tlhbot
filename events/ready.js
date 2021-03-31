module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity(" Aftershine Entertainment | Server : ${client.guilds.cache.size} | Member : ${client.users.cache.size}" , {
    type: "STREAMING",//can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};
