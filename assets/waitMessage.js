module.exports = async (message,channel,filter,time) => {
  const options = { max:1,time:(time || 10*60*1000), errors: ['time'] };
  try {
    const collector = await channel.awaitMessages((filter||(m => m.author.id === message.author.id)),options);
    return collector.first();
  } catch (e) {
    return { content: "TimedOut" };
  };
};