module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity("Development By Jesand Andriand | Wonderful Dream", {
    type: "PLAYING",//can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};