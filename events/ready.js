module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity([" Aftershine Entertainment | Developer By Jesand"," ${await client.guilds.cache.size} | Users : ${await client.users.cache.size}"] , {
    type: "STREAMING",//can be LISTENING, WATCHING, PLAYING, STREAMING
  }); 10000
};
