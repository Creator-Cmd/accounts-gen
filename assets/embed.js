const {RichEmbed} = require('discord.js');

module.exports = (client,user,title,description,color,author) => {
  return new RichEmbed().setTitle(title).setDescription(description).setColor(color || client['config']['embed']).setFooter(client.user.tag,client.user.displayAvatarURL).setAuthor((author)?(author):(user.tag),user.displayAvatarURL).setTimestamp();
};
