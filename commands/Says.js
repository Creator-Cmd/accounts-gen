const discord = require('discord.js');
const config = require("../config.json");

module.exports = {
    async run(bot, message, args) {
      
                const m = args.join(' ');
  if (m) {
        message.delete();
    
      message.channel.send(
        new discord.RichEmbed()
                    .setColor("RANDOM")
                    .setFooter('Buy Cheap Bots From Hinzou#0001')
            .setTimestamp()
        .setAuthor(`${message.author.tag} Says:`,message.author.displayAvatarURL)
        .setDescription(m));
    
  }
        },
    name: "says",
usage: "<Your Text>",
    description: "Make The Bot Say Somthing On Embed."
};
