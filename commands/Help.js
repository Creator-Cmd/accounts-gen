const discord = require('discord.js');
const config = require("../config.json");

module.exports = {
    async run(bot, message, args) {
      
          let commands = bot.commands.map(c => `\`${config.prefix}${c.name}${(c.usage)?' '+c.usage:''}\` | ${c.description}`);
      
        const commandsEmbed = new discord.RichEmbed()
            .addField('Here\'s a List Of My Commands!',commands.join('\n'))
        .setAuthor(message.author.tag,message.author.avatarURL)
        .setColor("#B26AFF")
            .setFooter('Bot Made By: Hinzou#0001')
        .setTimestamp()
        message.channel.send(commandsEmbed);
      

      
    },
    name: "help",
    usage: '[command|module|modules]',
    description: "See a list of commands."
};