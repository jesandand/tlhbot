module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity(" Aftershine Entertainment | as.help Info Commands" , {
    type: "LISTENING",//can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};
