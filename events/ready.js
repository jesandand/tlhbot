module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity(" Aftershine Entertainment | Server : | Member : ${guild.memberCount}" , {
    type: "LISTENING",//can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};
